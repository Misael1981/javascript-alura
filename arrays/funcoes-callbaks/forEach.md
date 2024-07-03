# Método forEach

O forEach é um método útil em JavaScript para iterar sobre elementos de um array. Ele executa uma função callback para cada elemento do array, permitindo que se realize operações em cada item individualmente.

Estrutura básica:

```
array.forEach(function callback(elementoAtual, indice, arrayOriginal) {
  // Código a ser executado para cada elemento
});
```

Vamos analisar os parâmetros da função `callback`:

- `elementoAtual`: Representa o elemento atual do array sendo processado na iteração.
- `indice` (opcional): Representa o índice (posição) do elemento atual dentro do array.
- `arrayOriginal` (opcional): Representa o array original completo sendo iterado.

### Observações:

- A função `callback` é obrigatória. É nela que você define as operações a serem realizadas em cada elemento do array.
- Os parâmetros `indice` e `arrayOriginal` são opcionais. Você pode incluí-los na função `callback` se precisar deles para manipular o elemento atual com base em sua posição ou acessar o array completo.
- O `forEach` não modifica o array original. Se você precisa modificar o array, pode usar outros métodos como `map` ou `filter`.

Exemplo de uso:

```
const frutas = ["banana", "maçã", " laranja"];

frutas.forEach(fruta => console.log(fruta)); // Imprime cada fruta no console
```
Neste exemplo, a função `callback` recebe apenas o `elementoAtual` (a fruta) e imprime o nome de cada fruta no console.

### Vantagens do forEach:

- **Concisão**: Proporciona uma forma mais compacta de iterar sobre arrays em comparação com loops `for` tradicionais.
- **Leitura**: Melhora a legibilidade do código ao explicitar a operação a ser realizada em cada elemento.
- **Flexibilidade**: Permite acessar o índice e o array original dentro da função callback para manipulações mais complexas.

[Arrays](../arrays.md)