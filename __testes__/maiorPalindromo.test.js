// __tests__/maiorPalindromo.test.js

const { maiorPalindromo } = require('../script');
test('Reverter a ordem das palavras na frase', () => {
    const frase = "babad";
    const resultado = maiorPalindromo(frase);
    expect(resultado).toBe("bab");
});