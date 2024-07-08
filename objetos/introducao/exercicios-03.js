/**
 * 1 - Crie um objeto chamado pessoa que represente informações sobre uma pessoa. O objeto deve ter as seguintes propriedades: nome e notas. Adicione um método chamado calcularMediaNotas ao objeto pessoa. Este método deve calcular a média das notas da pessoa.

Adicione um método chamado classificarDesempenho ao objeto pessoa. Este método deve retornar uma categoria de desempenho com base na média calculada. Utilize as seguintes categorias:

Desempenho excelente: média >= 9
Bom desempenho: 7.5 <= média entre 7.6 e 8.9
Desempenho regular: 6 <= média entre 6 e 7.5
Desempenho insuficiente: média < 6
Chame o método calcularMediaNotas para calcular a média das notas da pessoa e imprima no console a média calculada.

Chame o método classificarDesempenho e imprima no console a categoria de desempenho da pessoa.
 */

const pessoa = {
    nome: 'Gbariel',
    notas: [7, 5.5, 8, 7.8],
    calcularMedia: function () {

        let soma = this.notas.reduce((acumulador, elementoAtual) => acumulador + elementoAtual, 0)
       
        let media =  soma / this.notas.length
        return media
    },
    classificarDesempenho: function () {

        const media = this.calcularMedia()
        
        if(media >= 9) {
            return `Desempenho excelente`
        } else if (media >= 7.6 && media <= 8.9) {
            return `Bom desempenho`
        } else if (media >= 6 && media <= 7.5) {
            return `Desempenho regular`
        } else {
            return `Desempenho insuficiente`
        }
    } 
}

console.log(pessoa.calcularMedia())
console.log(pessoa.classificarDesempenho())

/**
 * 2 - Crie um objeto chamado carro que represente as informações de um veículo. O objeto deve ter as seguintes propriedades:

marca (string): marca do carro.
modelo (string): modelo do carro.
ano (number): ano de fabricação do carro.
cor (string): cor do carro.
Utilize o loop for...in para percorrer todas as propriedades do objeto carro e imprima no console o nome da propriedade e o seu valor.

Adicione mais propriedades ao objeto carro para representar características adicionais do veículo.

Utilize novamente o loop for...in para percorrer todas as propriedades atualizadas do objeto carro e imprima no console o nome da propriedade e o seu valor.
 */
/*
const carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2022,
    cor: 'black'
}

for(let chave in carro) {
    
}

carro.design = 'Moderno e sofisticado'

for(let chave in carro) {
    console.log(`${chave}: ${carro[chave]}`)
}
*/

/**
 * 3 - Crie um arquivo chamado metodosObjeto.js para realizar este exercício.

Utilize o objeto carro do exercício 2 com as propriedades iniciais (marca, modelo, ano, cor) e adicione:

ligado: uma propriedade do tipo booleana que indica se o carro está ligado ou não.
ligar: um método que imprime no console uma mensagem indicando que o carro está ligado.
desligar: um método que imprime no console uma mensagem indicando que o carro está desligado. Observação: se o carro já está ligado (ligado = true), não pode ser ligado novamente e vice-versa.
obterDetalhes: um método que retorna uma string contendo todos os detalhes do carro (marca, modelo, ano, cor, estado de ligado/desligado).
Em seguida, faça o seguinte:

Chame os métodos ligar e desligar do objeto carro e imprima no console as mensagens resultantes.
Chame o método obterDetalhes e imprima no console a string retornada.
 */

const carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2022,
    cor: 'black',
    ligado: false,
    ligar: function () {

        this.ligado = true
        console.log(`O carro está ligado ${this.ligado}`)
    },
    desligar: function() {

        this.ligado = false
        console.log(`O carro está está desligado ${this.ligado}`)
    },
    obterDetalhes: function() {
        console.log(`O carro de modelo: ${this.modelo}, da marca: ${this.marca}, ano: ${this.ano}. Encontra-se ligado: ${this.ligado}`)
    }
}
console.log(carro.obterDetalhes())


/**
 * 4 - No objeto carro, adicione uma nova propriedade chamada placa representando a placa do veículo. Defina a propriedade placa como não enumerável, para que ela não seja listada ao percorrer as propriedades do objeto.

Utilize um loop for...in para percorrer as propriedades do objeto carro e imprima no console apenas as propriedades enumeráveis.

Utilize o método Object.keys() para obter um array contendo apenas as chaves enumeráveis do objeto carro e imprima no console esse array.

Tente acessar a propriedade placa diretamente usando carro.placa e imprima no console o resultado obtido.
 */

carro.placa = 'ABC1B34'

console.log(carro)

Object.defineProperty(carro, 'placa', {
    enumerable: false 
});

for (let chave in carro) {
    console.log(chave)
}


const propriedadesCarro = Object.keys(carro)

console.log(propriedadesCarro)



/**
 * 5 - Crie um novo objeto chamado carroNovo para representar as informações de um novo carro. O objeto deve ter as seguintes propriedades:

marca (string): marca do novo carro.
modelo (string): modelo do novo carro.
ano (number): ano de fabricação do novo carro.
cor (string): cor do novo carro.
Utilize o operador de espalhamento (...) para criar um novo objeto chamado carroComNovosDetalhes que herde todas as propriedades do objeto carro e adicione as propriedades do objeto carroNovo.

Imprima no console o objeto carroComNovosDetalhes para verificar as informações do carro com os novos detalhes.

Modifique o valor de uma propriedade no objeto carroComNovosDetalhes e imprima novamente o objeto no console para confirmar as alterações.
 */

const carroNovo = {
    ...carro
}

console.log(carroNovo)

carroNovo.cor = 'red'
console.log(carroNovo)