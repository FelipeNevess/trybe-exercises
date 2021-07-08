const promice = () => {
  const newPromice = new Promise((resolve, reject) => {
    const receber = [];
    const random = Math.floor(Math.random() * 51);
    receber.push(random);

    const quadrado = receber.map((element) => (element * element) * 10)

    console.log(quadrado);
    (quadrado < 8000) ? resolve() : reject();
  })

  newPromice
    .then(() => console.log(`Promise resolvida`))
    .catch(() => console.log(`Promise rejeitada`));
}

promice();
