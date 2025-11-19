// =============================================
// VARIÁVEIS GLOBAIS
// =============================================

let arrayOrdenacao = [];
let arrayBubble = [];
let arrayNormal = [];

// =============================================
// FUNÇÕES DE ORDENAÇÃO
// =============================================

// 1. Ordenação Crescente e Decrescente
function gerarAleatorio1() {
    arrayOrdenacao = [];
    for (let i = 0; i < 10; i++) {
        arrayOrdenacao.push(Math.floor(Math.random() * 100) + 1);
    }
    alert(`Números gerados: ${arrayOrdenacao.join(", ")}`);
}

function crescente() {
    if (arrayOrdenacao.length === 0) {
        alert("Gere números aleatórios primeiro!");
        return;
    }
    let arrayCrescente = [...arrayOrdenacao].sort((a, b) => a - b);
    alert(`Array original: ${arrayOrdenacao.join(", ")}\nOrdem Crescente: ${arrayCrescente.join(", ")}`);
}

function decrescente() {
    if (arrayOrdenacao.length === 0) {
        alert("Gere números aleatórios primeiro!");
        return;
    }
    let arrayDecrescente = [...arrayOrdenacao].sort((a, b) => b - a);
    alert(`Array original: ${arrayOrdenacao.join(", ")}\nOrdem Decrescente: ${arrayDecrescente.join(", ")}`);
}

// 2. BubbleSort
function gerarAleatorio2() {
    arrayBubble = [];
    for (let i = 0; i < 10; i++) {
        arrayBubble.push(Math.floor(Math.random() * 20) + 1);
    }
    alert(`Números gerados: ${arrayBubble.join(", ")}`);
}

function ordenarBubbleSort() {
    if (arrayBubble.length === 0) {
        alert("Gere números aleatórios primeiro!");
        return;
    }

    let arr = [...arrayBubble];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    alert(`Array original: ${arrayBubble.join(", ")}\nOrdenado com BubbleSort: ${arr.join(", ")}`);
}

// 3. Array Sort
function gerarAleatorio3() {
    arrayNormal = [];
    for (let i = 0; i < 10; i++) {
        arrayNormal.push(Math.floor(Math.random() * 220) + 1);
    }
    alert(`Números gerados: ${arrayNormal.join(", ")}`);
}

function ordenarArray() {
    if (arrayNormal.length === 0) {
        alert("Gere números aleatórios primeiro!");
        return;
    }

    let arrOrdenado = [...arrayNormal].sort((a, b) => a - b);
    let soma = arrOrdenado.reduce((acc, n) => acc + n, 0);

    alert(`Array original: ${arrayNormal.join(", ")}\nOrdenado: ${arrOrdenado.join(", ")}\nSoma: ${soma}`);
}

// 4. Matriz 3x3
function gerarMatriz() {
    let matriz = [];
    for (let i = 0; i < 3; i++) {
        let linha = [];
        for (let j = 0; j < 3; j++) {
            linha.push(Math.floor(Math.random() * 20) + 1);
        }
        matriz.push(linha);
    }

    let matrizFormatada = matriz.map(linha => linha.join(" | ")).join("\n");
    alert(`Matriz 3x3:\n${matrizFormatada}`);
}

// =============================================
// FUNÇÕES DE CÁLCULO
// =============================================

// 5. Cálculo de IMC
function calcularIMC() {
    let alturaInput = document.getElementById('altura');
    let pesoInput = document.getElementById('peso');

    let altura = alturaInput.value;
    let peso = pesoInput.value;

    if (peso && altura && altura > 0 && peso > 0) {
        // Converter altura de cm para metros
        let alturaMetros = altura / 100;
        let imc = (peso / (alturaMetros * alturaMetros)).toFixed(2);
        let classificacao = "";

        if (imc < 18.5) classificacao = "Abaixo do peso";
        else if (imc < 25) classificacao = "Peso normal";
        else if (imc < 30) classificacao = "Sobrepeso";
        else if (imc < 35) classificacao = "Obesidade Grau I";
        else if (imc < 40) classificacao = "Obesidade Grau II";
        else classificacao = "Obesidade Grau III";

        alert(`Altura: ${altura}cm\nPeso: ${peso}kg\nIMC: ${imc}\nClassificação: ${classificacao}`);
    } else {
        alert("Preencha os campos de peso e altura corretamente!");
    }
}

// 6. Conversor de Temperatura
function calcularCelsius() {
    let farenheitInput = document.getElementById('Farenheit');
    let valor = farenheitInput.value;

    if (valor && !isNaN(valor)) {
        valor = parseFloat(valor);
        let celsius = ((valor - 32) * 5 / 9).toFixed(2);
        alert(`${valor}°F = ${celsius}°C`);
    } else {
        alert("Digite uma temperatura válida!");
    }
}

// =============================================
// FUNÇÕES DE BUSCA
// =============================================

// 7. Busca Linear
function buscaLinear() {
    let valor = prompt("Digite um número para buscar (0-50):");

    if (valor === null || valor === "" || isNaN(valor)) {
        alert("Digite um número válido!");
        return;
    }

    let arr = [];
    for (let i = 0; i < 15; i++) {
        arr.push(Math.floor(Math.random() * 50));
    }

    let encontrado = -1;
    let posicoes = [];

    // Busca linear encontrando todas as ocorrências
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === Number(valor)) {
            posicoes.push(i);
        }
    }

    if (posicoes.length > 0) {
        alert(`Array: ${arr.join(", ")}\nValor ${valor} encontrado nas posições: ${posicoes.join(", ")}`);
    } else {
        alert(`Array: ${arr.join(", ")}\nValor ${valor} não encontrado`);
    }
}

// 8. Busca Binária
function buscaBinaria(array, valor) {
    let inicio = 0;
    let fim = array.length - 1;
    let passos = 0;

    while (inicio <= fim) {
        passos++;
        let meio = Math.floor((inicio + fim) / 2);

        if (array[meio] === valor) {
            return { posicao: meio, passos: passos };
        } else if (array[meio] < valor) {
            inicio = meio + 1;
        } else {
            fim = meio - 1;
        }
    }
    return { posicao: -1, passos: passos };
}

function buscaBinariaExecutar() {
    let valor = prompt("Digite um número para buscar (0-100):");

    if (valor === null || valor === "" || isNaN(valor)) {
        alert("Digite um número válido!");
        return;
    }

    let arr = [];
    for (let i = 0; i < 20; i++) {
        arr.push(Math.floor(Math.random() * 100));
    }

    // Ordenar o array para busca binária
    arr.sort((a, b) => a - b);

    let resultado = buscaBinaria(arr, Number(valor));

    if (resultado.posicao !== -1) {
        alert(`Array ordenado: ${arr.join(", ")}\nValor ${valor} encontrado na posição ${resultado.posicao}\nPassos necessários: ${resultado.passos}`);
    } else {
        alert(`Array ordenado: ${arr.join(", ")}\nValor ${valor} não encontrado\nPassos necessários: ${resultado.passos}`);
    }
}

// =============================================
// FUNÇÃO DO MENU MOBILE
// =============================================

function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('hidden');
}

// =============================================
// INICIALIZAÇÃO
// =============================================

document.addEventListener('DOMContentLoaded', function () {
    // Menu mobile toggle
    const menuToggle = document.getElementById('menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }

    // Fechar menu ao clicar em um link (mobile)
    const menuLinks = document.querySelectorAll('#menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            const menu = document.getElementById('menu');
            if (!menu.classList.contains('hidden')) {
                menu.classList.add('hidden');
            }
        });
    });

    console.log('JavaScript carregado com sucesso!');
});

// =============================================
// EXPORTAÇÕES PARA USO NO HTML
// =============================================

// Tornar as funções disponíveis globalmente para os eventos onclick
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