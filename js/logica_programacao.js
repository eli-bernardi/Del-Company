
function gerarAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


let res4 = document.getElementById('res4');
let res5 = document.getElementById('res5');

function ordenar5() {
    let num5 = [16, 13, 17, 10, 6, 19, 20, 5, 9, 15, 3, 18, 1, 12, 8, 2, 4, 14, 7, 11];
    let n = num5.length;

    for (let j = 0; j < n - 1; j++) {
        for (let i = 0; i < n - j - 1; i++) {
            if (num5[i] > num5[i + 1]) {
                let temp = num5[i];
                num5[i] = num5[i + 1];
                num5[i + 1] = temp;
            }
        }
    }

    res4.innerHTML = `Ordem Crescente: <br> ${num5}`;
}

function decrescente5() {
    let num5 = [16, 13, 17, 10, 6, 19, 20, 5, 9, 15, 3, 18, 1, 12, 8, 2, 4, 14, 7, 11];
    let n = num5.length;

    for (let j = 0; j < n - 1; j++) {
        for (let i = 0; i < n - j - 1; i++) {
            if (num5[i] < num5[i + 1]) {
                let temp = num5[i];
                num5[i] = num5[i + 1];
                num5[i + 1] = temp;
            }
        }
    }

    res5.innerHTML = `Ordem Decrescente: <br> ${num5}`;
}

let res6 = document.getElementById('res6');
let arr6 = [];

function gerarArr(min, max, qtde) {
    arr6 = [];
    for (let i = 0; i < qtde; i++) {
        arr6[i] = gerarAleatorio(min, max);
    }
    res6.innerHTML = `Números Sorteados: ${arr6}`;
}

function ordenar6(qtde) {
    for (let j = 0; j < qtde - 1; j++) {
        for (let i = 0; i < qtde - j - 1; i++) {
            if (arr6[i] > arr6[i + 1]) {
                let temp = arr6[i];
                arr6[i] = arr6[i + 1];
                arr6[i + 1] = temp;
            }
        }
    }
    res6.innerHTML += `<br>Ordenados: ${arr6}`;
}

function principal6() {
    gerarArr(1, 20, 10);
    ordenar6(10);
}

let res7 = document.getElementById('res7');
let arr7 = [];

function gerarArr7(min, max, qtde) {
    arr7 = [];
    for (let i = 0; i < qtde; i++) {
        arr7[i] = gerarAleatorio(min, max);
    }
}

function somarArr7() {
    let soma = arr7.reduce((a, b) => a + b, 0);

    res7.innerHTML = `
        Números Gerados: ${arr7}<br>
        Soma Total: ${soma}
    `;
}

function principal7() {
    gerarArr7(1, 220, 10);
    somarArr7();
}

let res8 = document.getElementById('res8');
let mat8 = [];

function matriz8() {
    let n = 3;

    mat8 = [];
    for (let i = 0; i < n; i++) {
        mat8[i] = [];
        for (let j = 0; j < n; j++) {
            mat8[i][j] = gerarAleatorio(1, 20);
        }
    }

    let texto = "Matriz Gerada:<br><br>";
    for (let i = 0; i < n; i++) {
        texto += `[ ${mat8[i].join(", ")} ]<br>`;
    }

    res8.innerHTML = texto;
}

let res9 = document.getElementById('res9');

function principal9() {
    let peso = Number(document.getElementById('peso').value);
    let altura = Number(document.getElementById('altura').value);

    if (!peso || !altura) {
        res9.innerHTML = "Digite os valores corretamente.";
        return;
    }

    let imc = peso / (altura * altura);

    res9.innerHTML = `IMC calculado: ${imc.toFixed(2)}`;
}


let res10 = document.getElementById('res10');

function principal10() {
    let celsius = Number(document.getElementById('celsius').value);

    if (isNaN(celsius)) {
        res10.innerHTML = "Digite um número válido.";
        return;
    }

    let f = (celsius * 9 / 5) + 32;

    res10.innerHTML = `${celsius}°C equivale a ${f.toFixed(2)}°F`;
}

let res11 = document.getElementById('res11');

function encontrarMenorValor(array) {
    let menor = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < menor) menor = array[i];
    }
    return menor;
}

let res12 = document.getElementById('res12');

function principal12() {
    let peso = Number(document.getElementById('peso').value);
    let altura = Number(document.getElementById('altura').value);

    if (!peso || !altura) {
        res12.innerHTML = "Digite peso e altura.";
        return;
    }

    let imc = peso / (altura * altura);

    res12.innerHTML = `IMC calculado (2ª versão): ${imc.toFixed(2)}`;
}
