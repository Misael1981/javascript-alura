/**
 * 01- Crie uma variável contendo uma frase. Em seguida, exiba no console o comprimento da frase e a mesma frase com letras maiúsculas.
 */

const meuTime = "Meu time favorito é o São Paulo"
//console.log(meuTime.length)
//console.log(meuTime.toUpperCase())

/**
 * 02- Declare duas variáveis, uma inicializada com valor null e outra que não recebe atribuição (resultando em undefined). Exiba os valores no console.
 */

const idade = null;
let ano;
//console.log(idade, ano)

/**
 * 03-Crie 3 variáveis de tipos diferentes, utilize template strings para combinar os diferentes tipos de dados (number, string, boolean) em uma única string e exiba o resultado no console.
 */

const name = 'Misael'
const numero = 13
const corRed = true

//console.log(`Meu nome é  ${name}, meu numero é ${numero} e minha cor é vermelha ${corRed} `)

/**
 * 04- Crie uma variável numérica e uma string. Faça a conversão da variável numérica para string e da string para número. Exiba os tipos de dados resultantes no console.
 */

let number1 = 11
let number2 = "5"

let resultado = parseInt(number2) + number1

let resultString = String(number1) + number2

console.log(resultado)
console.log(resultString)

/**
 * 05- Crie uma variável com uma string e utilize métodos de manipulação de strings, como toUpperCase, toLowerCase, slice ou outros, para modificar a string original. Exiba os resultados finais no console.
 */

const texto = "Estou aprendendo JavaScript"

const letrasMaiusculas = texto.toUpperCase()
const textoSlice = texto.slice(0, 5)

console.log(textoSlice)