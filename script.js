// Controle do botão principal de curtir
let contadorCurtidas = 0;
const botaoCurtir = document.getElementById('btnCurtir');

botaoCurtir.addEventListener('click', function() {
    contadorCurtidas++;
    botaoCurtir.textContent = `Curtir (${contadorCurtidas})`;
});

// Controle dos botões de reações (coração e joinha)
let qtdCoracao = 0;
const btnCoracao = document.getElementById('btnCoracao');
const spanCoracao = document.getElementById('qtdCoracao');

btnCoracao.addEventListener('click', function() {
    qtdCoracao++;
    spanCoracao.textContent = qtdCoracao;
});

let qtdJoinha = 0;
const btnJoinha = document.getElementById('btnJoinha');
const spanJoinha = document.getElementById('qtdJoinha');

btnJoinha.addEventListener('click', function() {
    qtdJoinha++;
    spanJoinha.textContent = qtdJoinha;
});