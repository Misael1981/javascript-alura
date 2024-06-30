/**
 * 1- Crie variáveis que armazenem o valor do saldo, de depósito e de um saque de uma conta bancária, depois realize operações de adição e subtração entre eles utilizando uma variável chamada operacao, considerando a função de cada variável criada anteriormente. Exiba os resultados finais no console.
 */

let saldo = 50.00
let deposito = 100.00
let saque = 80.00

let saldoAtual = 50 + 100 - 80

//console.log(saldoAtual)

/**
 * 02- Crie uma variável numérica com um valor. Utilize um operador ternário para verificar se esse valor é par ou ímpar. Exiba o resultado no console.
 */

let valor = 15
let texto = valor % 2 === 0 ? "O valor é par" : "O valor é impar";
//console.log(texto)

/**
 * 03- Considere uma situação em que você está verificando se um usuário está logado e tem permissão de administrador para acessar determinada funcionalidade. Utilize variáveis booleanas para simular essas condições e use o operador AND para verificar se ambas são verdadeiras.
 */

let usuarioLogado = true
let usuarioAdm = false
 
if (usuarioLogado === true && usuarioAdm === true) {
    //console.log("Usuário tem permissão")
}else {
    //console.log("Usuário não tem permissão")
}

// Outro modo de fazer o exercício

const logado = true;
const admin = false;

const resultado = logado && admin;

//console.log('Administrador logado no sistema:', resultado); 

/**
 * 04- Declare duas variáveis booleanas e use o operador OR para verificar se pelo menos uma delas é verdadeira. Exiba o resultado no console.
 */

const usuario1 = true
const usuario2 = false

const usuarios = usuario1 || usuario2

//console.log(usuarios)

/**
 * 05= Imagine um sistema que determina se um usuário tem idade suficiente para comprar o ingresso para um show. Declare duas variáveis que determinem a idade mínima e qual a idade do usuário e utilize estruturas condicionais (if, else) para determinar se o usuário pode realizar a compra.
 */

const idadeMinima = 18;
const idadeUsuario = 21;

if(idadeUsuario >= idadeMinima) {
    console.log("Você pode adquirir seu ingresso!")
} else {
    console.log("Você ainda não tem idade para comparacer ao evento!")
}