const inputValue = document.getElementById("input");
const resultado = document.getElementById('resultado');
const selectExercicio = document.getElementById("exercicio");

const exercicios = {
    "Inverter palavras": inverterPalavras,
    "Remover duplicados": removerDuplicados,
    "Maior palindromo": maiorPalindromo,
    "Formatar frase": formatarFrase,
    "Anagrama de palindromo": anagramaPalindromo
};

function chamarExercicio() {
    const texto = inputValue.value;
    if (validarEntrada(texto)) {
        exibirResultado("Entrada Inválida", "text-danger");
        return;
    }
    const exercicio = selectExercicio.value;
    const funcaoExercicio = exercicios[exercicio];
    if (funcaoExercicio) {
        const resultadoExercicio = funcaoExercicio(texto);
        exibirResultado(resultadoExercicio, "text-success");
    }
}

function validarEntrada(valor) {
    return !valor || !valor.trim();
}

function exibirResultado(resultadoTexto, resultadoClasse) {
    resultado.className = resultadoClasse;
    resultado.innerHTML = resultadoTexto;
}

function inverterPalavras(frase) {
    return frase.split(" ").reverse().join(" ");
}

function removerDuplicados(frase) {
    const caracteresUnicos = [...new Set(frase)];
    return caracteresUnicos.join("");
}

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

function anagramaPalindromo(palavra) {
    const charFrequencyMap = {};
    for (const char of palavra) {
        charFrequencyMap[char] = (charFrequencyMap[char] || 0) + 1;
    }
    const oddCount = Object.values(charFrequencyMap).filter(count => count % 2 !== 0).length;
    return oddCount <= 1 ? "true" : "false";
}

// Exportar as funções
module.exports = {
    validarEntrada,
    inverterPalavras,
    removerDuplicados,
    maiorPalindromo,
    formatarFrase,
    anagramaPalindromo
};
