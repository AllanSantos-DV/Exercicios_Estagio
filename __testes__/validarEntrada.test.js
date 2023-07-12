// __tests__/validarEntrada.test.js

const { validarEntrada } = require('../script');

test('Deve retornar true para entrada inválida ou com somente espaços em branco', () => {
    const valorInvalido = null;
    const valorEspaco = "     ";
    const resultado = validarEntrada(valorInvalido);
    const resultadoEspaco = validarEntrada(valorEspaco);
    expect(resultado).toBe(true);
    expect(resultadoEspaco).toBe(true);
});

test('Deve retornar false para entrada válida', () => {
    const valorValido = 'Olá, mundo!';
    const resultado = validarEntrada(valorValido);
    expect(resultado).toBe(false);
});
