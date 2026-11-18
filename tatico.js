(function () {
  var D = window.CAFOFO;
  var $ = function (id) { return document.getElementById(id); };

  var KEYS = {
    API: "cafofo_gemini_api_key",
    NOTAS: "cafofo_tatico_notas",
    QUOTA_ECO: "cafofo_quota_eco",
    QUOTAS: "cafofo_quotas_v1"
  };

  function lerJson(chave, padrao) {
    try {
      var raw = localStorage.getItem(chave);
      return raw ? JSON.parse(raw) : padrao;
    } catch (e) {
      return padrao;
    }
  }

  function salvarJson(chave, valor) {
    try {
      localStorage.setItem(chave, JSON.stringify(valor));
    } catch (e) {}
  }

  function lerApiKey() {
    try {
      return (localStorage.getItem(KEYS.API) || "").trim();
    } catch (e) {
      return "";
    }
  }

  function salvarApiKey(k) {
    try {
      if (k) localStorage.setItem(KEYS.API, k);
      else localStorage.removeItem(KEYS.API);
    } catch (e) {}
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
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      var ok = document.execCommand("copy");
      document.body.removeChild(ta);
      return ok;
    } catch (e) {
      return false;
    }
  }

  function el(tag, cls, txt) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (txt != null) e.textContent = txt;
    return e;
  }

  // ===== DRAWER & ABAS =====
  function abrirTatico() {
    document.dispatchEvent(new CustomEvent("cafofo:fechar-overlays", { detail: { source: "tatico" } }));
    $("taticoDrawer").classList.add("aberto");
    $("taticoOverlay").classList.add("aberto");
    $("taticoDrawer").setAttribute("aria-hidden", "false");
    $("taticoOverlay").setAttribute("aria-hidden", "false");
    $("btnTatico").setAttribute("aria-expanded", "true");
    atualizarCountdown();
  }

  function fecharTatico() {
    $("taticoDrawer").classList.remove("aberto");
    $("taticoOverlay").classList.remove("aberto");
    $("taticoDrawer").setAttribute("aria-hidden", "true");
    $("taticoOverlay").setAttribute("aria-hidden", "true");
    $("btnTatico").setAttribute("aria-expanded", "false");
  }

  document.addEventListener("cafofo:fechar-overlays", function (e) {
    if (e.detail && e.detail.source !== "tatico") {
      fecharTatico();
    }
  });

  $("btnTatico").addEventListener("click", function () {
    if ($("taticoDrawer").classList.contains("aberto")) fecharTatico();
    else abrirTatico();
  });
  $("btnFecharTatico").addEventListener("click", fecharTatico);
  $("taticoOverlay").addEventListener("click", fecharTatico);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && $("taticoDrawer").classList.contains("aberto")) {
      fecharTatico();
    }
  });

  var tabs = document.querySelectorAll(".tatico-tab");
  var paineis = {
    caderninho: $("tabCaderninho"),
    cotas: $("tabCotas"),
    manual: $("tabManual")
  };

  tabs.forEach(function (t) {
    t.addEventListener("click", function () {
      var alvo = t.getAttribute("data-tab");
      tabs.forEach(function (x) {
        var ativo = x.getAttribute("data-tab") === alvo;
        x.classList.toggle("ativo", ativo);
        x.setAttribute("aria-selected", ativo ? "true" : "false");
      });
      Object.keys(paineis).forEach(function (k) {
        paineis[k].hidden = k !== alvo;
      });
    });
  });

  // ===== CONFIGURACAO DE API KEY =====
  function atualizarStatusApi() {
    var key = lerApiKey();
    var tem = key.length > 0;
    var badge = $("apiStatusBadge");
    badge.textContent = tem ? "Chave Ativa" : "Modo Ponte (Sem Chave)";
    badge.className = "api-status " + (tem ? "ativa" : "sem-chave");

    $("btnDebaterIA").hidden = !tem;
    $("btnCompilarGemini").hidden = tem;
  }

  $("btnConfigApi").addEventListener("click", function () {
    var panel = $("apiPanel");
    var abrir = panel.hidden;
    panel.hidden = !abrir;
    $("btnConfigApi").setAttribute("aria-expanded", abrir ? "true" : "false");
    if (abrir) {
      $("apiKeyInput").value = lerApiKey();
      $("apiFeedback").textContent = "";
    }
  });

  $("btnToggleKey").addEventListener("click", function () {
    var inp = $("apiKeyInput");
    inp.type = inp.type === "password" ? "text" : "password";
  });

  $("btnSalvarApi").addEventListener("click", function () {
    var val = $("apiKeyInput").value.trim();
    var fb = $("apiFeedback");
    fb.className = "tatico-feedback";
    if (!val) {
      fb.textContent = "Cole uma API Key válida começando com AIza...";
      return;
    }
    if (val.indexOf("AIza") !== 0) {
      fb.textContent = "A chave do Google Gemini normalmente começa com 'AIza'. Verifique e tente novamente.";
      return;
    }
    salvarApiKey(val);
    atualizarStatusApi();
    fb.className = "tatico-feedback ok";
    fb.textContent = "Chave salva apenas neste aparelho.";
  });

  $("btnRemoverApi").addEventListener("click", function () {
    salvarApiKey("");
    $("apiKeyInput").value = "";
    atualizarStatusApi();
    $("apiFeedback").className = "tatico-feedback";
    $("apiFeedback").textContent = "Chave removida. Modo Ponte ativado.";
  });

  // ===== ABA 1: CADERNINHO & ASSISTENTE =====
  var notas = lerJson(KEYS.NOTAS, []);
  var ultimoPromptCompilado = "";

  function salvarNotas() {
    salvarJson(KEYS.NOTAS, notas);
  }

  function renderNotas() {
    var lista = $("notasLista");
    lista.textContent = "";
    if (!notas.length) {
      lista.appendChild(el("div", "notas-vazio", "Nenhuma nota ainda. Digite ideias soltas ou toque no microfone para ditar."));
      return;
    }
    notas.forEach(function (n) {
      var balao = el("div", "nota-balao");
      var topo = el("div", "nota-balao-topo");
      topo.appendChild(el("span", "nota-hora", n.time || ""));
      var del = el("button", "nota-del", "×");
      del.type = "button";
      del.setAttribute("aria-label", "Apagar nota");
      del.onclick = function () {
        notas = notas.filter(function (x) { return x.id !== n.id; });
        salvarNotas();
        renderNotas();
      };
      topo.appendChild(del);
      balao.appendChild(topo);
      balao.appendChild(el("div", "nota-txt", n.text));
      lista.appendChild(balao);
    });
    lista.scrollTop = lista.scrollHeight;
  }

  function adicionarNota(textoRaw) {
    var txt = String(textoRaw || "").trim();
    if (!txt) return;
    var agora = new Date();
    var hh = String(agora.getHours()).padStart(2, "0");
    var mm = String(agora.getMinutes()).padStart(2, "0");
    notas.push({
      id: Date.now() + "-" + Math.random().toString(36).slice(2, 6),
      text: txt,
      time: hh + ":" + mm
    });
    salvarNotas();
    renderNotas();
    $("notaInput").value = "";
    $("notaInput").style.height = "auto";
    $("notaStatus").textContent = "";
  }

  $("btnAddNota").addEventListener("click", function () {
    adicionarNota($("notaInput").value);
  });

  $("notaInput").addEventListener("input", function () {
    this.style.height = "auto";
    this.style.height = Math.min(this.scrollHeight, 90) + "px";
  });

  $("notaInput").addEventListener("keydown", function (e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      adicionarNota($("notaInput").value);
    }
  });

  // Reconhecimento de Voz nativo
  var recognition = null;
  var gravandoVoz = false;
  var SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;

  $("btnVoz").addEventListener("click", function () {
    var st = $("notaStatus");
    st.className = "tatico-feedback";
    if (!SpeechRec) {
      st.textContent = "Este navegador não suporta ditado por voz. Digite sua nota abaixo.";
      return;
    }
    if (gravandoVoz && recognition) {
      recognition.stop();
      return;
    }
    try {
      recognition = new SpeechRec();
      recognition.lang = "pt-BR";
      recognition.interimResults = false;
      recognition.continuous = false;
      var textoBase = $("notaInput").value.trim();

      recognition.onstart = function () {
        gravandoVoz = true;
        $("btnVoz").classList.add("gravando");
        st.textContent = "Ouvindo... fale sua ideia.";
      };
      recognition.onresult = function (event) {
        var falado = "";
        for (var i = event.resultIndex; i < event.results.length; i++) {
          falado += event.results[i][0].transcript;
        }
        falado = falado.trim();
        if (falado) {
          $("notaInput").value = textoBase ? textoBase + " " + falado : falado;
          $("notaInput").dispatchEvent(new Event("input"));
          st.className = "tatico-feedback ok";
          st.textContent = "Áudio transcrito. Toque em + para salvar na lista.";
        }
      };
      recognition.onerror = function (err) {
        st.textContent = "Erro no microfone: " + (err && err.error ? err.error : "permissão negada");
      };
      recognition.onend = function () {
        gravandoVoz = false;
        $("btnVoz").classList.remove("gravando");
      };
      recognition.start();
    } catch (e) {
      gravandoVoz = false;
      $("btnVoz").classList.remove("gravando");
      st.textContent = "Não foi possível iniciar o microfone.";
    }
  });

  function montarNotasTexto() {
    return notas.map(function (n, idx) {
      return (idx + 1) + ". [" + n.time + "] " + n.text;
    }).join("\n");
  }

  function montarPromptPonte() {
    return [
      "Atue como um arquiteto de produto e especialista em IA. Analise minhas anotações soltas abaixo em ordem cronológica:",
      "",
      montarNotasTexto(),
      "",
      "Com base nisso:",
      "1) Avalie a viabilidade técnica e possíveis gargalos;",
      "2) Sugira melhorias práticas e objetivas;",
      "3) Entregue ao final um único prompt técnico estruturado, enxuto e otimizado para economizar tokens."
    ].join("\n");
  }

  function extrairPromptOtimizado(resposta) {
    var m = resposta.match(/---PROMPT_OTIMIZADO---([\s\S]*?)---FIM_PROMPT---/i);
    if (m && m[1]) return m[1].trim();
    return resposta.trim();
  }

  function chamarGeminiFlash(key, parts) {
    var url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=" + encodeURIComponent(key);
    return fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: parts }]
      })
    }).then(function (r) {
      return r.json().then(function (data) {
        if (!r.ok) {
          var msg = (data && data.error && data.error.message) ? data.error.message : ("HTTP " + r.status);
          throw new Error(msg);
        }
        var txt = data && data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts[0] && data.candidates[0].content.parts[0].text;
        if (!txt) throw new Error("Resposta vazia do Gemini.");
        return txt;
      });
    });
  }

  // Modo Chave Ativa: Debater & Compilar com gemini-2.5-flash
  $("btnDebaterIA").addEventListener("click", function () {
    var st = $("notaStatus");
    st.className = "tatico-feedback";
    if (!notas.length) {
      st.textContent = "Adicione pelo menos uma anotação antes de debater com a IA.";
      return;
    }
    var key = lerApiKey();
    if (!key) {
      atualizarStatusApi();
      return;
    }

    var btn = $("btnDebaterIA");
    var orig = btn.textContent;
    btn.disabled = true;
    btn.textContent = "Analisando ideias...";
    st.textContent = "";

    var promptSistema = [
      "Você é um consultor técnico objetivo em português do Brasil.",
      "Leia as anotações cronológicas do usuário abaixo:",
      "",
      montarNotasTexto(),
      "",
      "Responda de forma clara e enxuta com:",
      "1. Viabilidade técnica (direto ao ponto)",
      "2. Sugestões práticas de melhoria",
      "3. Um único prompt final otimizado para economizar tokens, delimitado exatamente entre ---PROMPT_OTIMIZADO--- e ---FIM_PROMPT---."
    ].join("\n");

    chamarGeminiFlash(key, [{ text: promptSistema }]).then(function (resposta) {
      ultimoPromptCompilado = extrairPromptOtimizado(resposta);
      $("iaRespostaTexto").textContent = resposta;
      $("iaRespostaBox").hidden = false;
      st.className = "tatico-feedback ok";
      st.textContent = "Análise concluída!";
    }).catch(function (err) {
      st.textContent = "Falha na API Gemini: " + (err.message || "verifique sua chave");
    }).finally(function () {
      btn.disabled = false;
      btn.textContent = orig;
    });
  });

  $("btnCopiarPromptIA").addEventListener("click", function () {
    var btn = $("btnCopiarPromptIA");
    var alvo = ultimoPromptCompilado || $("iaRespostaTexto").textContent;
    copiar(alvo).then(function (ok) {
      if (ok) {
        btn.textContent = "Copiado!";
        btn.classList.add("ok");
        setTimeout(function () {
          btn.textContent = "Copiar Prompt Pronto";
          btn.classList.remove("ok");
        }, 1800);
      }
    });
  });

  // Modo Ponte (Sem Chave): Compilar & Abrir no Gemini
  $("btnCompilarGemini").addEventListener("click", function (e) {
    var st = $("notaStatus");
    st.className = "tatico-feedback";
    if (!notas.length) {
      e.preventDefault();
      st.textContent = "Adicione pelo menos uma anotação antes de compilar.";
      return;
    }
    var compilado = montarPromptPonte();
    fallbackCopia(compilado);
    copiar(compilado).then(function (ok) {
      if (ok) {
        st.className = "tatico-feedback ok";
        st.textContent = "Prompt compilado e copiado! Cole no Gemini ao abrir.";
      } else {
        st.textContent = "Gemini aberto. Se não copiou automático, copie suas notas.";
      }
    });
  });

  // Limpar notas com confirmacao inline
  $("btnLimparNotas").addEventListener("click", function () {
    if (!notas.length) return;
    $("confirmLimparBox").hidden = false;
  });
  $("btnCancelarLimpar").addEventListener("click", function () {
    $("confirmLimparBox").hidden = true;
  });
  $("btnConfirmarLimpar").addEventListener("click", function () {
    notas = [];
    salvarNotas();
    renderNotas();
    $("iaRespostaBox").hidden = true;
    $("iaRespostaTexto").textContent = "";
    ultimoPromptCompilado = "";
    $("confirmLimparBox").hidden = true;
    $("notaStatus").textContent = "";
  });

  // ===== ABA 2: MONITOR DE COTAS & TOKENS =====
  var quotaEcos = D.quotaEcosystems || [];
  var quotasEstado = lerJson(KEYS.QUOTAS, {});
  var quotaEcoAtivo = (function () {
    try {
      var s = localStorage.getItem(KEYS.QUOTA_ECO);
      if (s && quotaEcos.some(function (q) { return q.id === s; })) return s;
    } catch (e) {}
    return quotaEcos[0] ? quotaEcos[0].id : "google";
  })();

  function getQuotaConfig(id) {
    for (var i = 0; i < quotaEcos.length; i++) {
      if (quotaEcos[i].id === id) return quotaEcos[i];
    }
    return quotaEcos[0];
  }

  function getQuotaAtual() {
    var cfg = getQuotaConfig(quotaEcoAtivo);
    if (!quotasEstado[quotaEcoAtivo]) {
      quotasEstado[quotaEcoAtivo] = { consumed: 0, resetTime: cfg.defaultReset || "20:00" };
    }
    return quotasEstado[quotaEcoAtivo];
  }

  function salvarQuotas() {
    salvarJson(KEYS.QUOTAS, quotasEstado);
  }

  function popularQuotaSelect() {
    var sel = $("quotaEcoSelect");
    sel.textContent = "";
    quotaEcos.forEach(function (q) {
      var op = document.createElement("option");
      op.value = q.id;
      op.textContent = q.label;
      if (q.id === quotaEcoAtivo) op.selected = true;
      sel.appendChild(op);
    });
  }

  function renderQuota() {
    var st = getQuotaAtual();
    var cfg = getQuotaConfig(quotaEcoAtivo);
    var usado = Math.max(0, Math.min(100, Math.round(Number(st.consumed) || 0)));
    var restante = 100 - usado;
    var reset = st.resetTime || "20:00";

    $("quotaUsadoTxt").textContent = usado + "%";
    $("quotaRestanteTxt").textContent = restante + "%";

    var bar = $("quotaBar");
    bar.style.width = usado + "%";
    bar.className = "quota-fill " + (usado < 50 ? "verde" : usado <= 80 ? "amarelo" : "vermelho");

    $("quotaRange").value = String(usado);
    $("quotaNum").value = String(usado);
    $("quotaResetInput").value = reset;
    $("quotaResetLabel").textContent = reset;

    // Atualiza guia colapsavel
    var body = $("comoChecarBody");
    body.textContent = "";
    var parts = cfg.guide.split(/(`[^`]+`)/g);
    parts.forEach(function (p) {
      if (p.indexOf("`") === 0 && p.lastIndexOf("`") === p.length - 1) {
        body.appendChild(el("code", null, p.slice(1, -1)));
      } else {
        body.appendChild(document.createTextNode(p));
      }
    });

    atualizarCountdown();
  }

  function atualizarCountdown() {
    var st = getQuotaAtual();
    var reset = st.resetTime || "20:00";
    var partes = reset.split(":");
    var h = parseInt(partes[0], 10);
    var m = parseInt(partes[1], 10);
    if (isNaN(h) || isNaN(m)) {
      $("quotaCountdown").textContent = "--:--:--";
      return;
    }
    var agora = new Date();
    var alvo = new Date(agora);
    alvo.setHours(h, m, 0, 0);
    if (alvo <= agora) {
      alvo.setDate(alvo.getDate() + 1);
    }
    var diff = Math.max(0, Math.floor((alvo - agora) / 1000));
    var hh = String(Math.floor(diff / 3600)).padStart(2, "0");
    var mm = String(Math.floor((diff % 3600) / 60)).padStart(2, "0");
    var ss = String(diff % 60).padStart(2, "0");
    $("quotaCountdown").textContent = "Renova em " + hh + "h " + mm + "m " + ss + "s";
  }

  $("quotaEcoSelect").addEventListener("change", function () {
    quotaEcoAtivo = this.value;
    try { localStorage.setItem(KEYS.QUOTA_ECO, quotaEcoAtivo); } catch (e) {}
    $("quotaPrintStatus").textContent = "";
    renderQuota();
  });

  $("btnComoChecar").addEventListener("click", function () {
    var body = $("comoChecarBody");
    var abrir = body.hidden;
    body.hidden = !abrir;
    $("btnComoChecar").setAttribute("aria-expanded", abrir ? "true" : "false");
    $("comoChecarSeta").textContent = abrir ? "▴" : "▾";
  });

  function setConsumo(novoValor) {
    var st = getQuotaAtual();
    st.consumed = Math.max(0, Math.min(100, Math.round(Number(novoValor) || 0)));
    salvarQuotas();
    renderQuota();
  }

  document.querySelectorAll("[data-peso]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var delta = parseInt(btn.getAttribute("data-peso"), 10) || 0;
      var st = getQuotaAtual();
      setConsumo((Number(st.consumed) || 0) + delta);
    });
  });

  $("quotaRange").addEventListener("input", function () {
    setConsumo(this.value);
  });

  $("quotaNum").addEventListener("input", function () {
    if (this.value === "") return;
    setConsumo(this.value);
  });

  $("quotaResetInput").addEventListener("change", function () {
    var st = getQuotaAtual();
    st.resetTime = this.value || "20:00";
    salvarQuotas();
    renderQuota();
  });

  $("btnResetQuota").addEventListener("click", function () {
    setConsumo(0);
    $("quotaPrintStatus").className = "tatico-feedback ok";
    $("quotaPrintStatus").textContent = "Cota zerada para a nova sessão.";
  });

  // Leitura de Print de Cota via Gemini 2.5 Flash
  $("quotaPrintInput").addEventListener("change", function () {
    var file = this.files && this.files[0] ? this.files[0] : null;
    this.value = "";
    if (!file) return;

    var st = $("quotaPrintStatus");
    st.className = "tatico-feedback";

    var key = lerApiKey();
    if (!key) {
      st.textContent = "Configure sua Gemini API Key gratuita na engrenagem acima para ler prints automaticamente, ou use o ajuste manual abaixo.";
      return;
    }

    st.textContent = "Lendo print com Gemini Flash...";
    var reader = new FileReader();
    reader.onload = function () {
      var dataUrl = String(reader.result || "");
      var base64 = dataUrl.split(",")[1] || "";
      var mime = file.type || "image/png";
      if (!base64) {
        st.textContent = "Não foi possível ler a imagem selecionada.";
        return;
      }

      var promptPrint = [
        "Analise este print de uso/cota de uma ferramenta de IA.",
        "Extraia:",
        "1) A porcentagem JÁ CONSUMIDA (0 a 100). Atenção: se o print mostrar porcentagem RESTANTE (ex: '80% remaining' ou '80% left'), converta para consumido (100 - 80 = 20).",
        "2) O horário de renovação/reset no formato 24h HH:MM, se visível (caso contrário null).",
        'Responda APENAS com JSON válido neste formato exato: {"consumedPercent": 25, "resetTime": "20:00"}'
      ].join("\n");

      chamarGeminiFlash(key, [
        { text: promptPrint },
        { inline_data: { mime_type: mime, data: base64 } }
      ]).then(function (resp) {
        var limpo = resp.replace(/```json|```/gi, "").trim();
        var match = limpo.match(/\{[\s\S]*\}/);
        if (!match) throw new Error("Não consegui interpretar o print.");
        var parsed = JSON.parse(match[0]);
        if (typeof parsed.consumedPercent !== "number" || isNaN(parsed.consumedPercent)) {
          throw new Error("Percentual não encontrado no print.");
        }
        var cur = getQuotaAtual();
        cur.consumed = Math.max(0, Math.min(100, Math.round(parsed.consumedPercent)));
        if (parsed.resetTime && /^\d{1,2}:\d{2}$/.test(parsed.resetTime)) {
          var p = parsed.resetTime.split(":");
          cur.resetTime = p[0].padStart(2, "0") + ":" + p[1];
        }
        salvarQuotas();
        renderQuota();
        st.className = "tatico-feedback ok";
        st.textContent = "Print lido! Consumo atualizado para " + cur.consumed + "%.";
      }).catch(function (err) {
        st.textContent = "Erro ao ler print: " + (err.message || "tente outro print ou ajuste manualmente.");
      });
    };
    reader.readAsDataURL(file);
  });

  // ===== ABA 3: MANUAL TATICO =====
  var manualComandos = D.tacticalManual || [];
  var filtroManualAtivo = "Todos";
  var categoriasManual = ["Todos", "Anthropic / Claude", "OpenAI / ChatGPT", "Google / AI Studio", "Microsoft / Copilot", "Meta AI"];

  function renderFiltrosManual() {
    var box = $("manualFiltros");
    box.textContent = "";
    categoriasManual.forEach(function (cat) {
      var b = el("button", "manual-filtro" + (cat === filtroManualAtivo ? " ativo" : ""), cat);
      b.type = "button";
      b.onclick = function () {
        filtroManualAtivo = cat;
        renderFiltrosManual();
        renderManual();
      };
      box.appendChild(b);
    });
  }

  function renderManual() {
    var lista = $("manualLista");
    lista.textContent = "";
    var q = ($("manualBusca").value || "").trim().toLowerCase();

    var filtrados = manualComandos.filter(function (item) {
      if (filtroManualAtivo !== "Todos" && item.eco !== filtroManualAtivo) return false;
      if (!q) return true;
      return item.cmd.toLowerCase().indexOf(q) !== -1 ||
        item.desc.toLowerCase().indexOf(q) !== -1 ||
        item.eco.toLowerCase().indexOf(q) !== -1;
    });

    if (!filtrados.length) {
      lista.appendChild(el("div", "notas-vazio", "Nenhum comando encontrado para esta busca."));
      return;
    }

    filtrados.forEach(function (item) {
      var card = el("div", "manual-card");
      var topo = el("div", "manual-card-topo");
      topo.appendChild(el("span", "manual-eco-tag", item.eco));

      var cp = el("button", "tatico-mini-btn", "Copiar");
      cp.type = "button";
      cp.onclick = function () {
        copiar(item.cmd).then(function (ok) {
          if (ok) {
            cp.textContent = "Copiado!";
            cp.classList.add("ok");
            setTimeout(function () {
              cp.textContent = "Copiar";
              cp.classList.remove("ok");
            }, 1600);
          }
        });
      };
      topo.appendChild(cp);

      card.appendChild(topo);
      card.appendChild(el("code", "manual-cmd", item.cmd));
      card.appendChild(el("p", "manual-desc", item.desc));
      lista.appendChild(card);
    });
  }

  $("manualBusca").addEventListener("input", renderManual);

  // Inicializacao
  atualizarStatusApi();
  renderNotas();
  popularQuotaSelect();
  renderQuota();
  renderFiltrosManual();
  renderManual();
  setInterval(atualizarCountdown, 1000);
})();
