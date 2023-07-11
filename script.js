//Elementos html
const inputValue = document.getElementById("input");
let resultado = document.getElementById('resultado');

const exercicios = {
    "Inverter palavras": inverterPalavras,
    "Remover duplicados": removerDuplicados,
    "Maior palindromo": maiorPalindromo,
    "Formatar frase": formatarFrase,
    "Anagrama de palindromo": anagramaPalindromo
};

function chamarExercicio() {
    const texto = inputValue.value;
    const exercicio = document.getElementById("exercicio").value;
    const funcaoExercicio = exercicios[exercicio];
    (funcaoExercicio) ? resultado.innerHTML = funcaoExercicio(texto) : alert("Exercicio Invalido");
}

function validarEntrada() {
    const valor = inputValue.value;
    (valor === null || valor.trim() === "") ? alert("Entrada Invalida") : chamarExercicio();
}

function inverterPalavras(frase) {
    const palavras = frase.split(" ");
    return palavras.reverse().join(" ")
}

function removerDuplicados(frase) {
    const caracteres = frase.split("");
    const caracteresUnicos = [...new Set(caracteres)];
    return caracteresUnicos.join("");
}

function maiorPalindromo(palavra) {
    let maiorPalindromo = '';

    for (let i = 0; i < palavra.length; i++) {
        for (let j = palavra.length; j > i + maiorPalindromo.length; j--) {
            const substring = palavra.substring(i, j);
            if (substring === substring.split('').reverse().join('') && substring.length > maiorPalindromo.length) {
                maiorPalindromo = substring;
                break;
            }
        }
    }
    return maiorPalindromo;
}

function formatarFrase(frase) {
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