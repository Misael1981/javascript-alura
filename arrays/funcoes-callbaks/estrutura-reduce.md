# Estrutura do reduce

Com o método `reduce()` para “reduzir” uma lista de números para um único valor. Este método trabalha com parâmetros um pouco diferentes:

```
const numeros = [43, 50, 65, 12]
 
const soma = numeros.reduce((acum, atual) => atual + acum, 0)
 
console.log(soma) //170
```

1. O método `reduce()` está trabalhando com dois parâmetros. O primeiro é a **função callback** obrigatória para retornar o cálculo e o segundo parâmetro é um número que representa o valor inicial do acumulador – no caso, `0`.
2. A função callback foi escrita diretamente dentro do `reduce()`, e esta função também está recebendo dois parâmetros, ambos obrigatórios: o valor acumulado (`acum`) e o valor atual.
3. A função callback foi escrita na forma de arrow function; nesse caso, quando só temos uma linha de instrução dentro da função (`atual + acc`) não precisamos usar chaves e nem da palavra-chave `return`.

```
Caso você tenha mais de uma linha de instrução dentro de uma arrow function, as chaves {} e a palavra-chave return voltam a ser necessários.
```

[Arrays](../arrays.md)