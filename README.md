# Manipulação de Strings

Este é um projeto simples que demonstra diferentes operações de manipulação de strings. Ele consiste em uma página web
que permite ao usuário interagir com as funcionalidades implementadas.

## Menu
 - ### [Restrições propostas para o desafio](#restrições-propostas)
- ### [Funcionalidades do projeto](#funcionalidades)
- ### [Como Usar a Aplicação](#como-usar)
- ### [Funções do projeto](#funções)
- ### [Testes das funçoes com Jest](#testes-com-jest)
- ### [Entre em Contato](#contato)


## Restrições propostas

- Para todos os itens você pode presumir que a string de entrada conterá apenas
  caracteres alfabéticos, espaços e sinais de pontuação.
- A saída para cada tarefa deve ser retornada como uma string.

## Funcionalidades

### O projeto inclui as seguintes funcionalidades:

1. ***Reversão da ordem das palavras nas frases:***
    - **O usuário pode digitar uma frase e o programa irá inverter a ordem das palavras, mantendo a ordem das palavras
      individuais.** <br><br>

2. ***Remoção de caracteres duplicados:***
    - **O usuário pode digitar uma frase e o programa irá remover todos os caracteres duplicados, deixando apenas uma
      ocorrência de cada caractere.** <br><br>

3. ***Encontrar a substring palindrômica mais longa:***
    - **O usuário pode digitar uma palavra e o programa irá encontrar a substring palindrômica mais longa na palavra.
      ** <br><br>

4. ***Capitalizar a primeira letra de cada frase:***
    - **O usuário pode digitar uma frase e o programa irá colocar em maiúscula a primeira letra de cada frase na string.
      ** <br><br>

5. ***Verificar se a string é um anagrama de um palíndromo:***
    - **O usuário pode digitar uma palavra e o programa irá verificar se a palavra é um anagrama de um palíndromo, ou
      seja, se é possível rearranjar as letras para formar um palíndromo.**

## Como usar

1. Acesse o site [Exercicios](https://allansantos-dv.github.io/Exercicios_Estagio/) e siga os exemplos de uso listados
   no proximo topico.
2. Ou se preferir vc podera:
    - Clonar o repositório para o seu ambiente local.
    - Abrir o arquivo **index.html** em qualquer navegador web.
    - Interajir com as diferentes funcionalidades digitando entradas nos campos de texto e clicando no botão "Gerar
      Resultado" correspondente.

## Funções

**Validação de entrada:**

- **Descrição:**
    - `validarEntrada:`Esta função recebe um valor como entrada e verifica se é nulo ou se contém apenas espaços em
      branco.
      Se a entrada for inválida, ela exibe um alerta informando sobre a entrada inválida.

        ```
        function validarEntrada(valor) {
        if (valor === null || valor.trim() === "") {
              alert("Entrada inválida!");
        }
      }
      ```

1. Reversão da ordem das palavras nas frases:
    - **Descrição:**
    - `reverterPalavras:` Esta função obtém o valor de entrada de um elemento HTML e valida a entrada. Em seguida,
      divide a entrada em palavras, reverte a ordem das palavras e as une novamente. O resultado é exibido em outro
      elemento HTML.

   ```
   function reverterPalavras(frase) {
    validarEntrada(frase);
    const palavras = frase.split(" ");
    return palavras.reverse().join(" ");
   }
   ```

    - <code>ENTRADA: Hello, World! OpenAl is amazing.</code>
    - <pre>RESULTADO: amazing. is OpenAl World! Hello,</pre>

2. Remoção de caracteres duplicados:
    - **Descrição:**
    - `removerDuplicados:` Esta função obtém o valor de entrada de um elemento HTML e valida a entrada. Em seguida,
      divide a entrada em caracteres, remove os caracteres duplicados e os une novamente. O resultado é exibido em
      outro
      elemento HTML.

   ```
   function removerDuplicados(frase) {
    validarEntrada(frase);
    const caracteres = frase.split("");
    const caracteresUnicos = [...new Set(caracteres)];
    return caracteresUnicos.join("");
   }
   ```

    - <code>ENTRADA: Hello, World!</code>
    - <pre>RESULTADO: Helo, Wrd!</pre>

3. Encontrar a substring palindrômica mais longa:
    - **Descrição:**
    - `encontrarMaiorPalindromo:` Esta função obtém o valor de entrada de um elemento HTML e valida a entrada.
      Em
      seguida, verifica todas as substrings possíveis na entrada e encontra a maior substring que é um
      palíndromo usando
      a função `isPalindromo` . O
      maior palíndromo encontrado é exibido em um elemento HTML.

   ```
   function encontrarMaiorPalindromo(palavra) {
    validarEntrada(palavra);
    let maiorPalindromo = "";
    for (let i = 0; i < palavra.length; i++) {
        for (let j = i + 1; j <= palavra.length; j++) {
            const substring = palavra.substring(i, j);
            if (isPalindromo(substring) && substring.length > maiorPalindromo.length) {
                maiorPalindromo = substring;
            }
        }
    }
    return maiorPalindromo;
   }
   ```

   ```
   function isPalindromo(string) {
    let left = 0;
    let right = string.length - 1;

    while (left < right) {
        if (string.charAt(left) !== string.charAt(right)) {
            return false;
        }
        left++;
        right--;
    }
    return true;
   }
   ```

    - <code>ENTRADA: babad</code>
    - <pre>RESULTADO: bab</pre>

4. Capitalizar a primeira letra de cada frase:
    - **Descrição:**
    - `formatarFrase:` Esta função obtém o valor de entrada de um elemento HTML e valida a entrada. Em seguida, divide a
      frase em palavras, formata as palavras capitalizando a primeira letra de cada palavra que segue uma pontuação
      conhecida e une as palavras novamente em uma frase formatada. A frase formatada é exibida em um elemento HTML.
    - `Pontuações consideradas: ['.', '!', '?', ':']`

   ```
   function formatarFrase(frase) {
    validarEntrada(frase);
    const pontuacoesConhecidas = ['.', '!', '?', ':'];
    const palavras = frase.split(' ');
    const novaFrase = palavras.map((palavra, i) => {
        if (i === 0 || pontuacoesConhecidas.includes(palavras[i - 1].slice(-1))) {
            return palavra.charAt(0).toUpperCase() + palavra.slice(1);
        } else {
            return palavra;
        }
    });
    return novaFrase.join(' ');
   }
   ```

    - <code>ENTRADA: hello. how are you? i'm fine, thank you.</code>
    - <pre>RESULTADO: Hello. How are you? I'm fine, thank you.</pre>

5. Verificar se a string é um anagrama de um palíndromo:
    - **Descrição:**
    - `verificarAnagramaPalindromo:` Esta função obtém o valor de entrada de um elemento HTML e valida a entrada. Em
      seguida, verifica se a entrada é um anagrama de um palíndromo. Se for um anagrama de um palíndromo, o resultado
      será "true"; caso contrário, será "false". O resultado é exibido em um elemento HTML.

   ```
   function verificarAnagramaPalindromo(palavra) {
    validarEntrada(palavra);
    const charFrequencyMap = {};
    for (let i = 0; i < palavra.length; i++) {
        const char = palavra[i];
        charFrequencyMap[char] = (charFrequencyMap[char] || 0) + 1;
    }
    let oddCount = 0;
    for (const count of Object.values(charFrequencyMap)) {
        if (count % 2 !== 0) {
            oddCount++;
        }
    }
    return document.getElementById("resultado5").textContent = oddCount <= 1 ? "true" : "false";
   }
   ```
    - <code>ENTRADA: racecar</code>
    - <pre>RESULTADO: true</pre>

## Testes com Jest

**Foram realizados testes das seguintes funçoes:**

- ### `validarEntrada`
   ```
   // __tests__/validarEntrada.test.js

   const { validarEntrada } = require('../script');
   test('Deve exibir um alerta para entrada inválida', () => {
      const valorInvalido = null;
      const alertMock = jest.spyOn(global, 'alert').mockImplementation();
      validarEntrada(valorInvalido);
      expect(alertMock).toHaveBeenCalledWith('Entrada inválida!');
   });
   ```

   ```
   Resultado: PASS ./validarEntrada.test.js
   ```

- ### `reverterPalavras`

   ```
   // __tests__/reverterPalavras.test.js

   const { reverterPalavras } = require('../script');
   test('Reverter a ordem das palavras na frase', () => {
      const frase = "Hello, World! OpenAI is amazing.";
      const resultado = reverterPalavras(frase);
      expect(resultado).toBe("amazing. is OpenAI World! Hello,");
   });
   ```

   ```
   Resultado: PASS ./reverterPalavras.test.js
   ```

- ### `removerDuplicados`

   ```
   // __tests__/removerDuplicados.test.js

   const { removerDuplicados } = require('../script');
   test('Reverter a ordem das palavras na frase', () => {
      const frase = "Hello, World!";
      const resultado = removerDuplicados(frase);
      expect(resultado).toBe("Helo, Wrd!");
   });
   ```

   ```
   Resultado: PASS ./removerDuplicados.test.js
   ```

- ### `maiorPalindromo` juntamente com `isPalindromo`

   ```
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
   ```

   ```
   Resultado: PASS ./maiorPalindromo.test.js
   ```

- ### `formatarFrase`

   ```
   // __tests__/formatarFrase.test.js

   const { formatarFrase } = require('../script');
   test('Reverter a ordem das palavras na frase', () => {
      const frase = "hello. how are you? i'm fine, thank you.";
      const resultado = formatarFrase(frase);
      expect(resultado).toBe("Hello. How are you? I'm fine, thank you.");
   });
   ```

   ```
   Resultado: PASS ./formatarFrase.test.js
   ```

- ### `anagramaPalindromo`

   ```
   // __tests__/formatarFrase.test.js

   const { anagramaPalindromo } = require('../script');
   test('Reverter a ordem das palavras na frase', () => {
      const frase = "racecar";
      const resultado = anagramaPalindromo(frase);
      expect(resultado).toBe("true");
   });
   ```
  ```
  Resultado: PASS ./anagramaPalindromo.test.js
  ```

## Contato

Se você tiver alguma dúvida ou sugestão sobre este projeto, sinta-se à vontade para entrar em contato comigo.

- Nome: Allan Santos
- E-mail: allannascimentodossantos@gmail.com
- GitHub: [Allan-Santos](https://github.com/AllanSantos-DV)
