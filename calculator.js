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
    let resultado = v1/v2

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
function square(v1) {}


// Retorno das Funções

console.log(sum(8,2));

console.log(sub(4,2));

console.log(div(6,2));

console.log(mult(4,2));

console.log(square(4));
