// __tests__/reverterPalavras.test.js

const { reverterPalavras } = require('../script');
test('Reverter a ordem das palavras na frase', () => {
    const frase = "Hello, World! OpenAI is amazing.";
    const resultado = reverterPalavras(frase);
    expect(resultado).toBe("amazing. is OpenAI World! Hello,");
});
