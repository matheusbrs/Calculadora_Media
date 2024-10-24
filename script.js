const form = document.getElementById('atividade-form');
const aprovado = `<img src='img/aprovado.png'>`;
const reprovado = `<img src='img/reprovado.png'>`;
const spanAprovado = '<span class="aprovado">aprovado</span>';
const spanReprovado = '<span class="reprovado">reaprovado</span>';
const atividades = [];
const notas = [];
let linhas = '';

form.addEventListener('submit', (e) => {
    e.preventDefault();

    criaLinha();
    adicionaLinha();
    resultadoFinal()

});

function criaLinha() {
    const nome = document.getElementById('nome');
    const nota = document.getElementById('nota');

   

    if(atividades.includes(nome.value)){
        alert(`A atividade ${nome.value} ja foi inserida`);
    }else{
        atividades.push(nome.value);
        notas.push(parseFloat(nota.value));

         let linha = '<tr>';
    linha += `<td>${nome.value}</td>`;
    linha += `<td>${nota.value}</td>`;
    linha += `<td>${nota.value >= 7 ? aprovado : reprovado}</td>`;
    linha += '</tr>';

    linhas += linha;
    }

   
}

function adicionaLinha() {
    const corpo = document.querySelector('tbody');
    corpo.innerHTML = linhas;
}

function calculaMediaFinal() {
    let somasDasNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somasDasNotas += notas[i];
    }

    return somasDasNotas / notas.length;
}

function resultadoFinal() {
    const calculaMedia = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = calculaMedia.toFixed(2);
    document.getElementById('media-final-resultado').innerHTML = calculaMedia >= 7 ? spanAprovado : spanReprovado;



}