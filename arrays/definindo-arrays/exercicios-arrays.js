/**
 * 01- Um array esparso é um tipo de array no qual a maioria dos elementos tem valores indefinidos. Crie um array esparso e atribua valores a alguns elementos do array (por exemplo, defina valores nos índices 1, 3 e 7). Imprima no console o array e também a informação de comprimento do array.
 */

const arrayEsparso = []
arrayEsparso[1] = "elemento 1";
arrayEsparso[3] = "elemento 3";
arrayEsparso[7] = "elemento 7"

console.log(arrayEsparso)
console.log(arrayEsparso.length)

/**
 * 02- Crie um programa em Node.js que inicie com um array cinco elementos e atribua um novo valor para a primeira posição (índice 0) desse array. Em seguida, exiba o array antes e depois da alteração.
 */

let meuArray = [10, 20, 30, 40, 50]
console.log("array antes das alterações: ", meuArray)

meuArray[0] = 5

console.log("Array depois da alteração: ", meuArray)



/**
 * 03- Crie um array vazio chamado meuArray e adicione 3 números inteiros de sua escolha utilizando o método push(). Imprima no console os itens presentes no array para verificar se os números foram adicionados. Em seguida, substitua o primeiro elemento do array (índice 0) pelo dobro do seu valor atual. Imprima no console o array atualizado para verificar a mudança.
 */

const myArray = []
myArray.push(10)
myArray.push(20)
myArray.push(30)
myArray[0] = myArray[0] * 2

console.log(myArray)



/**
 * 04- Desenvolva um programa em Node.js que crie um array vazio e atribua valores a ele utilizando o método push(). Adicione três números inteiros ao array e, em seguida, exiba o array resultante.
 */

const newArray = []
newArray.push(1)
newArray.push(2)
newArray.push(3)

console.log(newArray)


/**
 * 05- Desenvolva um programa em Node.js que simule uma clínica veterinária. Crie um array vazio chamado clinica que representará a fila de animais na clínica. Em um primeiro momento, simule a chegada de três animais diferentes e exiba a lista de animais no console. Após a exibição, remova os animais da lista um por vez e, por fim, exiba no console o estado final da lista.
 */

const clinicaVeterinaria = []

clinicaVeterinaria.push("cachorro")
clinicaVeterinaria.push("gato")
clinicaVeterinaria.push("arara")

console.log("Os animais presentes na clínica são: ", clinicaVeterinaria)

clinicaVeterinaria.pop()
clinicaVeterinaria.pop()
clinicaVeterinaria.pop()

console.log("Os animais presentes na clínica são: ", clinicaVeterinaria)
