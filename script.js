function validarEntrada(valor) {
    if (valor === null || valor.trim() === "") {
      alert("Entrada inválida!");
    }
  }
  
  function reverterPalavras() {
    var inputValue = document.getElementById("input1").value;
    validarEntrada(inputValue);
  
    var palavras = inputValue.split(" ");
    var resultado = palavras.reverse().join(" ");
  
    document.getElementById("resultado1").textContent = resultado;
  }
  
  function removerDuplicados() {
    var inputValue = document.getElementById("input2").value;
    validarEntrada(inputValue);
  
    var caracteres = inputValue.split("");
    var caracteresUnicos = [...new Set(caracteres)];
    var resultado = caracteresUnicos.join("");
  
    document.getElementById("resultado2").textContent = resultado;
  }
  
  function encontrarMaiorPalindromo() {
    var inputValue = document.getElementById("input3").value;
    validarEntrada(inputValue);
  
    function isPalindromo(string) {
      var left = 0;
      var right = string.length - 1;
  
      while (left < right) {
        if (string.charAt(left) !== string.charAt(right)) {
          return false;
        }
        left++;
        right--;
      }
  
      return true;
    }
  
    var maiorPalindromo = "";
    for (var i = 0; i < inputValue.length; i++) {
      for (var j = i + 1; j <= inputValue.length; j++) {
        var substring = inputValue.substring(i, j);
        if (isPalindromo(substring) && substring.length > maiorPalindromo.length) {
          maiorPalindromo = substring;
        }
      }
    }
  
    document.getElementById("resultado3").textContent = maiorPalindromo;
  }
  
  function capitalizarFrase() {
    var inputValue = document.getElementById("input4").value;
    validarEntrada(inputValue);
  
    var frases = inputValue.split(/(?<=\.|\?)\s*/);
    var resultado = frases
      .map(function (frase) {
        return frase.charAt(0).toUpperCase() + frase.slice(1);
      })
      .join("");
  
    document.getElementById("resultado4").textContent = resultado;
  }
  
  function verificarAnagramaPalindromo() {
    var inputValue = document.getElementById("input5").value;
    validarEntrada(inputValue);
  
    function isAnagramaPalindromo(string) {
      var charFrequencyMap = {};
      for (var i = 0; i < string.length; i++) {
        var char = string[i];
        charFrequencyMap[char] = (charFrequencyMap[char] || 0) + 1;
      }
  
      var oddCount = 0;
      for (var count of Object.values(charFrequencyMap)) {
        if (count % 2 !== 0) {
          oddCount++;
        }
      }
  
      return oddCount <= 1;
    }
  
    var resultado = isAnagramaPalindromo(inputValue) ? "true" : "false";
    document.getElementById("resultado5").textContent = resultado;
  }
  