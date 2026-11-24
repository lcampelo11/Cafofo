/* CAFOFO - DADOS EDITAVEIS MULTI-ECOSSISTEMA
   Catalogo completo de ecossistemas de IA, ferramentas, fichas tecnicas, cotas e manual tatico. */
window.CAFOFO = {
  driveFolderUrl: "",
  driveUrl: "https://drive.google.com",
  defaultEcosystem: "all",

  categories: [
    "Todos",
    "Chat & Pesquisa",
    "Código & Dev",
    "Automação & Agentes",
    "Imagem, Vídeo & Áudio",
    "Produtividade & Office"
  ],

  planOptions: ["Grátis", "Assinante", "API"],

  ecosystems: [
    {
      id: "google",
      nome: "Google AI & Workspace",
      curto: "Google",
      chatNome: "Gemini",
      chatUrl: "https://gemini.google.com",
      placeholder: "Ex.: prototipar um app, resumir PDF ou criar vídeo no ecossistema Google",
      padraoPorque: "O Gemini é o assistente principal do Google para tarefas multimodais, pesquisa e criação.",
      accent: "#38bdf8",
      iconLogo: "icons/gemini-color.svg",
      iconSvg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L14.6 9.4L22 12L14.6 14.6L12 22L9.4 14.6L2 12L9.4 9.4L12 2Z" fill="url(#gEco)"/><defs><linearGradient id="gEco" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse"><stop stop-color="#4285F4"/><stop offset="0.5" stop-color="#A855F7"/><stop offset="1" stop-color="#EA4335"/></linearGradient></defs></svg>',
      modules: [
        {
          id: "gemini",
          logo: "icons/gemini-color.svg",
          icone: "✨",
          ferr: "Gemini",
          titulo: "Gemini",
          type: "Chat",
          category: "Chat & Pesquisa",
          accessTag: "Web",
          defaultPlan: "Grátis",
          desc: "Assistente principal multimodal, Deep Research e Gems personalizados.",
          url: "https://gemini.google.com",
          porque: "O Gemini reúne chat multimodal, Deep Research e Gems personalizados.",
          kw: ["gemini", "chat", "pesquis", "gem", "assistente", "multimodal", "deep research", "convers"],
          details: {
            fullDescription: "Assistente principal multimodal do Google com raciocínio avançado, Deep Research para relatórios completos com fontes e Gems personalizados para rotinas recorrentes.",
            examples: [
              "Enviar fotos, PDFs ou códigos para análise e explicação passo a passo",
              "Rodar Deep Research para comparar mercados, fornecedores ou tecnologias",
              "Criar Gems sob medida com instruções fixas para trabalho e estudos"
            ],
            compatibility: "Funciona 100% no celular (app Gemini ou navegador) e no computador."
          }
        },
        {
          id: "google-ai-studio",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 9L4 12L8 15" stroke="#4285F4" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 9L20 12L16 15" stroke="#34A853" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 4L13.3 8.7L18 10L13.3 11.3L12 16L10.7 11.3L6 10L10.7 8.7L12 4Z" fill="#FBBC05"/></svg>',
          icone: "🧪",
          ferr: "Google AI Studio",
          titulo: "Google AI Studio",
          type: "Cloud/API",
          category: "Código & Dev",
          accessTag: "Cloud/API",
          defaultPlan: "Grátis",
          desc: "Ambiente de prototipagem, testes de modelos Gemini e App Builder.",
          url: "https://aistudio.google.com",
          porque: "O Google AI Studio permite prototipar apps, testar prompts e gerar chaves de API.",
          kw: ["aistudio", "ai studio", "api", "prototip", "app builder", "prompt", "gemini", "codigo", "saas"],
          details: {
            fullDescription: "Ambiente de desenvolvimento web do Google para testar modelos Gemini, ajustar System Instructions, gerar chaves gratuitas de API e construir aplicações completas no App Builder.",
            examples: [
              "Descrever um SaaS ou dashboard no App Builder e testar com preview ao vivo",
              "Validar prompts com saída em JSON estruturado e controle de parâmetros",
              "Gerar uma API Key gratuita para integrar o Gemini Flash em projetos"
            ],
            compatibility: "Acessível no celular, com melhor visualização em tela dividida no Desktop."
          }
        },
        {
          id: "notebooklm",
          logo: "icons/notebooklm.png",
          icone: "📚",
          ferr: "NotebookLM",
          titulo: "NotebookLM",
          type: "Pesquisa",
          category: "Chat & Pesquisa",
          accessTag: "Web",
          defaultPlan: "Grátis",
          desc: "Assistente de pesquisa baseado em fontes próprias, resumos e Audio Overviews.",
          url: "https://notebooklm.google.com",
          porque: "O NotebookLM responde estritamente com base nas suas fontes, PDFs e vídeos.",
          kw: ["notebooklm", "notebook", "pdf", "estud", "resum", "audio", "podcast", "fonte", "apostila"],
          details: {
            fullDescription: "Assistente de pesquisa e estudo ancorado exclusivamente nos documentos que você envia (PDFs, links, Google Docs, YouTube), gerando resumos com citações exatas, guias e Audio Overviews.",
            examples: [
              "Subir apostilas ou contratos extensos e consultar respostas com citação da página",
              "Gerar um Audio Overview (podcast em áudio) para revisar conteúdo em movimento",
              "Cruzar dezenas de artigos científicos em um único caderno de pesquisa"
            ],
            compatibility: "Funciona 100% no celular e no computador."
          }
        },
        {
          id: "google-flow-fx",
          logo: "icons/flow.png",
          icone: "🎬",
          ferr: "Google Flow / Labs FX",
          titulo: "Google Flow / Veo / Imagen (VideoFX & ImageFX)",
          type: "Vídeo",
          category: "Imagem, Vídeo & Áudio",
          accessTag: "Experimental",
          defaultPlan: "Grátis",
          desc: "Geração de vídeos, imagens e música com IA (Veo, Imagen, MusicFX).",
          url: "https://labs.google/fx",
          porque: "O Google Labs FX reúne VideoFX (Veo), ImageFX (Imagen), Flow e MusicFX.",
          kw: ["flow", "veo", "imagen", "videofx", "imagefx", "musicfx", "video", "musica", "cinema"],
          details: {
            fullDescription: "Suíte criativa do Google Labs reunindo Veo / Flow para vídeos cinematográficos, Imagen (ImageFX) para imagens fotorrealistas e MusicFX para criação musical experimental.",
            examples: [
              "Criar clipes cinematográficos com controle de câmera e continuidade no Flow/Veo",
              "Gerar fotografias e artes conceituais de alta definição no ImageFX",
              "Compor trilhas e batidas experimentais rapidamente com o MusicFX"
            ],
            compatibility: "Funciona no celular pelo navegador, com edição mais confortável em telas maiores."
          }
        },
        {
          id: "google-whisk",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="4" width="11" height="11" rx="2.5" stroke="#FBBC05" stroke-width="2"/><rect x="10" y="9" width="11" height="11" rx="2.5" fill="#0c0c10" stroke="#34A853" stroke-width="2"/><circle cx="15.5" cy="14.5" r="2" fill="#4285F4"/></svg>',
          icone: "🎨",
          ferr: "Google Whisk",
          titulo: "Google Whisk",
          type: "Imagem",
          category: "Imagem, Vídeo & Áudio",
          accessTag: "Experimental",
          defaultPlan: "Grátis",
          desc: "Remixagem visual de imagens usando referências de assunto, cena e estilo.",
          url: "https://labs.google/fx/tools/whisk",
          porque: "O Google Whisk combina assunto, cenário e estilo a partir de imagens de referência.",
          kw: ["whisk", "remix", "estilo", "cena", "assunto", "imagem", "referencia"],
          details: {
            fullDescription: "Ferramenta experimental de remixagem visual onde você fornece até três imagens (Assunto, Cena e Estilo) em vez de longos prompts, gerando combinações inéditas com Imagen.",
            examples: [
              "Colocar seu produto ou mascote em um cenário totalmente novo mantendo o visual",
              "Aplicar o estilo de uma ilustração ou pintura a uma foto real",
              "Explorar variações rápidas para campanhas, stickers e mockups"
            ],
            compatibility: "Funciona 100% no celular e no computador pelo navegador."
          }
        },
        {
          id: "google-stitch",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="3" stroke="#EC4899" stroke-width="2"/><path d="M3 9H21M9 9V21" stroke="#F472B6" stroke-width="2"/><circle cx="15" cy="15" r="2" fill="#38BDF8"/></svg>',
          icone: "📐",
          ferr: "Google Stitch",
          titulo: "Google Stitch",
          type: "UI/Código",
          category: "Código & Dev",
          accessTag: "Experimental",
          defaultPlan: "Grátis",
          desc: "Geração de interfaces UI e layouts front-end a partir de prompts.",
          url: "https://stitch.withgoogle.com",
          porque: "O Google Stitch gera layouts de UI e exporta código front-end ou Figma rapidamente.",
          kw: ["stitch", "ui", "ux", "interface", "layout", "tela", "frontend", "figma", "wireframe"],
          details: {
            fullDescription: "Ferramenta do Google Labs focada em design de interfaces (UI) que gera telas completas de web e mobile a partir de descrições ou rascunhos, com exportação para HTML/CSS e Figma.",
            examples: [
              "Gerar telas de aplicativo ou painel administrativo com hierarquia visual pronta",
              "Converter um esboço fotografado em interface editável moderna",
              "Exportar componentes front-end diretamente para o código ou Figma"
            ],
            compatibility: "Acessível no celular, mas ideal para operar em tela de computador (Desktop)."
          }
        },
        {
          id: "google-opal",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="7" cy="7" r="3" stroke="#38BDF8" stroke-width="2"/><circle cx="17" cy="17" r="3" stroke="#A855F7" stroke-width="2"/><circle cx="17" cy="7" r="2.5" stroke="#34D399" stroke-width="2"/><path d="M9.8 8.2L14.5 15.2M10 7H14.5" stroke="#94A3B8" stroke-width="1.8" stroke-linecap="round"/></svg>',
          icone: "🔗",
          ferr: "Google Opal",
          titulo: "Google Opal",
          type: "Automação",
          category: "Automação & Agentes",
          accessTag: "Experimental",
          defaultPlan: "Grátis",
          desc: "Construtor visual de automações e fluxos de trabalho conectados ao ecossistema Google.",
          url: "https://opal.withgoogle.com",
          porque: "O Google Opal cria fluxos visuais de automação com IA ligados aos serviços Google.",
          kw: ["opal", "automac", "fluxo", "workflow", "mini app", "conector", "google"],
          details: {
            fullDescription: "Construtor visual no-code do Google Labs para encadear prompts, ferramentas e etapas em mini aplicativos e fluxos de trabalho reutilizáveis.",
            examples: [
              "Montar um fluxo que lê um link, resume os pontos e gera uma arte ou relatório",
              "Encadear múltiplas chamadas de IA em etapas visuais sem escrever código",
              "Compartilhar mini apps de produtividade prontos com colegas por link"
            ],
            compatibility: "Funciona melhor no Desktop para montar nós e conexões visuais."
          }
        },
        {
          id: "google-idx-antigravity",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3L20 19H16.2L14.4 15H9.6L7.8 19H4L12 3Z" fill="#6366F1"/><path d="M10.7 12H13.3L12 9.1L10.7 12Z" fill="#FFFFFF"/><circle cx="19" cy="6" r="2" fill="#34D399"/></svg>',
          icone: "🚀",
          ferr: "AntiGravity / IDX",
          titulo: "Google AntiGravity / Firebase Studio (Project IDX)",
          type: "Código",
          category: "Código & Dev",
          accessTag: "Web",
          defaultPlan: "Grátis",
          desc: "Ambiente de desenvolvimento e vibe coding assistido por IA na nuvem.",
          url: "https://idx.google.com",
          porque: "O Firebase Studio (Project IDX) / AntiGravity oferece IDE completa com IA na nuvem.",
          kw: ["idx", "firebase studio", "antigravity", "vibe coding", "ide", "codigo", "editor", "dev"],
          desktopNotice: "Ambiente de desenvolvimento completo (IDE). No celular serve para consulta rápida; programar exige Desktop.",
          details: {
            fullDescription: "Workspace de desenvolvimento na nuvem da família Firebase Studio / Project IDX & AntiGravity com editor completo, terminal, emuladores, preview e agentes de IA para vibe coding full-stack.",
            examples: [
              "Criar aplicações web e backend completas direto no navegador com deploy no Firebase",
              "Usar assistência autônoma para gerar componentes, rotas e testes integrados",
              "Importar repositórios do GitHub e testar em ambiente pré-configurado"
            ],
            compatibility: "Requer Desktop ou tablet com teclado para edição confortável de código."
          }
        },
        {
          id: "google-labs",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 3H15M10 3V8.5L5.5 16.8C4.8 18.1 5.7 19.7 7.2 19.7H16.8C18.3 19.7 19.2 18.1 18.5 16.8L14 8.5V3" stroke="#38BDF8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.5 15H16.5" stroke="#34D399" stroke-width="2" stroke-linecap="round"/></svg>',
          icone: "🧬",
          ferr: "Google Labs",
          titulo: "Google Labs (Pomelli, Disco, Mixboard)",
          type: "Experimental",
          category: "Imagem, Vídeo & Áudio",
          accessTag: "Experimental",
          defaultPlan: "Grátis",
          desc: "Hub de ferramentas experimentais de branding, organização de abas e moodboards.",
          url: "https://labs.google",
          porque: "O Google Labs concentra experimentos como Pomelli, Disco e Mixboard.",
          kw: ["labs", "pomelli", "disco", "mixboard", "experimental", "moodboard", "branding"],
          details: {
            fullDescription: "Vitrine oficial dos experimentos de IA do Google, reunindo projetos como Pomelli (branding e campanhas), Disco (organização inteligente) e Mixboard (painéis e moodboards visuais).",
            examples: [
              "Explorar o Mixboard para montar murais de referências visuais com IA",
              "Testar ferramentas experimentais de marca e geração criativa antes do lançamento global",
              "Acompanhar novos protótipos do Google para produtividade, áudio e imagem"
            ],
            compatibility: "Funciona pelo navegador no celular e no computador (alguns experimentos funcionam melhor no Desktop)."
          }
        },
        {
          id: "vertex-ai",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><polygon points="12,3 21,8 21,16 12,21 3,16 3,8" stroke="#4285F4" stroke-width="2" fill="#4285F4" fill-opacity="0.14"/><path d="M12 12L21 8M12 12L3 8M12 12V21" stroke="#60A5FA" stroke-width="1.8"/></svg>',
          icone: "☁️",
          ferr: "Vertex AI",
          titulo: "Vertex AI (Google Cloud)",
          type: "Cloud/API",
          category: "Código & Dev",
          accessTag: "Cloud/API",
          defaultPlan: "API",
          desc: "Plataforma corporativa de modelos, deploy de agentes e APIs.",
          url: "https://console.cloud.google.com/vertex-ai",
          porque: "O Vertex AI oferece infraestrutura corporativa, Model Garden e deploy de agentes.",
          kw: ["vertex", "cloud", "gcp", "api", "deploy", "empresa", "modelos", "agent builder"],
          desktopNotice: "Console técnico do Google Cloud voltado para uso em computador (Desktop).",
          details: {
            fullDescription: "Plataforma de IA corporativa do Google Cloud com Model Garden (Gemini, Claude, Llama e modelos abertos), Agent Builder, fine-tuning, Vector Search e endpoints escaláveis.",
            examples: [
              "Implantar agentes corporativos conectados a bases de dados privadas com governança",
              "Fazer fine-tuning e avaliação em lote de modelos em escala de produção",
              "Gerenciar cotas, faturamento e segurança de APIs no Google Cloud"
            ],
            compatibility: "Console administrativo complexo voltado para Desktop."
          }
        },
        {
          id: "google-workspace-ai",
          logo: "icons/googledrive.svg",
          icone: "🗂️",
          ferr: "Google Workspace AI",
          titulo: "Google Workspace AI (Docs, Sheets, Drive, Gmail, Meet, Vids)",
          type: "Produtividade",
          category: "Produtividade & Office",
          accessTag: "Web",
          defaultPlan: "Assinante",
          desc: "Suíte de produtividade integrada com Gemini.",
          url: "https://workspace.google.com",
          porque: "O Google Workspace AI integra o Gemini no Docs, Sheets, Drive, Gmail, Meet e Vids.",
          kw: ["workspace", "docs", "sheets", "drive", "gmail", "meet", "vids", "produtividade", "office"],
          details: {
            fullDescription: "Suíte completa de produtividade do Google com o Gemini integrado nativamente para redigir no Docs, criar fórmulas no Sheets, resumir e-mails no Gmail, transcrever reuniões no Meet e montar vídeos no Vids.",
            examples: [
              "Gerar atas automáticas de reuniões no Google Meet com próximos passos",
              "Cruzar arquivos do Drive e responder perguntas direto no painel lateral",
              "Criar apresentações, planilhas e vídeos corporativos com assistência contínua"
            ],
            compatibility: "Funciona 100% no celular (apps oficiais) e no computador."
          }
        },
        {
          id: "google-jules",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="8.5" stroke="#A855F7" stroke-width="2"/><path d="M9 10L7 12L9 14M15 10L17 12L15 14M13 8.5L11 15.5" stroke="#38BDF8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
          icone: "🤖",
          ferr: "Google Jules",
          titulo: "Google Jules",
          type: "Agentes",
          category: "Automação & Agentes",
          accessTag: "Experimental",
          defaultPlan: "Grátis",
          desc: "Agente autônomo de engenharia de software para repositórios GitHub.",
          url: "https://jules.google.com",
          porque: "O Google Jules trabalha de forma assíncrona nos seus repositórios do GitHub.",
          kw: ["jules", "agente", "github", "repo", "engenharia", "bug", "pr", "autonomo"],
          desktopNotice: "Projetado para conectar repositórios GitHub e revisar diffs/PRs; melhor experiência no Desktop.",
          details: {
            fullDescription: "Agente assíncrono de programação do Google que clona seu repositório GitHub em VM segura, entende o código, cria planos, escreve correções/testes e abre Pull Requests.",
            examples: [
              "Delegar a correção de bugs e atualização de dependências em segundo plano",
              "Criar testes unitários para módulos existentes sem travar sua máquina local",
              "Revisar o plano de alterações passo a passo antes de aplicar o commit"
            ],
            compatibility: "Funciona melhor no Desktop para revisão de diffs e Pull Requests no GitHub."
          }
        },
        {
          id: "nano-banana",
          logo: "icons/nanobanana-color.svg",
          icone: "🖼️",
          ferr: "Nano Banana (Gemini)",
          titulo: "Nano Banana — Edição & Imagem",
          type: "Imagem",
          category: "Imagem, Vídeo & Áudio",
          accessTag: "Web",
          defaultPlan: "Grátis",
          desc: "Criação e edição fotorrealista de imagens integrada direto ao app Gemini.",
          url: "https://gemini.google.com/app",
          porque: "Edição de fotos e geração rápida de imagens com Nano Banana ficam no app Gemini.",
          kw: ["nano banana", "imagem", "foto", "editar", "logo", "tirar fundo", "aquario"],
          details: {
            fullDescription: "Modelo de imagem nativo no Gemini excelente para editar fotos reais preservando detalhes, inserir objetos e gerar artes ou logotipos sob comando conversacional.",
            examples: [
              "Alterar móveis, iluminação ou elementos específicos em uma foto real",
              "Gerar artes comerciais e mockups mantendo texto legível"
            ],
            compatibility: "Funciona 100% no celular e no computador."
          }
        },
        {
          id: "google-docs",
          logo: "icons/googledocs.svg",
          icone: "📝",
          ferr: "Google Docs",
          titulo: "Google Docs",
          type: "Produtividade",
          category: "Produtividade & Office",
          accessTag: "Web",
          defaultPlan: "Grátis",
          desc: "Editor de documentos na nuvem com assistência de escrita do Gemini.",
          url: "https://docs.google.com/document/u/0/",
          porque: "O Google Docs acelera criação, revisão e resumo de documentos com IA.",
          kw: ["docs", "documento", "carta", "contrato", "redigir", "texto"],
          details: {
            fullDescription: "Editor colaborativo de textos do Google com recursos de IA para rascunhar propostas, revisar tom, traduzir trechos e estruturar documentos.",
            examples: [
              "Criar contratos, atas de reunião e propostas em segundos",
              "Resumir documentos extensos em tópicos acionáveis"
            ],
            compatibility: "Funciona 100% no celular e no computador."
          }
        },
        {
          id: "google-sheets",
          logo: "icons/googlesheets.svg",
          icone: "📊",
          ferr: "Google Planilhas",
          titulo: "Google Planilhas",
          type: "Produtividade",
          category: "Produtividade & Office",
          accessTag: "Web",
          defaultPlan: "Grátis",
          desc: "Planilhas inteligentes para tabelas, fórmulas, gráficos e análise de dados.",
          url: "https://docs.google.com/spreadsheets/u/0/",
          porque: "O Google Planilhas organiza orçamentos, tabelas e análises com auxílio de fórmulas por IA.",
          kw: ["planilha", "sheets", "tabela", "excel", "orcamento", "dados"],
          details: {
            fullDescription: "Planilhas na nuvem com geração assistida de tabelas, criação automática de fórmulas complexas e gráficos dinâmicos.",
            examples: [
              "Montar controle financeiro ou de estoque descrevendo as colunas desejadas",
              "Descobrir fórmulas de PROCV/QUERY escrevendo em português"
            ],
            compatibility: "Funciona no celular e com recursos avançados no Desktop."
          }
        },
        {
          id: "gmail",
          logo: "icons/gmail.svg",
          icone: "✉️",
          ferr: "Gmail",
          titulo: "Gmail",
          type: "Produtividade",
          category: "Produtividade & Office",
          accessTag: "Web",
          defaultPlan: "Grátis",
          desc: "Caixa de entrada inteligente com resumo de conversas e redação assistida.",
          url: "https://mail.google.com",
          porque: "O Gmail resume threads longas e rascunha respostas profissionais com Gemini.",
          kw: ["gmail", "email", "e-mail", "mensagem", "responder"],
          details: {
            fullDescription: "Serviço de e-mail do Google com pesquisa inteligente, resumo automático de longas cadeias de mensagens e assistência para redigir respostas.",
            examples: [
              "Resumir uma conversa com dezenas de respostas antes de agir",
              "Gerar rascunhos formais ou diretos em segundos"
            ],
            compatibility: "Funciona 100% no celular e no computador."
          }
        }
      ]
    },

    {
      id: "microsoft",
      nome: "Microsoft AI & Power Platform",
      curto: "Microsoft",
      chatNome: "Microsoft Copilot",
      chatUrl: "https://copilot.microsoft.com",
      placeholder: "Ex.: automatizar fluxo no Power Automate, criar dashboard no Power BI ou código no GitHub",
      padraoPorque: "O Microsoft Copilot é a porta de entrada para chat, pesquisa web e suíte Microsoft.",
      accent: "#38bdf8",
      iconLogo: "icons/copilot-color.svg",
      iconSvg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="8.5" height="8.5" rx="1.5" fill="#F25022"/><rect x="12.5" y="3" width="8.5" height="8.5" rx="1.5" fill="#7FBA00"/><rect x="3" y="12.5" width="8.5" height="8.5" rx="1.5" fill="#00A4EF"/><rect x="12.5" y="12.5" width="8.5" height="8.5" rx="1.5" fill="#FFB900"/></svg>',
      modules: [
        {
          id: "ms-copilot",
          logo: "icons/copilot-color.svg",
          icone: "✨",
          ferr: "Microsoft Copilot",
          titulo: "Microsoft Copilot",
          type: "Chat",
          category: "Chat & Pesquisa",
          accessTag: "Web",
          defaultPlan: "Grátis",
          desc: "Assistente conversacional, pesquisa web e geração de imagens/textos.",
          url: "https://copilot.microsoft.com",
          porque: "O Microsoft Copilot integra conversa, pesquisa atualizada no Bing e criação de mídia.",
          kw: ["copilot", "chat", "bing", "pesquisa", "texto", "imagem", "voz"],
          details: {
            fullDescription: "Assistente conversacional da Microsoft conectado à web em tempo real para responder perguntas com fontes, resumir páginas, criar textos e gerar imagens.",
            examples: [
              "Pesquisar informações atuais com citações de fontes na web",
              "Usar o modo de voz para brainstorm rápido ou dúvidas diárias",
              "Criar rascunhos de textos e visuais rápidos sem custo inicial"
            ],
            compatibility: "Funciona 100% no celular (app Copilot ou navegador) e no computador."
          }
        },
        {
          id: "m365-copilot",
          logo: "icons/microsoft-38BDF8.svg",
          icone: "💼",
          ferr: "Microsoft 365 Copilot",
          titulo: "Microsoft 365 Copilot",
          type: "Office",
          category: "Produtividade & Office",
          accessTag: "Web",
          defaultPlan: "Assinante",
          desc: "Integração de IA no Word, Excel, PowerPoint, Outlook e Teams.",
          url: "https://m365.cloud.microsoft",
          porque: "O Microsoft 365 Copilot atua dentro de Word, Excel, PowerPoint, Outlook e Teams.",
          kw: ["365", "m365", "word", "excel", "powerpoint", "outlook", "teams", "office"],
          details: {
            fullDescription: "Central de produtividade da Microsoft com IA incorporada aos aplicativos Office (Word, Excel, PowerPoint, Outlook, Teams) conectada aos arquivos e reuniões da organização.",
            examples: [
              "Gerar apresentações completas no PowerPoint a partir de um documento Word",
              "Resumir reuniões do Teams com lista de tarefas e responsáveis",
              "Analisar tabelas e criar fórmulas avançadas direto no Excel"
            ],
            compatibility: "Funciona no celular e no computador (recursos completos de edição no Desktop)."
          }
        },
        {
          id: "power-automate",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 7H14L19 12L14 17H4L9 12L4 7Z" fill="#0066FF" fill-opacity="0.22" stroke="#3B82F6" stroke-width="2" stroke-linejoin="round"/><path d="M12 7L17 12L12 17" stroke="#60A5FA" stroke-width="2" stroke-linejoin="round"/></svg>',
          icone: "⚡",
          ferr: "Power Automate",
          titulo: "Power Automate",
          type: "Automação",
          category: "Automação & Agentes",
          accessTag: "Desktop",
          defaultPlan: "Assinante",
          desc: "Automação de fluxos de trabalho na nuvem e RPA (Desktop) entre aplicativos e serviços.",
          url: "https://make.powerautomate.com",
          porque: "O Power Automate cria fluxos automatizados na nuvem e robôs RPA no Desktop.",
          kw: ["power automate", "automate", "rpa", "fluxo", "workflow", "gatilho", "conector"],
          desktopNotice: "A construção de fluxos visuais complexos e RPA Desktop requer tela de computador.",
          details: {
            fullDescription: "Plataforma da Power Platform para criar automações conectando centenas de conectores (SharePoint, Teams, Outlook, APIs HTTP, SQL) e fluxos de RPA no Windows via Copilot.",
            examples: [
              "Salvar anexos de e-mails automaticamente no SharePoint e avisar no Teams",
              "Descrever em linguagem natural o fluxo desejado para o Copilot montar as etapas",
              "Automatizar rotinas repetitivas de sistemas legados com Power Automate Desktop"
            ],
            compatibility: "Criação e edição avançada recomendadas no Desktop; monitoramento via celular."
          }
        },
        {
          id: "copilot-studio",
          logo: "icons/copilot-color.svg",
          badge: "BOT",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="4" width="16" height="16" rx="4" stroke="#0EA5E9" stroke-width="2"/><circle cx="9.5" cy="11" r="1.5" fill="#38BDF8"/><circle cx="14.5" cy="11" r="1.5" fill="#38BDF8"/><path d="M9 15.5H15" stroke="#38BDF8" stroke-width="2" stroke-linecap="round"/></svg>',
          icone: "🤖",
          ferr: "Copilot Studio",
          titulo: "Copilot Studio",
          type: "Agentes",
          category: "Automação & Agentes",
          accessTag: "Web",
          defaultPlan: "Assinante",
          desc: "Criação de agentes autônomos e copilotos personalizados sem código.",
          url: "https://copilotstudio.microsoft.com",
          porque: "O Copilot Studio cria agentes autônomos e chatbots corporativos conectados a dados internos.",
          kw: ["copilot studio", "agente", "chatbot", "bot", "no-code", "atendimento", "rag"],
          desktopNotice: "O designer gráfico de tópicos, ações e conectores do Copilot Studio exige Desktop.",
          details: {
            fullDescription: "Plataforma low-code/no-code para construir agentes autônomos capazes de consultar bases de conhecimento, acionar fluxos e responder no Teams, WhatsApp ou site próprio.",
            examples: [
              "Criar um agente de suporte interno treinado em manuais de RH e TI",
              "Configurar gatilhos autônomos que processam chamados e enviam notificações",
              "Conectar APIs empresariais e conectores da Power Platform ao agente"
            ],
            compatibility: "Ideal para configuração em computador (Desktop)."
          }
        },
        {
          id: "power-apps",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3L20 9.5L12 16L4 9.5L12 3Z" fill="#A855F7" fill-opacity="0.25" stroke="#C084FC" stroke-width="2" stroke-linejoin="round"/><path d="M7 14.5L12 18.5L17 14.5" stroke="#E879F9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
          icone: "📱",
          ferr: "Power Apps",
          titulo: "Power Apps",
          type: "Código",
          category: "Produtividade & Office",
          accessTag: "Web",
          defaultPlan: "Assinante",
          desc: "Desenvolvimento rápido de aplicativos de negócios com suporte de IA.",
          url: "https://make.powerapps.com",
          porque: "O Power Apps gera aplicativos internos e formulários de negócios assistidos pelo Copilot.",
          kw: ["power apps", "powerapps", "app", "negocio", "formulario", "dataverse", "low-code"],
          desktopNotice: "O estúdio de criação de telas (Canvas/Model-driven) exige navegador Desktop.",
          details: {
            fullDescription: "Plataforma low-code para criar aplicativos web e mobile empresariais conectados ao Dataverse, SharePoint, Excel e SQL, com geração inicial de telas e tabelas por IA.",
            examples: [
              "Descrever um app de controle de patrimônio e gerar tabela + tela inicial com Copilot",
              "Criar aplicativos de vistoria em campo funcionando no celular da equipe",
              "Integrar aprovações e notificações direto com o Power Automate"
            ],
            compatibility: "Criação no Desktop; aplicativos publicados rodam 100% no celular."
          }
        },
        {
          id: "power-bi",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="13" width="4" height="7" rx="1" fill="#F59E0B"/><rect x="10" y="9" width="4" height="11" rx="1" fill="#FBBF24"/><rect x="16" y="4" width="4" height="16" rx="1" fill="#FDE047"/></svg>',
          icone: "📈",
          ferr: "Power BI",
          titulo: "Power BI",
          type: "Dados/BI",
          category: "Produtividade & Office",
          accessTag: "Web",
          defaultPlan: "Assinante",
          desc: "Análise de dados, dashboards interativos e insights com Copilot.",
          url: "https://app.powerbi.com",
          porque: "O Power BI transforma bases de dados em dashboards executivos e resumos via Copilot.",
          kw: ["power bi", "powerbi", "bi", "dashboard", "dados", "grafico", "dax", "relatorio"],
          desktopNotice: "Visualização funciona no celular, mas modelagem e criação de relatórios funcionam melhor no Desktop.",
          details: {
            fullDescription: "Plataforma líder de Business Intelligence para conectar fontes de dados, criar dashboards interativos, gerar medidas DAX e pedir resumos executivos automáticos ao Copilot.",
            examples: [
              "Acompanhar KPIs de vendas, metas e finanças em painéis interativos",
              "Pedir ao Copilot para explicar variações e gerar páginas de relatório",
              "Compartilhar indicadores atualizados automaticamente com a diretoria"
            ],
            compatibility: "Dashboards acessíveis no celular; criação e modelagem avançada no Desktop."
          }
        },
        {
          id: "power-pages",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="4" width="18" height="16" rx="3" stroke="#60A5FA" stroke-width="2"/><path d="M3 9H21M9 9V20" stroke="#818CF8" stroke-width="2"/></svg>',
          icone: "🌐",
          ferr: "Power Pages",
          titulo: "Power Pages",
          type: "Web/Sites",
          category: "Código & Dev",
          accessTag: "Web",
          defaultPlan: "Assinante",
          desc: "Criação de sites corporativos seguros e orientados a dados.",
          url: "https://make.powerpages.microsoft.com",
          porque: "O Power Pages cria portais web externos seguros conectados ao Dataverse.",
          kw: ["power pages", "powerpages", "portal", "site", "corporativo", "formulario"],
          desktopNotice: "O estúdio de criação e configuração de permissões do Power Pages exige Desktop.",
          details: {
            fullDescription: "Construtor empresarial low-code para criar portais web externos seguros com autenticação, formulários integrados ao Dataverse e geração de páginas e temas via Copilot.",
            examples: [
              "Criar um portal de clientes ou fornecedores para envio de solicitações",
              "Gerar seções web, formulários e textos iniciais conversando com o Copilot",
              "Publicar portais com controle granular de acesso e segurança"
            ],
            compatibility: "Design Studio voltado para uso em Desktop."
          }
        },
        {
          id: "azure-ai-foundry",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 3L4 19H10.5L13 14L15.5 19H20L13 3Z" fill="#0284C7" fill-opacity="0.28" stroke="#38BDF8" stroke-width="2" stroke-linejoin="round"/></svg>',
          icone: "☁️",
          ferr: "Azure AI Foundry",
          titulo: "Azure AI Foundry (AI Studio)",
          type: "Cloud/API",
          category: "Código & Dev",
          accessTag: "Cloud/API",
          defaultPlan: "API",
          desc: "Plataforma para construir, testar e implantar modelos e agentes em escala.",
          url: "https://ai.azure.com",
          porque: "O Azure AI Foundry centraliza modelos OpenAI/abertos, avaliação, RAG e deploy em produção.",
          kw: ["azure", "foundry", "ai studio", "api", "rag", "deploy", "modelos", "cloud"],
          desktopNotice: "Console técnico de engenharia e cloud voltado para uso no computador (Desktop).",
          details: {
            fullDescription: "Plataforma unificada da Microsoft Azure para acessar catálogo de modelos (GPT, DeepSeek, Llama, Mistral), construir pipelines RAG, avaliar respostas e implantar agentes em escala.",
            examples: [
              "Testar e comparar vários modelos lado a lado em Playgrounds dedicados",
              "Indexar documentos corporativos para criar sistemas RAG privados e auditáveis",
              "Gerenciar chaves, limites de taxa (TPM) e monitoramento em produção"
            ],
            compatibility: "Interface técnica recomendada exclusivamente no Desktop."
          }
        },
        {
          id: "github-copilot",
          logo: "icons/githubcopilot-FFFFFF.svg",
          icone: "💻",
          ferr: "GitHub Copilot",
          titulo: "GitHub Copilot & Workspace",
          type: "Código",
          category: "Código & Dev",
          accessTag: "Desktop",
          defaultPlan: "Assinante",
          desc: "Assistente de programação, agentes de código e revisão de PRs.",
          url: "https://github.com/features/copilot",
          porque: "O GitHub Copilot acelera codificação, revisão de Pull Requests e agentes no repositório.",
          kw: ["github", "copilot", "codigo", "programar", "pr", "pull request", "workspace", "vscode"],
          desktopNotice: "Voltado para repositórios e IDEs (VS Code/JetBrains); experiência completa no Desktop.",
          details: {
            fullDescription: "Par de programação com IA integrado ao GitHub, VS Code e CLI, com agentes que planejam implementações, editam múltiplos arquivos, revisam PRs e resolvem issues.",
            examples: [
              "Atribuir uma Issue ao agente Copilot para abrir um Pull Request pronto",
              "Usar @workspace no chat da IDE para entender e refatorar todo o projeto",
              "Gerar testes automatizados e correções rápidas direto no editor"
            ],
            compatibility: "Uso completo em Desktop/IDE; acompanhamento de PRs disponível no celular."
          }
        },
        {
          id: "ms-designer",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="4" stroke="#EC4899" stroke-width="2"/><circle cx="8.5" cy="8.5" r="2" fill="#FBBF24"/><path d="M4 17L9.5 12L13.5 15.5L16.5 13L20 17" stroke="#38BDF8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
          icone: "🎨",
          ferr: "Microsoft Designer",
          titulo: "Microsoft Designer",
          type: "Imagem",
          category: "Imagem, Vídeo & Áudio",
          accessTag: "Web",
          defaultPlan: "Grátis",
          desc: "Design gráfico, edição de imagens e criação de artes com IA.",
          url: "https://designer.microsoft.com",
          porque: "O Microsoft Designer gera artes, banners, figurinhas e edita fotos rapidamente.",
          kw: ["designer", "imagem", "arte", "banner", "post", "convite", "remover fundo"],
          details: {
            fullDescription: "Estúdio de design gráfico gratuito com IA para gerar imagens, criar posts prontos para redes sociais, remover fundos, apagar objetos e editar layouts em templates.",
            examples: [
              "Criar artes promocionais, convites e capas personalizadas em minutos",
              "Apagar objetos indesejados ou trocar o fundo de fotos de produtos",
              "Gerar avatares, figurinhas e ícones sob medida por texto"
            ],
            compatibility: "Funciona 100% no celular e no computador."
          }
        },
        {
          id: "ms-clipchamp",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="5" width="18" height="14" rx="3" fill="#7C3AED" fill-opacity="0.22" stroke="#A78BFA" stroke-width="2"/><path d="M10 9.5L15.5 12L10 14.5V9.5Z" fill="#E9D5FF"/></svg>',
          icone: "🎞️",
          ferr: "Microsoft Clipchamp",
          titulo: "Microsoft Clipchamp",
          type: "Vídeo",
          category: "Imagem, Vídeo & Áudio",
          accessTag: "Web",
          defaultPlan: "Grátis",
          desc: "Editor de vídeo com recursos de narração e legendas por IA.",
          url: "https://app.clipchamp.com",
          porque: "O Clipchamp edita vídeos online com legendas automáticas, cortes e narração por IA.",
          kw: ["clipchamp", "video", "legenda", "narracao", "cortar", "editar video", "reels"],
          details: {
            fullDescription: "Editor de vídeo da Microsoft rodando direto no navegador com remoção automática de silêncios, legendas em vários idiomas, conversão de texto em fala (TTS) e biblioteca de efeitos.",
            examples: [
              "Gerar legendas automáticas precisas e estilizadas para vídeos curtos",
              "Criar narrações realistas em português a partir de um roteiro escrito",
              "Remover pausas longas e respiradas de gravações com um clique"
            ],
            compatibility: "Editor de linha do tempo mais confortável em telas de computador (Desktop)."
          }
        },
        {
          id: "ms-loop",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 17C4.8 17 3 15.2 3 13C3 10.8 4.8 9 7 9H11C13.8 9 16 6.8 16 4C16 4 21 6.2 21 12C21 16.5 17.5 20 13 20H7V17Z" fill="#0EA5E9" fill-opacity="0.22" stroke="#38BDF8" stroke-width="2" stroke-linejoin="round"/></svg>',
          icone: "🔄",
          ferr: "Microsoft Loop",
          titulo: "Microsoft Loop",
          type: "Produtividade",
          category: "Produtividade & Office",
          accessTag: "Web",
          defaultPlan: "Assinante",
          desc: "Workspace colaborativo com blocos sincronizados e Copilot integrado.",
          url: "https://loop.microsoft.com",
          porque: "O Microsoft Loop organiza projetos e notas em blocos vivos sincronizados entre Teams e Outlook.",
          kw: ["loop", "workspace", "notas", "blocos", "colaboracao", "wiki", "projeto"],
          details: {
            fullDescription: "Aplicativo de workspace flexível da Microsoft onde tabelas, listas de tarefas e notas vivem como componentes sincronizados em tempo real no Teams, Outlook e Word, com assistência do Copilot.",
            examples: [
              "Centralizar pautas de projetos, tarefas e decisões da equipe em páginas vivas",
              "Usar o Copilot para estruturar checklists, planos e resumos colaborativos",
              "Compartilhar blocos de tabela que atualizam simultaneamente no Outlook e Teams"
            ],
            compatibility: "Funciona 100% no celular (app Loop) e no computador."
          }
        }
      ]
    },

    {
      id: "openai",
      nome: "OpenAI",
      curto: "OpenAI",
      chatNome: "ChatGPT",
      chatUrl: "https://chatgpt.com",
      placeholder: "Ex.: usar Canvas, Codex, Sora, Operator ou Playground da OpenAI",
      padraoPorque: "O ChatGPT é o assistente principal da OpenAI para chat, voz, Canvas e pesquisa.",
      accent: "#10a37f",
      iconLogo: "icons/openai-10A37F.svg",
      iconSvg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="8.5" stroke="#10A37F" stroke-width="2"/><path d="M12 3.5V12L19.4 16.2M12 12L4.6 16.2M7.5 6.2L16.5 17.8" stroke="#34D399" stroke-width="1.6" stroke-linecap="round"/></svg>',
      modules: [
        {
          id: "chatgpt",
          logo: "icons/openai-10A37F.svg",
          icone: "💚",
          ferr: "ChatGPT",
          titulo: "ChatGPT",
          type: "Chat",
          category: "Chat & Pesquisa",
          accessTag: "Web",
          defaultPlan: "Grátis",
          desc: "Interface principal com suporte a modelos GPT, raciocínio avançado, Canvas, Deep Research e Dots (agentes contínuos).",
          url: "https://chatgpt.com",
          porque: "O ChatGPT reúne modelos GPT, raciocínio, Canvas, Deep Research, voz e agentes contínuos.",
          kw: ["chatgpt", "gpt", "chat", "canvas", "deep research", "dots", "voz", "imagem"],
          details: {
            fullDescription: "Interface principal da OpenAI unificando conversa multimodal, raciocínio avançado, editor Canvas, pesquisa profunda (Deep Research), criação de imagens, modo de voz e agentes contínuos.",
            examples: [
              "Elaborar relatórios completos com Deep Research e editar textos lado a lado no Canvas",
              "Analisar planilhas, PDFs e capturas de tela em segundos",
              "Conversar por voz em tempo real para praticar idiomas ou estruturar ideias"
            ],
            compatibility: "Funciona 100% no celular (app ChatGPT ou navegador) e no computador."
          }
        },
        {
          id: "openai-codex",
          logo: "icons/openai-6EE7B7.svg",
          icone: "⚙️",
          ferr: "OpenAI Codex",
          titulo: "OpenAI Codex (Web / CLI)",
          type: "Código",
          category: "Código & Dev",
          accessTag: "Web",
          defaultPlan: "Assinante",
          desc: "Agente de engenharia de software para escrita, testes e execução de código em repositórios.",
          url: "https://chatgpt.com/codex",
          porque: "O OpenAI Codex escreve, executa testes e propõe alterações direto em repositórios GitHub.",
          kw: ["codex", "codigo", "cli", "github", "repo", "engenharia", "teste", "agente"],
          desktopNotice: "No celular permite acompanhar e disparar tarefas; revisão detalhada de diffs é melhor no Desktop.",
          details: {
            fullDescription: "Agente de engenharia de software da OpenAI (Web e CLI) que opera em sandbox isolado conectado ao seu repositório para implementar features, corrigir bugs e rodar testes.",
            examples: [
              "Executar tarefas de refatoração ou correção de bugs em paralelo na nuvem",
              "Rodar suítes de testes automaticamente e validar o resultado antes do PR",
              "Usar o Codex CLI no terminal local para acelerar o desenvolvimento"
            ],
            compatibility: "Controle remoto funciona no celular; revisão de código completa exige Desktop."
          }
        },
        {
          id: "sora",
          logo: "icons/sora-color.svg",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9" fill="#0EA5E9" fill-opacity="0.18" stroke="#38BDF8" stroke-width="2"/><path d="M10 9L16 12L10 15V9Z" fill="#F8FAFC"/></svg>',
          icone: "🎥",
          ferr: "Sora",
          titulo: "Sora",
          type: "Vídeo",
          category: "Imagem, Vídeo & Áudio",
          accessTag: "Web",
          defaultPlan: "Assinante",
          desc: "Geração e edição cinematográfica de vídeos a partir de texto e imagem.",
          url: "https://sora.com",
          porque: "O Sora gera e remixa vídeos cinematográficos com física realista a partir de texto ou imagem.",
          kw: ["sora", "video", "cinema", "animac", "cena", "storyboard", "remix"],
          details: {
            fullDescription: "Plataforma de geração e edição de vídeos da OpenAI com storyboard, remix de cenas, extensão de clipes e controle de formato a partir de prompts de texto ou imagens.",
            examples: [
              "Criar cenas realistas ou estilizadas em vídeo a partir de um roteiro em texto",
              "Animar uma fotografia ou conceito visual usando Storyboard",
              "Estender ou remixar trechos de vídeos gerados com novos estilos"
            ],
            compatibility: "Funciona no celular e no computador pelo navegador."
          }
        },
        {
          id: "openai-platform",
          logo: "icons/openai-0EA5E9.svg",
          icone: "🛠️",
          ferr: "OpenAI Platform",
          titulo: "OpenAI Platform / Playground",
          type: "Cloud/API",
          category: "Código & Dev",
          accessTag: "Cloud/API",
          defaultPlan: "API",
          desc: "Console de desenvolvedor, testes de API, fine-tuning e AgentKit.",
          url: "https://platform.openai.com/playground",
          porque: "O Playground e Console da OpenAI gerenciam APIs, AgentKit, avaliações e fine-tuning.",
          kw: ["playground", "platform", "api", "fine-tuning", "agentkit", "console", "tokens"],
          desktopNotice: "Console técnico de desenvolvedor com melhor usabilidade no computador (Desktop).",
          details: {
            fullDescription: "Portal de engenharia da OpenAI com Playground interativo para testar Responses API, construir agentes no AgentKit, gerenciar chaves, custos, logs e treinamentos (fine-tuning).",
            examples: [
              "Testar prompts de sistema, ferramentas (function calling) e esquemas JSON",
              "Acompanhar consumo exato de tokens, limites e faturamento da API",
              "Treinar modelos especializados com datasets próprios via fine-tuning"
            ],
            compatibility: "Voltado para uso em computador (Desktop)."
          }
        },
        {
          id: "openai-operator",
          logo: "icons/openai-A855F7.svg",
          icone: "🕹️",
          ferr: "OpenAI Operator",
          titulo: "OpenAI Operator / Computer Use",
          type: "Agentes",
          category: "Automação & Agentes",
          accessTag: "Experimental",
          defaultPlan: "Assinante",
          desc: "Agente autônomo capaz de navegar e executar tarefas diretamente em interfaces web.",
          url: "https://operator.chatgpt.com",
          porque: "O Operator navega, clica e preenche formulários web de forma autônoma por você.",
          kw: ["operator", "computer use", "navegar", "automac", "agente", "web", "clicar"],
          details: {
            fullDescription: "Agente autônomo com navegador próprio (Computer-Using Agent) que enxerga a tela, move o cursor, digita e executa tarefas reais em sites pedindo confirmação em ações sensíveis.",
            examples: [
              "Pesquisar passagens, reservas ou comparar preços preenchendo filtros em sites",
              "Preencher formulários web repetitivos a partir de uma lista de dados",
              "Automatizar rotinas em portais que não oferecem API aberta"
            ],
            compatibility: "Acompanhamento visual da sessão web funciona melhor em telas maiores."
          }
        },
        {
          id: "gpt-store",
          logo: "icons/openai-34D399.svg",
          icone: "🧭",
          ferr: "GPT Store",
          titulo: "GPT Store (Explore GPTs)",
          type: "Chat",
          category: "Chat & Pesquisa",
          accessTag: "Web",
          defaultPlan: "Grátis",
          desc: "Diretório de assistentes personalizados e especializados.",
          url: "https://chatgpt.com/gpts",
          porque: "Na GPT Store você encontra milhares de assistentes especializados prontos ou cria o seu.",
          kw: ["gpt store", "explore gpts", "gpts", "assistente", "bot", "loja", "especializado"],
          details: {
            fullDescription: "Catálogo oficial de GPTs personalizados criados para tarefas específicas (diagramas, código, finanças, idiomas, design), além do editor sem código para criar o seu próprio GPT.",
            examples: [
              "Usar GPTs especialistas em Canva, diagramas Mermaid ou análise de artigos",
              "Criar um GPT personalizado com PDFs e instruções da sua empresa",
              "Compartilhar assistentes prontos com sua equipe ou clientes via link"
            ],
            compatibility: "Funciona 100% no celular e no computador."
          }
        },
        {
          id: "openai-whisper-audio",
          logo: "icons/openai-10A37F.svg",
          badge: "WAV",
          icone: "🎙️",
          ferr: "Whisper / Audio API",
          titulo: "Whisper / Audio API",
          type: "Áudio",
          category: "Imagem, Vídeo & Áudio",
          accessTag: "Cloud/API",
          defaultPlan: "API",
          desc: "Transcrição de áudio e síntese de voz em tempo real.",
          url: "https://platform.openai.com/docs/guides/speech-to-text",
          porque: "A família Whisper e Audio API entrega transcrição precisa e voz em tempo real.",
          kw: ["whisper", "audio", "transcricao", "voz", "speech", "tts", "stt", "legenda"],
          details: {
            fullDescription: "Documentação e APIs de áudio da OpenAI cobrindo Speech-to-Text (Whisper / gpt-4o-transcribe), Text-to-Speech expressivo e Realtime API de baixa latência.",
            examples: [
              "Transcrever gravações, reuniões e podcasts em português com alta precisão",
              "Converter textos em narração natural via endpoint de síntese de voz",
              "Construir atendentes por voz em tempo real usando a Realtime API"
            ],
            compatibility: "Documentação acessível no celular; integração voltada para desenvolvimento."
          }
        }
      ]
    },

    {
      id: "anthropic",
      nome: "Anthropic (Claude)",
      curto: "Anthropic",
      chatNome: "Claude",
      chatUrl: "https://claude.ai",
      placeholder: "Ex.: criar Artifact, configurar MCP ou rodar Claude Code no terminal",
      padraoPorque: "O Claude é o assistente principal da Anthropic para análise profunda, escrita e código.",
      accent: "#d97757",
      iconLogo: "icons/claude-color.svg",
      iconSvg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2V22M3.3 7L20.7 17M20.7 7L3.3 17" stroke="#D97757" stroke-width="2.4" stroke-linecap="round"/><circle cx="12" cy="12" r="2.2" fill="#FDBA74"/></svg>',
      modules: [
        {
          id: "claude-web",
          logo: "icons/claude-color.svg",
          icone: "💬",
          ferr: "Claude",
          titulo: "Claude Web / Desktop",
          type: "Chat",
          category: "Chat & Pesquisa",
          accessTag: "Web",
          defaultPlan: "Grátis",
          desc: "Assistente principal com suporte a Artifacts, Projects, análise de documentos e raciocínio estendido.",
          url: "https://claude.ai",
          porque: "O Claude combina escrita natural, Projects, Artifacts e raciocínio estendido.",
          kw: ["claude", "chat", "projects", "extended thinking", "pdf", "texto", "analise"],
          details: {
            fullDescription: "Assistente conversacional da Anthropic (Web, Desktop e Mobile) conhecido pela clareza de escrita, janela de contexto extensa para PDFs e códigos, Projects organizados e raciocínio estendido.",
            examples: [
              "Analisar contratos extensos, bases de código ou pesquisas mantendo precisão",
              "Organizar bases de conhecimento permanentes dentro do Claude Projects",
              "Ativar Extended Thinking para resolver problemas complexos de arquitetura e lógica"
            ],
            compatibility: "Funciona 100% no celular (app Claude) e no computador (Web/Desktop)."
          }
        },
        {
          id: "claude-code",
          logo: "icons/claude-color.svg",
          badge: ">_",
          icone: "⌨️",
          ferr: "Claude Code",
          titulo: "Claude Code",
          type: "Código",
          category: "Código & Dev",
          accessTag: "Desktop",
          defaultPlan: "API",
          desc: "Agente de programação autônomo direto no terminal/IDE para edição multifile e Git.",
          url: "https://docs.anthropic.com/en/docs/agents-and-tools/claude-code/overview",
          porque: "O Claude Code opera diretamente no terminal/IDE editando múltiplos arquivos e Git.",
          kw: ["claude code", "terminal", "cli", "ide", "git", "codigo", "multifile", "agente"],
          desktopNotice: "O Claude Code é uma ferramenta de terminal/IDE para execução em computador (Desktop).",
          details: {
            fullDescription: "Agente agêntico de programação da Anthropic que vive no seu terminal e IDE, entende todo o repositório, edita múltiplos arquivos, executa testes, resolve conflitos e faz commits Git.",
            examples: [
              "Implementar funcionalidades inteiras do planejamento aos testes pelo terminal",
              "Investigar e corrigir erros de compilação ou regressões automaticamente",
              "Usar comandos como /compact, /plan, /review e /security-review"
            ],
            compatibility: "Exige computador (macOS, Linux ou Windows) com terminal/IDE."
          }
        },
        {
          id: "anthropic-console",
          logo: "icons/anthropic-F59E0B.svg",
          icone: "🛠️",
          ferr: "Anthropic Console",
          titulo: "Anthropic Console / Workbench",
          type: "Cloud/API",
          category: "Código & Dev",
          accessTag: "Cloud/API",
          defaultPlan: "API",
          desc: "Ambiente de engenharia de prompts, testes de modelos e gestão de chaves API.",
          url: "https://console.anthropic.com",
          porque: "O Console da Anthropic oferece o Workbench para gerar, testar e avaliar prompts e chaves API.",
          kw: ["anthropic console", "workbench", "api", "prompt", "avaliacao", "chave", "billing"],
          desktopNotice: "Painel de engenharia de prompts e gestão de API recomendado no Desktop.",
          details: {
            fullDescription: "Console oficial da Anthropic para desenvolvedores com gerador automático de prompts, Workbench comparativo, casos de teste automatizados e gestão de créditos/chaves de API.",
            examples: [
              "Gerar e refinar System Prompts complexos direto no Prompt Workbench",
              "Rodar matrizes de avaliação comparando Haiku, Sonnet e Opus",
              "Monitorar gastos, limites de taxa e chaves de API por ambiente"
            ],
            compatibility: "Interface técnica recomendada no Desktop."
          }
        },
        {
          id: "claude-artifacts-hub",
          logo: "icons/anthropic-D97757.svg",
          icone: "🧩",
          ferr: "Claude Artifacts",
          titulo: "Claude Artifacts Hub",
          type: "UI/Apps",
          category: "Código & Dev",
          accessTag: "Web",
          defaultPlan: "Grátis",
          desc: "Criação e visualização interativa de apps, dashboards e diagramas gerados em tempo real.",
          url: "https://claude.ai/artifacts",
          porque: "O Claude Artifacts Hub centraliza e executa apps, dashboards e diagramas interativos.",
          kw: ["artifacts", "hub", "app", "dashboard", "diagrama", "preview", "react", "svg"],
          details: {
            fullDescription: "Espaço interativo para criar, publicar e explorar aplicativos web, simuladores financeiros, diagramas Mermaid, gráficos e protótipos React renderizados ao vivo dentro do Claude.",
            examples: [
              "Publicar calculadoras ou painéis interativos e compartilhar por link direto",
              "Explorar e adaptar Artifacts prontos da comunidade para o seu projeto",
              "Iterar interfaces visuais em tempo real na janela lateral"
            ],
            compatibility: "Funciona 100% no celular e no computador."
          }
        },
        {
          id: "mcp-directory",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="6.5" cy="12" r="3" stroke="#D97757" stroke-width="2"/><circle cx="17.5" cy="7" r="3" stroke="#FDBA74" stroke-width="2"/><circle cx="17.5" cy="17" r="3" stroke="#F59E0B" stroke-width="2"/><path d="M9.3 10.7L14.7 8.2M9.3 13.3L14.7 15.8" stroke="#E4E4E7" stroke-width="1.8"/></svg>',
          icone: "🔌",
          ferr: "MCP Directory",
          titulo: "Model Context Protocol (MCP) Directory",
          type: "Agentes",
          category: "Automação & Agentes",
          accessTag: "Cloud/API",
          defaultPlan: "Grátis",
          desc: "Conectores padrão para integrar Claude a bancos de dados, arquivos locais e APIs.",
          url: "https://modelcontextprotocol.io",
          porque: "O protocolo MCP conecta agentes de IA com segurança a bancos de dados, arquivos e APIs.",
          kw: ["mcp", "model context protocol", "conector", "servidor", "banco de dados", "integracao"],
          desktopNotice: "Documentação e servidores MCP voltados para configuração em computador/servidores.",
          details: {
            fullDescription: "Padrão aberto criado pela Anthropic para conectar modelos e agentes (Claude Desktop, Claude Code, IDEs) a fontes de dados reais como PostgreSQL, GitHub, Slack, Google Drive e sistema de arquivos.",
            examples: [
              "Conectar seu assistente local a bancos SQL, repositórios e APIs internas",
              "Consultar especificações e SDKs para construir seu próprio servidor MCP",
              "Padronizar ferramentas e recursos reutilizáveis entre vários agentes de IA"
            ],
            compatibility: "Documentação acessível no celular; instalação de servidores MCP no Desktop."
          }
        }
      ]
    },

    {
      id: "players",
      nome: "Meta, xAI, Perplexity & Players",
      curto: "Players",
      chatNome: "Meta AI / Perplexity / Grok",
      chatUrl: "https://www.perplexity.ai",
      placeholder: "Ex.: buscar com citações no Perplexity, usar Grok, Meta AI, DeepSeek, Mistral ou Qwen",
      padraoPorque: "Reúne os principais modelos e buscadores alternativos do mercado: Meta AI, Grok, Perplexity, DeepSeek, Mistral e Qwen.",
      accent: "#38bdf8",
      iconLogo: "icons/meta-color.svg",
      iconSvg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 7C5 7 3 9.2 3 12C3 14.8 5 17 7.5 17C10.2 17 11.4 13.8 12 12C12.6 10.2 13.8 7 16.5 7C19 7 21 9.2 21 12C21 14.8 19 17 16.5 17C13.8 17 12.6 13.8 12 12C11.4 10.2 10.2 7 7.5 7Z" stroke="#0082FB" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      modules: [
        {
          id: "meta-ai",
          logo: "icons/meta-color.svg",
          icone: "🔵",
          ferr: "Meta AI",
          titulo: "Meta AI",
          type: "Chat",
          category: "Chat & Pesquisa",
          accessTag: "Web",
          defaultPlan: "Grátis",
          desc: "Assistente multimodal e geração rápida de imagens/animações com modelos Llama.",
          url: "https://www.meta.ai",
          porque: "A Meta AI gera imagens instantâneas (Imagine), animações e respostas rápidas gratuitas.",
          kw: ["meta", "meta ai", "llama", "imagine", "animar", "imagem", "whatsapp"],
          details: {
            fullDescription: "Assistente gratuito da Meta alimentado pela família Llama, com geração instantânea de imagens enquanto você digita (Imagine) e transformação de imagens em animações.",
            examples: [
              "Gerar variações instantâneas de imagens e animar figuras com um clique",
              "Tirar dúvidas rápidas e resumir ideias sem limites rígidos de assinatura"
            ],
            compatibility: "Funciona 100% no celular e no computador."
          }
        },
        {
          id: "grok-xai",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9" stroke="#E4E4E7" stroke-width="2"/><path d="M7.5 16.5L16.5 7.5M14.5 7.5L16.5 7.5V9.5" stroke="#38BDF8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
          icone: "⚡",
          ferr: "Grok (xAI)",
          titulo: "Grok (xAI)",
          type: "Chat",
          category: "Chat & Pesquisa",
          accessTag: "Web",
          defaultPlan: "Grátis",
          desc: "Assistente conversacional com acesso em tempo real ao X, DeepSearch e geração de imagens/vídeos.",
          url: "https://grok.com",
          porque: "O Grok combina pesquisa em tempo real no X/Web, DeepSearch e geração visual.",
          kw: ["grok", "xai", "twitter", "x", "deepsearch", "tempo real", "noticias"],
          details: {
            fullDescription: "Assistente da xAI conectado em tempo real à web e aos posts do X, oferecendo o modo DeepSearch de investigação, raciocínio avançado e geração de imagens e clipes.",
            examples: [
              "Monitorar tendências, notícias urgentes e repercussões em tempo real no X",
              "Usar DeepSearch para montar panoramas rápidos com fontes cruzadas",
              "Gerar imagens fotorrealistas e ilustrações diretamente no chat"
            ],
            compatibility: "Funciona 100% no celular e no computador."
          }
        },
        {
          id: "perplexity-ai",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3V21M5 7L12 12L19 7M5 17L12 12L19 17M5 7V17M19 7V17" stroke="#22D3EE" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>',
          icone: "🔎",
          ferr: "Perplexity AI",
          titulo: "Perplexity AI",
          type: "Pesquisa",
          category: "Chat & Pesquisa",
          accessTag: "Web",
          defaultPlan: "Grátis",
          desc: "Motor de busca conversacional com citações verificadas, Pages e Deep Research.",
          url: "https://www.perplexity.ai",
          porque: "O Perplexity substitui buscas tradicionais por respostas sintetizadas com fontes clicáveis.",
          kw: ["perplexity", "busca", "pesquisa", "fontes", "citacoes", "pages", "deep research"],
          details: {
            fullDescription: "Motor de resposta e pesquisa com IA que navega na web em tempo real, verifica múltiplas fontes, exibe citações clicáveis linha a linha e cria relatórios Pages e Deep Research.",
            examples: [
              "Pesquisar legislação, preços, artigos técnicos e comparar produtos com fontes verificáveis",
              "Rodar Deep Research para gerar dossiês detalhados em minutos",
              "Publicar páginas visuais organizadas (Perplexity Pages) a partir de uma pesquisa"
            ],
            compatibility: "Funciona 100% no celular (app Perplexity) e no computador."
          }
        },
        {
          id: "perplexity-spaces",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="4" width="8" height="8" rx="2" stroke="#22D3EE" stroke-width="2"/><rect x="13" y="4" width="8" height="8" rx="2" stroke="#38BDF8" stroke-width="2"/><rect x="3" y="14" width="18" height="6" rx="2" stroke="#0EA5E9" stroke-width="2"/></svg>',
          icone: "🗂️",
          ferr: "Perplexity Spaces",
          titulo: "Perplexity Labs / Spaces",
          type: "Pesquisa",
          category: "Produtividade & Office",
          accessTag: "Web",
          defaultPlan: "Grátis",
          desc: "Hubs de pesquisa colaborativa e agentes de busca focados.",
          url: "https://www.perplexity.ai/spaces",
          porque: "No Perplexity Spaces você cria hubs temáticos combinando arquivos próprios e busca web.",
          kw: ["spaces", "perplexity", "colaborativo", "pesquisa", "arquivos", "hub"],
          details: {
            fullDescription: "Ambientes colaborativos de pesquisa do Perplexity onde você define instruções personalizadas, anexa documentos internos e combina busca na web para toda a equipe.",
            examples: [
              "Criar um Space de inteligência competitiva com links e PDFs de concorrentes",
              "Compartilhar um hub de pesquisa temático com colegas de trabalho ou estudo"
            ],
            compatibility: "Funciona 100% no celular e no computador."
          }
        },
        {
          id: "deepseek",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="8.5" fill="#2563EB" fill-opacity="0.2" stroke="#60A5FA" stroke-width="2"/><path d="M8 13.5C9.5 15.5 14.5 15.5 16 13.5M9.5 9.5H10M14 9.5H14.5" stroke="#93C5FD" stroke-width="2" stroke-linecap="round"/></svg>',
          icone: "🐋",
          ferr: "DeepSeek",
          titulo: "DeepSeek",
          type: "Chat",
          category: "Código & Dev",
          accessTag: "Web",
          defaultPlan: "Grátis",
          desc: "Modelos abertos de alta performance para raciocínio lógico e programação.",
          url: "https://chat.deepseek.com",
          porque: "O DeepSeek entrega raciocínio matemático, lógico e geração de código gratuitos de alto nível.",
          kw: ["deepseek", "r1", "v3", "codigo", "matematica", "logica", "raciocinio", "aberto"],
          details: {
            fullDescription: "Plataforma dos modelos abertos DeepSeek (incluindo raciocínio passo a passo estilo R1 e modelos de código) com excelente desempenho em programação, algoritmos e matemática.",
            examples: [
              "Resolver problemas complexos de lógica e algoritmos vendo a cadeia de raciocínio",
              "Gerar scripts, queries SQL e depurar código gratuitamente",
              "Usar busca web integrada para complementar pesquisas técnicas"
            ],
            compatibility: "Funciona 100% no celular e no computador."
          }
        },
        {
          id: "mistral-le-chat",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="4" width="4" height="4" fill="#F97316"/><rect x="17" y="4" width="4" height="4" fill="#F97316"/><rect x="3" y="8" width="8" height="4" fill="#FB923C"/><rect x="13" y="8" width="8" height="4" fill="#FB923C"/><rect x="3" y="12" width="18" height="4" fill="#FACC15"/><rect x="3" y="16" width="4" height="4" fill="#EF4444"/><rect x="10" y="16" width="4" height="4" fill="#EF4444"/><rect x="17" y="16" width="4" height="4" fill="#EF4444"/></svg>',
          icone: "⚡",
          ferr: "Mistral Le Chat",
          titulo: "Mistral Le Chat",
          type: "Chat",
          category: "Chat & Pesquisa",
          accessTag: "Web",
          defaultPlan: "Grátis",
          desc: "Plataforma europeia com Canvas, busca web, agentes e execução de código.",
          url: "https://chat.mistral.ai",
          porque: "O Le Chat da Mistral destaca-se pela velocidade extrema, Canvas, agentes e OCR avançado.",
          kw: ["mistral", "le chat", "canvas", "agentes", "codigo", "ocr", "europa"],
          details: {
            fullDescription: "Assistente europeu da Mistral AI com respostas ultrarrápidas (Flash Answers), editor Canvas colaborativo, OCR de alta precisão em PDFs, busca web e criação de agentes personalizados.",
            examples: [
              "Extrair tabelas e textos complexos de PDFs digitalizados com OCR avançado",
              "Editar documentos e código no Canvas com respostas quase instantâneas",
              "Gerar imagens e executar scripts Python direto no chat"
            ],
            compatibility: "Funciona 100% no celular e no computador."
          }
        },
        {
          id: "qwen-chat",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><polygon points="12,3 20,7.5 20,16.5 12,21 4,16.5 4,7.5" fill="#6366F1" fill-opacity="0.22" stroke="#818CF8" stroke-width="2"/><circle cx="12" cy="12" r="3" stroke="#C4B5FD" stroke-width="2"/></svg>',
          icone: "🟣",
          ferr: "Qwen Chat",
          titulo: "Qwen Chat (Alibaba)",
          type: "Chat",
          category: "Chat & Pesquisa",
          accessTag: "Web",
          defaultPlan: "Grátis",
          desc: "Suíte multimodal aberta com forte desempenho em código, visão e geração de mídia.",
          url: "https://chat.qwen.ai",
          porque: "O Qwen Chat oferece modelos abertos multimodais fortes em programação, visão e mídia.",
          kw: ["qwen", "alibaba", "codigo", "visao", "video", "imagem", "artifacts", "aberto"],
          details: {
            fullDescription: "Portal oficial da família de modelos abertos Qwen (Alibaba Cloud), reunindo variantes especializadas em código (Qwen Coder), raciocínio, análise visual, Artifacts e geração de imagens/vídeos.",
            examples: [
              "Gerar interfaces e código web com preview de Artifacts integrado",
              "Analisar imagens, capturas e documentos longos em vários idiomas",
              "Comparar respostas entre diferentes variantes da família Qwen"
            ],
            compatibility: "Funciona 100% no celular e no computador."
          }
        }
      ]
    },

    {
      id: "creative",
      nome: "Criação, Áudio, Vídeo, 3D & Automação",
      curto: "Criação & Auto",
      chatNome: "Canva / Suno / n8n",
      chatUrl: "https://www.canva.com",
      placeholder: "Ex.: criar música no Suno, clonar voz no ElevenLabs, editar vídeo ou montar fluxo n8n/Make",
      padraoPorque: "Ferramentas especialistas de música, voz, vídeo, design, modelos 3D e automação avançada.",
      accent: "#f43f5e",
      iconSvg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3L14.5 8.5L20 11L14.5 13.5L12 19L9.5 13.5L4 11L9.5 8.5L12 3Z" stroke="#FF2433" stroke-width="2" stroke-linejoin="round"/><circle cx="18.5" cy="17.5" r="2.5" stroke="#22D3EE" stroke-width="1.8"/></svg>',
      modules: [
        {
          id: "suno",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9" fill="#F59E0B" fill-opacity="0.18" stroke="#FBBF24" stroke-width="2"/><path d="M10 15.5V8.5L16 7V14" stroke="#FDE047" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="8.5" cy="15.5" r="1.8" fill="#FDE047"/><circle cx="14.5" cy="14" r="1.8" fill="#FDE047"/></svg>',
          icone: "🎵",
          ferr: "Suno",
          titulo: "Suno",
          type: "Áudio",
          category: "Imagem, Vídeo & Áudio",
          accessTag: "Web",
          defaultPlan: "Grátis",
          desc: "Criação de músicas completas com vocal e instrumental via IA.",
          url: "https://suno.com",
          porque: "O Suno compõe músicas completas com letra, vocais e arranjos em qualidade de estúdio.",
          kw: ["suno", "musica", "cancao", "voz", "instrumental", "jingle", "trilha", "audio"],
          details: {
            fullDescription: "Plataforma líder em criação musical por IA capaz de gerar músicas completas com vocais realistas, letra própria ou gerada e instrumentais em qualquer gênero musical.",
            examples: [
              "Criar jingles comerciais, vinhetas de podcast ou trilhas personalizadas",
              "Transformar uma letra escrita por você em rock, pop, sertanejo ou lo-fi",
              "Gerar faixas instrumentais livres para vídeos e apresentações"
            ],
            compatibility: "Funciona 100% no celular e no computador."
          }
        },
        {
          id: "elevenlabs",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="7" y="4" width="3.5" height="16" rx="1.5" fill="#F4F4F5"/><rect x="13.5" y="4" width="3.5" height="16" rx="1.5" fill="#38BDF8"/></svg>',
          icone: "🗣️",
          ferr: "ElevenLabs",
          titulo: "ElevenLabs",
          type: "Áudio",
          category: "Imagem, Vídeo & Áudio",
          accessTag: "Web",
          defaultPlan: "Grátis",
          desc: "Clonagem de voz, Text-to-Speech ultra-realista e efeitos sonoros.",
          url: "https://elevenlabs.io",
          porque: "O ElevenLabs entrega síntese de voz natural, clonagem vocal, dublagem e efeitos sonoros.",
          kw: ["elevenlabs", "eleven labs", "voz", "clonar", "tts", "narracao", "dublagem", "audio", "sfx"],
          details: {
            fullDescription: "Estúdio completo de áudio por IA com vozes ultra-realistas em português e dezenas de idiomas, clonagem de voz, dublagem de vídeos preservando o timbre e gerador de efeitos sonoros.",
            examples: [
              "Gerar locuções profissionais para vídeos do YouTube, cursos e anúncios",
              "Dublar vídeos para outro idioma mantendo a entonação original",
              "Criar efeitos sonoros sob medida (chuva, portas, UI, ambiente) por texto"
            ],
            compatibility: "Funciona no celular e no computador pelo navegador."
          }
        },
        {
          id: "capcut-web",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="5" width="18" height="14" rx="3" stroke="#E4E4E7" stroke-width="2"/><path d="M7 9L17 15M7 15L17 9" stroke="#22D3EE" stroke-width="2" stroke-linecap="round"/></svg>',
          icone: "✂️",
          ferr: "CapCut Web",
          titulo: "CapCut Web",
          type: "Vídeo",
          category: "Imagem, Vídeo & Áudio",
          accessTag: "Web",
          defaultPlan: "Grátis",
          desc: "Edição de vídeo online com ferramentas inteligentes de corte, legenda e efeitos.",
          url: "https://www.capcut.com",
          porque: "O CapCut Web edita vídeos no navegador com legendas automáticas, remoção de fundo e modelos.",
          kw: ["capcut", "video", "reels", "tiktok", "legenda", "corte", "editar video"],
          details: {
            fullDescription: "Editor de vídeo online completo com legendas automáticas dinâmicas, recorte inteligente de fundo sem chroma key, redimensionamento automático e templates prontos para redes sociais.",
            examples: [
              "Adicionar legendas animadas automáticas para Reels, Shorts e TikTok",
              "Cortar silêncios e aplicar modelos virais em minutos pelo navegador",
              "Remover fundo de pessoas ou produtos em vídeo com um clique"
            ],
            compatibility: "Funciona no celular (app) e no navegador Desktop para timeline ampla."
          }
        },
        {
          id: "canva-magic",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9" fill="#06B6D4" fill-opacity="0.22" stroke="#22D3EE" stroke-width="2"/><path d="M15.2 9.2C14.4 8.2 13.2 7.8 11.9 8C9.6 8.3 8.2 10.6 8.5 13C8.8 15.1 10.6 16.4 12.8 16C14 15.8 14.9 15.1 15.4 14.2" stroke="#67E8F9" stroke-width="2.2" stroke-linecap="round"/></svg>',
          icone: "🎨",
          ferr: "Canva Magic Studio",
          titulo: "Canva Magic Studio",
          type: "Design",
          category: "Produtividade & Office",
          accessTag: "Web",
          defaultPlan: "Grátis",
          desc: "Design gráfico, apresentações e edição de imagem assistida por IA.",
          url: "https://www.canva.com",
          porque: "O Canva Magic Studio reúne design, apresentações, edição mágica de fotos e templates.",
          kw: ["canva", "magic studio", "design", "apresentacao", "arte", "post", "logo", "pdf"],
          details: {
            fullDescription: "Suíte de criação visual com ferramentas Magic Studio para gerar apresentações, expandir ou apagar elementos de imagens, redimensionar campanhas inteiras e criar artes profissionais.",
            examples: [
              "Montar carrosséis, apresentações comerciais e materiais gráficos rapidamente",
              "Usar Borracha Mágica e Expansão Mágica para ajustar fotos de produtos",
              "Adaptar uma mesma arte para Stories, Feed e LinkedIn com um clique"
            ],
            compatibility: "Funciona 100% no celular (app Canva) e no computador."
          }
        },
        {
          id: "make-integromat",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="6" width="4" height="12" rx="1.5" transform="rotate(-14 6 12)" fill="#A855F7"/><rect x="10" y="5" width="4" height="14" rx="1.5" fill="#C084FC"/><rect x="16" y="6" width="4" height="12" rx="1.5" transform="rotate(14 18 12)" fill="#7E22CE"/></svg>',
          icone: "🔄",
          ferr: "Make",
          titulo: "Make (Integromat)",
          type: "Automação",
          category: "Automação & Agentes",
          accessTag: "Cloud/API",
          defaultPlan: "Grátis",
          desc: "Automação visual complexa conectando centenas de APIs e IAs.",
          url: "https://www.make.com",
          porque: "O Make orquestra cenários visuais conectando webhooks, OpenAI/Gemini/Claude e centenas de apps.",
          kw: ["make", "integromat", "automacao", "api", "webhook", "cenario", "fluxo"],
          desktopNotice: "O construtor visual de cenários e mapeamento de dados do Make exige Desktop.",
          details: {
            fullDescription: "Plataforma visual de automação no-code/low-code para criar cenários com roteadores, webhooks, loops e integrações nativas com Google Workspace, Notion, WhatsApp, OpenAI, Anthropic e Gemini.",
            examples: [
              "Capturar leads de formulários, enriquecer com IA e enviar para CRM e WhatsApp",
              "Processar anexos de e-mail automaticamente e registrar em planilhas",
              "Orquestrar webhooks personalizados sem precisar manter servidores próprios"
            ],
            compatibility: "Criação e edição de cenários recomendadas no computador (Desktop)."
          }
        },
        {
          id: "n8n",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="5.5" cy="12" r="2.5" stroke="#FF4F64" stroke-width="2"/><circle cx="12" cy="7" r="2.5" stroke="#FF4F64" stroke-width="2"/><circle cx="18.5" cy="12" r="2.5" stroke="#FF4F64" stroke-width="2"/><circle cx="12" cy="17" r="2.5" stroke="#FF4F64" stroke-width="2"/><path d="M7.7 10.7L9.8 8.3M14.2 8.3L16.3 10.7M7.7 13.3L9.8 15.7" stroke="#FCA5A5" stroke-width="1.8"/></svg>',
          icone: "🕸️",
          ferr: "n8n",
          titulo: "n8n",
          type: "Automação",
          category: "Automação & Agentes",
          accessTag: "Cloud/API",
          defaultPlan: "Grátis",
          desc: "Orquestração de fluxos de trabalho e agentes de IA node-based (cloud e self-hosted).",
          url: "https://n8n.io",
          porque: "O n8n combina workflows node-based, código JS/Python e agentes de IA com opção self-hosted.",
          kw: ["n8n", "workflow", "agentes", "node", "self-hosted", "automacao", "langchain"],
          desktopNotice: "O editor de fluxos node-based do n8n funciona melhor em tela de computador (Desktop).",
          details: {
            fullDescription: "Orquestrador poderoso de automações e agentes de IA baseado em nós (nodes), suportando memória vetorial, ferramentas MCP, JavaScript/Python customizado e hospedagem própria ou na nuvem.",
            examples: [
              "Construir agentes de atendimento no WhatsApp com memória e consulta a banco SQL",
              "Automatizar pipelines de conteúdo, triagem de e-mails e alertas operacionais",
              "Rodar automações ilimitadas em servidor próprio (self-hosted) com privacidade"
            ],
            compatibility: "Editor visual de nós projetado para Desktop."
          }
        },
        {
          id: "meshy-tripo3d",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><polygon points="12,3 20,7.5 20,16.5 12,21 4,16.5 4,7.5" stroke="#34D399" stroke-width="2" fill="#10B981" fill-opacity="0.16"/><path d="M12 12L20 7.5M12 12L4 7.5M12 12V21" stroke="#6EE7B7" stroke-width="1.8"/></svg>',
          icone: "🧊",
          ferr: "Meshy / Tripo3D",
          titulo: "Meshy / Tripo3D",
          type: "3D",
          category: "Imagem, Vídeo & Áudio",
          accessTag: "Web",
          defaultPlan: "Grátis",
          desc: "Geração de modelos 3D a partir de texto ou imagem para impressão 3D e jogos.",
          url: "https://www.meshy.ai",
          porque: "O Meshy gera malhas e texturas 3D prontas para Blender, Unity, Unreal e impressão 3D.",
          kw: ["meshy", "tripo3d", "3d", "modelo 3d", "impressao 3d", "stl", "glb", "blender"],
          details: {
            fullDescription: "Plataforma de geração 3D com IA que converte descrições em texto ou imagens de referência em objetos tridimensionais com texturas PBR e exportação em GLB, FBX, OBJ e STL.",
            examples: [
              "Converter fotos ou conceitos 2D em protótipos para impressão 3D (STL)",
              "Gerar assets e props texturizados rapidamente para jogos e cenas 3D",
              "Retexturizar malhas existentes com estilos realistas ou estilizados"
            ],
            compatibility: "Funciona pelo navegador no celular e no computador (visualização 3D mais fluida no Desktop)."
          }
        }
      ]
    }
  ],

  quotaEcosystems: [
    {
      id: "google",
      label: "Google AI Studio",
      defaultReset: "20:00",
      guide: "No menu lateral esquerdo do AI Studio acesse Dashboard > Usage & Billing."
    },
    {
      id: "anthropic",
      label: "Anthropic / Claude",
      defaultReset: "20:00",
      guide: "No Claude Code digite `/cost` ou `/context`. No site/app acesse Perfil > Configurações > Uso."
    },
    {
      id: "openai",
      label: "OpenAI / ChatGPT",
      defaultReset: "20:00",
      guide: "No Codex digite `/status` para ver o percentual restante e o horário de reset."
    },
    {
      id: "microsoft",
      label: "Microsoft Copilot",
      defaultReset: "20:00",
      guide: "Controle estimado pelos botões de peso abaixo."
    }
  ],

  tacticalManual: [
    // Anthropic / Claude
    { eco: "Anthropic / Claude", cmd: "/compact", desc: "Resume o histórico inteiro da sessão para liberar memória e economizar milhares de tokens" },
    { eco: "Anthropic / Claude", cmd: "/cost", desc: "Mostra o gasto exato de tokens da sessão atual" },
    { eco: "Anthropic / Claude", cmd: "/context", desc: "Exibe visualmente o que está ocupando a janela de contexto" },
    { eco: "Anthropic / Claude", cmd: "/clear", desc: "Zera o histórico ao mudar de assunto" },
    { eco: "Anthropic / Claude", cmd: "/init", desc: "Cria o arquivo CLAUDE.md com regras do projeto" },
    { eco: "Anthropic / Claude", cmd: "/plan", desc: "Obriga a mostrar o plano passo a passo antes de editar arquivos" },
    { eco: "Anthropic / Claude", cmd: "/review", desc: "Auditoria completa de bugs e qualidade" },
    { eco: "Anthropic / Claude", cmd: "/security-review", desc: "Busca falhas de segurança e chaves expostas" },
    { eco: "Anthropic / Claude", cmd: "/effort low", desc: "Reduz esforço de raciocínio para economizar cota" },
    { eco: "Anthropic / Claude", cmd: "/model", desc: "Alterna entre Haiku, Sonnet e Opus" },
    { eco: "Anthropic / Claude", cmd: "/resume", desc: "Retoma sessão anterior" },
    { eco: "Anthropic / Claude", cmd: "/undo", desc: "Desfaz a última alteração nos arquivos" },
    { eco: "Anthropic / Claude", cmd: "/memory", desc: "Edita memórias fixas do projeto" },
    { eco: "Anthropic / Claude", cmd: "/btw", desc: "Pergunta rápida paralela sem poluir o histórico" },
    { eco: "Anthropic / Claude", cmd: "/export", desc: "Exporta conversa em Markdown" },

    // OpenAI / ChatGPT
    { eco: "OpenAI / ChatGPT", cmd: "/status", desc: "Mostra uso atual da sessão, limites restantes e modelo no Codex" },
    { eco: "OpenAI / ChatGPT", cmd: "/compact", desc: "Compacta histórico longo no Codex" },
    { eco: "OpenAI / ChatGPT", cmd: "/diff", desc: "Mostra alterações de código antes de aprovar" },
    { eco: "OpenAI / ChatGPT", cmd: "/review", desc: "Revisão técnica de mudanças" },
    { eco: "OpenAI / ChatGPT", cmd: "/plan", desc: "Modo de planejamento antes da execução" },
    { eco: "OpenAI / ChatGPT", cmd: "/model", desc: "Troca modelo ou nível de raciocínio" },
    { eco: "OpenAI / ChatGPT", cmd: "/clear", desc: "Limpa contexto atual" },
    { eco: "OpenAI / ChatGPT", cmd: "/canvas", desc: "Abre editor lateral interativo" },
    { eco: "OpenAI / ChatGPT", cmd: "/search", desc: "Força pesquisa web com fontes" },
    { eco: "OpenAI / ChatGPT", cmd: "/deep-research", desc: "Inicia relatório de pesquisa profunda" },

    // Google / AI Studio
    { eco: "Google / AI Studio", cmd: "@Google Drive", desc: "Puxa arquivos do Drive direto no prompt" },
    { eco: "Google / AI Studio", cmd: "@Gmail", desc: "Busca e resume e-mails no prompt" },
    { eco: "Google / AI Studio", cmd: "System Instructions", desc: "Fixa regras permanentes no AI Studio sem repetir a cada mensagem" },
    { eco: "Google / AI Studio", cmd: "Trocar para modelo Flash", desc: "Multiplica a cota diária por mais de 10x em ajustes simples" },
    { eco: "Google / AI Studio", cmd: "Checkpoint / Restore", desc: "Restaura o código antes de um erro sem gastar novos tokens" },

    // Microsoft / Copilot
    { eco: "Microsoft / Copilot", cmd: "@workspace", desc: "Lê toda a estrutura do repositório de uma vez" },
    { eco: "Microsoft / Copilot", cmd: "@terminal", desc: "Analisa erros direto do terminal" },
    { eco: "Microsoft / Copilot", cmd: "/fix", desc: "Corrige bugs automaticamente" },
    { eco: "Microsoft / Copilot", cmd: "/explain", desc: "Explica códigos complexos linha por linha" },
    { eco: "Microsoft / Copilot", cmd: "/tests", desc: "Gera testes automatizados" },
    { eco: "Microsoft / Copilot", cmd: "/optimize", desc: "Melhora performance do código" },
    { eco: "Microsoft / Copilot", cmd: "/doc", desc: "Gera documentação técnica" },
    { eco: "Microsoft / Copilot", cmd: "/clear", desc: "Limpa histórico do chat" },

    // Meta AI
    { eco: "Meta AI", cmd: "/imagine", desc: "Gera imagens instantâneas no chat" },
    { eco: "Meta AI", cmd: "Animate", desc: "Transforma imagem parada em animação" },
    { eco: "Meta AI", cmd: "@Meta AI", desc: "Chama o assistente dentro de conversas no WhatsApp/Messenger" }
  ]
};
