(function () {
  var D = window.CAFOFO;
  var STORAGE_KEY = "cafofo_ecossistema";
  var $ = function (id) { return document.getElementById(id); };
  var arquivo = null;

  function lerEcoSalvo() {
    try {
      var salvo = localStorage.getItem(STORAGE_KEY);
      if (salvo && D.ecosystems.some(function (e) { return e.id === salvo; })) {
        return salvo;
      }
    } catch (e) {}
    return D.defaultEcosystem || D.ecosystems[0].id;
  }

  var ecoAtivoId = lerEcoSalvo();

  function getEcoAtivo() {
    for (var i = 0; i < D.ecosystems.length; i++) {
      if (D.ecosystems[i].id === ecoAtivoId) return D.ecosystems[i];
    }
    return D.ecosystems[0];
  }

  function salvarEco(id) {
    try {
      localStorage.setItem(STORAGE_KEY, id);
    } catch (e) {}
  }

  function norm(s) {
    return String(s || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  // Escolhe a tarefa pelo numero de palavras reconhecidas dentro do ecossistema ativo.
  function rotear(texto, temArquivo, eco) {
    var t = norm(texto);
    var modules = eco.modules || [];
    var pontos = modules.map(function (it) {
      var n = 0;
      (it.kw || []).forEach(function (k) {
        var i = t.indexOf(k);
        if (i === 0 || (i > 0 && /\W/.test(t.charAt(i - 1)))) n++;
      });
      return { it: it, n: n };
    }).filter(function (p) { return p.n > 0; })
      .sort(function (a, b) { return b.n - a.n; });

    if (pontos.length) return { it: pontos[0].it, alt: pontos.slice(1, 4).map(function (p) { return p.it; }) };
    if (temArquivo) {
      var img = modules.filter(function (x) {
        return x.id === "imagem" || x.id === "copilot-designer" || x.id === "meta-ai" || x.id === "claude-chat" || x.id === "chatgpt";
      })[0];
      if (img) return { it: img, alt: [], nota: "Você anexou um arquivo sem dizer o que fazer. Sugeri esta ferramenta." };
    }
    return { it: null, alt: [] };
  }

  function copiar(texto) {
    if (!texto) return Promise.resolve(false);
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(texto).then(function () { return true; }, function () { return fallbackCopia(texto); });
    }
    return Promise.resolve(fallbackCopia(texto));
  }

  function fallbackCopia(texto) {
    try {
      var ta = document.createElement("textarea");
      ta.value = texto;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      var ok = document.execCommand("copy");
      document.body.removeChild(ta);
      return ok;
    } catch (e) { return false; }
  }

  function el(tag, cls, txt) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (txt != null) e.textContent = txt;
    return e;
  }

  function parseSvg(svgStr) {
    try {
      var doc = new DOMParser().parseFromString(svgStr, "image/svg+xml");
      if (doc && doc.documentElement && doc.documentElement.nodeName.toLowerCase() === "svg") {
        return document.importNode(doc.documentElement, true);
      }
    } catch (e) {}
    return null;
  }

  // Icone da ferramenta: prioriza logo oficial (img), com fallback seguro para SVG inline ou emoji.
  function iconeEl(it) {
    var base;
    if (it.logo) {
      var im = document.createElement("img");
      im.className = "lg";
      im.alt = "";
      im.src = it.logo;
      im.onerror = function () {
        var fallback = null;
        if (it.svg) {
          var wrap = el("span", "ic");
          var svgNode = parseSvg(it.svg);
          if (svgNode) {
            wrap.appendChild(svgNode);
            fallback = wrap;
          }
        }
        if (!fallback) fallback = el("span", "ic", it.icone || "✨");
        if (im.parentNode) im.parentNode.replaceChild(fallback, im);
      };
      base = im;
    } else if (it.svg) {
      var wrap = el("span", "ic");
      var svgNode = parseSvg(it.svg);
      if (svgNode) {
        wrap.appendChild(svgNode);
        base = wrap;
      } else {
        base = el("span", "ic", it.icone || "✨");
      }
    } else {
      base = el("span", "ic", it.icone || "✨");
    }

    if (it.badge) {
      var box = el("span", "ic-wrap");
      box.appendChild(base);
      box.appendChild(el("span", "ic-badge", it.badge));
      return box;
    }
    return base;
  }

  function criarLightbulbSvg() {
    return parseSvg('<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18H15M10 21H14M12 3C8.686 3 6 5.686 6 9C6 11.22 7.206 13.157 9 14.197V15.5C9 15.776 9.224 16 9.5 16H14.5C14.776 16 15 15.776 15 15.5V14.197C16.794 13.157 18 11.22 18 9C18 5.686 15.314 3 12 3Z" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>');
  }

  function linkExterno(cls, texto, url) {
    var a = el("a", cls, texto);
    a.href = url;
    a.rel = "noopener noreferrer";
    return a;
  }

  function fecharModais() {
    $("modalBackdrop").classList.remove("aberto");
    $("modalFicha").classList.remove("aberto");
    $("modalDesktop").classList.remove("aberto");
    $("modalBackdrop").setAttribute("aria-hidden", "true");
    $("modalFicha").setAttribute("aria-hidden", "true");
    $("modalDesktop").setAttribute("aria-hidden", "true");
  }

  function avisarAbertura(origem) {
    document.dispatchEvent(new CustomEvent("cafofo:fechar-overlays", { detail: { source: origem } }));
  }

  document.addEventListener("cafofo:fechar-overlays", function (e) {
    if (e.detail && e.detail.source === "tatico") {
      fecharMenu();
      fecharModais();
    }
  });

  function abrirModalFicha(it) {
    var eco = getEcoAtivo();
    var detalhes = it.details || {};
    var fIc = $("fichaIcone");
    fIc.textContent = "";
    fIc.appendChild(iconeEl(it));

    $("fichaTag").textContent = eco.nome.toUpperCase() + " · " + it.ferr;
    $("fichaTitulo").textContent = it.titulo;
    $("fichaDesc").textContent = detalhes.fullDescription || it.desc || it.porque || "";

    var lista = $("fichaExemplos");
    lista.textContent = "";
    var exemplos = detalhes.examples && detalhes.examples.length ? detalhes.examples : [it.desc];
    exemplos.forEach(function (ex) {
      lista.appendChild(el("li", null, ex));
    });

    var compatEl = $("fichaCompat");
    compatEl.textContent = "";
    var textoCompat = it.desktopNotice || detalhes.compatibility || "Funciona 100% no celular e no computador.";
    compatEl.className = "compat-box " + (it.desktopNotice ? "desktop-req" : "mobile-ok");
    compatEl.appendChild(el("span", "compat-dot"));
    compatEl.appendChild(el("span", null, textoCompat));

    var btnAcessar = $("btnAcessarFicha");
    btnAcessar.href = it.url;

    $("modalDesktop").classList.remove("aberto");
    $("modalDesktop").setAttribute("aria-hidden", "true");
    $("modalBackdrop").classList.add("aberto");
    $("modalFicha").classList.add("aberto");
    $("modalBackdrop").setAttribute("aria-hidden", "false");
    $("modalFicha").setAttribute("aria-hidden", "false");
  }

  function abrirAlertaDesktop(it) {
    var dIc = $("desktopIcone");
    dIc.textContent = "";
    dIc.appendChild(iconeEl(it));

    $("desktopTitulo").textContent = it.ferr + " — " + it.titulo;
    $("desktopMsg").textContent = it.desktopNotice;
    $("btnAbrirDesktop").href = it.url;

    $("modalFicha").classList.remove("aberto");
    $("modalFicha").setAttribute("aria-hidden", "true");
    $("modalBackdrop").classList.add("aberto");
    $("modalDesktop").classList.add("aberto");
    $("modalBackdrop").setAttribute("aria-hidden", "false");
    $("modalDesktop").setAttribute("aria-hidden", "false");
  }

  function mostrarHome() {
    $("resultado").hidden = true;
    $("home").hidden = false;
    $("btnVoltar").hidden = true;
    window.scrollTo(0, 0);
  }

  function mostrarResultado(intent, alt, nota) {
    var eco = getEcoAtivo();
    var texto = $("texto").value.trim();
    var nomeFerr = intent ? intent.ferr : eco.chatNome;
    var urlFerr = intent ? intent.url : eco.chatUrl;
    var porque = intent ? intent.porque : eco.padraoPorque;
    var box = $("resultado");
    box.textContent = "";

    var card = el("div", "box");
    if (intent) {
      card.appendChild(iconeEl(intent));
    } else if (eco.iconLogo) {
      card.appendChild(iconeEl({ logo: eco.iconLogo, svg: eco.iconSvg, icone: "✨" }));
    } else if (eco.iconSvg) {
      var ecoIc = el("span", "ic");
      var ecoSvg = parseSvg(eco.iconSvg);
      if (ecoSvg) ecoIc.appendChild(ecoSvg);
      card.appendChild(ecoIc);
    }
    card.appendChild(el("h3", null, "Vou te levar para: " + nomeFerr));
    card.appendChild(el("p", null, porque));
    if (nota) card.appendChild(el("p", null, nota));
    if (intent && intent.desktopNotice) {
      var avisoRes = el("div", "compat-box desktop-req");
      avisoRes.style.marginTop = "10px";
      avisoRes.appendChild(el("span", "compat-dot"));
      avisoRes.appendChild(el("span", null, intent.desktopNotice));
      card.appendChild(avisoRes);
    }
    if (texto) card.appendChild(el("div", "txt", texto));
    if (arquivo) card.appendChild(el("p", null, "Anexo: " + arquivo.name));
    box.appendChild(card);

    var status = el("div", "status");
    var acoes = el("div", "acoes");

    var abrir = linkExterno("btn", "Abrir " + nomeFerr + " →", urlFerr);
    abrir.addEventListener("click", function (e) {
      if (intent && intent.desktopNotice) {
        e.preventDefault();
        if (texto) {
          fallbackCopia(texto);
          copiar(texto).then(function (ok) {
            if (ok) status.textContent = "Texto copiado. Cole na caixa quando abrir.";
          });
        }
        abrirAlertaDesktop(intent);
        return;
      }
      if (texto) {
        fallbackCopia(texto);
        copiar(texto).then(function (ok) {
          if (ok) status.textContent = "Texto copiado. Cole na caixa quando abrir.";
        });
      }
    });
    acoes.appendChild(abrir);

    if (intent && intent.details) {
      var btnSaiba = el("button", "btn sec", "💡 Saiba mais sobre " + nomeFerr);
      btnSaiba.type = "button";
      btnSaiba.onclick = function () { abrirModalFicha(intent); };
      acoes.appendChild(btnSaiba);
    }

    if (intent && intent.url !== eco.chatUrl) {
      var abrirChat = linkExterno("btn sec", "Abrir chat principal (" + eco.chatNome + ")", eco.chatUrl);
      abrirChat.addEventListener("click", function () {
        if (texto) {
          fallbackCopia(texto);
          copiar(texto).then(function (ok) {
            if (ok) status.textContent = "Texto copiado. Cole no " + eco.chatNome + " quando abrir.";
          });
        }
      });
      acoes.appendChild(abrirChat);
    }

    if (arquivo && navigator.canShare && navigator.canShare({ files: [arquivo] })) {
      var comp = el("button", "btn sec", "Compartilhar foto + texto");
      comp.type = "button";
      comp.onclick = function () {
        var dados = { files: [arquivo], title: "Cafofo" };
        if (texto) dados.text = texto;
        navigator.share(dados).then(function () {
          status.textContent = "Escolha o app " + eco.chatNome + " na lista.";
        }, function (e) {
          if (e && e.name !== "AbortError") status.textContent = "Não deu para compartilhar: " + e.name;
        });
      };
      acoes.appendChild(comp);
    } else if (arquivo) {
      acoes.appendChild(el("p", null, "Este aparelho não compartilha arquivo pelo navegador. Anexe o arquivo direto ao abrir a ferramenta."));
    }

    if (texto) {
      var cp = el("button", "btn sec", "Só copiar o texto");
      cp.type = "button";
      cp.onclick = function () {
        copiar(texto).then(function (ok) {
          status.textContent = ok ? "Texto copiado." : "Não consegui copiar.";
        });
      };
      acoes.appendChild(cp);
    }

    box.appendChild(acoes);
    box.appendChild(status);

    if (alt && alt.length) {
      box.appendChild(el("h2", null, "Não era isso? Tente"));
      var chips = el("div", "chips");
      alt.forEach(function (a) {
        var c = el("button", "chip", (a.icone ? a.icone + " " : "") + a.titulo);
        c.type = "button";
        c.onclick = function () { mostrarResultado(a, [], null); };
        chips.appendChild(c);
      });
      box.appendChild(chips);
    }

    if (!intent) {
      box.appendChild(el("h2", null, "Ou escolha um módulo"));
      var g = el("div", "chips");
      (eco.modules || []).forEach(function (a) {
        var c = el("button", "chip", (a.icone ? a.icone + " " : "") + a.titulo);
        c.type = "button";
        c.onclick = function () { mostrarResultado(a, [], null); };
        g.appendChild(c);
      });
      box.appendChild(g);
    }

    $("home").hidden = true;
    box.hidden = false;
    $("btnVoltar").hidden = false;
    window.scrollTo(0, 0);
  }

  function renderModulos(eco) {
    var grid = $("grid");
    var modules = eco.modules || [];
    grid.classList.add("trocando");
    grid.textContent = "";

    modules.forEach(function (it) {
      var wrap = el("div", "card-wrap");

      var c = linkExterno("card", null, it.url);
      var cab = el("span", "cab");
      cab.appendChild(iconeEl(it));
      cab.appendChild(el("span", "tl", it.ferr));
      c.appendChild(cab);
      c.appendChild(el("span", "tt", it.titulo));
      c.appendChild(el("small", null, it.desc || ""));

      c.addEventListener("click", function (e) {
        if (it.desktopNotice) {
          e.preventDefault();
          abrirAlertaDesktop(it);
        }
      });

      var infoBtn = el("button", "btn-info");
      infoBtn.type = "button";
      infoBtn.setAttribute("aria-label", "Saiba mais sobre " + it.ferr);
      var bulb = criarLightbulbSvg();
      if (bulb) infoBtn.appendChild(bulb);
      infoBtn.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        abrirModalFicha(it);
      });

      wrap.appendChild(c);
      wrap.appendChild(infoBtn);
      grid.appendChild(wrap);
    });

    // Contador 100% dinamico baseado no array do ecossistema ativo
    $("modulos").textContent = modules.length + " MÓDULOS";

    requestAnimationFrame(function () {
      grid.classList.remove("trocando");
    });
  }

  function renderDrawer() {
    var lista = $("listaEcossistemas");
    lista.textContent = "";
    var ecoAtivo = getEcoAtivo();

    D.ecosystems.forEach(function (eco) {
      var btn = el("button", "eco-item" + (eco.id === ecoAtivo.id ? " ativo" : ""));
      btn.type = "button";

      var ic = el("span", "eco-ic");
      if (eco.iconLogo) {
        var ecoImg = document.createElement("img");
        ecoImg.alt = "";
        ecoImg.src = eco.iconLogo;
        ecoImg.onerror = function () {
          var s = parseSvg(eco.iconSvg);
          if (s && ecoImg.parentNode) ecoImg.parentNode.replaceChild(s, ecoImg);
        };
        ic.appendChild(ecoImg);
      } else {
        var svgNode = parseSvg(eco.iconSvg);
        if (svgNode) ic.appendChild(svgNode);
      }
      btn.appendChild(ic);

      var info = el("span", "eco-info");
      info.appendChild(el("span", "eco-nome", eco.nome));
      info.appendChild(el("span", "eco-sub", eco.chatUrl.replace("https://", "").replace(/\/$/, "")));
      btn.appendChild(info);

      btn.appendChild(el("span", "eco-qtd", String((eco.modules || []).length)));

      btn.onclick = function () {
        selecionarEcossistema(eco.id);
        fecharMenu();
      };
      lista.appendChild(btn);
    });

    $("drawerChatInfo").textContent = "Chat ativo: " + ecoAtivo.chatUrl;
  }

  function aplicarEcossistema() {
    var eco = getEcoAtivo();
    $("texto").placeholder = eco.placeholder || "O que você quer fazer?";
    $("ecoBadgeNome").textContent = eco.nome;
    renderModulos(eco);
    renderDrawer();
  }

  function selecionarEcossistema(id) {
    if (!D.ecosystems.some(function (e) { return e.id === id; })) return;
    ecoAtivoId = id;
    salvarEco(id);
    fecharModais();
    aplicarEcossistema();
    if (!$("resultado").hidden) {
      mostrarHome();
    }
  }

  function abrirMenu() {
    avisarAbertura("menu");
    fecharModais();
    $("drawer").classList.add("aberto");
    $("drawerOverlay").classList.add("aberto");
    $("drawer").setAttribute("aria-hidden", "false");
    $("drawerOverlay").setAttribute("aria-hidden", "false");
    $("btnMenu").setAttribute("aria-expanded", "true");
  }

  function fecharMenu() {
    $("drawer").classList.remove("aberto");
    $("drawerOverlay").classList.remove("aberto");
    $("drawer").setAttribute("aria-hidden", "true");
    $("drawerOverlay").setAttribute("aria-hidden", "true");
    $("btnMenu").setAttribute("aria-expanded", "false");
  }

  $("btnMenu").addEventListener("click", function () {
    if ($("drawer").classList.contains("aberto")) {
      fecharMenu();
    } else {
      abrirMenu();
    }
  });
  $("ecoBadge").addEventListener("click", abrirMenu);
  $("btnFecharMenu").addEventListener("click", fecharMenu);
  $("drawerOverlay").addEventListener("click", fecharMenu);

  $("modalBackdrop").addEventListener("click", fecharModais);
  $("btnFecharFicha").addEventListener("click", fecharModais);
  $("btnFecharFichaX").addEventListener("click", fecharModais);
  $("btnFecharDesktop").addEventListener("click", fecharModais);
  $("btnAcessarFicha").addEventListener("click", fecharModais);
  $("btnAbrirDesktop").addEventListener("click", fecharModais);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      if ($("modalFicha").classList.contains("aberto") || $("modalDesktop").classList.contains("aberto")) {
        fecharModais();
      } else if ($("drawer").classList.contains("aberto")) {
        fecharMenu();
      }
    }
  });

  $("form").addEventListener("submit", function (e) {
    e.preventDefault();
    var eco = getEcoAtivo();
    var texto = $("texto").value.trim();
    if (!texto && !arquivo) {
      $("texto").focus();
      return;
    }
    var r = rotear(texto, !!arquivo, eco);
    mostrarResultado(r.it, r.alt, r.nota);
  });

  $("arquivo").addEventListener("change", function () {
    arquivo = this.files && this.files[0] ? this.files[0] : null;
    $("nomeArq").textContent = arquivo ? arquivo.name : "";
  });

  var ta = $("texto");
  ta.addEventListener("input", function () {
    ta.style.height = "auto";
    ta.style.height = Math.min(ta.scrollHeight, 110) + "px";
  });

  $("btnVoltar").onclick = mostrarHome;
  $("btnDrive").href = D.driveFolderUrl || D.driveUrl || "https://drive.google.com";

  aplicarEcossistema();

  if ("serviceWorker" in navigator) {
    try { navigator.serviceWorker.register("sw.js"); } catch (e) {}
  }
})();
