/* CAFOFO - DADOS EDITAVEIS
   Tudo que muda com o tempo (nomes, links, descricoes) fica AQUI.
   Para atualizar o app, mexa so neste arquivo. */
window.CAFOFO = {
  // Cole aqui o link da sua pasta de imagens no Google Drive (opcional).
  // Se ficar vazio, o botao abre o Drive normal.
  driveFolderUrl: "",

  tools: {
    gemini:   { nome: "Gemini (app)",     url: "https://gemini.google.com/app",              oque: "Chat, Nano Banana (imagens), Deep Research, Canvas e Gems" },
    flow:     { nome: "Google Flow",      url: "https://labs.google/fx/tools/flow",          oque: "Cria vídeos e imagens (Veo)" },
    music:    { nome: "Flow Music",       url: "https://flowmusic.app",                      oque: "Cria músicas com letra e voz" },
    notebook: { nome: "Gemini Notebook",  url: "https://notebook.google.com",                oque: "Lê seus PDFs e fontes: resumo, mapa mental e podcast" },
    aistudio: { nome: "AI Studio",        url: "https://aistudio.google.com",                oque: "Criar apps e testar IA (cota própria, separada do Plus)" },
    docs:     { nome: "Google Docs",      url: "https://docs.google.com/document/u/0/",      oque: "Escrever textos com ajuda do Gemini" },
    sheets:   { nome: "Google Planilhas", url: "https://docs.google.com/spreadsheets/u/0/",  oque: "Tabelas e análise de dados" },
    gmail:    { nome: "Gmail",            url: "https://mail.google.com",                    oque: "Ler, resumir e redigir e-mails" },
    drive:    { nome: "Google Drive",     url: "https://drive.google.com",                   oque: "Seus arquivos na nuvem" },
    translate:{ nome: "Google Tradutor",  url: "https://translate.google.com",               oque: "Tradução de textos" }
  },

  // kw = inicios de palavras (sem acento). O app escolhe a tarefa com mais acertos.
  intents: [
    { id: "imagem", logo: "icons/nanobanana-color.svg",  icone: "🖼️", titulo: "Criar ou editar imagem", tool: "gemini",
      porque: "Imagens e edição de fotos (Nano Banana) ficam dentro do app Gemini.",
      kw: ["imag","foto","logo","desenh","render","planta","layout","ilustr","design","aquario","retrato","arte","figura","editar foto","tirar fundo","colocar"] },
    { id: "video",   icone: "🎬", titulo: "Criar vídeo", tool: "flow",
      porque: "Vídeos são feitos no Google Flow.",
      kw: ["video","film","clipe","animac","animar","veo","cena","reels","shorts"] },
    { id: "musica",  icone: "🎵", titulo: "Criar música", tool: "music",
      porque: "Músicas com letra e voz são feitas no Flow Music.",
      kw: ["music","cancao","trilha","jingle","melodia","cantar","beat"] },
    { id: "estudar", logo: "icons/notebooklm.svg", icone: "📚", titulo: "Estudar ou resumir PDF", tool: "notebook",
      porque: "O Gemini Notebook lê os seus arquivos e gera resumo, mapa mental e podcast.",
      kw: ["pdf","estud","resum","livro","artigo","apostila","podcast","mapa mental","fonte","prova","aula","ebook"] },
    { id: "pesquisa", logo: "icons/gemini-color.svg",icone: "🔎", titulo: "Pesquisa profunda", tool: "gemini",
      porque: "A Deep Research do Gemini monta relatórios com várias fontes.",
      kw: ["pesquis","relatorio","comparar","mercado","concorrente","analise","tendenc","existe algum"] },
    { id: "codigo", logo: "icons/gemini-color.svg",  icone: "💻", titulo: "Criar site, app ou código", tool: "gemini",
      porque: "O Canvas do Gemini escreve e mostra código na hora.",
      kw: ["codig","program","site","aplicativo","app ","python","script","landing","backend","pagina web","html","sistema"] },
    { id: "texto", logo: "icons/googledocs.svg",   icone: "📝", titulo: "Escrever documento", tool: "docs",
      porque: "O Google Docs tem o Gemini dentro para escrever e revisar.",
      kw: ["documento","carta","redigir","redacao","contrato","ata","oficio","curriculo"] },
    { id: "planilha", logo: "icons/googlesheets.svg",icone: "📊", titulo: "Planilha ou tabela", tool: "sheets",
      porque: "No Planilhas você organiza e analisa dados.",
      kw: ["planilha","excel","tabela","orcamento","controle de"] },
    { id: "email", logo: "icons/gmail.svg",   icone: "✉️", titulo: "E-mail", tool: "gmail",
      porque: "O Gmail tem o Gemini para resumir e escrever e-mails.",
      kw: ["email","e-mail","gmail","responder","mensagem"] },
    { id: "traduzir", logo: "icons/googletranslate.svg",icone: "🌐", titulo: "Traduzir", tool: "translate",
      porque: "O Google Tradutor traduz na hora.",
      kw: ["traduz","traduc","idioma","ingles","espanhol","frances"] },
    { id: "arquivos", logo: "icons/googledrive.svg",icone: "🗂️", titulo: "Meus arquivos", tool: "drive",
      porque: "Seus arquivos ficam no Google Drive.",
      kw: ["drive","arquivo","nuvem","pasta"] }
  ],

  padrao: { tool: "gemini", porque: "Não reconheci o pedido. O Gemini é o chat geral e costuma resolver." }
};
