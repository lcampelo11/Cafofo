(function () {
  var D = window.CAFOFO;
  var $ = function (id) { return document.getElementById(id); };
  var arquivo = null;

  function norm(s) {
    return String(s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  }

  // Escolhe a tarefa pelo numero de palavras reconhecidas.
  function rotear(texto, temArquivo) {
    var t = norm(texto);
    var pontos = D.intents.map(function (it) {
      var n = 0;
      it.kw.forEach(function (k) {
        var i = t.indexOf(k);
        if (i === 0 || (i > 0 && /\W/.test(t.charAt(i - 1)))) n++;
      });
      return { it: it, n: n };
    }).filter(function (p) { return p.n > 0; })
      .sort(function (a, b) { return b.n - a.n; });

    if (pontos.length) return { it: pontos[0].it, alt: pontos.slice(1, 4).map(function (p) { return p.it; }) };
    if (temArquivo) {
      var img = D.intents.filter(function (x) { return x.id === "imagem"; })[0];
      return { it: img, alt: [], nota: "Você anexou um arquivo sem dizer o que fazer. Sugeri editar imagem." };
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
      ta.value = texto; document.body.appendChild(ta); ta.select();
      var ok = document.execCommand("copy"); document.body.removeChild(ta); return ok;
    } catch (e) { return false; }
  }

  function el(tag, cls, txt) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (txt != null) e.textContent = txt;
    return e;
  }

  // Logo da ferramenta; se faltar a imagem, mostra o emoji.
  function iconeEl(it) {
    if (!it.logo) return el("span", "ic", it.icone);
    var im = document.createElement("img");
    im.className = "lg"; im.alt = ""; im.src = it.logo;
    im.onerror = function () { var s = el("span", "ic", it.icone); if (im.parentNode) im.parentNode.replaceChild(s, im); };
    return im;
  }

  function mostrarHome() {
    $("resultado").hidden = true; $("home").hidden = false; $("btnVoltar").hidden = true;
    window.scrollTo(0, 0);
  }

  function mostrarResultado(intent, alt, nota) {
    var texto = $("texto").value.trim();
    var tool = intent ? D.tools[intent.tool] : D.tools[D.padrao.tool];
    var porque = intent ? intent.porque : D.padrao.porque;
    var box = $("resultado");
    box.textContent = "";

    var card = el("div", "box");
    if (intent) card.appendChild(iconeEl(intent));
    card.appendChild(el("h3", null, "Vou te levar para: " + tool.nome));
    card.appendChild(el("p", null, porque));
    if (nota) card.appendChild(el("p", null, nota));
    if (texto) card.appendChild(el("div", "txt", texto));
    if (arquivo) card.appendChild(el("p", null, "Anexo: " + arquivo.name));
    box.appendChild(card);

    var status = el("div", "status");
    var acoes = el("div", "acoes");

    var abrir = el("button", "btn", "Abrir " + tool.nome);
    abrir.onclick = function () {
      copiar(texto).then(function (ok) {
        if (ok && texto) status.textContent = "Texto copiado. Cole na caixa quando abrir.";
        window.open(tool.url, "_blank", "noopener");
      });
    };
    acoes.appendChild(abrir);

    if (arquivo && navigator.canShare && navigator.canShare({ files: [arquivo] })) {
      var comp = el("button", "btn sec", "Compartilhar foto + texto");
      comp.onclick = function () {
        var dados = { files: [arquivo], title: "Cafofo" };
        if (texto) dados.text = texto;
        navigator.share(dados).then(function () {
          status.textContent = "Escolha o app Gemini na lista.";
        }, function (e) {
          if (e && e.name !== "AbortError") status.textContent = "Não deu para compartilhar: " + e.name;
        });
      };
      acoes.appendChild(comp);
    } else if (arquivo) {
      acoes.appendChild(el("p", null, "Este aparelho não compartilha arquivo pelo navegador. Anexe a foto direto no Gemini."));
    }

    if (texto) {
      var cp = el("button", "btn sec", "Só copiar o texto");
      cp.onclick = function () { copiar(texto).then(function (ok) { status.textContent = ok ? "Texto copiado." : "Não consegui copiar."; }); };
      acoes.appendChild(cp);
    }
    box.appendChild(acoes);
    box.appendChild(status);

    if (alt && alt.length) {
      box.appendChild(el("h2", null, "Não era isso? Tente"));
      var chips = el("div", "chips");
      alt.forEach(function (a) {
        var c = el("button", "chip", a.icone + " " + a.titulo);
        c.onclick = function () { mostrarResultado(a, [], null); };
        chips.appendChild(c);
      });
      box.appendChild(chips);
    }
    if (!intent) {
      box.appendChild(el("h2", null, "Escolha você"));
      var g = el("div", "chips");
      D.intents.forEach(function (a) {
        var c = el("button", "chip", a.icone + " " + a.titulo);
        c.onclick = function () { mostrarResultado(a, [], null); };
        g.appendChild(c);
      });
      box.appendChild(g);
    }

    $("home").hidden = true; box.hidden = false; $("btnVoltar").hidden = false;
    window.scrollTo(0, 0);
  }

  // Cards por tarefa
  D.intents.forEach(function (it) {
    var c = el("button", "card");
    var cab = el("span", "cab");
    cab.appendChild(iconeEl(it));
    cab.appendChild(el("span", "tl", it.ferr || D.tools[it.tool].nome));
    c.appendChild(cab);
    c.appendChild(el("span", "tt", it.titulo));
    c.appendChild(el("small", null, it.desc || D.tools[it.tool].oque));
    c.onclick = function () { mostrarResultado(it, [], null); };
    $("grid").appendChild(c);
  });

  $("modulos").textContent = D.intents.length + " MÓDULOS";

  $("form").addEventListener("submit", function (e) {
    e.preventDefault();
    var texto = $("texto").value.trim();
    if (!texto && !arquivo) { $("texto").focus(); return; }
    var r = rotear(texto, !!arquivo);
    mostrarResultado(r.it, r.alt, r.nota);
  });

  $("arquivo").addEventListener("change", function () {
    arquivo = this.files && this.files[0] ? this.files[0] : null;
    $("nomeArq").textContent = arquivo ? arquivo.name : "";
  });

  var ta = $("texto");
  ta.addEventListener("input", function () { ta.style.height = "auto"; ta.style.height = Math.min(ta.scrollHeight, 110) + "px"; });

  $("btnVoltar").onclick = mostrarHome;
  $("btnDrive").onclick = function () {
    window.open(D.driveFolderUrl || D.tools.drive.url, "_blank", "noopener");
  };

  if ("serviceWorker" in navigator) {
    try { navigator.serviceWorker.register("sw.js"); } catch (e) {}
  }
})();
