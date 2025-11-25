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
    resultadoDiv.innerHTML = `
        <div class="resultado-container">
            <h3>${titulo}</h3>
            <div class="resultado-conteudo">${conteudo}</div>
        </div>
    `;
    resultadoDiv.style.display = 'block';
}

function limparResultado(elementoId = 'resultado') {
    const resultadoDiv = document.getElementById(elementoId);
    resultadoDiv.style.display = 'none';
    resultadoDiv.innerHTML = '';
}

// =============================================
// FUNÇÕES DE ORDENAÇÃO
// =============================================

// 1. Ordenação Crescente e Decrescente
function gerarAleatorio1() {
    arrayOrdenacao = [];
    for (let i = 0; i < 10; i++) {
        arrayOrdenacao.push(Math.floor(Math.random() * 100) + 1);
    }
    exibirResultado(
        'Números Gerados - Ordenação Básica',
        `<p><strong>Array gerado:</strong> [${arrayOrdenacao.join(", ")}]</p>
         <p><strong>Quantidade:</strong> ${arrayOrdenacao.length} números</p>
         <p><strong>Faixa:</strong> 1 a 100</p>`
    );
}

function crescente() {
    if (arrayOrdenacao.length === 0) {
        exibirResultado('Erro', 'Gere números aleatórios primeiro!');
        return;
    }
    let arrayCrescente = [...arrayOrdenacao].sort((a, b) => a - b);
    exibirResultado(
        'Ordenação Crescente',
        `<p><strong>Array original:</strong> [${arrayOrdenacao.join(", ")}]</p>
         <p><strong>Ordem crescente:</strong> [${arrayCrescente.join(", ")}]</p>
         <p><strong>Menor valor:</strong> ${arrayCrescente[0]}</p>
         <p><strong>Maior valor:</strong> ${arrayCrescente[arrayCrescente.length - 1]}</p>`
    );
}

function decrescente() {
    if (arrayOrdenacao.length === 0) {
        exibirResultado('Erro', 'Gere números aleatórios primeiro!');
        return;
    }
    let arrayDecrescente = [...arrayOrdenacao].sort((a, b) => b - a);
    exibirResultado(
        'Ordenação Decrescente',
        `<p><strong>Array original:</strong> [${arrayOrdenacao.join(", ")}]</p>
         <p><strong>Ordem decrescente:</strong> [${arrayDecrescente.join(", ")}]</p>
         <p><strong>Maior valor:</strong> ${arrayDecrescente[0]}</p>
         <p><strong>Menor valor:</strong> ${arrayDecrescente[arrayDecrescente.length - 1]}</p>`
    );
}

// 2. BubbleSort
function gerarAleatorio2() {
    arrayBubble = [];
    for (let i = 0; i < 10; i++) {
        arrayBubble.push(Math.floor(Math.random() * 20) + 1);
    }
    exibirResultado(
        'Números Gerados - BubbleSort',
        `<p><strong>Array gerado:</strong> [${arrayBubble.join(", ")}]</p>
         <p><strong>Quantidade:</strong> ${arrayBubble.length} números</p>
         <p><strong>Faixa:</strong> 1 a 20</p>`
    );
}

function ordenarBubbleSort() {
    if (arrayBubble.length === 0) {
        exibirResultado('Erro', 'Gere números aleatórios primeiro!');
        return;
    }

    let arr = [...arrayBubble];
    let passos = 0;
    let trocas = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            passos++;
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                trocas++;
            }
        }
    }

    exibirResultado(
        'Bubble Sort - Resultado',
        `<p><strong>Array original:</strong> [${arrayBubble.join(", ")}]</p>
         <p><strong>Array ordenado:</strong> [${arr.join(", ")}]</p>
         <p><strong>Passos executados:</strong> ${passos}</p>
         <p><strong>Trocas realizadas:</strong> ${trocas}</p>
         <p><strong>Eficiência:</strong> ${((trocas / passos) * 100).toFixed(1)}%</p>`
    );
}

// 3. Array Sort
function gerarAleatorio3() {
    arrayNormal = [];
    for (let i = 0; i < 10; i++) {
        arrayNormal.push(Math.floor(Math.random() * 220) + 1);
    }
    exibirResultado(
        'Números Gerados - Array Sort',
        `<p><strong>Array gerado:</strong> [${arrayNormal.join(", ")}]</p>
         <p><strong>Quantidade:</strong> ${arrayNormal.length} números</p>
         <p><strong>Faixa:</strong> 1 a 220</p>`
    );
}

function ordenarArray() {
    if (arrayNormal.length === 0) {
        exibirResultado('Erro', 'Gere números aleatórios primeiro!');
        return;
    }

    let arrOrdenado = [...arrayNormal].sort((a, b) => a - b);
    let soma = arrOrdenado.reduce((acc, n) => acc + n, 0);
    let media = (soma / arrOrdenado.length).toFixed(2);

    exibirResultado(
        'Array Sort - Resultado',
        `<p><strong>Array original:</strong> [${arrayNormal.join(", ")}]</p>
         <p><strong>Array ordenado:</strong> [${arrOrdenado.join(", ")}]</p>
         <p><strong>Soma total:</strong> ${soma}</p>
         <p><strong>Média:</strong> ${media}</p>
         <p><strong>Menor valor:</strong> ${arrOrdenado[0]}</p>
         <p><strong>Maior valor:</strong> ${arrOrdenado[arrOrdenado.length - 1]}</p>`
    );
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

    let somaTotal = 0;
    let matrizHTML = '<table class="matriz-table">';
    for (let i = 0; i < 3; i++) {
        matrizHTML += '<tr>';
        for (let j = 0; j < 3; j++) {
            matrizHTML += `<td>${matriz[i][j]}</td>`;
            somaTotal += matriz[i][j];
        }
        matrizHTML += '</tr>';
    }
    matrizHTML += '</table>';

    exibirResultado(
        'Matriz 3x3 Gerada',
        `${matrizHTML}
         <p><strong>Soma total dos elementos:</strong> ${somaTotal}</p>
         <p><strong>Média dos elementos:</strong> ${(somaTotal / 9).toFixed(2)}</p>`
    );
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
        let cor = "";

        if (imc < 18.5) {
            classificacao = "Abaixo do peso";
            cor = "#3498db";
        } else if (imc < 25) {
            classificacao = "Peso normal";
            cor = "#2ecc71";
        } else if (imc < 30) {
            classificacao = "Sobrepeso";
            cor = "#f39c12";
        } else if (imc < 35) {
            classificacao = "Obesidade Grau I";
            cor = "#e67e22";
        } else if (imc < 40) {
            classificacao = "Obesidade Grau II";
            cor = "#e74c3c";
        } else {
            classificacao = "Obesidade Grau III";
            cor = "#c0392b";
        }

        exibirResultado(
            'Cálculo de IMC',
            `<div class="imc-resultado" style="border-left: 4px solid ${cor}; padding-left: 15px;">
                <p><strong>Altura:</strong> ${altura} cm</p>
                <p><strong>Peso:</strong> ${peso} kg</p>
                <p><strong>IMC:</strong> ${imc}</p>
                <p><strong>Classificação:</strong> <span style="color: ${cor}">${classificacao}</span></p>
            </div>`
        );
    } else {
        exibirResultado('Erro no IMC', 'Preencha os campos de peso e altura corretamente!');
    }
}

// 6. Conversor de Temperatura
function calcularCelsius() {
    let farenheitInput = document.getElementById('Farenheit');
    let valor = farenheitInput.value;

    if (valor && !isNaN(valor)) {
        valor = parseFloat(valor);
        let celsius = ((valor - 32) * 5 / 9).toFixed(2);
        exibirResultado(
            'Conversão de Temperatura',
            `<p><strong>${valor}°F</strong> = <strong>${celsius}°C</strong></p>
             <p><em>Fórmula: (°F - 32) × 5/9 = °C</em></p>`
        );
    } else {
        exibirResultado('Erro', 'Digite uma temperatura válida!');
    }
}

// =============================================
// FUNÇÕES DE BUSCA
// =============================================

//Busca Linear
function buscaLinear() {
    let valor = prompt("Digite um número para buscar (0-50):");

    if (valor === null || valor === "" || isNaN(valor)) {
        exibirResultado('Erro', 'Digite um número válido!');
        return;
    }

    let arr = [];
    for (let i = 0; i < 15; i++) {
        arr.push(Math.floor(Math.random() * 50));
    }

    let posicoes = [];
    let passos = 0;

    // Busca linear encontrando todas as ocorrências
    for (let i = 0; i < arr.length; i++) {
        passos++;
        if (arr[i] === Number(valor)) {
            posicoes.push(i);
        }
    }

    if (posicoes.length > 0) {
        exibirResultado(
            'Busca Linear - Resultado',
            `<p><strong>Array:</strong> [${arr.join(", ")}]</p>
             <p><strong>Valor buscado:</strong> ${valor}</p>
             <p><strong>Posições encontradas:</strong> ${posicoes.join(", ")}</p>
             <p><strong>Quantidade de ocorrências:</strong> ${posicoes.length}</p>
             <p><strong>Passos executados:</strong> ${passos}</p>`
        );
    } else {
        exibirResultado(
            'Busca Linear - Resultado',
            `<p><strong>Array:</strong> [${arr.join(", ")}]</p>
             <p><strong>Valor buscado:</strong> ${valor}</p>
             <p><strong>Resultado:</strong> Valor não encontrado</p>
             <p><strong>Passos executados:</strong> ${passos}</p>`
        );
    }
}

// Busca Binária
function buscaBinaria(array, valor) {
    let inicio = 0;
    let fim = array.length - 1;
    let passos = 0;
    let detalhes = [];

    while (inicio <= fim) {
        passos++;
        let meio = Math.floor((inicio + fim) / 2);

        detalhes.push(`Passo ${passos}: [${inicio}-${fim}] Meio=${meio} (valor=${array[meio]})`);

        if (array[meio] === valor) {
            return { posicao: meio, passos: passos, detalhes: detalhes };
        } else if (array[meio] < valor) {
            inicio = meio + 1;
        } else {
            fim = meio - 1;
        }
    }
    return { posicao: -1, passos: passos, detalhes: detalhes };
}

function buscaBinariaExecutar() {
    let valor = prompt("Digite um número para buscar (0-100):");

    if (valor === null || valor === "" || isNaN(valor)) {
        exibirResultado('Erro', 'Digite um número válido!');
        return;
    }

    let arr = [];
    for (let i = 0; i < 20; i++) {
        arr.push(Math.floor(Math.random() * 100));
    }

    // Ordenar o array para busca binária
    arr.sort((a, b) => a - b);

    let resultado = buscaBinaria(arr, Number(valor));

    let detalhesHTML = resultado.detalhes.map(d => `<div class="passo-detalhe">${d}</div>`).join('');

    if (resultado.posicao !== -1) {
        exibirResultado(
            'Busca Binária - Resultado',
            `<p><strong>Array ordenado:</strong> [${arr.join(", ")}]</p>
             <p><strong>Valor buscado:</strong> ${valor}</p>
             <p><strong>Posição encontrada:</strong> ${resultado.posicao}</p>
             <p><strong>Total de passos:</strong> ${resultado.passos}</p>
             <div class="detalhes-busca">
                 <strong>Detalhes da busca:</strong>
                 ${detalhesHTML}
             </div>`
        );
    } else {
        exibirResultado(
            'Busca Binária - Resultado',
            `<p><strong>Array ordenado:</strong> [${arr.join(", ")}]</p>
             <p><strong>Valor buscado:</strong> ${valor}</p>
             <p><strong>Resultado:</strong> Valor não encontrado</p>
             <p><strong>Total de passos:</strong> ${resultado.passos}</p>
             <div class="detalhes-busca">
                 <strong>Detalhes da busca:</strong>
                 ${detalhesHTML}
             </div>`
        );
    }
}

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
window.limparResultado = limparResultado;