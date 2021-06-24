const comparar = (computer, player) => computer === player;

const hofResultado = (callback) => {
  const computer = Math.floor(Math.random() * 5) + 1;
  const player = Math.floor(Math.random() * 5) + 1;

  console.log(`Computador jogou: ${computer} e o player: ${player}`);

  return callback(computer, player) ? 'Parabéns você acertou' : 'Você errou!';
}

console.log(hofResultado(comparar));
