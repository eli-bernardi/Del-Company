// =============================================
// VARIÁVEIS GLOBAIS
// =============================================

let arrayOrdenacao = [];
let arrayBubble = [];
let arrayNormal = [];

// =============================================
// FUNÇÕES DE EXIBIÇÃO
// =============================================

function exibirResultado(titulo, conteudo, elementoId = 'resultado') {
    const resultadoDiv = document.getElementById(elementoId);
    resultadoDiv.innerHTML = `<h3>${titulo}</h3><div>${conteudo}</div>`;
    resultadoDiv.style.display = 'block';
}

function limparResultado(elementoId = 'resultado') {
    document.getElementById(elementoId).style.display = 'none';
}

// =============================================
// FUNÇÕES DE ORDENAÇÃO
// =============================================

function gerarAleatorio1() {
    arrayOrdenacao = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 1);
    exibirResultado('Números Gerados', `Array: [${arrayOrdenacao.join(", ")}]`);
}

function crescente() {
    if (!arrayOrdenacao.length) {
        alert('Gere números primeiro!');
        return;
    }
    let arr = [...arrayOrdenacao].sort((a, b) => a - b);
    exibirResultado('Ordem Crescente', `Original: [${arrayOrdenacao.join(", ")}]<br>Ordenado: [${arr.join(", ")}]`);
}

function decrescente() {
    if (!arrayOrdenacao.length) {
        alert('Gere números primeiro!');
        return;
    }
    let arr = [...arrayOrdenacao].sort((a, b) => b - a);
    exibirResultado('Ordem Decrescente', `Original: [${arrayOrdenacao.join(", ")}]<br>Ordenado: [${arr.join(", ")}]`);
}

function gerarAleatorio2() {
    arrayBubble = Array.from({ length: 10 }, () => Math.floor(Math.random() * 20) + 1);
    exibirResultado('Números BubbleSort', `Array: [${arrayBubble.join(", ")}]`);
}

function ordenarBubbleSort() {
    if (!arrayBubble.length) {
        alert('Gere números primeiro!');
        return;
    }
    let arr = [...arrayBubble];
    let passos = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            passos++;
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    exibirResultado('Bubble Sort', `Original: [${arrayBubble.join(", ")}]<br>Ordenado: [${arr.join(", ")}]<br>Passos: ${passos}`);
}

function gerarAleatorio3() {
    arrayNormal = Array.from({ length: 10 }, () => Math.floor(Math.random() * 220) + 1);
    exibirResultado('Números Array', `Array: [${arrayNormal.join(", ")}]`);
}

function ordenarArray() {
    if (!arrayNormal.length) {
        alert('Gere números primeiro!');
        return;
    }
    let arr = [...arrayNormal].sort((a, b) => a - b);
    let soma = arr.reduce((a, b) => a + b, 0);
    exibirResultado('Array Sort', `Original: [${arrayNormal.join(", ")}]<br>Ordenado: [${arr.join(", ")}]<br>Soma: ${soma}<br>Média: ${(soma / arr.length).toFixed(2)}`);
}

function gerarMatriz() {
    let matriz = Array.from({ length: 3 }, () =>
        Array.from({ length: 3 }, () => Math.floor(Math.random() * 20) + 1)
    );
    let html = matriz.map(linha => `<tr>${linha.map(n => `<td>${n}</td>`).join('')}</tr>`).join('');
    exibirResultado('Matriz 3x3', `<table style="margin:auto">${html}</table>`);
}

// =============================================
// FUNÇÕES DE CÁLCULO
// =============================================

function calcularIMC() {
    let altura = document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;

    if (!altura || !peso || altura <= 0 || peso <= 0) {
        alert('Preencha altura e peso corretamente!');
        return;
    }

    let imc = (peso / ((altura / 100) ** 2)).toFixed(2);
    let classificacao = imc < 18.5 ? "Abaixo" : imc < 25 ? "Normal" : imc < 30 ? "Sobrepeso" : "Obesidade";

    exibirResultado('IMC Calculado', `Altura: ${altura}cm<br>Peso: ${peso}kg<br>IMC: ${imc}<br>Classificação: ${classificacao}`);
}

function calcularCelsius() {
    let f = document.getElementById('Farenheit').value;
    if (!f || isNaN(f)) {
        alert('Digite um número válido!');
        return;
    }
    let c = ((f - 32) * 5 / 9).toFixed(2);
    exibirResultado('Conversão', `${f}°F = ${c}°C`);
}

// =============================================
// FUNÇÕES DE BUSCA
// =============================================

function buscaLinear() {
    let valor = prompt("Digite um número para buscar (0-50):");
    if (valor === null || isNaN(valor)) return;

    let arr = Array.from({ length: 15 }, () => Math.floor(Math.random() * 50));
    let encontrado = arr.findIndex(n => n == valor);

    exibirResultado('Busca Linear', `Array: [${arr.join(", ")}]<br>Buscando: ${valor}<br>Resultado: ${encontrado >= 0 ? `Encontrado na posição ${encontrado}` : 'Não encontrado'}`);
}

function buscaBinariaExecutar() {
    let valor = prompt("Digite um número (0-100):");
    if (valor === null || isNaN(valor)) return;

    let arr = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100)).sort((a, b) => a - b);

    let inicio = 0, fim = arr.length - 1, passos = 0;
    while (inicio <= fim) {
        passos++;
        let meio = Math.floor((inicio + fim) / 2);
        if (arr[meio] == valor) {
            exibirResultado('Busca Binária', `Array: [${arr.join(", ")}]<br>Buscando: ${valor}<br>Encontrado na posição ${meio}<br>Passos: ${passos}`);
            return;
        }
        arr[meio] < valor ? inicio = meio + 1 : fim = meio - 1;
    }

    exibirResultado('Busca Binária', `Array: [${arr.join(", ")}]<br>Buscando: ${valor}<br>Não encontrado<br>Passos: ${passos}`);
}

// =============================================
// EXPORTAR FUNÇÕES
// =============================================

window.gerarAleatorio1 = gerarAleatorio1;
window.crescente = crescente;
window.decrescente = decrescente;
window.gerarAleatorio2 = gerarAleatorio2;
window.ordenarBubbleSort = ordenarBubbleSort;
window.gerarAleatorio3 = gerarAleatorio3;
window.ordenarArray = ordenarArray;
window.gerarMatriz = gerarMatriz;
window.calcularIMC = calcularIMC;
window.calcularCelsius = calcularCelsius;
window.buscaLinear = buscaLinear;
window.buscaBinariaExecutar = buscaBinariaExecutar;
window.limparResultado = limparResultado;