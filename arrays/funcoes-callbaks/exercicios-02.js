/**
 *  1 - Faça uma função que aceite vários arrays como argumentos e retorne um único array contendo todos os elementos dos arrays fornecidos, utilizando Spread Operator.

Dica: é possível usar o spread operator diretamente em um parâmetro de função para "espalhar" seu conteúdo, por exemplo function funcaoExemplo(...params).
 */

const nomes = ["Chicó", "João Grilo", "Rosinha"]
const idades = [35, 36, 25]
const cidades = ["São Paulo", "Campinas", "Pouso Alegre"]

function juntarArrays (...arrays) {
  return [].concat(...arrays)
}

const todosElementos = juntarArrays(nomes, idades, cidades)
console.log(todosElementos)

/**
 * 2 - Crie um array de números chamado valores. Depois,escreva um programa que some todos os elementos deste array utilizando o método reduce.
 */

const valores = [5, 10, 15, 45]

const valoresSomados = valores.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0)

console.log(valoresSomados)

/**
 * 3 - Considere duas listas de cores:

const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho']

const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul']

Crie um programa que una essas duas listas, removendo cores duplicadas e exiba a lista final.
 */

const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho']

const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul']

const listaUnica = new Set([...coresLista1].concat( [...coresLista2]))

console.log(listaUnica)

/**
 * 4 - Escreva uma função que receba um array de números e retorne um array contendo apenas os números pares.
 */

const numeros = [10, 17, 21, 50, 20, 85, 67, 14, 32, 64]

const numerosPares = numeros.map(numero => {

    if( numero % 2 === 0) {
        return numero
    } 
})

console.log(numerosPares)

/**
 * 5 - Crie uma função que filtre os números de um array que são múltiplos de 3 e maiores que 5.
 */

const numerosParaFiltrar = [15, 10, 27, 12, 50, 25]

const numerosFiltrados = numerosParaFiltrar.filter((number) => {
    return number % 3 === 0 && number > 5
})

console.log(numerosFiltrados)



/**
 * 6 - Crie uma função que receba um array de números e retorne a soma de todos os elementos.
 */

const numerosParaSomar = [7, 15, 23, 99, 45, 20, 14]

const total = numerosParaSomar.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0)

console.log(total)