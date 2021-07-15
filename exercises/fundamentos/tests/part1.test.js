const { sum, myRemove } = require('../src/part1');

describe('Modulo 1', () => {
  it('resultado esperado de (4, 5) é 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it('Teste se o retorno de sum(0, 0) é 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('Lança um erro quando os parâmetros são 4 e "5"', () => {
    expect(() => {
      sum(4, '5')
    }).toThrow();
  });

  it('Verifica se a mensagem de erro é "parameters must be numbers"', () => {
    expect(() => {
      sum(4, '5');
    }).toThrowError(new Error('parameters must be numbers'));
  })
});

describe('Modulo 2', () => {
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
})
