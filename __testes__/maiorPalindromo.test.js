// __tests__/maiorPalindromo.test.js

const { maiorPalindromo } = require('../script');
const { isPalindromo } = require('../script');
test('Reverter a ordem das palavras na frase', () => {
    const frase = "babad";
    const palindromeTrue = isPalindromo("bab")
    const resultado = maiorPalindromo(frase);
    expect(resultado).toBe("bab");
    expect(palindromeTrue).toBe(true)
});