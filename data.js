/* CAFOFO - DADOS EDITAVEIS MULTI-ECOSSISTEMA
   Tudo que muda com o tempo (ecossistemas, nomes, links, descricoes, fichas tecnicas e avisos) fica AQUI.
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
          ferr: "NANO BANANA",
          titulo: "Criar ou editar imagem",
          desc: "Cria e edita imagens e fotos com o Nano Banana",
          url: "https://gemini.google.com/app",
          porque: "Imagens e edição de fotos (Nano Banana) ficam dentro do app Gemini.",
          kw: ["imag", "foto", "logo", "desenh", "render", "planta", "layout", "ilustr", "design", "aquario", "retrato", "arte", "figura", "editar foto", "tirar fundo", "colocar"],
          details: {
            fullDescription: "Modelo avançado de criação e edição fotorrealista de imagens integrado ao Gemini. Permite gerar cenas do zero, remover objetos indesejados, trocar fundos ou alterar detalhes mantendo o resto da foto intacto.",
            examples: [
              "Colocar um aquário embutido ou trocar o sofá em uma foto real da sua sala",
              "Criar logotipos, artes para redes sociais e imagens de produtos sem marca d'água",
              "Remover pessoas ao fundo ou mudar a iluminação de um retrato"
            ],
            compatibility: "Funciona 100% no celular e no computador (app Gemini ou navegador)."
          }
        },
        {
          id: "video",
          logo: "icons/flow.png",
          icone: "🎬",
          ferr: "GOOGLE FLOW",
          titulo: "Criar vídeo",
          desc: "Cria vídeos e imagens (Veo)",
          url: "https://labs.google/fx/tools/flow",
          porque: "Vídeos são feitos no Google Flow.",
          kw: ["video", "film", "clipe", "animac", "animar", "veo", "cena", "reels", "shorts"],
          details: {
            fullDescription: "Estúdio de geração de vídeos cinematográficos com os modelos Veo do Google. Permite controlar movimentos de câmera, transições, consistência de personagens e continuidade entre cenas.",
            examples: [
              "Transformar uma descrição de texto em um clipe cinematográfico para Reels ou anúncios",
              "Animar uma imagem estática com movimento suave de câmera (zoom ou travelling)",
              "Criar sequências de cenas conectadas mantendo o mesmo estilo visual"
            ],
            compatibility: "Funciona no celular pelo navegador, com edição mais confortável em telas maiores."
          }
        },
        {
          id: "musica",
          logo: "icons/flowmusic.png",
          icone: "🎵",
          ferr: "FLOW MUSIC",
          titulo: "Criar música",
          desc: "Cria músicas com letra e voz",
          url: "https://flowmusic.app",
          porque: "Músicas com letra e voz são feitas no Flow Music.",
          kw: ["music", "cancao", "trilha", "jingle", "melodia", "cantar", "beat"],
          details: {
            fullDescription: "Gerador musical com IA que compõe músicas completas com melodia, letra, vocais e arranjos instrumentais em diversos estilos e idiomas.",
            examples: [
              "Criar um jingle chiclete para divulgar um negócio ou promoção",
              "Gerar trilhas instrumentais livres de direitos autorais para vídeos",
              "Transformar um poema ou texto em música cantada no estilo sertanejo, pop ou rock"
            ],
            compatibility: "Funciona 100% no celular e no computador."
          }
        },
        {
          id: "estudar",
          logo: "icons/notebooklm.png",
          icone: "📚",
          ferr: "GEMINI NOTEBOOK",
          titulo: "Estudar ou resumir PDF",
          desc: "Lê seus PDFs e fontes: resumo, mapa mental e podcast",
          url: "https://notebook.google.com",
          porque: "O Gemini Notebook lê os seus arquivos e gera resumo, mapa mental e podcast.",
          kw: ["pdf", "estud", "resum", "livro", "artigo", "apostila", "podcast", "mapa mental", "fonte", "prova", "aula", "ebook"],
          details: {
            fullDescription: "Assistente de estudo e pesquisa baseado apenas nas suas fontes (PDFs, links, vídeos do YouTube, áudios e documentos). Cria resumos confiáveis, guias de estudo, mapas mentais e podcasts em áudio sobre o material.",
            examples: [
              "Subir uma apostila ou contrato de 100 páginas e tirar dúvidas com citações exatas",
              "Gerar um podcast em áudio em português explicando um artigo técnico para ouvir no carro",
              "Criar questionários de revisão e mapas mentais antes de uma prova"
            ],
            compatibility: "Funciona 100% no celular e no computador."
          }
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
          kw: ["pesquis", "relatorio", "comparar", "mercado", "concorrente", "analise", "tendenc", "existe algum"],
          details: {
            fullDescription: "Agente de pesquisa profunda dentro do Gemini que planeja buscas, navega em dezenas de sites automaticamente e entrega um relatório completo, organizado e com links de todas as fontes.",
            examples: [
              "Fazer análise de concorrentes, preços e tendências de um mercado específico",
              "Comparar especificações de carros, celulares ou equipamentos com prós e contras",
              "Montar dossiês completos sobre legislação, viagens ou fornecedores"
            ],
            compatibility: "Funciona 100% no celular e no computador (pode exportar direto para o Google Docs)."
          }
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
          kw: ["codig", "program", "site", "aplicativo", "app ", "saas", "prototip", "python", "script", "landing", "backend", "pagina web", "html", "sistema"],
          details: {
            fullDescription: "Ambiente de desenvolvimento web do Google para criar aplicativos, sites e SaaS completos usando modelos Gemini com preview instantâneo, integração com GitHub e cota gratuita generosa.",
            examples: [
              "Descrever um sistema de agendamento ou painel financeiro e vê-lo rodando na hora",
              "Testar prompts avançados com controle de temperatura, instruções e saída em JSON",
              "Gerar protótipos web completos e publicar diretamente na nuvem"
            ],
            compatibility: "Funciona no celular, mas a edição de código e visualização em tela dividida é melhor no Desktop."
          }
        },
        {
          id: "texto",
          logo: "icons/googledocs.svg",
          icone: "📝",
          ferr: "GOOGLE DOCS",
          titulo: "Escrever documento",
          desc: "Escrever textos com ajuda do Gemini",
          url: "https://docs.google.com/document/u/0/",
          porque: "O Google Docs tem o Gemini dentro para escrever e revisar.",
          kw: ["documento", "carta", "redigir", "redacao", "contrato", "ata", "oficio", "curriculo"],
          details: {
            fullDescription: "Editor de documentos do Google com Gemini integrado ('Ajude-me a escrever') para criar rascunhos, revisar gramática, resumir textos longos e ajustar o tom da escrita.",
            examples: [
              "Redigir propostas comerciais, contratos ou atas de reunião em segundos",
              "Resumir um documento extenso em tópicos claros no topo da página",
              "Reescrever um texto formal para uma linguagem mais direta e amigável"
            ],
            compatibility: "Funciona 100% no celular (app Docs) e no computador."
          }
        },
        {
          id: "planilha",
          logo: "icons/googlesheets.svg",
          icone: "📊",
          ferr: "GOOGLE PLANILHAS",
          titulo: "Planilha ou tabela",
          desc: "Tabelas e análise de dados",
          url: "https://docs.google.com/spreadsheets/u/0/",
          porque: "No Planilhas você organiza e analisa dados.",
          kw: ["planilha", "excel", "tabela", "orcamento", "controle de"],
          details: {
            fullDescription: "Planilhas na nuvem com Gemini integrado para montar tabelas organizadas, criar fórmulas complexas sem decorar sintaxe, gerar gráficos e analisar dados financeiros.",
            examples: [
              "Montar controle de gastos pessoais ou fluxo de caixa empresarial do zero",
              "Pedir em português a fórmula exata para cruzar dados de duas abas",
              "Resumir tendências de vendas e criar gráficos automáticos"
            ],
            compatibility: "Funciona 100% no celular (visualização/edição rápida) e com recursos avançados no Desktop."
          }
        },
        {
          id: "email",
          logo: "icons/gmail.svg",
          icone: "✉️",
          ferr: "GMAIL",
          titulo: "E-mail",
          desc: "Ler, resumir e redigir e-mails",
          url: "https://mail.google.com",
          porque: "O Gmail tem o Gemini para resumir e escrever e-mails.",
          kw: ["email", "e-mail", "gmail", "responder", "mensagem"],
          details: {
            fullDescription: "E-mail do Google com Gemini embutido para resumir conversas longas, encontrar informações antigas na caixa de entrada e rascunhar respostas profissionais.",
            examples: [
              "Resumir uma troca de 20 e-mails em 3 pontos principais antes de responder",
              "Escrever respostas educadas de cobrança, confirmação ou suporte",
              "Localizar faturas, datas de reuniões ou anexos usando linguagem natural"
            ],
            compatibility: "Funciona 100% no celular (app Gmail) e no computador."
          }
        },
        {
          id: "traduzir",
          logo: "icons/googletranslate.svg",
          icone: "🌐",
          ferr: "GOOGLE TRADUTOR",
          titulo: "Traduzir",
          desc: "Tradução de textos",
          url: "https://translate.google.com",
          porque: "O Google Tradutor traduz na hora.",
          kw: ["traduz", "traduc", "idioma", "ingles", "espanhol", "frances"],
          details: {
            fullDescription: "Tradutor instantâneo para dezenas de idiomas com suporte a texto, voz em tempo real, tradução de documentos inteiros e leitura de placas/cardápios pela câmera.",
            examples: [
              "Traduzir um PDF ou contrato em inglês mantendo a formatação",
              "Apontar a câmera do celular para um manual ou cardápio em viagem",
              "Conversar por voz em tempo real com alguém que fala outro idioma"
            ],
            compatibility: "Funciona 100% no celular e no computador."
          }
        },
        {
          id: "arquivos",
          logo: "icons/googledrive.svg",
          icone: "🗂️",
          ferr: "GOOGLE DRIVE",
          titulo: "Meus arquivos",
          desc: "Seus arquivos na nuvem",
          url: "https://drive.google.com",
          porque: "Seus arquivos ficam no Google Drive.",
          kw: ["drive", "arquivo", "nuvem", "pasta"],
          details: {
            fullDescription: "Armazenamento em nuvem com painel lateral do Gemini capaz de resumir pastas inteiras, localizar documentos pelo conteúdo e responder perguntas sobre PDFs salvos.",
            examples: [
              "Pedir ao Gemini para resumir todos os relatórios salvos em uma pasta",
              "Organizar fotos, comprovantes, projetos e planilhas com acesso em qualquer aparelho",
              "Compartilhar links seguros com controle de visualização ou edição"
            ],
            compatibility: "Funciona 100% no celular e no computador."
          }
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
          kw: ["vids", "narrad", "narracao", "roteiro", "video institucional", "apresentacao em video"],
          details: {
            fullDescription: "Editor de vídeo corporativo e criativo com IA que transforma uma ideia ou documento do Drive em um vídeo completo com roteiro, cenas sugeridas, narração por voz e legendas automáticas.",
            examples: [
              "Converter um relatório em vídeo de apresentação narrado para sua equipe",
              "Criar treinamentos internos ou tutoriais rápidos com voz gerada por IA",
              "Montar vídeos promocionais com música de fundo e transições prontas"
            ],
            compatibility: "O editor de linha do tempo funciona melhor no Desktop; visualização funciona no celular."
          }
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
          kw: ["slide", "apresentac", "powerpoint", "ppt", "deck", "palestra"],
          details: {
            fullDescription: "Criador de apresentações do Google integrado ao Gemini para gerar slides individuais, ilustrações personalizadas e resumir textos de outros documentos direto para o palco.",
            examples: [
              "Criar slides visuais de uma proposta de vendas a partir de um Google Docs",
              "Gerar imagens exclusivas e sem fundo para ilustrar cada tópico da palestra",
              "Reorganizar e resumir uma apresentação longa em poucos minutos"
            ],
            compatibility: "Funciona 100% no celular (para apresentar e ajustar) e no computador."
          }
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
          kw: ["photos", "remix", "estilo", "galeria", "foto em video", "album"],
          details: {
            fullDescription: "Galeria inteligente com edição mágica por IA (Magic Editor), busca conversacional ('Ask Photos'), aplicação de estilos artísticos (Remix) e transformação de fotos paradas em vídeos curtos.",
            examples: [
              "Mover ou apagar objetos e pessoas em fotos de viagem com um toque",
              "Encontrar fotos antigas perguntando 'fotos na praia em 2023 com camisa azul'",
              "Aplicar estilos visuais criativos ou animar retratos de família"
            ],
            compatibility: "Funciona 100% no celular (experiência completa no app) e no computador."
          }
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
          kw: ["gem", "assistente", "robo", "personalizad", "bot", "agente"],
          details: {
            fullDescription: "Criador de assistentes personalizados dentro do Gemini. Você define instruções fixas, tom de voz e arquivos de referência uma única vez para reutilizar sempre que precisar.",
            examples: [
              "Criar um revisor de textos que segue exatamente o manual da sua empresa",
              "Montar um tutor de inglês focado em conversação para entrevistas",
              "Ter um especialista que sempre responde formatado em planilhas ou e-mails"
            ],
            compatibility: "Funciona 100% no celular e no computador."
          }
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
          kw: ["stitch", "interface", "ui", "ux", "tela", "wireframe", "mockup", "layout de app"],
          details: {
            fullDescription: "Ferramenta do Google Labs especializada em design de interfaces (UI). Gera telas profissionais de aplicativos mobile e sites a partir de texto ou rascunhos, com exportação direta para código HTML/CSS ou Figma.",
            examples: [
              "Gerar o layout completo de um aplicativo de delivery ou dashboard em segundos",
              "Fotografar um rabisco no papel e transformar em tela digital moderna",
              "Exportar o design pronto direto para o Figma ou copiar o código"
            ],
            compatibility: "Acessível pelo celular, mas ideal para operar em tela de computador (Desktop)."
          }
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
          kw: ["mixboard", "mural", "moodboard", "referencia", "brainstorm", "painel"],
          details: {
            fullDescription: "Mural infinito do Google Labs para brainstorming visual e moodboards. Permite juntar imagens, notas e referências e pedir para a IA combinar estilos ou gerar variações novas na mesma prancha.",
            examples: [
              "Montar um painel de referências de decoração, marca ou identidade visual",
              "Misturar a paleta de cores de uma foto com o formato de outra referência",
              "Organizar ideias criativas de um projeto antes de produzir os materiais"
            ],
            compatibility: "Funciona melhor no computador pela amplitude da tela infinita."
          }
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
          kw: ["antigravity", "ide", "editor de codigo", "autonomo", "agentes", "vscode"],
          desktopNotice: "O Google Antigravity é uma IDE completa que exige instalação no computador (Windows, Mac ou Linux) e não roda diretamente no celular.",
          details: {
            fullDescription: "Ambiente de desenvolvimento (IDE) completo com agentes autônomos de IA capazes de planejar, editar múltiplos arquivos, rodar comandos no terminal e testar aplicações no navegador de forma integrada.",
            examples: [
              "Construir projetos full-stack completos com backend, banco e interface",
              "Delegar a correção de bugs e testes automatizados para agentes em paralelo",
              "Refatorar repositórios grandes com visão de arquitetura completa"
            ],
            compatibility: "Exige Desktop (Windows, Mac ou Linux) com instalação local."
          }
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
          desc: "Escrita natural, análise de documentos extensos e raciocínio lógico",
          url: "https://claude.ai/new",
          porque: "O Claude Chat é ideal para conversas longas, análise de PDFs e escrita natural.",
          kw: ["convers", "analis", "pdf", "resum", "escrev", "texto", "explic", "chat", "contrato"],
          details: {
            fullDescription: "Chat principal da Anthropic reconhecido pela escrita natural sem clichês robóticos, excelente compreensão de documentos extensos e raciocínio lógico profundo.",
            examples: [
              "Analisar contratos longos identificando cláusulas de risco e prazos",
              "Reescrever e-mails, artigos ou roteiros com tom humano e persuasivo",
              "Resolver problemas complexos de lógica, finanças ou planejamento estratégico"
            ],
            compatibility: "Funciona 100% no celular (app Claude ou navegador) e no computador."
          }
        },
        {
          id: "claude-artifacts",
          logo: "icons/anthropic-D97757.svg",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="4" width="18" height="16" rx="3" stroke="#D97757" stroke-width="2"/><path d="M3 9H21" stroke="#D97757" stroke-width="2"/><path d="M10 13L8 15L10 17M14 13L16 15L14 17" stroke="#F59E0B" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
          icone: "🧩",
          ferr: "CLAUDE ARTIFACTS",
          titulo: "Criar app ou interface",
          desc: "Janela lateral interativa com apps, gráficos e jogos ao vivo",
          url: "https://claude.ai/",
          porque: "Os Artifacts do Claude geram interfaces e apps interativos com preview imediato.",
          kw: ["app", "interface", "artifact", "preview", "site", "interativ", "dashboard", "calculadora", "jogo"],
          details: {
            fullDescription: "Janela lateral interativa onde o Claude cria aplicativos web, calculadoras, gráficos dinâmicos, diagramas e mini-jogos funcionando ao vivo e prontos para compartilhar.",
            examples: [
              "Criar um painel financeiro interativo ou simulador de juros compostos na hora",
              "Gerar ferramentas web instantâneas como cronômetros, checklists ou quizzes",
              "Visualizar fluxogramas e mapas mentais interativos durante a conversa"
            ],
            compatibility: "Funciona 100% no celular e no computador (visualização lado a lado mais ampla no Desktop)."
          }
        },
        {
          id: "claude-design",
          logo: "icons/claude-color.svg",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="3" stroke="#D97757" stroke-width="2"/><path d="M3 9H21M9 9V21" stroke="#FDBA74" stroke-width="1.8"/><circle cx="15" cy="15" r="2.2" fill="#D97757"/></svg>',
          icone: "🎨",
          ferr: "CLAUDE DESIGN",
          titulo: "Prototipar interfaces",
          desc: "Páginas web, interfaces e apresentações com auto-ajuste visual",
          url: "https://claude.ai/",
          porque: "O Claude Design prototipa interfaces visuais, páginas web e apresentações com ajuste automático.",
          kw: ["design", "layout", "prototip", "apresentac", "cores", "pagina", "ui", "visual"],
          desktopNotice: "A edição visual detalhada de interfaces funciona melhor em telas de computador.",
          details: {
            fullDescription: "Recurso integrado ao Claude para prototipar interfaces visuais, landing pages e apresentações com auto-ajuste inteligente de layout, tipografia e paleta de cores.",
            examples: [
              "Montar uma landing page moderna com harmonia de cores e espaçamento profissional",
              "Prototipar telas de aplicativo ajustando blocos visuais rapidamente",
              "Criar apresentações visuais limpas a partir de um resumo em texto"
            ],
            compatibility: "A edição visual detalhada de interfaces funciona melhor em telas de computador (Desktop)."
          }
        },
        {
          id: "claude-code",
          logo: "icons/claude-color.svg",
          badge: ">_",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="4" width="20" height="16" rx="3" fill="#27272A" stroke="#D97757" stroke-width="2"/><path d="M7 9L10.5 12L7 15" stroke="#D97757" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M13 15H17.5" stroke="#FBBF24" stroke-width="2.2" stroke-linecap="round"/></svg>',
          icone: "⌨️",
          ferr: "CLAUDE CODE",
          titulo: "Agente de programação",
          desc: "Lê repositório no GitHub, corrige bugs e abre Pull Requests",
          url: "https://claude.ai/code",
          porque: "O Claude Code atua como agente autônomo para programar e revisar repositórios.",
          kw: ["codig", "program", "agente", "terminal", "github", "repo", "bug", "refator", "script", "pull request"],
          desktopNotice: "Focado em desenvolvimento no terminal ou navegador desktop. No celular serve para disparar e acompanhar tarefas remotamente.",
          details: {
            fullDescription: "Agente autônomo de engenharia da Anthropic que lê seu repositório no GitHub, cria e altera arquivos, executa testes, corrige bugs e abre Pull Requests prontos para revisão.",
            examples: [
              "Pedir para implementar uma nova funcionalidade em um repositório existente",
              "Investigar a causa de um erro de build e aplicar a correção automaticamente",
              "Disparar tarefas pelo celular enquanto acompanha o progresso na nuvem"
            ],
            compatibility: "Focado em Desktop/terminal; no celular funciona bem para disparar e acompanhar tarefas remotamente."
          }
        },
        {
          id: "claude-projects",
          logo: "icons/anthropic-D97757.svg",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 7C3 5.9 3.9 5 5 5H9.5L11.5 7H19C20.1 7 21 7.9 21 9V18C21 19.1 20.1 20 19 20H5C3.9 20 3 19.1 3 18V7Z" fill="#D97757" fill-opacity="0.25" stroke="#D97757" stroke-width="2" stroke-linejoin="round"/><path d="M8 13H16M8 16H13" stroke="#FDBA74" stroke-width="1.8" stroke-linecap="round"/></svg>',
          icone: "📁",
          ferr: "CLAUDE PROJECTS",
          titulo: "Base de conhecimento",
          desc: "Workspaces com PDFs e instruções fixas em todas as conversas",
          url: "https://claude.ai/projects",
          porque: "No Claude Projects você organiza documentos e instruções permanentes por projeto.",
          kw: ["projeto", "base", "conhecimento", "workspace", "documento", "instruc", "pasta"],
          details: {
            fullDescription: "Espaços de trabalho dedicados com base de conhecimento fixa. Você sobe PDFs, manuais de marca e regras uma vez e o Claude consulta todo esse contexto em todas as novas conversas do projeto.",
            examples: [
              "Criar um espaço para sua empresa com tabela de preços, FAQ e tom de voz",
              "Centralizar códigos e arquitetura de um software para manter respostas consistentes",
              "Separar pesquisas de um livro ou tese com todas as referências sempre à mão"
            ],
            compatibility: "Funciona 100% no celular e no computador."
          }
        },
        {
          id: "scheduled-tasks",
          logo: "icons/anthropic-F59E0B.svg",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="13" r="8" stroke="#F59E0B" stroke-width="2"/><path d="M12 9V13L14.5 15.5M9 3H15" stroke="#FDBA74" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
          icone: "⏱️",
          ferr: "SCHEDULED TASKS",
          titulo: "Automações recorrentes",
          desc: "Executa tarefas na nuvem em horários agendados automaticamente",
          url: "https://claude.ai/",
          porque: "O Scheduled Tasks executa tarefas agendadas na nuvem mesmo com seu aparelho desligado.",
          kw: ["agend", "tarefa", "automac", "rotina", "recorrent", "diario", "schedule", "nuvem"],
          desktopNotice: "A configuração inicial de permissões e agendamentos é recomendada via desktop.",
          details: {
            fullDescription: "Automações recorrentes do Claude que executam prompts, pesquisas ou relatórios na nuvem em horários programados, mesmo quando seu celular ou computador estiver desligado.",
            examples: [
              "Receber toda segunda-feira às 8h um resumo das principais notícias do seu setor",
              "Monitorar atualizações em fontes específicas e compilar um boletim semanal",
              "Automatizar revisões diárias de tarefas ou relatórios recorrentes"
            ],
            compatibility: "Configuração inicial de permissões recomendada via Desktop; resultados acessíveis no celular."
          }
        }
      ]
    },

    {
      id: "openai",
      nome: "OpenAI (ChatGPT)",
      chatNome: "ChatGPT",
      chatUrl: "https://chatgpt.com/",
      placeholder: "Ex.: criar um site, editar página ou conversar por voz no ChatGPT",
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
          titulo: "Chat, Voz e Imagens",
          desc: "Assistente versátil com memória, web, imagens e modo de voz",
          url: "https://chatgpt.com/",
          porque: "O ChatGPT reúne chat, busca na web, geração de imagens e modo de voz.",
          kw: ["chat", "voz", "convers", "pergunt", "explic", "memoria", "falar", "imag"],
          details: {
            fullDescription: "Assistente versátil da OpenAI com memória contínua entre conversas, pesquisa atualizada na web, geração e edição de imagens e modo de voz conversacional fluido.",
            examples: [
              "Praticar idiomas ou treinar apresentações falando naturalmente no modo de voz",
              "Criar imagens ilustradas ou buscar informações atuais na internet com fontes",
              "Pedir ajuda no dia a dia lembrando suas preferências e contexto pessoal"
            ],
            compatibility: "Funciona 100% no celular (app ChatGPT ou navegador) e no computador."
          }
        },
        {
          id: "chatgpt-sites",
          logo: "icons/openai-34D399.svg",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="4" width="18" height="16" rx="3" stroke="#34D399" stroke-width="2"/><path d="M3 9H21" stroke="#34D399" stroke-width="2"/><circle cx="6.5" cy="6.5" r="1" fill="#34D399"/><circle cx="9.5" cy="6.5" r="1" fill="#34D399"/></svg>',
          icone: "🌐",
          ferr: "CHATGPT SITES",
          titulo: "Criar e publicar sites",
          desc: "Construtor nativo para sites e apps leves com hospedagem inclusa",
          url: "https://chatgpt.com/",
          porque: "O ChatGPT Sites cria, edita e publica páginas e aplicativos leves rapidamente.",
          kw: ["site", "publicar", "hosped", "landing", "pagina web", "construtor", "app"],
          desktopNotice: "O editor visual completo do ChatGPT Sites funciona melhor no computador.",
          details: {
            fullDescription: "Construtor nativo integrado ao ChatGPT para criar, editar visualmente e publicar sites completos, portfólios e aplicativos web leves com hospedagem inclusa.",
            examples: [
              "Publicar uma página de vendas ou cartão de visitas digital em poucos minutos",
              "Ajustar seções, textos e layout conversando diretamente com a IA",
              "Colocar uma ferramenta simples ou formulário no ar sem configurar servidor"
            ],
            compatibility: "O editor visual completo funciona melhor no computador (Desktop)."
          }
        },
        {
          id: "chatgpt-pages",
          logo: "icons/openai-0EA5E9.svg",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="3" stroke="#0EA5E9" stroke-width="2"/><path d="M12 3V21" stroke="#0EA5E9" stroke-width="2"/><path d="M6 8H9M6 12H9M15 9L17 11L15 13" stroke="#38BDF8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
          icone: "📝",
          ferr: "CHATGPT PAGES",
          titulo: "Relatórios e documentos",
          desc: "Transforma conversas em relatórios visuais e páginas compartilháveis",
          url: "https://chatgpt.com/",
          porque: "O ChatGPT Pages organiza ideias em relatórios visuais e documentos editáveis.",
          kw: ["pages", "canvas", "editor", "texto", "escrev", "revis", "documento", "relatorio", "artigo"],
          details: {
            fullDescription: "Editor colaborativo para transformar conversas em relatórios visuais, documentos estruturados, planos de ação e páginas compartilháveis lado a lado com a IA.",
            examples: [
              "Transformar uma pesquisa longa em um relatório limpo pronto para compartilhar",
              "Selecionar apenas um parágrafo de um texto para encurtar ou melhorar o tom",
              "Estruturar manuais, roteiros e propostas com edição em tempo real"
            ],
            compatibility: "Funciona 100% no celular e no computador."
          }
        },
        {
          id: "codex-cloud",
          logo: "icons/openai-6EE7B7.svg",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><polygon points="12,2 21,7 21,17 12,22 3,17 3,7" stroke="#6EE7B7" stroke-width="2" fill="#10A37F" fill-opacity="0.15"/><path d="M9.5 9.5L7 12L9.5 14.5M14.5 9.5L17 12L14.5 14.5" stroke="#6EE7B7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
          icone: "⚙️",
          ferr: "CODEX CLOUD",
          titulo: "Agente de engenharia",
          desc: "Conectado ao GitHub para escrever e testar código em paralelo",
          url: "https://chatgpt.com/codex",
          porque: "O Codex Cloud executa tarefas de engenharia e testa código em paralelo com seu GitHub.",
          kw: ["codex", "engenharia", "github", "repo", "agente", "program", "codig", "teste"],
          desktopNotice: "No celular funciona como controle remoto para disparar tarefas; a revisão de código exige desktop.",
          details: {
            fullDescription: "Agente de programação em nuvem conectado ao GitHub que lê o repositório, escreve código, roda testes automatizados em ambiente isolado e prepara alterações em paralelo.",
            examples: [
              "Disparar múltiplas tarefas de correção de bugs em segundo plano no repositório",
              "Gerar suítes de testes automatizados e validar antes de aprovar o código",
              "Solicitar pequenas melhorias pelo celular para revisar depois no computador"
            ],
            compatibility: "No celular funciona como controle remoto; a revisão detalhada de código exige Desktop."
          }
        },
        {
          id: "chatgpt-projects",
          logo: "icons/openai-10A37F.svg",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 7C3 5.9 3.9 5 5 5H9.5L11.5 7H19C20.1 7 21 7.9 21 9V18C21 19.1 20.1 20 19 20H5C3.9 20 3 19.1 3 18V7Z" stroke="#10A37F" stroke-width="2" stroke-linejoin="round"/></svg>',
          icone: "📁",
          ferr: "CHATGPT PROJECTS",
          titulo: "Pastas por assunto",
          desc: "Espaços dedicados com arquivos e memória isolados",
          url: "https://chatgpt.com/",
          porque: "No ChatGPT Projects você separa trabalho, estudos e projetos com arquivos próprios.",
          kw: ["projeto", "pasta", "trabalho", "estudo", "canal", "arquivo", "organizar"],
          details: {
            fullDescription: "Pastas inteligentes dedicadas para separar assuntos (como trabalho, estudos, finanças ou canal de conteúdo) mantendo arquivos anexados, instruções e memória isolados dentro de cada pasta.",
            examples: [
              "Agrupar todas as conversas e planilhas de um cliente em uma única pasta",
              "Manter um projeto só para estudos com apostilas e instruções de revisão",
              "Evitar que temas pessoais se misturem com o contexto profissional"
            ],
            compatibility: "Funciona 100% no celular e no computador."
          }
        },
        {
          id: "explore-gpts",
          logo: "icons/openai-A855F7.svg",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9" stroke="#A855F7" stroke-width="2"/><polygon points="15.5,8.5 13.5,13.5 8.5,15.5 10.5,10.5" fill="#A855F7"/></svg>',
          icone: "🤖",
          ferr: "EXPLORE GPTS",
          titulo: "Assistentes prontos",
          desc: "Biblioteca de GPTs especializados e criador próprio sem código",
          url: "https://chatgpt.com/gpts",
          porque: "Na loja de GPTs você encontra e cria assistentes personalizados prontos para uso.",
          kw: ["gpt", "assistente", "bot", "loja", "personalizad", "pronto", "comunidade"],
          details: {
            fullDescription: "Biblioteca oficial com milhares de assistentes especializados criados pela comunidade e empresas, além de um criador próprio sem código para montar seu próprio GPT.",
            examples: [
              "Usar GPTs especializados em diagramas, design de logos ou análise de dados",
              "Criar um assistente próprio carregando um PDF de regras de atendimento",
              "Compartilhar seu GPT customizado via link com colegas ou clientes"
            ],
            compatibility: "Funciona 100% no celular e no computador."
          }
        }
      ]
    },

    {
      id: "microsoft",
      nome: "Microsoft (Copilot)",
      chatNome: "Copilot",
      chatUrl: "https://copilot.microsoft.com/",
      placeholder: "Ex.: pesquisar na web, gerar arte ou usar Workspaces no Copilot",
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
          desc: "Integrado ao Bing para respostas em tempo real e textos rápidos",
          url: "https://copilot.microsoft.com/",
          porque: "O Copilot ajuda nas buscas da web em tempo real, respostas rápidas e textos.",
          kw: ["assistente", "chat", "pesquis", "texto", "pergunt", "convers", "resum", "bing"],
          details: {
            fullDescription: "Assistente da Microsoft integrado ao buscador Bing para entregar respostas atualizadas da internet em tempo real, citações de fontes e criação rápida de textos.",
            examples: [
              "Pesquisar cotações, notícias do dia e comparações de produtos com links diretos",
              "Escrever rascunhos de e-mails, comunicados e resumos de páginas web",
              "Conversar por voz usando o app ou navegador no celular"
            ],
            compatibility: "Funciona 100% no celular e no computador."
          }
        },
        {
          id: "copilot-workspaces",
          logo: "icons/microsoft-38BDF8.svg",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 2H14L19 7V20C19 21.1 18.1 22 17 22H6C4.9 22 4 21.1 4 20V4C4 2.9 4.9 2 6 2Z" fill="#0284C7" fill-opacity="0.25" stroke="#38BDF8" stroke-width="2"/><path d="M8 12H15M8 16H13" stroke="#7DD3FC" stroke-width="2" stroke-linecap="round"/></svg>',
          icone: "📄",
          ferr: "COPILOT WORKSPACES",
          titulo: "Área de trabalho e dados",
          desc: "Cruza documentos, tabelas e links para gerar relatórios completos",
          url: "https://copilot.microsoft.com/",
          porque: "O Copilot Workspaces cruza documentos, tabelas e links em uma área unificada.",
          kw: ["workspace", "canvas", "pagina", "quadro", "ideia", "documento", "tabela", "relatorio"],
          desktopNotice: "Exibe múltiplos painéis lado a lado e funciona melhor em telas de computador.",
          details: {
            fullDescription: "Área de trabalho inteligente da Microsoft para reunir documentos, tabelas, links e anotações no mesmo espaço, cruzando informações e gerando relatórios completos.",
            examples: [
              "Cruzar uma planilha de custos com um documento de proposta em uma única tela",
              "Organizar referências de um projeto em painéis colaborativos editáveis",
              "Gerar planos executivos e resumos consolidados de várias fontes"
            ],
            compatibility: "Exibe múltiplos painéis lado a lado e funciona melhor em telas de computador (Desktop)."
          }
        },
        {
          id: "copilot-designer",
          logo: "icons/copilot-color.svg",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="4" stroke="#EC4899" stroke-width="2"/><circle cx="8.5" cy="8.5" r="2" fill="#FBBF24"/><path d="M4 17L9.5 12L13.5 15.5L16.5 13L20 17" stroke="#38BDF8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
          icone: "🎨",
          ferr: "COPILOT DESIGNER",
          titulo: "Criar imagem e arte",
          desc: "Gerador gratuito de imagens, banners, convites e artes sociais",
          url: "https://designer.microsoft.com/",
          porque: "O Microsoft Designer gera imagens, artes e layouts prontos com IA.",
          kw: ["imag", "arte", "design", "foto", "logo", "ilustr", "desenh", "banner", "convite"],
          details: {
            fullDescription: "Gerador gratuito de imagens, banners, convites, figurinhas e artes visuais prontas para redes sociais com templates editáveis e remoção de fundo por IA.",
            examples: [
              "Criar posts prontos para Instagram, capas de YouTube e banners promocionais",
              "Gerar convites personalizados de aniversário ou eventos em segundos",
              "Remover fundo de fotos de produtos e aplicar cenários novos"
            ],
            compatibility: "Funciona 100% no celular e no computador."
          }
        },
        {
          id: "github-copilot",
          logo: "icons/githubcopilot-FFFFFF.svg",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="6" width="18" height="12" rx="4" fill="#1E293B" stroke="#818CF8" stroke-width="2"/><circle cx="9" cy="12" r="1.8" fill="#38BDF8"/><circle cx="15" cy="12" r="1.8" fill="#38BDF8"/><path d="M9 4V6M15 4V6" stroke="#818CF8" stroke-width="2" stroke-linecap="round"/></svg>',
          icone: "💻",
          ferr: "GITHUB COPILOT",
          titulo: "Agente de código",
          desc: "Integrado ao GitHub para revisar código e automatizar tarefas",
          url: "https://github.com/copilot",
          porque: "O GitHub Copilot revisa código, sugere melhorias e automatiza tarefas no GitHub.",
          kw: ["codig", "github", "agente", "program", "repo", "ide", "app", "site"],
          desktopNotice: "Ferramenta voltada para repositórios de código; a experiência completa exige desktop.",
          details: {
            fullDescription: "Agente de IA integrado diretamente ao GitHub e editores de código para revisar Pull Requests, sugerir melhorias, explicar repositórios e automatizar tarefas de programação.",
            examples: [
              "Revisar alterações de código e encontrar falhas antes do merge no GitHub",
              "Atribuir uma Issue diretamente ao agente Copilot para abrir um Pull Request",
              "Tirar dúvidas sobre como um projeto open-source funciona"
            ],
            compatibility: "Voltado para repositórios de código; a experiência completa exige Desktop."
          }
        }
      ]
    },

    {
      id: "meta",
      nome: "Meta (Meta AI)",
      chatNome: "Meta AI",
      chatUrl: "https://www.meta.ai/",
      placeholder: "Ex.: gerar imagem no Imagine ou criar personagem no Meta AI",
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
          desc: "Assistente gratuito com geração rápida e animação de imagens",
          url: "https://www.meta.ai/",
          porque: "A Meta AI conversa, gera imagens (Imagine) e cria animações instantâneas.",
          kw: ["chat", "imagine", "imag", "foto", "pergunt", "convers", "arte", "animar"],
          details: {
            fullDescription: "Assistente gratuito da Meta integrado ao navegador, WhatsApp e Instagram, com geração ultra-rápida de imagens em tempo real (Imagine) e animação instantânea de figuras.",
            examples: [
              "Gerar várias variações de uma imagem instantaneamente enquanto digita",
              "Transformar uma imagem gerada em animação curta com um clique",
              "Fazer perguntas rápidas e resumir ideias sem precisar de assinatura paga"
            ],
            compatibility: "Funciona 100% no celular e no computador."
          }
        },
        {
          id: "meta-ai-studio",
          logo: "icons/instagram-E1306C.svg",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="9" r="4" stroke="#E1306C" stroke-width="2"/><path d="M5 20C5 16.7 8.1 14 12 14C15.9 14 19 16.7 19 20" stroke="#833AB4" stroke-width="2" stroke-linecap="round"/><path d="M19 4L19.7 5.8L21.5 6.5L19.7 7.2L19 9L18.3 7.2L16.5 6.5L18.3 5.8L19 4Z" fill="#FCAF45"/></svg>',
          icone: "🎭",
          ferr: "META AI STUDIO",
          titulo: "Criar personagem IA",
          desc: "Assistentes virtuais que respondem no Instagram e Messenger",
          url: "https://aistudio.instagram.com/",
          porque: "No Meta AI Studio você cria personagens e assistentes para Instagram e Messenger.",
          kw: ["personagem", "instagram", "assistente", "bot", "avatar", "studio", "criador", "messenger"],
          details: {
            fullDescription: "Plataforma da Meta para criar personagens e assistentes virtuais personalizados (incluindo uma versão IA para criadores) que respondem automaticamente no Instagram e Messenger.",
            examples: [
              "Configurar um assistente para responder dúvidas frequentes no Direct do Instagram",
              "Criar personagens temáticos para interagir com seguidores e comunidades",
              "Definir regras do que a IA pode responder e links que ela deve indicar"
            ],
            compatibility: "Funciona 100% no celular e no computador."
          }
        },
        {
          id: "whatsapp-business",
          logo: "icons/whatsapp-25D366.svg",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3C7 3 3 6.8 3 11.5C3 13.3 3.6 15 4.7 16.4L3.5 21L8.3 19.7C9.4 20.2 10.7 20.5 12 20.5C17 20.5 21 16.7 21 12C21 7.3 17 3 12 3Z" fill="#25D366" fill-opacity="0.2" stroke="#25D366" stroke-width="2" stroke-linejoin="round"/><path d="M9.5 9.5C9.5 9.5 10.5 12.5 14.5 14.5" stroke="#25D366" stroke-width="2.2" stroke-linecap="round"/></svg>',
          icone: "💬",
          ferr: "WHATSAPP BUSINESS",
          titulo: "Automação e Atendimento",
          desc: "Mensagens automáticas, catálogos e atendimento comercial",
          url: "https://business.whatsapp.com/",
          porque: "O WhatsApp Business centraliza automação de atendimento, catálogo e mensagens.",
          kw: ["whatsapp", "zap", "dispar", "atendimento", "mensagem", "automac", "cliente", "catalogo"],
          details: {
            fullDescription: "Ferramentas oficiais da Meta para configurar mensagens automáticas de saudação e ausência, organizar catálogos de produtos, etiquetas de clientes e atendimento comercial no WhatsApp.",
            examples: [
              "Configurar mensagem automática fora do horário comercial com link do catálogo",
              "Organizar conversas com etiquetas como 'Novo pedido', 'Pago' e 'Pendente'",
              "Criar respostas rápidas para dúvidas de endereço, Pix e prazos"
            ],
            compatibility: "Funciona 100% no celular (app WhatsApp Business) e no computador."
          }
        },
        {
          id: "meta-business-suite",
          logo: "icons/meta-0668E1.svg",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="4" width="18" height="16" rx="3" stroke="#0668E1" stroke-width="2"/><path d="M7 15V12M12 15V9M17 15V11" stroke="#38BDF8" stroke-width="2.4" stroke-linecap="round"/></svg>',
          icone: "📣",
          ferr: "META BUSINESS SUITE",
          titulo: "Central de campanhas",
          desc: "Gerencia mensagens, comentários, anúncios e respostas automáticas",
          url: "https://business.facebook.com/",
          porque: "A Meta Business Suite gerencia anúncios, mensagens e automações integradas.",
          kw: ["campanha", "anuncio", "ads", "facebook", "meta business", "resposta", "marketing"],
          desktopNotice: "Recursos avançados de automação e campanhas aparecem completos apenas na versão Desktop.",
          details: {
            fullDescription: "Painel central da Meta para gerenciar caixa de entrada unificada (Instagram + Facebook + WhatsApp), comentários, agendamento de publicações, campanhas de anúncios e automações.",
            examples: [
              "Responder comentários e mensagens do Instagram e Facebook em um único lugar",
              "Criar automações por palavra-chave para enviar links quando alguém comentar",
              "Agendar Reels e carrosséis da semana e acompanhar métricas de alcance"
            ],
            compatibility: "Recursos avançados de automação e campanhas aparecem completos apenas na versão Desktop."
          }
        },
        {
          id: "meta-llama",
          logo: "icons/meta-color.svg",
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 3V10L5 14V20H19V14L16 10V3L13.5 6H10.5L8 3Z" fill="#0668E1" fill-opacity="0.2" stroke="#3B82F6" stroke-width="2" stroke-linejoin="round"/><circle cx="10" cy="13" r="1.2" fill="#93C5FD"/><circle cx="14" cy="13" r="1.2" fill="#93C5FD"/></svg>',
          icone: "🦙",
          ferr: "META LLAMA",
          titulo: "Modelos abertos",
          desc: "Portal oficial dos modelos abertos da Meta para desenvolvedores",
          url: "https://www.llama.com/",
          porque: "O portal Llama reúne os modelos abertos da Meta, pesos e documentação técnica.",
          kw: ["llama", "modelo", "abert", "open source", "dev", "documentac", "api", "codig"],
          details: {
            fullDescription: "Portal oficial dos modelos de código aberto da família Llama da Meta para desenvolvedores, pesquisadores e empresas que desejam rodar IA localmente ou em servidores próprios.",
            examples: [
              "Baixar os pesos oficiais dos modelos Llama para rodar offline com privacidade",
              "Consultar documentação técnica, guias de ajuste fino (fine-tuning) e APIs",
              "Comparar tamanhos de modelos (texto e multimodal) para integrar em softwares"
            ],
            compatibility: "Documentação acessível no celular; execução de modelos e código voltada para Desktop/servidores."
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

