console.clear();

const prompt = require("prompt-sync")();

const apresentacao = [
  "Victória é uma criança que adora brincar. Se sente tão feliz quando está brincando que perde a noção do perigo, esquece de comer e só para quando está com muito sono. Vamos ajudá-la manter seus status de forma equilibrada durante um dia.",
  "Victória acabou de acordar e quer tomar um café da manhã. Vamos ajudá-la a escolher!",
  "Depois de se alimentar, Victória quer brincar.",
  "Agora ela não quer mais ficar parada, ela quer uma brincadeira que movimente o corpo.",
  "Essa última brincadeira deixou a Vitória muito cansada.",
  "Victória está faminta.",
  "Agora com as energias carregadas, mais brincadeiras.",
  "Agora o dia acabou. Hora de jantar e ir dormir.",
];

const perguntas = [
  {
    pergunta: " - O que será que eu vou comer?",
    respostas: [
      "Café com leite e bolacha",
      "Chocolate quente",
      "Suco com bolacha",
    ],
  },
  {
    pergunta: " - Do que será que eu vou brincar?",
    respostas: [
      "Jogar no celular",
      "Fazer vídeos engraçados",
      "Assistir vídeos no Youtube",
      "Desenhar",
      "Jogar Minecraft",
      "Jogar Roblox",
    ],
  },
  {
    pergunta: " - Do que será que eu vou brincar?",
    respostas: [
      "Jogar vôlei com o irmão",
      "Jogar futebol com o irmão",
      "Andar de bicicleta",
      "Pular corda",
      "Pular Amarelinha",
      "Andar de Patinete",
    ],
  },
  {
    pergunta:
      " - Poxa! preciso descansar e bebebr alguma coisa. O que devo beber?",
    respostas: ["Beber água", "Beber Refrigerante", "Beber suco"],
  },
  {
    pergunta: " - O que devo comer?",
    respostas: [
      "Um salgadinho",
      "Arroz, Feijão e batata ao molho",
      "Sanduiche de queijo",
    ],
  },
];

let statusPersonagem = {
  saude: 100,
  fome: 50,
  felicidade: 50,
  cansaco: 0,
  sono: 0,
};

function caminhar() {
  statusPersonagem.fome += 5;
  statusPersonagem.felicidade -= 7;
  statusPersonagem.cansaco += 5;
  statusPersonagem.sono += 10;
}

function correr() {
  statusPersonagem.fome += 12;
  statusPersonagem.felicidade += 10;
  statusPersonagem.cansaco += 12;
  statusPersonagem.sono += 5;
}

function brincar() {
  statusPersonagem.fome += 5;
  statusPersonagem.felicidade += 15;
  statusPersonagem.cansaco += 10;
  statusPersonagem.sono += 2;
}

function descansar() {
  statusPersonagem.fome -= 15;
  statusPersonagem.felicidade += 5;
  statusPersonagem.cansaco -= 20;
  statusPersonagem.sono += 2;
}

function comer() {
  statusPersonagem.fome -= 25;
  statusPersonagem.felicidade += 5;
  statusPersonagem.cansaco -= 20;
  statusPersonagem.sono += 2;
}

function dormir() {
  statusPersonagem.felicidade += 2;
  statusPersonagem.cansaco -= 25;
  statusPersonagem.sono -= 25;
}

function machucar() {
  statusPersonagem.saude -= 25;
  statusPersonagem.fome += 5;
  statusPersonagem.felicidade -= 15;
  statusPersonagem.cansaco += 15;
  statusPersonagem.sono += 10;
}

function curar() {
  statusPersonagem.saude += 25;
  statusPersonagem.fome += 2;
  statusPersonagem.felicidade += 20;
  statusPersonagem.cansaco -= 10;
  statusPersonagem.sono += 2;
}

function normalizar() {
  Object.keys(statusPersonagem).map(function (key, index) {
    if (statusPersonagem[key] < 0) {
      statusPersonagem[key] = 0;
    }
  });
  Object.keys(statusPersonagem).map(function (key, index) {
    if (statusPersonagem[key] > 100) {
      statusPersonagem[key] = 100;
    }
  });
}

function mostrarStatus() {
  normalizar();
  console.log(`
Saude:${statusPersonagem.saude} Fome:${statusPersonagem.fome} Felicidade:${statusPersonagem.felicidade} Cansaco:${statusPersonagem.cansaco} Sono:${statusPersonagem.sono}
`);
}

// Início
console.log(apresentacao[0]);

console.log();
prompt("Pressione ENTER para continuar.");
console.clear();

// Função Perguntar
let numPergunta = 0;
function perguntar(numPergunta) {
  let cont = 0;
  let tarefa = 0;
  do {
    mostrarStatus();
    console.log(`${apresentacao[numPergunta + 1]} Temos:\n`);

    cont = 0;
    while (cont < perguntas[numPergunta].respostas.length) {
      console.log(`(${cont + 1}) ${perguntas[numPergunta].respostas[cont]}`);
      cont++;
    }

    tarefa = +prompt(`\n${perguntas[numPergunta].pergunta} `);
  } while (tarefa <= 0 || tarefa > cont || isNaN(tarefa));
}

function verificaFome() {
  if (statusPersonagem.fome >= 85) {
    perguntar(4);
    caminhar();
    comer();
  }
}

function verificaCansaco() {
  if (statusPersonagem.cansaco >= 85) {
    perguntar(3);
    descansar();
  }
}

function verificaSono() {
  if (statusPersonagem.sono >= 85) {
    console.log("Victória está com muito sono. Está na hora de ela dormir");
    dormir();
  }
}

// Pergunta 1 - Café
verificaFome();
verificaCansaco();
perguntar(numPergunta++);
caminhar();
comer();

console.log(statusPersonagem.sono);

while (true) {
  if (statusPersonagem.sono <= 85) {
    // Pergunta - Brincar
    verificaFome();
    verificaCansaco();
    perguntar(numPergunta);
    caminhar();
    brincar();
    if (numPergunta == 1) {
      numPergunta = 2;
    } else {
      numPergunta = 1;
    }
  } else {
    break;
  }
}

verificaFome();
verificaCansaco();
verificaSono();
