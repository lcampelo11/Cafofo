/* CAFOFO - DADOS EDITAVEIS MULTI-ECOSSISTEMA
   Tudo que muda com o tempo (ecossistemas, nomes, links, descricoes, icones) fica AQUI.
   Para atualizar ou adicionar modulos, mexa so neste arquivo. */
window.CAFOFO = {
  // Cole aqui o link da sua pasta de imagens no Google Drive (opcional).
  // Se ficar vazio, o botao abre o Drive normal.
  driveFolderUrl: "",
  driveUrl: "https://drive.google.com",
  defaultEcosystem: "google",

  ecosystems: [
    {
      id: "google",
      nome: "Google",
      chatNome: "Gemini",
      chatUrl: "https://gemini.google.com/",
      placeholder: "Ex.: colocar um aquário nessa sala",
      padraoPorque: "Não reconheci o pedido. O Gemini é o chat geral e costuma resolver.",
      iconLogo: "icons/gemini-color.svg",
      iconSvg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L14.6 9.4L22 12L14.6 14.6L12 22L9.4 14.6L2 12L9.4 9.4L12 2Z" fill="url(#gEco)"/><defs><linearGradient id="gEco" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse"><stop stop-color="#4285F4"/><stop offset="0.5" stop-color="#A855F7"/><stop offset="1" stop-color="#EA4335"/></linearGradient></defs></svg>',
      modules: [
        {
          id: "imagem",
          logo: "icons/nanobanana-color.svg",
          icone: "🖼️",
          ferr: "Nano Banana",
          titulo: "Criar ou editar imagem",
          desc: "Cria e edita imagens e fotos com o Nano Banana",
          url: "https://gemini.google.com/app",
          porque: "Imagens e edição de fotos (Nano Banana) ficam dentro do app Gemini.",
          kw: ["imag", "foto", "logo", "desenh", "render", "planta", "layout", "ilustr", "design", "aquario", "retrato", "arte", "figura", "editar foto", "tirar fundo", "colocar"]
        },
        {
          id: "video",
          logo: "icons/flow.png",
          icone: "🎬",
          ferr: "Google Flow",
          titulo: "Criar vídeo",
          desc: "Cria vídeos e imagens (Veo)",
          url: "https://labs.google/fx/tools/flow",
          porque: "Vídeos são feitos no Google Flow.",
          kw: ["video", "film", "clipe", "animac", "animar", "veo", "cena", "reels", "shorts"]
        },
        {
          id: "musica",
          logo: "icons/flowmusic.png",
          icone: "🎵",
          ferr: "Flow Music",
          titulo: "Criar música",
          desc: "Cria músicas com letra e voz",
          url: "https://flowmusic.app",
          porque: "Músicas com letra e voz são feitas no Flow Music.",
          kw: ["music", "cancao", "trilha", "jingle", "melodia", "cantar", "beat"]
        },
        {
          id: "estudar",
          logo: "icons/notebooklm.png",
          icone: "📚",
          ferr: "Gemini Notebook",
          titulo: "Estudar ou resumir PDF",
          desc: "Lê seus PDFs e fontes: resumo, mapa mental e podcast",
          url: "https://notebook.google.com",
          porque: "O Gemini Notebook lê os seus arquivos e gera resumo, mapa mental e podcast.",
          kw: ["pdf", "estud", "resum", "livro", "artigo", "apostila", "podcast", "mapa mental", "fonte", "prova", "aula", "ebook"]
        },
        {
          id: "pesquisa",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" stroke="#4285F4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 2V8H20" stroke="#4285F4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="11.5" cy="14.5" r="2.5" stroke="#A855F7" stroke-width="2"/><path d="M13.5 16.5L15.5 18.5" stroke="#A855F7" stroke-width="2" stroke-linecap="round"/></svg>',
          icone: "🔎",
          ferr: "DEEP RESEARCH",
          titulo: "Pesquisa profunda",
          desc: "Deep Research: relatórios com várias fontes",
          url: "https://gemini.google.com/",
          porque: "A Deep Research do Gemini monta relatórios com várias fontes.",
          kw: ["pesquis", "relatorio", "comparar", "mercado", "concorrente", "analise", "tendenc", "existe algum"]
        },
        {
          id: "aistudio",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 9L4 12L8 15" stroke="#4285F4" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 9L20 12L16 15" stroke="#34A853" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 4L13.3 8.7L18 10L13.3 11.3L12 16L10.7 11.3L6 10L10.7 8.7L12 4Z" fill="#FBBC05"/></svg>',
          icone: "💻",
          ferr: "GOOGLE AI STUDIO",
          titulo: "Criar site, app ou SaaS",
          desc: "Ambiente de desenvolvimento e prototipagem rápida de apps com IA",
          url: "https://aistudio.google.com/",
          porque: "O Google AI Studio prototipa sites, apps e SaaS completos com IA rapidamente.",
          kw: ["codig", "program", "site", "aplicativo", "app ", "saas", "prototip", "python", "script", "landing", "backend", "pagina web", "html", "sistema"]
        },
        {
          id: "texto",
          logo: "icons/googledocs.svg",
          icone: "📝",
          ferr: "Google Docs",
          titulo: "Escrever documento",
          desc: "Escrever textos com ajuda do Gemini",
          url: "https://docs.google.com/document/u/0/",
          porque: "O Google Docs tem o Gemini dentro para escrever e revisar.",
          kw: ["documento", "carta", "redigir", "redacao", "contrato", "ata", "oficio", "curriculo"]
        },
        {
          id: "planilha",
          logo: "icons/googlesheets.svg",
          icone: "📊",
          ferr: "Google Planilhas",
          titulo: "Planilha ou tabela",
          desc: "Tabelas e análise de dados",
          url: "https://docs.google.com/spreadsheets/u/0/",
          porque: "No Planilhas você organiza e analisa dados.",
          kw: ["planilha", "excel", "tabela", "orcamento", "controle de"]
        },
        {
          id: "email",
          logo: "icons/gmail.svg",
          icone: "✉️",
          ferr: "Gmail",
          titulo: "E-mail",
          desc: "Ler, resumir e redigir e-mails",
          url: "https://mail.google.com",
          porque: "O Gmail tem o Gemini para resumir e escrever e-mails.",
          kw: ["email", "e-mail", "gmail", "responder", "mensagem"]
        },
        {
          id: "traduzir",
          logo: "icons/googletranslate.svg",
          icone: "🌐",
          ferr: "Google Tradutor",
          titulo: "Traduzir",
          desc: "Tradução de textos",
          url: "https://translate.google.com",
          porque: "O Google Tradutor traduz na hora.",
          kw: ["traduz", "traduc", "idioma", "ingles", "espanhol", "frances"]
        },
        {
          id: "arquivos",
          logo: "icons/googledrive.svg",
          icone: "🗂️",
          ferr: "Google Drive",
          titulo: "Meus arquivos",
          desc: "Seus arquivos na nuvem",
          url: "https://drive.google.com",
          porque: "Seus arquivos ficam no Google Drive.",
          kw: ["drive", "arquivo", "nuvem", "pasta"]
        },
        {
          id: "vids",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="5" width="15" height="14" rx="2.5" fill="#9333EA"/><path d="M17 10L22 7V17L17 14V10Z" fill="#C084FC"/><path d="M8 9.5L12.5 12L8 14.5V9.5Z" fill="#FFFFFF"/></svg>',
          icone: "🎥",
          ferr: "GOOGLE VIDS",
          titulo: "Criar vídeo narrado",
          desc: "Edita e monta vídeos com IA, roteiro e narração",
          url: "https://vids.google.com/",
          porque: "O Google Vids cria roteiro, narração e monta vídeos com IA.",
          kw: ["vids", "narrad", "narracao", "roteiro", "video institucional", "apresentacao em video"]
        },
        {
          id: "slides",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 2H14L19 7V20C19 21.1 18.1 22 17 22H6C4.9 22 4 21.1 4 20V4C4 2.9 4.9 2 6 2Z" fill="#F4B400"/><rect x="7" y="11" width="9" height="6" rx="1" stroke="#FFFFFF" stroke-width="1.8"/></svg>',
          icone: "📽️",
          ferr: "GOOGLE SLIDES",
          titulo: "Criar apresentação",
          desc: "Monta slides e apresentações com ajuda do Gemini",
          url: "https://slides.google.com/",
          porque: "O Google Slides cria e organiza apresentações com o Gemini.",
          kw: ["slide", "apresentac", "powerpoint", "ppt", "deck", "palestra"]
        },
        {
          id: "photos",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 12V4C14.8 4 17 6.2 17 9C17 10.7 15.7 12 14 12H12Z" fill="#EA4335"/><path d="M12 12H20C20 14.8 17.8 17 15 17C13.3 17 12 15.7 12 14V12Z" fill="#4285F4"/><path d="M12 12V20C9.2 20 7 17.8 7 15C7 13.3 8.3 12 10 12H12Z" fill="#34A853"/><path d="M12 12H4C4 9.2 6.2 7 9 7C10.7 7 12 8.3 12 10V12Z" fill="#FBBC05"/></svg>',
          icone: "✨",
          ferr: "GOOGLE PHOTOS",
          titulo: "Editar foto com IA",
          desc: "Remix, estilos e transformação de foto em vídeo",
          url: "https://photos.google.com/",
          porque: "O Google Photos oferece Remix, estilos e criação a partir das suas fotos.",
          kw: ["photos", "remix", "estilo", "galeria", "foto em video", "album"]
        },
        {
          id: "gems",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 3H18L22 9L12 21L2 9L6 3Z" fill="#06B6D4" fill-opacity="0.2" stroke="#22D3EE" stroke-width="2" stroke-linejoin="round"/><path d="M2 9H22M12 21L8 9L12 3L16 9L12 21Z" stroke="#38BDF8" stroke-width="1.6" stroke-linejoin="round"/></svg>',
          icone: "💎",
          ferr: "GEMS",
          titulo: "Criar assistente próprio",
          desc: "Robôs personalizados para tarefas repetitivas",
          url: "https://gemini.google.com/gems",
          porque: "Nos Gems você cria assistentes sob medida para tarefas recorrentes.",
          kw: ["gem", "assistente", "robo", "personalizad", "bot", "agente"]
        },
        {
          id: "stitch",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="3" stroke="#EC4899" stroke-width="2"/><path d="M3 9H21M9 9V21" stroke="#F472B6" stroke-width="2"/><circle cx="15" cy="15" r="2" fill="#38BDF8"/></svg>',
          icone: "📐",
          ferr: "GOOGLE STITCH",
          titulo: "Desenhar interface (UI)",
          desc: "Cria layouts de telas, apps e sites em segundos",
          url: "https://stitch.withgoogle.com/",
          porque: "O Google Stitch gera layouts e interfaces de telas rapidamente.",
          kw: ["stitch", "interface", "ui", "ux", "tela", "wireframe", "mockup", "layout de app"]
        },
        {
          id: "mixboard",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="8" height="10" rx="2" fill="#F97316"/><rect x="13" y="3" width="8" height="6" rx="2" fill="#3B82F6"/><rect x="13" y="11" width="8" height="10" rx="2" fill="#10B981"/><rect x="3" y="15" width="8" height="6" rx="2" fill="#EAB308"/></svg>',
          icone: "🧩",
          ferr: "MIXBOARD",
          titulo: "Mural de ideias",
          desc: "Organiza referências visuais, textos e imagens com IA",
          url: "https://labs.google/mixboard",
          porque: "O Mixboard ajuda a montar murais visuais e explorar referências com IA.",
          kw: ["mixboard", "mural", "moodboard", "referencia", "brainstorm", "painel"]
        },
        {
          id: "antigravity",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3L20 19H16.2L14.4 15H9.6L7.8 19H4L12 3Z" fill="#6366F1"/><path d="M10.7 12H13.3L12 9.1L10.7 12Z" fill="#FFFFFF"/><circle cx="19" cy="6" r="2" fill="#34D399"/></svg>',
          icone: "🚀",
          ferr: "GOOGLE ANTIGRAVITY",
          titulo: "IDE com agentes de IA",
          desc: "Editor de código completo com agentes autônomos",
          url: "https://antigravity.google/",
          porque: "O Google Antigravity oferece um editor completo com agentes autônomos.",
          kw: ["antigravity", "ide", "editor de codigo", "autonomo", "agentes", "vscode"]
        }
      ]
    },

    {
      id: "anthropic",
      nome: "Anthropic (Claude)",
      chatNome: "Claude",
      chatUrl: "https://claude.ai/",
      placeholder: "Ex.: analisar um PDF ou criar um app no Claude",
      padraoPorque: "O Claude é o chat principal da Anthropic para conversa, análise e escrita.",
      iconLogo: "icons/claude-color.svg",
      iconSvg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2V22M3.3 7L20.7 17M20.7 7L3.3 17" stroke="#D97757" stroke-width="2.4" stroke-linecap="round"/><circle cx="12" cy="12" r="2.2" fill="#FDBA74"/></svg>',
      modules: [
        {
          id: "claude-chat",
          logo: "icons/claude-color.svg",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2V22M2 12H22M4.9 4.9L19.1 19.1M19.1 4.9L4.9 19.1" stroke="#D97757" stroke-width="2.4" stroke-linecap="round"/><circle cx="12" cy="12" r="3" fill="#18181B" stroke="#D97757" stroke-width="2"/></svg>',
          icone: "💬",
          ferr: "CLAUDE CHAT",
          titulo: "Conversar e analisar",
          desc: "Chat principal, análise de PDFs e escrita avançada",
          url: "https://claude.ai/new",
          porque: "O Claude Chat é ideal para conversas longas, análise de PDFs e escrita natural.",
          kw: ["convers", "analis", "pdf", "resum", "escrev", "texto", "explic", "chat"]
        },
        {
          id: "claude-artifacts",
          logo: "icons/anthropic-D97757.svg",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="4" width="18" height="16" rx="3" stroke="#D97757" stroke-width="2"/><path d="M3 9H21" stroke="#D97757" stroke-width="2"/><path d="M10 13L8 15L10 17M14 13L16 15L14 17" stroke="#F59E0B" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
          icone: "🧩",
          ferr: "CLAUDE ARTIFACTS",
          titulo: "Criar app ou interface",
          desc: "Gera aplicações interativas e previews ao vivo",
          url: "https://claude.ai/",
          porque: "Os Artifacts do Claude geram interfaces e apps interativos com preview imediato.",
          kw: ["app", "interface", "artifact", "preview", "site", "interativ", "dashboard", "componente"]
        },
        {
          id: "claude-code",
          logo: "icons/claude-color.svg",
          badge: ">_",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="4" width="20" height="16" rx="3" fill="#27272A" stroke="#D97757" stroke-width="2"/><path d="M7 9L10.5 12L7 15" stroke="#D97757" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M13 15H17.5" stroke="#FBBF24" stroke-width="2.2" stroke-linecap="round"/></svg>',
          icone: "⌨️",
          ferr: "CLAUDE CODE",
          titulo: "Agente de programação",
          desc: "Codificação autônoma na web, terminal e GitHub",
          url: "https://claude.ai/code",
          porque: "O Claude Code atua como agente autônomo para programar e revisar repositórios.",
          kw: ["codig", "program", "agente", "terminal", "github", "repo", "bug", "refator", "script"]
        },
        {
          id: "claude-projects",
          logo: "icons/anthropic-D97757.svg",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 7C3 5.9 3.9 5 5 5H9.5L11.5 7H19C20.1 7 21 7.9 21 9V18C21 19.1 20.1 20 19 20H5C3.9 20 3 19.1 3 18V7Z" fill="#D97757" fill-opacity="0.25" stroke="#D97757" stroke-width="2" stroke-linejoin="round"/><path d="M8 13H16M8 16H13" stroke="#FDBA74" stroke-width="1.8" stroke-linecap="round"/></svg>',
          icone: "📁",
          ferr: "CLAUDE PROJECTS",
          titulo: "Base de conhecimento",
          desc: "Workspaces com documentos e instruções fixas",
          url: "https://claude.ai/projects",
          porque: "No Claude Projects você organiza documentos e instruções permanentes por projeto.",
          kw: ["projeto", "base", "conhecimento", "workspace", "documento", "instruc", "pasta"]
        },
        {
          id: "anthropic-console",
          logo: "icons/anthropic-F59E0B.svg",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3L20 20H16.2L14.5 16H9.5L7.8 20H4L12 3Z" fill="#D97757"/><path d="M10.6 13H13.4L12 9.5L10.6 13Z" fill="#18181B"/></svg>',
          icone: "🛠️",
          ferr: "ANTHROPIC CONSOLE",
          titulo: "Workbench e Prompts",
          desc: "Testes avançados de modelos e gerador de prompts",
          url: "https://console.anthropic.com/",
          porque: "O Anthropic Console permite testar prompts, parâmetros e APIs no Workbench.",
          kw: ["prompt", "workbench", "api", "modelo", "test", "console", "sistema"]
        }
      ]
    },

    {
      id: "openai",
      nome: "OpenAI (ChatGPT)",
      chatNome: "ChatGPT",
      chatUrl: "https://chatgpt.com/",
      placeholder: "Ex.: criar um vídeo no Sora ou revisar código no ChatGPT",
      padraoPorque: "O ChatGPT é o assistente principal da OpenAI para chat, voz e tarefas gerais.",
      iconLogo: "icons/openai-10A37F.svg",
      iconSvg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="8.5" stroke="#10A37F" stroke-width="2"/><path d="M12 3.5V12L19.4 16.2M12 12L4.6 16.2M7.5 6.2L16.5 17.8" stroke="#34D399" stroke-width="1.6" stroke-linecap="round"/></svg>',
      modules: [
        {
          id: "chatgpt",
          logo: "icons/openai-10A37F.svg",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9" stroke="#10A37F" stroke-width="2"/><path d="M12 6.5C15 6.5 17.5 9 17.5 12C17.5 15 15 17.5 12 17.5C9 17.5 6.5 15 6.5 12" stroke="#10A37F" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="12" r="2.5" fill="#10A37F"/></svg>',
          icone: "💚",
          ferr: "CHATGPT",
          titulo: "Chat e Voz",
          desc: "Assistente principal com modo de voz e memória",
          url: "https://chatgpt.com/",
          porque: "O ChatGPT reúne chat, modo de voz em tempo real e memória entre conversas.",
          kw: ["chat", "voz", "convers", "pergunt", "explic", "memoria", "falar"]
        },
        {
          id: "chatgpt-canvas",
          logo: "icons/openai-34D399.svg",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="3" stroke="#10A37F" stroke-width="2"/><path d="M12 3V21" stroke="#10A37F" stroke-width="2"/><path d="M6 8H9M6 12H9M15 9L17 11L15 13" stroke="#34D399" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
          icone: "📝",
          ferr: "CHATGPT CANVAS",
          titulo: "Editor de texto e código",
          desc: "Espaço colaborativo para escrever e programar",
          url: "https://chatgpt.com/",
          porque: "O Canvas do ChatGPT permite editar textos e códigos lado a lado com a IA.",
          kw: ["canvas", "editor", "texto", "escrev", "revis", "documento", "artigo"]
        },
        {
          id: "openai-codex",
          logo: "icons/openai-6EE7B7.svg",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><polygon points="12,2 21,7 21,17 12,22 3,17 3,7" stroke="#10A37F" stroke-width="2" fill="#10A37F" fill-opacity="0.15"/><path d="M9.5 9.5L7 12L9.5 14.5M14.5 9.5L17 12L14.5 14.5" stroke="#6EE7B7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
          icone: "⚙️",
          ferr: "OPENAI CODEX",
          titulo: "Agente de engenharia",
          desc: "Agente autônomo conectado ao GitHub para código",
          url: "https://chatgpt.com/codex",
          porque: "O OpenAI Codex executa tarefas de engenharia e PRs diretamente com seu GitHub.",
          kw: ["codex", "engenharia", "github", "repo", "agente", "program", "codig", "app"]
        },
        {
          id: "sora",
          logo: "icons/sora-color.svg",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="5" width="20" height="14" rx="3" fill="url(#sora_grad)"/><path d="M10 9L15.5 12L10 15V9Z" fill="#FFFFFF"/><defs><linearGradient id="sora_grad" x1="2" y1="5" x2="22" y2="19" gradientUnits="userSpaceOnUse"><stop stop-color="#0EA5E9"/><stop offset="1" stop-color="#8B5CF6"/></linearGradient></defs></svg>',
          icone: "🎬",
          ferr: "SORA",
          titulo: "Criar vídeo com IA",
          desc: "Geração e edição cinematográfica de vídeos",
          url: "https://sora.chatgpt.com/",
          porque: "O Sora gera e edita vídeos cinematográficos a partir de texto ou imagem.",
          kw: ["video", "sora", "film", "cena", "animac", "clipe", "reels"]
        },
        {
          id: "openai-research",
          logo: "icons/openai-0EA5E9.svg",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="7" stroke="#10A37F" stroke-width="2.2"/><path d="M16.5 16.5L21 21" stroke="#34D399" stroke-width="2.4" stroke-linecap="round"/><path d="M8 11H14M11 8V14" stroke="#6EE7B7" stroke-width="1.8" stroke-linecap="round"/></svg>',
          icone: "🔎",
          ferr: "DEEP RESEARCH",
          titulo: "Pesquisa profunda",
          desc: "Relatórios detalhados navegando na web",
          url: "https://chatgpt.com/",
          porque: "A Deep Research do ChatGPT navega na web e entrega relatórios completos.",
          kw: ["pesquis", "relatorio", "analis", "web", "mercado", "compar", "estudo"]
        },
        {
          id: "explore-gpts",
          logo: "icons/openai-A855F7.svg",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9" stroke="#10A37F" stroke-width="2"/><polygon points="15.5,8.5 13.5,13.5 8.5,15.5 10.5,10.5" fill="#10A37F"/></svg>',
          icone: "🤖",
          ferr: "EXPLORE GPTS",
          titulo: "Assistentes prontos",
          desc: "Loja e criador de GPTs personalizados",
          url: "https://chatgpt.com/gpts",
          porque: "Na loja de GPTs você encontra e cria assistentes personalizados prontos para uso.",
          kw: ["gpt", "assistente", "bot", "loja", "personalizad", "pronto"]
        }
      ]
    },

    {
      id: "microsoft",
      nome: "Microsoft (Copilot)",
      chatNome: "Copilot",
      chatUrl: "https://copilot.microsoft.com/",
      placeholder: "Ex.: criar uma imagem no Designer ou organizar ideias no Copilot",
      padraoPorque: "O Microsoft Copilot é o assistente principal para chat, pesquisa web e textos.",
      iconLogo: "icons/copilot-color.svg",
      iconSvg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="8.5" height="8.5" rx="1.5" fill="#F25022"/><rect x="12.5" y="3" width="8.5" height="8.5" rx="1.5" fill="#7FBA00"/><rect x="3" y="12.5" width="8.5" height="8.5" rx="1.5" fill="#00A4EF"/><rect x="12.5" y="12.5" width="8.5" height="8.5" rx="1.5" fill="#FFB900"/></svg>',
      modules: [
        {
          id: "copilot",
          logo: "icons/copilot-color.svg",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 15C4.3 15 3 13.7 3 12C3 10.3 4.3 9 6 9H12C13.7 9 15 10.3 15 12" stroke="#38BDF8" stroke-width="2.6" stroke-linecap="round"/><path d="M18 9C19.7 9 21 10.3 21 12C21 13.7 19.7 15 18 15H12C10.3 15 9 13.7 9 12" stroke="#F472B6" stroke-width="2.6" stroke-linecap="round"/></svg>',
          icone: "✨",
          ferr: "COPILOT",
          titulo: "Assistente diário",
          desc: "Chat, pesquisa web e criação rápida de textos",
          url: "https://copilot.microsoft.com/",
          porque: "O Copilot ajuda nas buscas da web, respostas rápidas e redação de textos.",
          kw: ["assistente", "chat", "pesquis", "texto", "pergunt", "convers", "resum"]
        },
        {
          id: "copilot-designer",
          logo: "icons/copilot-color.svg",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="4" stroke="#EC4899" stroke-width="2"/><circle cx="8.5" cy="8.5" r="2" fill="#FBBF24"/><path d="M4 17L9.5 12L13.5 15.5L16.5 13L20 17" stroke="#38BDF8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
          icone: "🎨",
          ferr: "COPILOT DESIGNER",
          titulo: "Criar imagem e arte",
          desc: "Geração de imagens e designs com IA",
          url: "https://designer.microsoft.com/",
          porque: "O Microsoft Designer gera imagens, artes e layouts prontos com IA.",
          kw: ["imag", "arte", "design", "foto", "logo", "ilustr", "desenh", "banner"]
        },
        {
          id: "copilot-pages",
          logo: "icons/microsoft-38BDF8.svg",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 2H14L19 7V20C19 21.1 18.1 22 17 22H6C4.9 22 4 21.1 4 20V4C4 2.9 4.9 2 6 2Z" fill="#0284C7" fill-opacity="0.25" stroke="#38BDF8" stroke-width="2"/><path d="M8 12H15M8 16H13" stroke="#7DD3FC" stroke-width="2" stroke-linecap="round"/></svg>',
          icone: "📄",
          ferr: "COPILOT PAGES",
          titulo: "Canvas colaborativo",
          desc: "Quadro para organizar ideias e documentos",
          url: "https://copilot.microsoft.com/",
          porque: "O Copilot Pages transforma respostas do chat em documentos colaborativos.",
          kw: ["canvas", "pagina", "quadro", "ideia", "documento", "organiz", "nota"]
        },
        {
          id: "github-copilot",
          logo: "icons/githubcopilot-FFFFFF.svg",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="6" width="18" height="12" rx="4" fill="#1E293B" stroke="#818CF8" stroke-width="2"/><circle cx="9" cy="12" r="1.8" fill="#38BDF8"/><circle cx="15" cy="12" r="1.8" fill="#38BDF8"/><path d="M9 4V6M15 4V6" stroke="#818CF8" stroke-width="2" stroke-linecap="round"/></svg>',
          icone: "💻",
          ferr: "GITHUB COPILOT",
          titulo: "Agente de código",
          desc: "Programação assistida e agentes no GitHub",
          url: "https://github.com/copilot",
          porque: "O GitHub Copilot oferece autocompletar e agentes autônomos de código.",
          kw: ["codig", "github", "agente", "program", "repo", "ide", "app", "site"]
        }
      ]
    },

    {
      id: "meta",
      nome: "Meta (Meta AI)",
      chatNome: "Meta AI",
      chatUrl: "https://www.meta.ai/",
      placeholder: "Ex.: gerar imagem no Imagine ou criar personagem IA",
      padraoPorque: "A Meta AI é o assistente principal da Meta para conversa e geração de imagens.",
      iconLogo: "icons/meta-color.svg",
      iconSvg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 7C5 7 3 9.2 3 12C3 14.8 5 17 7.5 17C10.2 17 11.4 13.8 12 12C12.6 10.2 13.8 7 16.5 7C19 7 21 9.2 21 12C21 14.8 19 17 16.5 17C13.8 17 12.6 13.8 12 12C11.4 10.2 10.2 7 7.5 7Z" stroke="#0082FB" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      modules: [
        {
          id: "meta-ai",
          logo: "icons/meta-color.svg",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 8C5 8 3 10 3 12.5C3 15 5 17 7.5 17C9.5 17 11 15.2 12 12.5C13 9.8 14.5 8 16.5 8C19 8 21 10 21 12.5C21 15 19 17 16.5 17C14.5 17 13 15.2 12 12.5C11 9.8 9.5 8 7.5 8Z" stroke="#0668E1" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
          icone: "🔵",
          ferr: "META AI",
          titulo: "Chat e Imagine",
          desc: "Assistente geral e geração de imagens em tempo real",
          url: "https://www.meta.ai/",
          porque: "A Meta AI conversa e cria imagens instantâneas com o comando Imagine.",
          kw: ["chat", "imagine", "imag", "foto", "pergunt", "convers", "arte"]
        },
        {
          id: "meta-ai-studio",
          logo: "icons/instagram-E1306C.svg",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="9" r="4" stroke="#E1306C" stroke-width="2"/><path d="M5 20C5 16.7 8.1 14 12 14C15.9 14 19 16.7 19 20" stroke="#833AB4" stroke-width="2" stroke-linecap="round"/><path d="M19 4L19.7 5.8L21.5 6.5L19.7 7.2L19 9L18.3 7.2L16.5 6.5L18.3 5.8L19 4Z" fill="#FCAF45"/></svg>',
          icone: "🎭",
          ferr: "META AI STUDIO",
          titulo: "Criar personagem IA",
          desc: "Cria assistentes personalizados para Instagram e WhatsApp",
          url: "https://aistudio.instagram.com/",
          porque: "No Meta AI Studio você cria personagens e assistentes para Instagram e WhatsApp.",
          kw: ["personagem", "instagram", "assistente", "bot", "avatar", "studio", "criador"]
        },
        {
          id: "whatsapp-business",
          logo: "icons/whatsapp-25D366.svg",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3C7 3 3 6.8 3 11.5C3 13.3 3.6 15 4.7 16.4L3.5 21L8.3 19.7C9.4 20.2 10.7 20.5 12 20.5C17 20.5 21 16.7 21 12C21 7.3 17 3 12 3Z" fill="#25D366" fill-opacity="0.2" stroke="#25D366" stroke-width="2" stroke-linejoin="round"/><path d="M9.5 9.5C9.5 9.5 10.5 12.5 14.5 14.5" stroke="#25D366" stroke-width="2.2" stroke-linecap="round"/></svg>',
          icone: "💬",
          ferr: "WHATSAPP BUSINESS",
          titulo: "Automação e Disparos",
          desc: "Gestão de mensagens automatizadas e atendimento no WhatsApp",
          url: "https://business.whatsapp.com/",
          porque: "O WhatsApp Business centraliza automação de atendimento e mensagens.",
          kw: ["whatsapp", "zap", "dispar", "atendimento", "mensagem", "automac", "cliente"]
        },
        {
          id: "meta-business-suite",
          logo: "icons/meta-0668E1.svg",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="4" width="18" height="16" rx="3" stroke="#0668E1" stroke-width="2"/><path d="M7 15V12M12 15V9M17 15V11" stroke="#38BDF8" stroke-width="2.4" stroke-linecap="round"/></svg>',
          icone: "📣",
          ferr: "META BUSINESS SUITE",
          titulo: "Central de campanhas",
          desc: "Automação de respostas, anúncios e mensagens integradas",
          url: "https://business.facebook.com/",
          porque: "A Meta Business Suite gerencia anúncios, mensagens e automações integradas.",
          kw: ["campanha", "anuncio", "ads", "facebook", "meta business", "resposta", "marketing"]
        },
        {
          id: "meta-llama",
          logo: "icons/meta-color.svg",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 3V10L5 14V20H19V14L16 10V3L13.5 6H10.5L8 3Z" fill="#0668E1" fill-opacity="0.2" stroke="#3B82F6" stroke-width="2" stroke-linejoin="round"/><circle cx="10" cy="13" r="1.2" fill="#93C5FD"/><circle cx="14" cy="13" r="1.2" fill="#93C5FD"/></svg>',
          icone: "🦙",
          ferr: "META LLAMA",
          titulo: "Modelos abertos",
          desc: "Documentação e ecossistema de desenvolvedores Llama",
          url: "https://www.llama.com/",
          porque: "O portal Llama reúne os modelos abertos da Meta, pesos e documentação técnica.",
          kw: ["llama", "modelo", "abert", "open source", "dev", "documentac", "api", "codig"]
        }
      ]
    }
  ]
};
