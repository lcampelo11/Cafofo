(function () {
  var D = window.CAFOFO;
  var STORAGE_ECO = "cafofo_ecossistema";
  var STORAGE_FAV = "cafofo_favoritos_v1";
  var STORAGE_PLAN = "cafofo_planos_v1";
  var STORAGE_CUSTOM = "cafofo_custom_tools_v1";
  var STORAGE_COLLAPSED = "cafofo_collapsed_v1";

  var $ = function (id) { return document.getElementById(id); };
  var arquivo = null;

  function lerJson(chave, padrao) {
    try {
      var raw = localStorage.getItem(chave);
      return raw ? JSON.parse(raw) : padrao;
    } catch (e) { return padrao; }
  }

  function salvarJson(chave, val) {
    try { localStorage.setItem(chave, JSON.stringify(val)); } catch (e) {}
  }

  var favoritos = lerJson(STORAGE_FAV, []);
  if (!Array.isArray(favoritos)) favoritos = [];
  var planosMap = lerJson(STORAGE_PLAN, {});
  if (!planosMap || typeof planosMap !== "object") planosMap = {};
  var customTools = lerJson(STORAGE_CUSTOM, []);
  if (!Array.isArray(customTools)) customTools = [];
  var collapsedMap = lerJson(STORAGE_COLLAPSED, {});
  if (!collapsedMap || typeof collapsedMap !== "object") collapsedMap = {};

  function lerEcoSalvo() {
    try {
      var salvo = localStorage.getItem(STORAGE_ECO);
      if (salvo === "all" || salvo === "custom") return salvo;
      if (salvo && D.ecosystems.some(function (e) { return e.id === salvo; })) return salvo;
    } catch (e) {}
    return D.defaultEcosystem || "all";
  }

  var ecoAtivoId = lerEcoSalvo();
  var catAtiva = "Todos";
  var buscaTexto = "";

  function salvarEco(id) {
    try { localStorage.setItem(STORAGE_ECO, id); } catch (e) {}
  }

  function getEcoPorId(id) {
    for (var i = 0; i < D.ecosystems.length; i++) {
      if (D.ecosystems[i].id === id) return D.ecosystems[i];
    }
    return null;
  }

  function getEcoAtivo() {
    return getEcoPorId(ecoAtivoId) || D.ecosystems[0];
  }

  function norm(s) {
    return String(s || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
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

  function todasFerramentas() {
    var lista = [];
    D.ecosystems.forEach(function (eco) {
      (eco.modules || []).forEach(function (it) {
        lista.push(Object.assign({}, it, {
          ecoId: eco.id,
          ecoNome: eco.nome,
          ecoCurto: eco.curto || eco.nome
        }));
      });
    });
    customTools.forEach(function (ct) {
      var ecoRef = getEcoPorId(ct.ecoId);
      lista.push(Object.assign({}, ct, {
        isCustom: true,
        ecoId: ct.ecoId || "custom",
        ecoNome: ecoRef ? ecoRef.nome : "Meus Atalhos",
        ecoCurto: ecoRef ? (ecoRef.curto || ecoRef.nome) : "Personalizado"
      }));
    });
    return lista;
  }

  function ehFavorito(id) {
    return favoritos.indexOf(id) !== -1;
  }

  function toggleFavorito(id) {
    var idx = favoritos.indexOf(id);
    if (idx === -1) favoritos.push(id);
    else favoritos.splice(idx, 1);
    salvarJson(STORAGE_FAV, favoritos);
    renderDashboard();
  }

  function getPlano(it) {
    return planosMap[it.id] || it.defaultPlan || "Grátis";
  }

  function proximoPlano(atual) {
    var opts = D.planOptions || ["Grátis", "Assinante", "API"];
    var i = opts.indexOf(atual);
    return opts[(i + 1) % opts.length];
  }

  function classePlano(plano) {
    var p = norm(plano);
    if (p.indexOf("assin") !== -1) return "assinante";
    if (p.indexOf("api") !== -1) return "api";
    return "gratis";
  }

  function classeAcesso(tag) {
    var t = norm(tag);
    if (t.indexOf("exp") !== -1) return "exp";
    if (t.indexOf("desk") !== -1) return "desk";
    if (t.indexOf("api") !== -1 || t.indexOf("cloud") !== -1) return "api";
    return "";
  }

  function criarLightbulbSvg() {
    return parseSvg('<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18H15M10 21H14M12 3C8.686 3 6 5.686 6 9C6 11.22 7.206 13.157 9 14.197V15.5C9 15.776 9.224 16 9.5 16H14.5C14.776 16 15 15.776 15 15.5V14.197C16.794 13.157 18 11.22 18 9C18 5.686 15.314 3 12 3Z" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>');
  }

  function criarStarSvg(filled) {
    return parseSvg('<svg viewBox="0 0 24 24" fill="' + (filled ? "currentColor" : "none") + '" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.5L14.9 8.4L21.4 9.3L16.7 13.9L17.8 20.4L12 17.3L6.2 20.4L7.3 13.9L2.6 9.3L9.1 8.4L12 2.5Z" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"/></svg>');
  }

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
          if (svgNode) { wrap.appendChild(svgNode); fallback = wrap; }
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

  function linkExterno(cls, texto, url) {
    var a = el("a", cls, texto);
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    return a;
  }

  // ===== COORDENACAO DE OVERLAYS E MODAIS =====
  function fecharModais() {
    $("modalBackdrop").classList.remove("aberto");
    $("modalFicha").classList.remove("aberto");
    $("modalDesktop").classList.remove("aberto");
    $("modalCustomTool").classList.remove("aberto");
    $("modalBackup").classList.remove("aberto");
    $("modalBackdrop").setAttribute("aria-hidden", "true");
    $("modalFicha").setAttribute("aria-hidden", "true");
    $("modalDesktop").setAttribute("aria-hidden", "true");
    $("modalCustomTool").setAttribute("aria-hidden", "true");
    $("modalBackup").setAttribute("aria-hidden", "true");
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
    var detalhes = it.details || {};
    var fIc = $("fichaIcone");
    fIc.textContent = "";
    fIc.appendChild(iconeEl(it));

    $("fichaTag").textContent = (it.ecoCurto || it.ecoNome || "CAFOFO").toUpperCase() + " · " + (it.type || it.ferr);
    $("fichaTitulo").textContent = it.titulo;
    $("fichaDesc").textContent = detalhes.fullDescription || it.desc || it.porque || "";

    var lista = $("fichaExemplos");
    lista.textContent = "";
    var exemplos = detalhes.examples && detalhes.examples.length ? detalhes.examples : [it.desc];
    exemplos.forEach(function (ex) { lista.appendChild(el("li", null, ex)); });

    var compatEl = $("fichaCompat");
    compatEl.textContent = "";
    var textoCompat = it.desktopNotice || detalhes.compatibility || "Funciona 100% no celular e no computador.";
    compatEl.className = "compat-box " + (it.desktopNotice ? "desktop-req" : "mobile-ok");
    compatEl.appendChild(el("span", "compat-dot"));
    compatEl.appendChild(el("span", null, textoCompat));

    $("btnAcessarFicha").href = it.url;

    fecharModais();
    $("modalBackdrop").classList.add("aberto");
    $("modalFicha").classList.add("aberto");
    $("modalBackdrop").setAttribute("aria-hidden", "false");
    $("modalFicha").setAttribute("aria-hidden", "false");
  }

  function abrirAlertaDesktop(it) {
    var dIc = $("desktopIcone");
    dIc.textContent = "";
    dIc.appendChild(iconeEl(it));

    $("desktopTitulo").textContent = it.titulo;
    $("desktopMsg").textContent = it.desktopNotice;
    $("btnAbrirDesktop").href = it.url;

    fecharModais();
    $("modalBackdrop").classList.add("aberto");
    $("modalDesktop").classList.add("aberto");
    $("modalBackdrop").setAttribute("aria-hidden", "false");
    $("modalDesktop").setAttribute("aria-hidden", "false");
  }

  // ===== ROTEADOR INTELIGENTE DE TAREFAS (PROMPT BAR) =====
  function rotear(texto, temArquivo) {
    var t = norm(texto);
    var pool = todasFerramentas();
    if (ecoAtivoId !== "all" && ecoAtivoId !== "custom") {
      var ecoPool = pool.filter(function (x) { return x.ecoId === ecoAtivoId; });
      if (ecoPool.length) pool = ecoPool;
    }

    var pontos = pool.map(function (it) {
      var n = 0;
      (it.kw || []).forEach(function (k) {
        var nk = norm(k);
        var i = t.indexOf(nk);
        if (i === 0 || (i > 0 && /\W/.test(t.charAt(i - 1)))) n += 2;
      });
      if (t && norm(it.titulo).indexOf(t) !== -1) n += 4;
      if (t && norm(it.desc).indexOf(t) !== -1) n += 1;
      if (t && norm(it.category || "").indexOf(t) !== -1) n += 1;
      return { it: it, n: n };
    }).filter(function (p) { return p.n > 0; })
      .sort(function (a, b) { return b.n - a.n; });

    if (pontos.length) return { it: pontos[0].it, alt: pontos.slice(1, 5).map(function (p) { return p.it; }) };
    if (temArquivo) {
      var img = pool.filter(function (x) {
        return x.id === "gemini" || x.id === "nano-banana" || x.id === "chatgpt" || x.id === "claude-web";
      })[0] || pool[0];
      if (img) return { it: img, alt: [], nota: "Você anexou um arquivo sem descrever a tarefa. Sugeri esta ferramenta." };
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

  function mostrarHome() {
    $("resultado").hidden = true;
    $("home").hidden = false;
    $("btnVoltar").hidden = true;
    window.scrollTo(0, 0);
  }

  function mostrarResultado(intent, alt, nota) {
    var eco = getEcoAtivo();
    var texto = $("texto").value.trim();
    var nomeFerr = intent ? intent.titulo : eco.chatNome;
    var urlFerr = intent ? intent.url : eco.chatUrl;
    var porque = intent ? (intent.porque || intent.desc) : eco.padraoPorque;
    var box = $("resultado");
    box.textContent = "";

    var card = el("div", "box");
    if (intent) {
      card.appendChild(iconeEl(intent));
    } else if (eco.iconLogo) {
      card.appendChild(iconeEl({ logo: eco.iconLogo, svg: eco.iconSvg, icone: "✨" }));
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
          copiar(texto).then(function (ok) {
            if (ok) status.textContent = "Texto copiado. Cole na caixa quando abrir.";
          });
        }
        abrirAlertaDesktop(intent);
        return;
      }
      if (texto) {
        copiar(texto).then(function (ok) {
          if (ok) status.textContent = "Texto copiado. Cole na caixa quando abrir.";
        });
      }
    });
    acoes.appendChild(abrir);

    if (intent) {
      var btnSaiba = el("button", "btn sec", "💡 Saiba mais sobre " + nomeFerr);
      btnSaiba.type = "button";
      btnSaiba.onclick = function () { abrirModalFicha(intent); };
      acoes.appendChild(btnSaiba);
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
      box.appendChild(el("h2", null, "Outras opções compatíveis"));
      var chips = el("div", "chips");
      alt.forEach(function (a) {
        var c = el("button", "chip", (a.icone ? a.icone + " " : "") + a.titulo);
        c.type = "button";
        c.onclick = function () { mostrarResultado(a, [], null); };
        chips.appendChild(c);
      });
      box.appendChild(chips);
    }

    $("home").hidden = true;
    box.hidden = false;
    $("btnVoltar").hidden = false;
    window.scrollTo(0, 0);
  }

  // ===== CONSTRUCAO DO CARD DE FERRAMENTA =====
  function criarCard(it) {
    var fav = ehFavorito(it.id);
    var plano = getPlano(it);

    var card = el("article", "card" + (fav ? " favorita" : ""));

    // Topo: icone + badges (ecossistema + tipo) + controles (favorito, saiba mais, remover custom)
    var top = el("div", "card-top");
    var brand = el("div", "card-brand");

    var icBox = el("div", "card-ic-box");
    icBox.appendChild(iconeEl(it));
    brand.appendChild(icBox);

    var badges = el("div", "card-badges");
    badges.appendChild(el("span", "card-eco-lbl", it.ecoCurto || it.ecoNome || "CaFofo"));
    badges.appendChild(el("span", "card-type-pill", it.type || "IA"));
    brand.appendChild(badges);
    top.appendChild(brand);

    var ctrls = el("div", "card-controls");

    var starBtn = el("button", "card-ctrl-btn star" + (fav ? " ativo" : ""));
    starBtn.type = "button";
    starBtn.title = fav ? "Remover dos fixados" : "Fixar no topo";
    starBtn.setAttribute("aria-label", fav ? "Remover dos fixados" : "Fixar no topo");
    var starSvg = criarStarSvg(fav);
    if (starSvg) starBtn.appendChild(starSvg);
    starBtn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      toggleFavorito(it.id);
    });
    ctrls.appendChild(starBtn);

    var infoBtn = el("button", "card-ctrl-btn info");
    infoBtn.type = "button";
    infoBtn.title = "Saiba mais sobre " + it.titulo;
    infoBtn.setAttribute("aria-label", "Saiba mais sobre " + it.titulo);
    var bulbSvg = criarLightbulbSvg();
    if (bulbSvg) infoBtn.appendChild(bulbSvg);
    infoBtn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      abrirModalFicha(it);
    });
    ctrls.appendChild(infoBtn);

    if (it.isCustom) {
      var delBtn = el("button", "card-ctrl-btn del", "×");
      delBtn.type = "button";
      delBtn.title = "Excluir ferramenta personalizada";
      delBtn.setAttribute("aria-label", "Excluir ferramenta personalizada");
      delBtn.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        customTools = customTools.filter(function (c) { return c.id !== it.id; });
        favoritos = favoritos.filter(function (fid) { return fid !== it.id; });
        delete planosMap[it.id];
        salvarJson(STORAGE_CUSTOM, customTools);
        salvarJson(STORAGE_FAV, favoritos);
        salvarJson(STORAGE_PLAN, planosMap);
        renderDashboard();
      });
      ctrls.appendChild(delBtn);
    }

    top.appendChild(ctrls);
    card.appendChild(top);

    // Nome oficial + descricao 1 linha
    card.appendChild(el("h3", "card-title", it.titulo));
    var descEl = el("p", "card-desc", it.desc || "");
    descEl.title = it.desc || "";
    card.appendChild(descEl);

    // Rodape: tags (Acesso + Plano editavel) + botao direto target="_blank"
    var foot = el("div", "card-foot");
    var tags = el("div", "card-tags");

    var accCls = classeAcesso(it.accessTag);
    tags.appendChild(el("span", "tag-access" + (accCls ? " " + accCls : ""), it.accessTag || "Web"));

    var planBtn = el("button", "plan-btn " + classePlano(plano), plano);
    planBtn.type = "button";
    planBtn.title = "Clique para alternar: Grátis / Assinante / API";
    planBtn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      var prox = proximoPlano(getPlano(it));
      planosMap[it.id] = prox;
      salvarJson(STORAGE_PLAN, planosMap);
      planBtn.textContent = prox;
      planBtn.className = "plan-btn " + classePlano(prox);
      renderFavoritesOnly();
    });
    tags.appendChild(planBtn);
    foot.appendChild(tags);

    var goBtn = linkExterno("card-go", "Abrir ↗", it.url);
    goBtn.setAttribute("aria-label", "Abrir " + it.titulo + " em nova aba");
    goBtn.addEventListener("click", function (e) {
      if (it.desktopNotice) {
        e.preventDefault();
        abrirAlertaDesktop(it);
      }
    });
    foot.appendChild(goBtn);

    card.appendChild(foot);
    return card;
  }

  function correspondeFiltros(it, qNorm) {
    if (catAtiva !== "Todos" && it.category !== catAtiva) return false;
    if (!qNorm) return true;
    var alvo = norm([
      it.titulo,
      it.ferr,
      it.desc,
      it.type,
      it.category,
      it.accessTag,
      it.ecoNome,
      it.ecoCurto,
      (it.kw || []).join(" ")
    ].join(" "));
    return alvo.indexOf(qNorm) !== -1;
  }

  function renderFavoritesOnly() {
    var todos = todasFerramentas();
    var qNorm = norm(buscaTexto.trim());
    var favItems = todos.filter(function (it) {
      return ehFavorito(it.id) && correspondeFiltros(it, qNorm);
    });

    var sec = $("favSection");
    var grid = $("favGrid");
    grid.textContent = "";

    if (!favItems.length) {
      sec.hidden = true;
      return;
    }

    sec.hidden = false;
    $("favCount").textContent = favItems.length + (favItems.length === 1 ? " FIXADA" : " FIXADAS");
    favItems.forEach(function (it) {
      grid.appendChild(criarCard(it));
    });
  }

  function renderEcoTabs() {
    var box = $("ecoTabs");
    box.textContent = "";
    var todos = todasFerramentas();

    var tabs = [{ id: "all", label: "Todos", count: todos.length }];
    D.ecosystems.forEach(function (eco) {
      var n = (eco.modules || []).length + customTools.filter(function (c) { return c.ecoId === eco.id; }).length;
      tabs.push({ id: eco.id, label: eco.curto || eco.nome, count: n });
    });
    if (customTools.length > 0) {
      tabs.push({ id: "custom", label: "Personalizados", count: customTools.length });
    }

    tabs.forEach(function (t) {
      var b = el("button", "eco-tab" + (ecoAtivoId === t.id ? " ativo" : ""));
      b.type = "button";
      b.setAttribute("role", "tab");
      b.setAttribute("aria-selected", ecoAtivoId === t.id ? "true" : "false");
      b.appendChild(document.createTextNode(t.label));
      b.appendChild(el("span", "eco-tab-qtd", String(t.count)));
      b.onclick = function () {
        selecionarEcossistema(t.id);
      };
      box.appendChild(b);
    });
  }

  function renderCatFiltros() {
    var box = $("catFiltros");
    box.textContent = "";
    (D.categories || []).forEach(function (cat) {
      var b = el("button", "cat-chip" + (catAtiva === cat ? " ativo" : ""), cat);
      b.type = "button";
      b.onclick = function () {
        catAtiva = cat;
        renderDashboard();
      };
      box.appendChild(b);
    });
  }

  function renderCatalogo() {
    var container = $("gridContainer");
    container.textContent = "";

    var qNorm = norm(buscaTexto.trim());
    var todos = todasFerramentas();
    var totalVisiveis = 0;

    // Se "custom" foi selecionado
    if (ecoAtivoId === "custom") {
      var customFiltrados = todos.filter(function (it) {
        return it.isCustom && correspondeFiltros(it, qNorm);
      });
      totalVisiveis = customFiltrados.length;
      if (!customFiltrados.length) {
        container.appendChild(el("div", "empty-state", "Nenhuma ferramenta personalizada encontrada. Clique em '+ Adicionar Ferramenta' para cadastrar um atalho."));
      } else {
        var gCustom = el("div", "grid");
        customFiltrados.forEach(function (it) { gCustom.appendChild(criarCard(it)); });
        container.appendChild(gCustom);
      }
      $("modulos").textContent = totalVisiveis + (totalVisiveis === 1 ? " FERRAMENTA" : " FERRAMENTAS");
      return;
    }

    // Se "all" esta ativo -> renderiza secoes expansiveis/colapsaveis por ecossistema
    if (ecoAtivoId === "all") {
      D.ecosystems.forEach(function (eco) {
        var itensEco = todos.filter(function (it) {
          return it.ecoId === eco.id && correspondeFiltros(it, qNorm);
        });
        if (!itensEco.length) return;
        totalVisiveis += itensEco.length;

        var sec = el("section", "eco-section");
        var colapsado = !qNorm && !!collapsedMap[eco.id];

        var head = el("button", "eco-section-head" + (colapsado ? " colapsado" : ""));
        head.type = "button";
        head.setAttribute("aria-expanded", colapsado ? "false" : "true");

        var left = el("div", "eco-section-left");
        var ic = el("span", "eco-section-ic");
        if (eco.iconLogo) {
          var im = document.createElement("img");
          im.alt = "";
          im.src = eco.iconLogo;
          im.onerror = function () {
            var s = parseSvg(eco.iconSvg);
            if (s && im.parentNode) im.parentNode.replaceChild(s, im);
          };
          ic.appendChild(im);
        } else if (eco.iconSvg) {
          var svgNode = parseSvg(eco.iconSvg);
          if (svgNode) ic.appendChild(svgNode);
        }
        left.appendChild(ic);
        left.appendChild(el("span", "eco-section-title", eco.nome));
        head.appendChild(left);

        var right = el("div", "eco-section-right");
        right.appendChild(el("span", "eco-section-count", itensEco.length + " itens"));
        right.appendChild(el("span", "eco-section-arrow", colapsado ? "▸" : "▾"));
        head.appendChild(right);

        var grid = el("div", "grid");
        grid.hidden = colapsado;
        itensEco.forEach(function (it) {
          grid.appendChild(criarCard(it));
        });

        head.onclick = function () {
          var agoraColapsado = !grid.hidden;
          grid.hidden = agoraColapsado;
          collapsedMap[eco.id] = agoraColapsado;
          salvarJson(STORAGE_COLLAPSED, collapsedMap);
          head.classList.toggle("colapsado", agoraColapsado);
          head.setAttribute("aria-expanded", agoraColapsado ? "false" : "true");
          head.querySelector(".eco-section-arrow").textContent = agoraColapsado ? "▸" : "▾";
        };

        sec.appendChild(head);
        sec.appendChild(grid);
        container.appendChild(sec);
      });

      // Ferramentas customizadas sem ecossistema especifico
      var customSoltos = todos.filter(function (it) {
        return it.isCustom && it.ecoId === "custom" && correspondeFiltros(it, qNorm);
      });
      if (customSoltos.length) {
        totalVisiveis += customSoltos.length;
        var secC = el("section", "eco-section");
        var headC = el("div", "eco-section-head");
        var leftC = el("div", "eco-section-left");
        leftC.appendChild(el("span", "eco-section-ic", "⚡"));
        leftC.appendChild(el("span", "eco-section-title", "Meus Atalhos Personalizados"));
        headC.appendChild(leftC);
        var rightC = el("div", "eco-section-right");
        rightC.appendChild(el("span", "eco-section-count", customSoltos.length + " itens"));
        headC.appendChild(rightC);
        var gridC = el("div", "grid");
        customSoltos.forEach(function (it) { gridC.appendChild(criarCard(it)); });
        secC.appendChild(headC);
        secC.appendChild(gridC);
        container.appendChild(secC);
      }

      if (!totalVisiveis) {
        container.appendChild(el("div", "empty-state", "Nenhuma ferramenta corresponde ao filtro ou busca atual."));
      }
      $("modulos").textContent = totalVisiveis + (totalVisiveis === 1 ? " FERRAMENTA" : " FERRAMENTAS");
      return;
    }

    // Ecossistema especifico selecionado
    var filtrados = todos.filter(function (it) {
      return it.ecoId === ecoAtivoId && correspondeFiltros(it, qNorm);
    });
    totalVisiveis = filtrados.length;
    if (!filtrados.length) {
      container.appendChild(el("div", "empty-state", "Nenhuma ferramenta encontrada neste ecossistema para os filtros atuais."));
    } else {
      var g = el("div", "grid");
      filtrados.forEach(function (it) { g.appendChild(criarCard(it)); });
      container.appendChild(g);
    }
    $("modulos").textContent = totalVisiveis + (totalVisiveis === 1 ? " FERRAMENTA" : " FERRAMENTAS");
  }

  function renderDrawer() {
    var lista = $("listaEcossistemas");
    lista.textContent = "";
    var todos = todasFerramentas();

    // Opcao "Todos os Ecossistemas"
    var btnAll = el("button", "eco-item" + (ecoAtivoId === "all" ? " ativo" : ""));
    btnAll.type = "button";
    btnAll.appendChild(el("span", "eco-ic", "🌐"));
    var infoAll = el("span", "eco-info");
    infoAll.appendChild(el("span", "eco-nome", "Todos os Ecossistemas"));
    infoAll.appendChild(el("span", "eco-sub", "Visão completa por categorias"));
    btnAll.appendChild(infoAll);
    btnAll.appendChild(el("span", "eco-qtd", String(todos.length)));
    btnAll.onclick = function () {
      selecionarEcossistema("all");
      fecharMenu();
    };
    lista.appendChild(btnAll);

    D.ecosystems.forEach(function (eco) {
      var btn = el("button", "eco-item" + (eco.id === ecoAtivoId ? " ativo" : ""));
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
      } else if (eco.iconSvg) {
        var svgNode = parseSvg(eco.iconSvg);
        if (svgNode) ic.appendChild(svgNode);
      }
      btn.appendChild(ic);

      var info = el("span", "eco-info");
      info.appendChild(el("span", "eco-nome", eco.nome));
      info.appendChild(el("span", "eco-sub", eco.chatUrl.replace("https://", "").replace(/\/$/, "")));
      btn.appendChild(info);

      var qtdEco = (eco.modules || []).length + customTools.filter(function (c) { return c.ecoId === eco.id; }).length;
      btn.appendChild(el("span", "eco-qtd", String(qtdEco)));

      btn.onclick = function () {
        selecionarEcossistema(eco.id);
        fecharMenu();
      };
      lista.appendChild(btn);
    });

    if (ecoAtivoId === "all") {
      $("drawerChatInfo").textContent = "Hub completo ativo · " + todos.length + " ferramentas disponíveis";
    } else if (ecoAtivoId === "custom") {
      $("drawerChatInfo").textContent = "Exibindo seus atalhos personalizados";
    } else {
      var eco = getEcoAtivo();
      $("drawerChatInfo").textContent = "Chat ativo: " + eco.chatUrl;
    }
  }

  function atualizarCabecalhoEco() {
    if (ecoAtivoId === "all") {
      $("ecoBadgeNome").textContent = "Todos os Ecossistemas";
      $("texto").placeholder = "Descreva sua tarefa para rotear a melhor IA (ex.: criar automação, editar vídeo, código)...";
    } else if (ecoAtivoId === "custom") {
      $("ecoBadgeNome").textContent = "Meus Atalhos";
      $("texto").placeholder = "Descreva sua tarefa para buscar nos seus atalhos e ferramentas...";
    } else {
      var eco = getEcoAtivo();
      $("ecoBadgeNome").textContent = eco.nome;
      $("texto").placeholder = eco.placeholder || "O que você quer fazer?";
    }
  }

  function renderDashboard() {
    atualizarCabecalhoEco();
    renderEcoTabs();
    renderCatFiltros();
    renderFavoritesOnly();
    renderCatalogo();
    renderDrawer();
  }

  function selecionarEcossistema(id) {
    if (id !== "all" && id !== "custom" && !D.ecosystems.some(function (e) { return e.id === id; })) return;
    ecoAtivoId = id;
    salvarEco(id);
    fecharModais();
    renderDashboard();
    if (!$("resultado").hidden) {
      mostrarHome();
    }
  }

  // ===== DRAWER ESQUERDO =====
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
    if ($("drawer").classList.contains("aberto")) fecharMenu();
    else abrirMenu();
  });
  $("ecoBadge").addEventListener("click", abrirMenu);
  $("btnFecharMenu").addEventListener("click", fecharMenu);
  $("drawerOverlay").addEventListener("click", fecharMenu);

  // ===== MODAL: ADICIONAR FERRAMENTA PERSONALIZADA =====
  function popularSelectsCustom() {
    var selEco = $("customEco");
    selEco.textContent = "";
    D.ecosystems.forEach(function (eco) {
      var op = document.createElement("option");
      op.value = eco.id;
      op.textContent = eco.nome;
      selEco.appendChild(op);
    });
    var opCustom = document.createElement("option");
    opCustom.value = "custom";
    opCustom.textContent = "Meus Atalhos (Personalizado)";
    selEco.appendChild(opCustom);

    var selCat = $("customCat");
    selCat.textContent = "";
    (D.categories || []).filter(function (c) { return c !== "Todos"; }).forEach(function (c) {
      var op = document.createElement("option");
      op.value = c;
      op.textContent = c;
      selCat.appendChild(op);
    });
  }

  $("btnNovaFerramenta").addEventListener("click", function () {
    popularSelectsCustom();
    $("formCustomTool").reset();
    if (ecoAtivoId !== "all") $("customEco").value = ecoAtivoId;
    $("customFeedback").textContent = "";
    fecharModais();
    $("modalBackdrop").classList.add("aberto");
    $("modalCustomTool").classList.add("aberto");
    $("modalBackdrop").setAttribute("aria-hidden", "false");
    $("modalCustomTool").setAttribute("aria-hidden", "false");
    $("customNome").focus();
  });

  $("formCustomTool").addEventListener("submit", function (e) {
    e.preventDefault();
    var nome = $("customNome").value.trim();
    var url = $("customUrl").value.trim();
    var desc = $("customDesc").value.trim();
    var fb = $("customFeedback");
    fb.className = "tatico-feedback";

    if (!nome || !url || !desc) {
      fb.textContent = "Preencha nome, URL e descrição curta.";
      return;
    }
    if (!/^https?:\/\//i.test(url)) {
      url = "https://" + url;
    }

    var nova = {
      id: "custom-" + Date.now() + "-" + Math.random().toString(36).slice(2, 6),
      icone: "⚡",
      ferr: nome,
      titulo: nome,
      type: $("customType").value,
      category: $("customCat").value,
      accessTag: $("customAccess").value,
      defaultPlan: $("customPlan").value,
      ecoId: $("customEco").value,
      desc: desc,
      url: url,
      porque: desc,
      kw: [nome, $("customType").value, $("customCat").value, desc],
      details: {
        fullDescription: desc,
        examples: ["Acesso rápido salvo localmente no seu CaFofo."],
        compatibility: $("customAccess").value === "Desktop"
          ? "Marcado pelo usuário para uso preferencial no Desktop."
          : "Atalho personalizado salvo localmente no navegador."
      }
    };

    customTools.unshift(nova);
    planosMap[nova.id] = $("customPlan").value;
    salvarJson(STORAGE_CUSTOM, customTools);
    salvarJson(STORAGE_PLAN, planosMap);
    fecharModais();
    renderDashboard();
  });

  // ===== MODAL: BACKUP JSON (EXPORTAR / IMPORTAR) =====
  function atualizarResumoBackup() {
    var box = $("backupResumo");
    box.textContent = "";
    box.appendChild(el("span", "compat-dot"));
    box.appendChild(el("span", null,
      "Atualmente salvos: " + favoritos.length + " favoritos, " +
      customTools.length + " ferramentas personalizadas e " +
      Object.keys(planosMap).length + " status de plano."
    ));
  }

  $("btnBackupJson").addEventListener("click", function () {
    atualizarResumoBackup();
    $("backupFeedback").textContent = "";
    fecharModais();
    $("modalBackdrop").classList.add("aberto");
    $("modalBackup").classList.add("aberto");
    $("modalBackdrop").setAttribute("aria-hidden", "false");
    $("modalBackup").setAttribute("aria-hidden", "false");
  });

  $("btnExportarJson").addEventListener("click", function () {
    var payload = {
      app: "CaFofo",
      version: 1,
      exportedAt: new Date().toISOString(),
      favorites: favoritos,
      planStatus: planosMap,
      customTools: customTools
    };
    var blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = "cafofo-backup-" + new Date().toISOString().slice(0, 10) + ".json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
    $("backupFeedback").className = "tatico-feedback ok";
    $("backupFeedback").textContent = "Backup JSON exportado com sucesso!";
  });

  $("inputImportarJson").addEventListener("change", function () {
    var file = this.files && this.files[0] ? this.files[0] : null;
    this.value = "";
    if (!file) return;
    var fb = $("backupFeedback");
    fb.className = "tatico-feedback";

    var reader = new FileReader();
    reader.onload = function () {
      try {
        var data = JSON.parse(String(reader.result || "{}"));
        if (!data || typeof data !== "object") throw new Error("Arquivo inválido.");
        if (Array.isArray(data.favorites)) favoritos = data.favorites;
        if (data.planStatus && typeof data.planStatus === "object") planosMap = data.planStatus;
        if (Array.isArray(data.customTools)) customTools = data.customTools;

        salvarJson(STORAGE_FAV, favoritos);
        salvarJson(STORAGE_PLAN, planosMap);
        salvarJson(STORAGE_CUSTOM, customTools);
        atualizarResumoBackup();
        renderDashboard();
        fb.className = "tatico-feedback ok";
        fb.textContent = "Backup importado e restaurado com sucesso!";
      } catch (err) {
        fb.textContent = "Não foi possível ler este JSON: verifique se é um backup válido do CaFofo.";
      }
    };
    reader.readAsText(file);
  });

  // ===== EVENTOS GERAIS =====
  $("buscaFerramentas").addEventListener("input", function () {
    buscaTexto = this.value;
    $("btnLimparBusca").hidden = !buscaTexto;
    renderFavoritesOnly();
    renderCatalogo();
  });

  $("btnLimparBusca").addEventListener("click", function () {
    buscaTexto = "";
    $("buscaFerramentas").value = "";
    $("btnLimparBusca").hidden = true;
    renderFavoritesOnly();
    renderCatalogo();
    $("buscaFerramentas").focus();
  });

  $("modalBackdrop").addEventListener("click", fecharModais);
  $("btnFecharFicha").addEventListener("click", fecharModais);
  $("btnFecharFichaX").addEventListener("click", fecharModais);
  $("btnFecharDesktop").addEventListener("click", fecharModais);
  $("btnAcessarFicha").addEventListener("click", fecharModais);
  $("btnAbrirDesktop").addEventListener("click", fecharModais);
  $("btnFecharCustomX").addEventListener("click", fecharModais);
  $("btnCancelarCustom").addEventListener("click", fecharModais);
  $("btnFecharBackupX").addEventListener("click", fecharModais);
  $("btnFecharBackup").addEventListener("click", fecharModais);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      if (
        $("modalFicha").classList.contains("aberto") ||
        $("modalDesktop").classList.contains("aberto") ||
        $("modalCustomTool").classList.contains("aberto") ||
        $("modalBackup").classList.contains("aberto")
      ) {
        fecharModais();
      } else if ($("drawer").classList.contains("aberto")) {
        fecharMenu();
      }
    }
  });

  $("form").addEventListener("submit", function (e) {
    e.preventDefault();
    var texto = $("texto").value.trim();
    if (!texto && !arquivo) {
      $("texto").focus();
      return;
    }
    var r = rotear(texto, !!arquivo);
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

  renderDashboard();

  if ("serviceWorker" in navigator) {
    try { navigator.serviceWorker.register("sw.js"); } catch (e) {}
  }
})();
