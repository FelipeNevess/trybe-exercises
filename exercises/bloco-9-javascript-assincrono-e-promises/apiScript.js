const promice = () => {
  const newPromice = new Promise((resolve, reject) => {
    const receber = [];
    const random = Math.floor(Math.random() * 51);
    receber.push(random);

    const quadrado = receber.map((element) => (element * element) * 10)

    if (quadrado < 8000) {
      const div = [2, 3, 5, 10];
      const dividido = [];
      div.map((element) => {
        dividido.push(quadrado / element);
      })

      resolve(dividido.map(m1 => Math.round(m1)));

    } else {
      const frase = `Essa promise deve estar quebrada!`;
      reject(frase);
    }
  })

  newPromice
    .then((res) => console.log(`Promise Resolvida: ${res}`))
    .catch((frase) => console.log(`É mais de oito mil! ${frase}`));
}

promice();
