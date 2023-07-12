// __tests__/anagramaPalindromo.test.js

const { anagramaPalindromo } = require('../script');
test('Reverter a ordem das palavras na frase', () => {
    const frase = "racecar";
    const resultado = anagramaPalindromo(frase);
    expect(resultado).toBe("true");
});