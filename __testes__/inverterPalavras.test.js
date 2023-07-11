// __tests__/inverterPalavras.test.js

const { inverterPalavras } = require('../script');
test('Reverter a ordem das palavras na frase', () => {
    const frase = "Hello, World! OpenAI is amazing.";
    const resultado = reverterPalavras(frase);
    expect(resultado).toBe("amazing. is OpenAI World! Hello,");
});
