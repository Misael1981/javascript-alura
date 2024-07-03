/**
 * 1 - Utilize o método forEach para imprimir cada elemento de um array juntamente com seu índice.
 */

const arrayParaImprimir = [10, 20, 30, 40, 50, 60]

arrayParaImprimir.forEach((element, indice) => {

  console.log(indice, element)
})

/**
 * 2 - Crie uma função chamada executaOperacaoEmArray que recebe dois parâmetros: um array e uma função de callback que executa alguma operação matemática. Essa função deve iterar por cada elemento do array e aplicar a função de callback em cada um dos elementos, imprimindo o resultado da operação no console.
 */

const elementosParaSomar = [5, 10, 15]
let somaElementos = 0

elementosParaSomar.forEach(executaOperacaoEmArray)

function executaOperacaoEmArray(element) {
  somaElementos += element
}

console.log(`A soma dos elementos do array é: ${somaElementos}`)

/**
 * 3 - Você recebeu um array numeros contendo valores numéricos. Crie um programa que verifique se um número específico está presente nesse array. Se estiver, o programa deve retornar a posição (índice) desse número. Caso contrário, se o número não estiver presente, o programa deve retornar "-1".
 */

const valoresNumericos = [15, 37, 8, 72, 54, 13, 60];
const valorParaConsultar = 10;

let resultadoBusca = "-1"; 

const busca = valoresNumericos.forEach((element, indice) => {
  if (element === valorParaConsultar) {
    resultadoBusca = `O valor está presente na posição ${indice} do array`;
  }
});

console.log(resultadoBusca);


/**
 * 4 - Você recebeu dois arrays de nomes contendo os alunos da Turma A e da Turma B.

const nomesTurmaA = [
  'João Silva',
  'Maria Santos',
  'Pedro Almeida'
];

const nomesTurmaB = [
  'Carlos Oliveira',
  'Ana Souza',
  'Lucas Fernandes'
];

Utilize o método concat() para unir os arrays das turmas A e B em um único array chamado todasAsTurmas. Depois, utilize o método find() para buscar um aluno específico pelo nome no array todosAlunos. Exiba no console uma mensagem informando o nome do aluno procurado; caso não exista na lista, retorne uma mensagem de aviso, por exemplo Aluno não encontrado.
 */

const nomesTurmaA = [
  'João Silva',
  'Maria Santos',
  'Pedro Almeida'
];

const nomesTurmaB = [
  'Carlos Oliveira',
  'Ana Souza',
  'Lucas Fernandes'
];

let alunoEspecifico = 'Carlos Oliveira'

const todasAsTurmas = nomesTurmaA.concat(nomesTurmaB)

const procurarAluno = todasAsTurmas.find(nome => nome === alunoEspecifico)

if(procurarAluno) {
  console.log(`O aluno ${procurarAluno} se encontra na lista.`)
} else {
  console.log(`O aluno não foi encontrado`)
}


/**
 * 5 - Considere um array de números inteiros.

const numeros = [6, 9, 12, 15, 18, 21];

Utilize o método forEach() para multiplicar cada elemento do array por 3 e exibir no console o resultado de cada multiplicação. Depois, utilize o método findIndex() para encontrar o índice do número 18 no array original.
 */

const numeros = [6, 9, 12, 15, 18, 21];

const multiplicarElementos = numeros.forEach((element) => {
  const elementosMultiplicados = element * 3
  console.log(elementosMultiplicados)
})

const indiceDoNumero18 = numeros.findIndex(numero => numero === 18);

if (indiceDoNumero18 !== -1) {
  console.log(`O número 18 está no índice ${indiceDoNumero18}.`);
} else {
  console.log('O número 18 não está presente no array.');
}



