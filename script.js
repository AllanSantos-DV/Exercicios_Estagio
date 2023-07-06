function validarEntrada(valor) {
    if (valor === null || valor.trim() === "") {
      alert("Entrada inválida!");
    }
  }
  
  function reverterPalavras() {
    const inputValue = document.getElementById("input1").value;
    validarEntrada(inputValue);

    const palavras = inputValue.split(" ");
    document.getElementById("resultado1").textContent = palavras.reverse().join(" ");
  }
  
  function removerDuplicados() {
    const inputValue = document.getElementById("input2").value;
    validarEntrada(inputValue);

    const caracteres = inputValue.split("");
    const caracteresUnicos = [...new Set(caracteres)];
    document.getElementById("resultado2").textContent = caracteresUnicos.join("");
  }
  
  function encontrarMaiorPalindromo() {
    const inputValue = document.getElementById("input3").value;
    validarEntrada(inputValue);
  
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

    let maiorPalindromo = "";
    for (let i = 0; i < inputValue.length; i++) {
      for (let j = i + 1; j <= inputValue.length; j++) {
        const substring = inputValue.substring(i, j);
        if (isPalindromo(substring) && substring.length > maiorPalindromo.length) {
          maiorPalindromo = substring;
        }
      }
    }
  
    document.getElementById("resultado3").textContent = maiorPalindromo;
  }

function formatarFrase() {
  const pontuacoesConhecidas = ['.', '!', '?', ':'];
  const fraseElement = document.getElementById("input4").value;

  const palavras = fraseElement.split(' ');
  const novaFrase = palavras.map((palavra, i) => {
    if (i === 0 || pontuacoesConhecidas.includes(palavras[i - 1].slice(-1))) {
      return palavra.charAt(0).toUpperCase() + palavra.slice(1);
    } else {
      return palavra;
    }
  });
  document.getElementById('resultado4').innerText = novaFrase.join(' ');
}


  function verificarAnagramaPalindromo() {
    const inputValue = document.getElementById("input5").value;
    validarEntrada(inputValue);
  
    function isAnagramaPalindromo(string) {
      const charFrequencyMap = {};
      for (let i = 0; i < string.length; i++) {
        const char = string[i];
        charFrequencyMap[char] = (charFrequencyMap[char] || 0) + 1;
      }

      let oddCount = 0;
      for (const count of Object.values(charFrequencyMap)) {
        if (count % 2 !== 0) {
          oddCount++;
        }
      }
  
      return oddCount <= 1;
    }

  document.getElementById("resultado5").textContent = isAnagramaPalindromo(inputValue) ? "true" : "false";
  }
  