
function numAleatorio (min, max) {
    const random = Math.floor(Math.random() * (max - min) + min);
    return random;
}

function numGerar (event) {
   const numGerado = numAleatorio(1, 100);
   console.log(numGerado);
   document.getElementById('result').textContent = 'Número que pensei: ' + numGerado;
}

const botao = document.getElementById('num-gerar');
botao.addEventListener("click", numGerar);

function numLimpar(event) {
    document.getElementById('result').textContent = 'Número que pensei: ';
}

const limpar = document.getElementById('num-limpar');
limpar.addEventListener("click", numLimpar);


