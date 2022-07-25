console.clear();

const prompt = require("prompt-sync")();

const apresentacao = [
  "Victória é uma criança que adora brincar. Se sente tão feliz quando está brincando que perde a noção do perigo, esquece de comer e só para quando está com muito sono. Vamos ajudá-la manter seus status de forma equilibrada durante um dia.",
  "Victória acabou de acordar e quer tomar um café da manhã. Vamos ajudá-la a escolher!",
  "Depois de se alimentar, Victória quer brincar.",
  "Agora ela não quer mais ficar parada, ela quer uma brincadeira que movimente o corpo.",
  "Essa última brincadeira deixou a Vitória muito cansada.",
  "Agora que ela descansou, está na hora de comer.",
  "Agora com as energias carregadas, mais brincadeiras.",
  "Agora o dia acabou. Hora de jantar e ir dormir.",
];

const perguntas = [
  [],
  {
    pergunta: " - O que será que eu vou comer?",
    cafe: ["Café com leite e bolacha", "Chocolate quente", "Suco com bolacha"],
  },
  {
    pergunta: " - Do que será que eu vou brincar?",
    brincadeira1: [
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
    brincadeira2: [
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
    descanso: ["Beber água", "Beber Refrigerante", "Beber suco"],
  },
  {
    pergunta: " - O que devo comer?",
    alimentacao: [
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
  statusPersonagem.felicidade -= 2;
  statusPersonagem.cansaco += 5;
  statusPersonagem.sono += 2;
}

function correr() {
  statusPersonagem.fome += 8;
  statusPersonagem.felicidade += 2;
  statusPersonagem.cansaco += 8;
  statusPersonagem.sono += 5;
}

function brincar() {
  statusPersonagem.fome += 5;
  statusPersonagem.felicidade += 5;
  statusPersonagem.cansaco += 2;
  statusPersonagem.sono += 2;
}

function comer() {
  statusPersonagem.fome -= 25;
  statusPersonagem.felicidade += 5;
  statusPersonagem.cansaco += 2;
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

function zero() {
  Object.keys(statusPersonagem).map(function (key, index) {
    if (statusPersonagem[key] < 0) {
      statusPersonagem[key] = 0;
    }
  });
}

function cem() {
  Object.keys(statusPersonagem).map(function (key, index) {
    if (statusPersonagem[key] > 100) {
      statusPersonagem[key] = 100;
    }
  });
}

function mostrarStatus() {
  console.log(`
Saude: ${statusPersonagem.saude}
Fome: ${statusPersonagem.fome}
Felicidade: ${statusPersonagem.felicidade}
Cansaco: ${statusPersonagem.cansaco}
Sono: ${statusPersonagem.sono}
  `);
}

// Início
console.log(apresentacao[0]);

console.log();
prompt("Pressione ENTER para continuar.");
console.clear();

// Pergunta 1 - Café
let numPergunta = 1;
let cont = 0;
let tarefa = 0;
do {
  mostrarStatus();
  console.log(`${apresentacao[numPergunta]} Temos:\n`);

  cont = 0;
  while (cont < perguntas[numPergunta].cafe.length) {
    console.log(`(${cont + 1}) ${perguntas[numPergunta].cafe[cont]}`);
    cont++;
  }

  tarefa = +prompt(`\n${perguntas[numPergunta].pergunta} `);
} while (tarefa <= 0 || tarefa > cont || isNaN(tarefa));

// Pergunta 2 - Brincar
numPergunta++;
cont = 0;
tarefa = 0;
do {
  mostrarStatus();
  console.log(`${apresentacao[numPergunta]} Temos:\n`);

  cont = 0;
  while (cont < perguntas[numPergunta].brincadeira1.length) {
    console.log(`(${cont + 1}) ${perguntas[numPergunta].brincadeira1[cont]}`);
    cont++;
  }

  tarefa = +prompt(`\n${perguntas[numPergunta].pergunta} `);
} while (tarefa <= 0 || tarefa > cont || isNaN(tarefa));

// Pergunta 3 - Brincar
numPergunta++;
cont = 0;
tarefa = 0;
do {
  mostrarStatus();
  console.log(`${apresentacao[numPergunta]} Temos:\n`);

  cont = 0;
  while (cont < perguntas[numPergunta].brincadeira2.length) {
    console.log(`(${cont + 1}) ${perguntas[numPergunta].brincadeira2[cont]}`);
    cont++;
  }

  tarefa = +prompt(`\n${perguntas[numPergunta].pergunta} `);
} while (tarefa <= 0 || tarefa > cont || isNaN(tarefa));
