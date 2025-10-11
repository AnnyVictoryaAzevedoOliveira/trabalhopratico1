const dados = {
  "cards": [
    {
      "id": 1,
      "nome": "O que é RPG?",
      "descricao": "Descubra o que é um Role-Playing Game (RPG) de mesa, por que ele é tão divertido e os elementos básicos para começar a jogar.",
      "conteudo": "Role-Playing Game (RPG) é um jogo onde os participantes interpretam personagens em histórias colaborativas, tomando decisões que afetam o enredo. É diversão, imaginação e estratégia!",
      "destaque": true,
      "data": "2025-10-10",
      "imagem_principal": "img/interrogar.jpg",
      "atracoes": []
    },
    {
      "id": 2,
      "nome": "História do RPG de mesa",
      "descricao": "Conheça a origem do RPG, desde os primórdios do D&D até os sistemas mais modernos.",
      "conteudo": "O RPG surgiu nos anos 70 com Dungeons & Dragons e evoluiu em múltiplos sistemas e estilos. Desde aventuras medievais até terror e ficção científica, cada época trouxe inovação.",
      "destaque": false,
      "data": "2025-10-09",
      "imagem_principal": "img/Caverna-do-Dragão-2.jpg",
      "atracoes": []
    },
    {
      "id": 3,
      "nome": "Como escolher um sistema para jogar?",
      "descricao": "Fantasia Medieval, Sci-Fi, Terror? Aprenda a identificar qual sistema (como D&D, Tormenta, Call of Cthulhu) se encaixa melhor no seu estilo e no da sua mesa.",
      "conteudo": "D&D para fantasia medieval, Call of Cthulhu para terror, Tormenta para aventuras épicas. Avalie o tema, regras e mecânicas antes de escolher seu sistema.",
      "destaque": true,
      "data": "2025-10-08",
      "imagem_principal": "img/rpg-books.jpg",
      "atracoes": []
    },
    {
      "id": 4,
      "nome": "O que é necessário para jogar?",
      "descricao": "Dados, lápis, papel e imaginação! Veja uma lista completa dos itens essenciais e opcionais para sua primeira sessão de RPG.",
      "conteudo": "Prepare seus dados poliédricos, lápis, folhas ou fichas de personagem, miniaturas e mapas. A criatividade e o bom humor são tão importantes quanto os acessórios!",
      "destaque": false,
      "data": "2025-10-07",
      "imagem_principal": "img/jogar_rpg.webp",
      "atracoes": []
    },
    {
      "id": 5,
      "nome": "Diferentes papéis de jogadores",
      "descricao": "Entenda as funções: o Mestre (Narrador), o Jogador Novato, o Roleplayer e o Power Gamer. Saiba como cada papel contribui para a diversão na mesa.",
      "conteudo": "Cada jogador tem um papel único: o Mestre conduz a história, o Novato aprende, o Roleplayer foca na interpretação e o Power Gamer busca otimizar seu personagem.",
      "destaque": true,
      "data": "2025-10-06",
      "imagem_principal": "img/mestre.jpg",
      "atracoes": []
    },
    {
      "id": 6,
      "nome": "Conheça o Veridice RPG",
      "descricao": "Uma análise detalhada do sistema Veridice RPG, suas regras únicas e seu universo de jogo.",
      "conteudo": "Veridice RPG oferece mecânicas únicas, um mundo rico em histórias e liberdade para criar personagens. Ideal para quem busca profundidade e flexibilidade.",
      "destaque": false,
      "data": "2025-10-05",
      "imagem_principal": "img/veridice.png",
      "atracoes": []
    },
    {
      "id": 7,
      "nome": "Crie sua ficha",
      "descricao": "Guia passo a passo para montar sua ficha de personagem do zero, definindo atributos, habilidades e o histórico que dará vida ao seu herói (ou vilão)!",
      "conteudo": "Defina atributos, habilidades, histórico e personalidade. Uma ficha bem construída ajuda na narrativa e na imersão do jogo.",
      "destaque": true,
      "data": "2025-10-04",
      "imagem_principal": "img/ficha rpg.jpg",
      "atracoes": []
    },
    {
      "id": 8,
      "nome": "Etiqueta e Boas Práticas na Mesa",
      "descricao": "Descubra as regras de ouro para um bom convívio, resolvendo conflitos, evitando o metagaming e criando um ambiente de jogo acolhedor para todos.",
      "conteudo": "Evite metagaming, respeite turnos, incentive a colaboração e a diversão de todos. Boas práticas tornam a experiência mais agradável para todos os jogadores.",
      "destaque": true,
      "data": "2025-10-02",
      "imagem_principal": "img/respeito.jpg",
      "atracoes": []
    },
    {
      "id": 9,
      "nome": "Comunidade Oficial no Discord",
      "descricao": "Junte-se ao nosso servidor oficial! Encontre mesas, mestres, jogadores e participe de discussões sobre sistemas de RPG.",
      "conteudo": "Evite metagaming, respeite turnos, incentive a colaboração e a diversão de todos. Boas práticas tornam a experiência mais agradável para todos os jogadores.",
      "destaque": true,
      "botaoTexto": "Entrar no Servidor",
      "data": "2025-10-02",
      "imagem_principal": "img/Discord_IAP_KeyVisuals_Header_02.jpg",
      "atracoes": []
    },
  ]
};

function gerarCards() {
  const container = document.getElementById('cards-container');
  if (!container) return; 

  dados.cards.forEach(card => {
    const col = document.createElement('div');
    col.className = 'col';

    col.innerHTML = `
      <div class="card h-100">
        <img src="${card.imagem_principal}" class="card-img-top" alt="${card.nome}">
        <div class="card-body">
          <h5 class="card-title">${card.nome}</h5>
          <p class="card-text">${card.descricao}</p>
          <a href="detalhes.html?id=${card.id}" class="btn btn-primary mt-2">Ver detalhes</a>
        </div>
      </div>
    `;

    container.appendChild(col);
  });
}

function gerarCarrossel() {
  const container = document.getElementById('carousel-container');
  if (!container) return;

  dados.cards.forEach((card, index) => {
    const slide = document.createElement('div');
    slide.className = `carousel-item ${index === 0 ? 'active' : ''}`;

    slide.innerHTML = `
      <a href="detalhes.html?id=${card.id}">
        <img src="${card.imagem_principal}" class="d-block w-100" alt="${card.nome}" style="height: 400px; object-fit: cover;">
        <div class="carousel-caption d-none d-md-block">
          <h5>${card.nome}</h5>
          <p>${card.descricao}</p>
        </div>
      </a>
    `;
    container.appendChild(slide);
  });
}

function mostrarDetalhe() {
  const container = document.getElementById('detalhe-card');
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));

  const card = dados.cards.find(c => c.id === id);

  if (card) {
    container.innerHTML = `
      <img src="${card.imagem_principal}" class="card-img-top" alt="${card.nome}">
      <div class="card-body">
        <h3 class="card-title">${card.nome}</h3>
        <p class="card-text">${card.descricao}</p>
        <p>${card.conteudo || ""}</p>
      </div>
    `;
  } else {
    container.innerHTML = `
      <div class="card-body">
        <p>Card não encontrado!</p>
        <a href="index.html" class="btn btn-secondary mt-3">Voltar</a>
      </div>
    `;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const path = window.location.pathname;

  if (path.includes("index.html") || path === "/" || path === "") {
    gerarCards();
    gerarCarrossel();
  } else if (path.includes("detalhes.html")) {
    mostrarDetalhe();
  }
});