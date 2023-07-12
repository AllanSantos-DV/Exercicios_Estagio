# Manipulação de Strings

Este é um projeto simples que demonstra diferentes operações de manipulação de strings. Ele consiste em uma página web que permite ao usuário interagir com as funcionalidades implementadas.

## Menu

* ### [Restrições propostas para o desafio](#restrições-propostas)
* ### [Funcionalidades do projeto](#funcionalidades)
* ### [Como Usar a Aplicação](#como-usar)
    * #### ***GitHub Pages:*** [Exercicios PwC](https://allansantos-dv.github.io/Exercicios_Estagio/)
* ### [Funções do projeto](#funções)
* ### [Testes das funções com Jest](#testes-com-jest)
    * #### ***[Como instalar](#jest-passo-a-passo)***
    * #### ***[Testes realizados com jest](#testes-realizados)***
* ### [Entre em Contato](#contato)

## Restrições propostas

- Para todos os itens você pode presumir que a string de entrada conterá apenas caracteres alfabéticos, espaços e sinais de pontuação.
- A saída para cada tarefa deve ser retornada como uma string.

## Funcionalidades

O projeto inclui as seguintes funcionalidades:

1. ***Reversão da ordem das palavras nas frases:***

    - O usuário pode digitar uma frase e o programa irá inverter a ordem das palavras, mantendo a ordem das palavras individuais.

2. ***Remoção de caracteres duplicados:***

    - O usuário pode digitar uma frase e o programa irá remover todos os caracteres duplicados, deixando apenas uma ocorrência de cada caractere.

3. ***Encontrar a substring palindrômica mais longa:***

    - O usuário pode digitar uma palavra e o programa irá encontrar a substring palindrômica mais longa na palavra.

4. ***Capitalizar a primeira letra de cada frase:***

    - O usuário pode digitar uma frase e o programa irá colocar em maiúscula a primeira letra de cada frase na string.

5. ***Verificar se a string é um anagrama de um palíndromo:***

    - O usuário pode digitar uma palavra e o programa irá verificar se a palavra é um anagrama de um palíndromo, ou seja, se é possível rearranjar as letras para formar um palíndromo.

## Como usar

- Clonar o repositório para o seu ambiente local.
- Abrir o arquivo **index.html** em qualquer navegador web.
- Interagir com as diferentes funcionalidades digitando entrada no campo de texto selecionando o exercicio e clicando no botão "Gerar Resultado".

## Funções

1. Validação de entrada:

    - **Descrição:**

        - `validarEntrada`: Esta função recebe um valor como entrada e verifica se é nulo ou se contém apenas espaços em branco. Retorna `true` se a entrada for inválida e `false` se for válida.

        ```javascript
        function validarEntrada(valor) {
            return !valor || !valor.trim();
        }
        ```

2. Inverter palavras:

    - **Descrição:**

        - `inverterPalavras`: Esta função recebe uma frase como entrada, divide a frase em palavras, inverte a ordem das palavras e retorna a frase resultante.

        ```javascript
        function inverterPalavras(frase) {
            return frase.split(" ").reverse().join(" ");
        }
        ```

        - Exemplo:

            - **Entrada:**

                ```
                Hello, World! OpenAl is amazing.
                ```

            - **Resultado:**

                ```
                amazing. is OpenAl World! Hello,
                ```

3. Remover duplicados:

    - **Descrição:**

        - `removerDuplicados`: Esta função recebe uma frase como entrada, remove os caracteres duplicados da frase e retorna a frase resultante sem os duplicados.

        ```javascript
        function removerDuplicados(frase) {
            const caracteresUnicos = [...new Set(frase)];
            return caracteresUnicos.join("");
        }
        ```

        - Exemplo:

            - **Entrada:**

                ```
                Hello, World!
                ```

            - **Resultado:**

                ```
                Helo, Wrd!
                ```

4. Maior palíndromo:

    - **Descrição:**

        - `maiorPalindromo`: Esta função recebe uma palavra como entrada e encontra o maior palíndromo presente na palavra. Um palíndromo é uma palavra que se lê da mesma forma de trás para frente. A função percorre todas as substrings da palavra e retorna o maior palíndromo encontrado.

    ```javascript
        function maiorPalindromo(palavra) {
            let maiorPalindromo = '';
            for (let i = 0; i < palavra.length; i++) {
                for (let j = palavra.length; j > i + maiorPalindromo.length; j--) {
                    const substring = palavra.substring(i, j);
                    if (substring === substring.split('').reverse().join('')) {
                        maiorPalindromo = substring;
                        break;
                    }
                }
            }
            return maiorPalindromo;
        }
    ```

   - Exemplo:

     - **Entrada:**

         ```
             babad
         ```

     - **Resultado:**

       ```
           bab
       ```

5. Formatar frase:

    - **Descrição:**

        - `formatarFrase`: Esta função recebe uma frase como entrada e formata a frase em um estilo específico. A função converte todas as palavras para minúsculas, exceto a primeira letra de cada palavra que é convertida para maiúscula. Além disso, a função verifica se uma palavra é a primeira palavra da frase ou segue uma pontuação conhecida (como ".", "!", "?", ":") e, nesses casos, a primeira letra da palavra é convertida para maiúscula. A frase resultante é retornada.

        ```javascript
        function formatarFrase(frase) {
            const pontuacoesConhecidas = ['.', '!', '?', ':'];
            const palavras = frase.toLowerCase().split(' ');
            const novaFrase = palavras.map((palavra, i) =>
                (i === 0 || pontuacoesConhecidas.includes(palavras[i - 1].slice(-1)))
                    ? palavra.charAt(0).toUpperCase() + palavra.slice(1)
                    : palavra
            );
            return novaFrase.join(' ');
        }
        ```

        - Exemplo:

            - **Entrada:**

                ```
                hello. how are you? i'm fine, thank you.
                ```

            - **Resultado:**

                ```
                Hello. How are you? I'm fine, thank you.
                ```

6. Anagrama de palíndromo:

    - **Descrição:**

        - `anagramaPalindromo`: Esta função recebe uma palavra como entrada e verifica se é possível formar um palíndromo a partir das letras da palavra. Um palíndromo é uma palavra que se lê da mesma forma de trás para frente. A função conta a frequência de cada caractere na palavra e verifica quantos caracteres possuem uma contagem ímpar. Se houver no máximo um caractere com contagem ímpar, a função retorna "true", caso contrário, retorna "false".

        ```javascript
        function anagramaPalindromo(palavra) {
            const charFrequencyMap = {};
            for (const char of palavra) {
                charFrequencyMap[char] = (charFrequencyMap[char] || 0) + 1;
            }
            const oddCount = Object.values(charFrequencyMap).filter(count => count % 2 !== 0).length;
            return oddCount <= 1 ? "true" : "false";
        }
        ```

        - Exemplo:

            - **Entrada:**

                ```
                racecar
                ```

            - **Resultado:**

                ```
                true
                ```

## Testes com Jest

Os testes Jest são uma abordagem para verificar se o código está funcionando corretamente. Eles permitem criar casos de teste para cada função do projeto e verificar se o resultado produzido pela função corresponde ao resultado esperado. Os testes Jest são úteis para garantir a precisão do código, detectar problemas rapidamente e fornecer confiança na qualidade do software desenvolvido.

### Jest passo a passo

Aqui está um passo a passo simples para criar e executar testes com o Jest:

1. Certifique-se de ter o Jest instalado em seu projeto. Você pode instalá-lo usando o npm ou yarn, executando um dos seguintes comandos no terminal:

   ```
   npm install --save-dev jest
   ```

2. Crie um arquivo de teste para a função que deseja testar. Por exemplo, se sua função estiver no arquivo "script.js", crie um arquivo "script.test.js" na mesma pasta.

3. No arquivo de teste, importe a função que deseja testar e escreva um ou mais casos de teste usando a função `test` do Jest. Cada caso de teste deve verificar se a saída da função corresponde ao resultado esperado usando as funções `expect` e os métodos de comparação, como `toBe` ou `toEqual`.

   ```javascript
   const { suaFuncao } = require('./script');

   test('Descrição do caso de teste', () => {
     // Entrada
     const resultado = suaFuncao(arg1, arg2, ...);

     // Verificação
     expect(resultado).toBe(resultadoEsperado);
   });
   ```

4. No terminal, execute o comando para executar os testes do Jest:

   ```
   npx jest
   ```

   Isso executará todos os arquivos de teste com a extensão ".test.js" encontrados em seu projeto e mostrará os resultados no terminal.

5. Analise os resultados dos testes exibidos no terminal. Eles indicarão quais testes passaram e quais falharam, fornecendo informações úteis para depuração, se necessário.

Essas etapas básicas ajudarão você a criar e executar testes simples com o Jest em seu projeto.

### Testes realizados

Segue abaixo os testes realizados das seguintes funções:

- ### `validarEntrada`

    - **Descrição:**

        - Testa a função `validarEntrada` para verificar se exibe um alerta para entrada inválida.

    ```javascript
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
    ```

    - **Resultado:**

        ```
        Resultado: PASS ./validarEntrada.test.js
        ```

- ### `inverterPalavras`

    - **Descrição:**

        - Testa a função `inverterPalavras` para verificar se inverte corretamente a ordem das palavras na frase.

    ```javascript
    // __tests__/inverterPalavras.test.js

    const { inverterPalavras } = require('../script');

    test('Reverter a ordem das palavras na frase', () => {
        const frase = "Hello, World! OpenAI is amazing.";
        const resultado = inverterPalavras(frase);
        expect(resultado).toBe("amazing. is OpenAI World! Hello,");
    });
    ```

    - **Resultado:**

        ```
        Resultado: PASS ./inverterPalavras.test.js
        ```

- ### `removerDuplicados`

    - **Descrição:**

        - Testa a função `removerDuplicados` para verificar se remove corretamente os caracteres duplicados da frase.

    ```javascript
    // __tests__/removerDuplicados.test.js

    const { removerDuplicados } = require('../script');

    test('Remover caracteres duplicados da frase', () => {
        const frase = "Hello, World!";
        const resultado = removerDuplicados(frase);
        expect(resultado).toBe("Helo, Wrd!");
    });
    ```

    - **Resultado:**

        ```
        Resultado: PASS ./removerDuplicados.test.js
        ```

- ### `maiorPalindromo`

    - **Descrição:**

        - Testa a função `maiorPalindromo` para verificar se encontra corretamente o maior palíndromo presente na palavra.

    ```javascript
    // __tests__/maiorPalindromo.test.js

    const { maiorPalindromo } = require('../script');
  
    test('Reverter a ordem das palavras na frase', () => {
        const frase = "babad";
        const resultado = maiorPalindromo(frase);
        expect(resultado).toBe("bab");
    });
    ```

    - **Resultado:**

        ```
        Resultado: PASS ./maiorPalindromo.test.js
        ```

- ### `formatarFrase`

    - **Descrição:**

        - Testa a função `formatarFrase` para verificar se formata corretamente a frase.

    ```javascript
    // __tests__/formatarFrase.test.js

    const { formatarFrase } = require('../script');

    test('Formatar a frase com a primeira letra de cada palavra em maiúscula', () => {
        const frase = "hello. how are you? i'm fine, thank you.";
        const resultado = formatarFrase(frase);
        expect(resultado).toBe("Hello. How are you? I'm fine, thank you.");
    });
    ```

    - **Resultado:**

        ```
        Resultado: PASS ./formatarFrase.test.js
        ```

- ### `anagramaPalindromo`

    - **Descrição:**

        - Testa a função `anagramaPalindromo` para verificar se identifica corretamente se uma palavra é um anagrama de um palíndromo.

    ```javascript
    // __tests__/anagramaPalindromo.test.js

    const { anagramaPalindromo } = require('../script');

    test('Verificar se uma palavra é um anagrama de um palíndromo', () => {
        const palavra = "racecar";
        const resultado = anagramaPalindromo(palavra);
        expect(resultado).toBe("true");
    });
    ```

    - **Resultado:**

        ```
        Resultado: PASS ./anagramaPalindromo.test.js
        ```

## Contato

Se você tiver alguma dúvida ou sugestão sobre este projeto, sinta-se à vontade para entrar em contato comigo.

- Nome: Allan Santos
- E-mail: allannascimentodossantos@gmail.com
- GitHub: [Allan-Santos](https://github.com/AllanSantos-DV)

## Observação

Realizei melhorias no conteúdo dos testes do Jest e incluí exemplos adicionais para cobrir diferentes cenários de entrada. Espero que isso atenda às suas expectativas.