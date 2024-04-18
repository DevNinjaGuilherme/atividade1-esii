const prompt = require('prompt-sync')();

// retorna o valor da soma entre os dois parâmetros
function sum(v1, v2) {
    return v1 + v2;
}

// retorna o valor da subtração entre os dois parâmetros
function sub(v1, v2) {
    return v1 - v2;
}

// retorna o valor da divisão entre os dois parâmetros
function div(v1, v2) {
    let resultado = v1 / v2

    return resultado
}

// retorna o valor da multiplicação entre os dois parâmetros
function mult(v1, v2) {
    let resultado = 0

    for (let i = 0; i < v2; i++) {
        resultado += v1
    }

    return resultado
}

// retorna o valor da raiz quadrada do valor recebido por parâmetro
function square(v1) {
    return Math.sqrt(v1);
}

// Retorno das Funções

let resultado = 0;
let n1 = 0;
let n2 = 0;

while (true) {
    console.log("Menu:");
    console.log("1. Raiz Quadrada");
    console.log("2. Multiplicação");
    console.log("3. Divisão");
    console.log("4. Subtração");
    console.log("5. Soma");
    console.log("6. Apagar Resultado");
    console.log("0. Sair");

    const opcao = parseInt(prompt("Escolha uma opção:"));

    if (opcao === 0) {
        break;
    }
    switch (opcao) {
        case 1:
            if (resultado === 0) {
                n1 = parseInt(prompt("Digite o valor:"));
                resultado = square(n1);
            } else {
                resultado = square(resultado);
            }
            console.log("Resultado:", resultado);
            break;
        
        case 2:
            if (resultado === 0) {
                n1 = parseInt(prompt("Digite o primeiro valor:"));
                n2 = parseInt(prompt("Digite o segundo valor:"));
                resultado = mult(n1, n2);
            } else {
                n2 = parseInt(prompt("Digite o valor:"));
                resultado = mult(resultado, n2);
            }
            console.log("Resultado:", resultado);
            break;
        
        case 3:
            if (resultado === 0) {
                n1 = parseInt(prompt("Digite o primeiro valor:"));
                n2 = parseInt(prompt("Digite o segundo valor:"));
                resultado = div(n1, n2);
            } else {
                n2 = parseInt(prompt("Digite o valor:"));
                resultado = div(resultado, n2);
            }
            console.log("Resultado:", resultado);
            break;
        
        case 4:
            if (resultado === 0) {
                n1 = parseInt(prompt("Digite o primeiro valor:"));
                n2 = parseInt(prompt("Digite o segundo valor:"));
                resultado = sub(n1, n2);
            } else {
                n2 = parseInt(prompt("Digite o valor:"));
                resultado = sub(resultado, n2);
            }
            console.log("Resultado:", resultado);
            break;
            
        case 5:
            if (resultado === 0) {
                n1 = parseInt(prompt("Digite o primeiro valor:"));
                n2 = parseInt(prompt("Digite o segundo valor:"));
                resultado = sum(n1, n2);
            } else {
                n2 = parseInt(prompt("Digite o valor:"));
                resultado = sum(resultado, n2);
            }
            console.log("Resultado:", resultado);
            break;    

        case 6:
            resultado = 0;
            console.log("Resultado apagado.");
            break;
        
        default:
            console.log("Opção inválida.");
            break;
    }
}