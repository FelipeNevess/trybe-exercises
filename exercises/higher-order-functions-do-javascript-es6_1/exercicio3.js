const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const result = () => {
  let cont = 0;
  for (let i in rightAnswers) {
    if (rightAnswers[i] === studentAnswers[i]) {
      cont += 1;
    } else if ('N.A' === studentAnswers[i]) {
      cont += 0;
    } else {
      cont -= 0.5;
    }
  }
  console.log(`O aluno acertou ${cont} de ${studentAnswers.length}`);
  return cont;
}

const verificar = (an1, an2, callback) => {
  return callback(an1, an2);
}

verificar(rightAnswers,studentAnswers,result);
