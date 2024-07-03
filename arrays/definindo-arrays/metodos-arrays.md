# O que são Métodos em JavaScript?

**Um método é uma função** chamada (executada) no contexto de um objeto (array, number, string, etc).

Métodos realizam tarefas pré-definidas usando o valor que está no contexto (por exemplo, um array) e dos parâmetros que passamos para eles, como adicionar, remover ou até encontrar elementos. 

```
Vamos entender com mais detalhes o que são propriedades de objetos durante o curso de fundamentos do JavaScript: objetos.
```

Os interpretadores de JavaScript implementam vários métodos “prontos” que podemos usar para manipular e fazer operações com números, strings, arrays, objetos, etc. Com algumas exceções, os métodos são próprios de cada tipo: por exemplo, não conseguimos usar métodos de arrays para manipular números e vice-versa.

Exemplos de métodos:

## Métodos de array

### Método push():

- **Função**: Adiciona um ou mais elementos ao final de um array.
- **Retorno**: Retorna o novo tamanho do array após a adição dos elementos.

- **Sintaxe**:

```
array.push(elemento1, elemento2, ..., elementon);
```

- **Exemplo**:

```
const frutas = ["banana", "maçã"];

frutas.push("laranja", "uva");
console.log(frutas); // Resultado: ["banana", "maçã", "laranja", "uva"]
```

### Método pop():

- **Função**: Remove o último elemento de um array e retorna o elemento removido.
- **Retorno**: Retorna o elemento removido do final do array.

- **Sintaxe**:

```
const ultimoElemento = array.pop();
```

- **Exemplo**:

```
const pilha = ["livro", "caneta", "caderno"];

const ultimoRemovido = pilha.pop();
console.log(ultimoRemovido); // Resultado: "caderno"
console.log(pilha); // Resultado: ["livro", "caneta"]
```

### Método toFixed()

- **Retorno**: Fixa a quantidade de caracteres após o ponto, no valor valor passado por parâmetro;

- **Sintaxe**:

```
array.toFixed(2)
```

- **Exemplo**:

```

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media..toFixed(2)); // Resultado: 7.38
```

### Método slice()

- **Função**: retorna uma cópia de parte de um array a partir de um subarray criado entre as posições `início` e `fim` (fim não é incluído) de um array original. O Array original não é modificado.

- **Parâmetros**: Se `inicio` for omitido, inicia a partir do índice `0`
  - o `fim` é opcional;

- **Retorno**: Retorna um novo array

- **Sintáxe**:

```
arr.slice([início[,fim]])
```

- **Exemplo**

```
const frutas = ["Banana", "Laranja", "Limao", "Maçã", "Manga"];
const citricos = frutas.slice(1, 3);

// citricos contem ['Laranja','Limao']
```

### Método .splice()

- **Função**: Altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.

- **Retorno**: Uma lista contendo os elementos removidos. Se apenas um elemento é removido, por exemplo, uma lista contendo apenas um elemento é retornada. Se nenhum elemento é removido, uma lista vazia é retornada.

- **Parâmetros**: 
  - `indice`
Índice o qual deve iniciar a alterar a lista. Se maior que o tamanho total da mesma, nenhum elemento será alterado. Se negativo, irá iniciar a partir daquele número de elementos a partir do fim.

  - `deleteCount`
Um inteiro indicando o número de antigos elementos que devem ser removidos.

  - Se o parâmetro `deleteCount` não é especificado, ou se é maior que o número de elementos restantes na lista iniciando pelo índice, então todos os elementos até o fim da lista serão deletados.

  - Se `deleteCount` é 0, nenhum elemento é removido. Neste caso você deve especificar pelo menos um novo elemento.

  - `elemento1, ..., elementoN`
Os elementos a adicionar na lista. Se você não especificar nenhum elemento, splice simplesmente removerá elementos da mesma.

- **Sintaxe**

```
array.splice(indice[, deleteCount[, elemento1[, ...[, elementoN]]])

array.splice(indice) // SpiderMonkey/Firefox extension
```

- **Exemplo**

```
const listaEstudantes = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];

listaEstudantes.splice(1, 2, 'Rodrigo'); //[ 'João', 'Rodrigo', 'Lara', 'Marjorie', 'Leo' ]

console.log(listaEstudantes);
```

### Método concat()

- **Função**:  É utilizado para mesclar dois ou mais arrays. Esse método não altera os arrays existentes, mas, em vez disso, retorna um novo array.

- **Retorno**: Retorna um novo array;

- **Sintaxe**:

```
concat()
concat(valor0)
concat(valor0, valor1)
concat(valor1, valor2, /*...,*/ valorN)
```

- **Exemplo**:

```
const letras = ["a", "b", "c"];
const numeros = [1, 2, 3];

const alfaNumerico = letras.concat(numeros);
console.log(alfaNumerico);
// resulta em ['a', 'b', 'c', 1, 2, 3]
```

## includes() 

- **Função**: Determina se um array contém um determinado elemento, retornando `true` ou `false` apropriadamente.

- **Retorno**: Retorna um booleano.

- **Parâmetros**: O elemento a buscar

- **Sintaxe**:

```
array.includes(searchElement[, fromIndex])
```

- **Exemplo**:

```
[1, 2, 3].includes(2); // true
[1, 2, 3].includes(4); // false
[1, 2, 3].includes(3, 3); // false
[1, 2, 3].includes(3, -1); // true
[1, 2, NaN].includes(NaN); // true
```

## indexOf() 

- **Função**: Retorna o índice da primeira ocorrência do valor fornecido em searchValue, começando a busca a partir de fromIndex. Retorna -1 se o valor não for encontrado.

- **Retorno**:  índice da primeira ocorrência do valor.

- **Parâmetros**: Uma string representando o valor a ser buscado.

- **Sintaxe**: 

```
str.indexOf(searchValue[, fromIndex])
```

- **Exemplo**: 

```
const str = "Serx ou não ser, eisx a questão";
count = 0;
pos = str.indexOf("x"); // retorna 3
```



  



[Arrays](../arrays.md)

