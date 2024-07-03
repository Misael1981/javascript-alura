# filter

O `filter()` método é uma função interna usada com arrays que cria um novo array contendo apenas elementos que passam em um teste implementado por uma função de retorno de chamada fornecida. É uma ferramenta poderosa para extrair dados seletivamente de arrays com base em critérios específicos.

## Caracteristicas principais:

- **Não mutante**: Não modifica o array original. Em vez disso, retorna um novo array com os elementos filtrados.
- **Iterativo**: Ele percorre cada elemento no array original, aplicando a função de retorno de chamada.
- **Função de retorno de chamada**: Esta função determina se um elemento deve ser incluído no novo array. Ela recebe três argumentos:
  - `element`: O elemento atual sendo processado a partir da matriz original.
  - `index`(opcional): O índice do elemento atual na matriz original.
  - `array` (opcional): A matriz original sendo filtrada.
- **Valores verdadeiros**: A função de retorno de chamada deve retornar um valor verdadeiro ( `true`, um número diferente de zero, uma string, etc. ) para incluir o elemento no novo array. Um valor falso ( `false`, , , etc. ) exclui o elemento. `0` `""`

## Sintaxe:

```
const newArray = originalArray.filter(callbackFn);
```

## Exemple: 

```
const numbers = [1, 3, 5, 2, 4, 6];
const evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0; // Check if the number is even
});

console.log(evenNumbers); // Output: [2, 4, 6] (only even numbers)
console.log(numbers);     // Output: [1, 3, 5, 2, 4, 6] (original array remains unchanged)
```

## Casos de uso comuns:

- Filtrando elementos com base em um valor de propriedade:

```
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 20 }
];
const adultUsers = users.filter(user => user.age >= 21);
```

- Criando novas matrizes com transformações específicas:

```
const products = [
  { name: 'Shirt', price: 20 },
  { name: 'Hat', price: 15 },
  { name: 'Shoes', price: 50 }
];
const discountedPrices = products.filter(product => product.price > 25).map(product => product.price * 0.9); // Filter expensive products then apply a 10% discount
```

Ao usar `filter()`, você pode simplificar tarefas de manipulação de arrays no seu código JavaScript, tornando-o mais conciso e eficiente.

[Arrays](../arrays.md)