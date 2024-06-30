/**
 * 01- Crie uma função que receba o nome de uma pessoa como argumento e retorne uma saudação personalizada. Em seguida, chame a função e exiba a saudação no console.
 */

function saudacao (nome) {
    return `Seja bem vindo(a) ${nome}`
}

console.log(saudacao("Ana"))

/**
 * 02- Crie uma função que receba a idade de uma pessoa e retorne se ela é maior de idade (idade >= 18). Imprima o resultado no console.
 */

function maioridade (nome, idade) {

    if(idade >= 18) {
        return `Olá, ${nome}, você já e maior de idade!`
    }else {
        return `Olá ${nome}, você ainda não é maior de idade`
    }
}

console.log(maioridade("Ana", 25))

/**
 * 03- Crie uma função que receba uma string e verifique se é um palíndromo (uma palavra que é lida da mesma forma de trás para frente) utilizando o método de string reverse(). Retorne true se for um palíndromo e false caso contrário. Imprima o resultado no console.
 */


function verificaPalindromo(string) {
    const stringInvertida = string.split('').reverse().join('');
    return string.toLowerCase() === stringInvertida.toLowerCase();
}

console.log(verificaPalindromo("arara")); // true
console.log(verificaPalindromo("Frase")); // false

/**
 * 04- Crie uma função que receba três números como parâmetros e determine qual é o maior entre eles. Utilize estruturas condicionais (if, else) para comparar os valores e determinar o maior. Imprima o maior valor no console.
 */

function numeroMaior (n1, n2, n3) {
    if (n1 > n2 && n1 > n3) {
        return `O ${n1} é o maior`
    } else if ( n2 > n1 && n2 > n3) {
        return `O ${n2} é o maior`
    } else {
        return `O ${n3} é o maior`
    }
}

console.log(numeroMaior(150, 27, 10))

/**
 * 05- Crie uma arrow function chamada calculaPotencia que receba dois parâmetros: a base e o expoente. A função deve calcular a potência da base elevada ao expoente e retornar o resultado.
 */

const calculaPotencia = (base, expoente) => base ** expoente

console.log(calculaPotencia(3, 5))