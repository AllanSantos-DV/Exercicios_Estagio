// __tests__/validarEntrada.test.js

const { validarEntrada } = require('../script');
test('Deve exibir um alerta para entrada inválida', () => {
    const valorInvalido = null;
    const alertMock = jest.spyOn(global, 'alert').mockImplementation();
    validarEntrada(valorInvalido);
    expect(alertMock).toHaveBeenCalledWith('Entrada inválida!');
});

