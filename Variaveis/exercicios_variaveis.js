/**
 * 01- Declare três variáveis diferentes (uma para cada tipo: string, número e booleano) e atribua valores a elas. Em seguida, exiba o tipo de cada variável no console.
 */

let time = 'São Paulo'
let ano = 2024;
let booleano = true;

console.log(typeof time);
console.log(typeof ano);
console.log(typeof booleano);

/**
 * 02- Crie duas variáveis, uma contendo seu primeiro nome e outra contendo seu último nome. Em seguida, combine-as em uma terceira variável usando o operador + e em uma quarta variável usando template strings. Por fim, imprima os resultados obtidos no console.
 */

const nome = 'Misael';
const sobrenome = 'Borges';

let nomeCompleto = nome + ' ' + sobrenome;
nomeCompleto = `${nome} ${sobrenome}`

console.log(nomeCompleto)

/**
 * 03- Declare duas variáveis, uma contendo um número e outra contendo uma string. Em seguida, combine-as em uma terceira variável usando template strings para montar uma frase e exiba o resultado no console.
 */

const anoAtual = 2024;
const frase = 'Estamos no ano de:'

const fraseCompleta = `${frase} ${anoAtual}`
console.log(fraseCompleta);

/**
 * 04- Crie uma variável inicializada com um valor de qualquer tipo e, em seguida, reatribua um novo valor a essa variável. Imprima ambos os valores no console após atribuí-los.
 */

let minhaIdade = 42;
console.log(minhaIdade)
minhaIdade = 43
console.log(minhaIdade)

/**
 * 05- Declare uma variável booleana que informa se está chovendo e utilize-a em uma estrutura condicional (if) para exibir uma mensagem informando se é preciso levar um guarda-chuva ou não dependendo do valor da variável.
 */

let estaChovendo = false;

if(estaChovendo) {
    console.log('É preciso levar o guarda-chuva.')
} else {
    console.log('Não precisa levar o guarda-chuva.')
}




