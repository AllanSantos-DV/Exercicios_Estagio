//Elementos html
const inputValue1 = document.getElementById("input1");
const inputValue2 = document.getElementById("input2");
const inputValue3 = document.getElementById("input3");
const inputValue4 = document.getElementById("input4");
const inputValue5 = document.getElementById("input5");
let resultado1 = document.getElementById('resultado1');
let resultado2 = document.getElementById('resultado2');
let resultado3 = document.getElementById('resultado3');
let resultado4 = document.getElementById('resultado4');
let resultado5 = document.getElementById('resultado5');

function validarEntrada(valor) {
    if (valor === null || valor.trim() === "") {
        alert("Entrada inválida!");
    }
}

function chamarReverterPalavras(){resultado1.innerText = reverterPalavras(inputValue1.value)}
function chamarRemoverDuplicados(){resultado2.innerText = removerDuplicados(inputValue2.value)}
function chamarMaiorPalindromo(){resultado3.innerText = maiorPalindromo(inputValue3.value)}
function chamarFormatarFrase(){resultado4.innerText = formatarFrase(inputValue4.value)}
function chamarAnagramaPalindromo(){resultado5.innerText = anagramaPalindromo(inputValue5.value)}

function reverterPalavras(frase) {
    validarEntrada(frase);
    const palavras = frase.split(" ");
    return palavras.reverse().join(" ")
}

function removerDuplicados(frase) {
    validarEntrada(frase);
    const caracteres = frase.split("");
    const caracteresUnicos = [...new Set(caracteres)];
    return caracteresUnicos.join("");
}

function maiorPalindromo(palavra) {
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


function anagramaPalindromo(palavra) {
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
    return oddCount <= 1 ? "true" : "false";
}

// Exportar a função
module.exports = { validarEntrada, reverterPalavras, removerDuplicados, maiorPalindromo, isPalindromo, formatarFrase, anagramaPalindromo };
  