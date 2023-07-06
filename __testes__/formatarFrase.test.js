// __tests__/formatarFrase.test.js

const { formatarFrase } = require('../script');
test('Reverter a ordem das palavras na frase', () => {
    const frase = "hello. how are you? i'm fine, thank you.";
    const resultado = formatarFrase(frase);
    expect(resultado).toBe("Hello. How are you? I'm fine, thank you.");
});