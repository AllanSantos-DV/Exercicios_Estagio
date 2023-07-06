// __tests__/removerDuplicados.test.js

const { removerDuplicados } = require('../script');
test('Reverter a ordem das palavras na frase', () => {
    const frase = "Hello, World!";
    const resultado = removerDuplicados(frase);
    expect(resultado).toBe("Helo, Wrd!");
});