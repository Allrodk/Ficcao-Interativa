console.clear();

console.log(
  "O Victória é uma criança que adora brincar. Se sente tão feliz quando está brincando que perde a noção do perigo, esquece de comer e só para quando está com muito sono. Vamos ajudá-la manter seus status de forma equilibrada durante um dia."
);

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
machucar();

console.log(statusPersonagem);
while (statusPersonagem.fome < 100) {
  curar();
  console.log(statusPersonagem);
  zero();
  cem();
}
console.log(statusPersonagem);
