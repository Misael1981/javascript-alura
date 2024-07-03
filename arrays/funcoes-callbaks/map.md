# Método map()

Transforma elementos de um array em outro array. Ele percorre cada elemento do array original, aplica uma função de callback a cada um e retorna um novo array com os resultados da transformação.

### Estrutura básica:

```
arrayOriginal.map(function callback(elementoAtual, indice, arrayOriginal) {
  // Retorna o valor transformado para o novo array
});
```

### Parâmetros da função `callback`:

- `elementoAtual`: Representa o elemento atual do array original sendo processado na iteração.
- `indice` (opcional): Representa o índice (posição) do elemento atual dentro do array original.
- `arrayOriginal` (opcional): Representa o array original completo sendo iterado.

### Observações:

- A função `callback` é obrigatória. É nela que você define a transformação a ser aplicada em cada elemento do array original.
- Os parâmetros `indice` e `arrayOriginal` são opcionais. Você pode incluí-los na função `callback` se precisar deles para manipular o elemento atual com base em sua posição ou acessar o array completo.
-O `map()` **sempre retorna um novo array**. Este novo array contém os valores transformados dos elementos do array original.
O array original **não é modificado**.

### Exemplo de uso:

```
const numeros = [1, 2, 3, 4, 5];

const numerosAoQuadrado = numeros.map(numero => numero * numero);
console.log(numerosAoQuadrado); // [1, 4, 9, 16, 25]
```

Neste exemplo, a função `callback` recebe o `elementoAtual` (um número) e retorna o quadrado desse número. O novo array `numerosAoQuadrado` contém os quadrados dos números do array original.

### Vantagens do `map()`:

- **Transformação eficiente**: Permite transformar elementos de um array em outro de forma concisa e eficiente.
- **Novo array**: Cria um novo array com os resultados da transformação, sem modificar o array original.
- **Flexibilidade**: A função `callback` permite realizar diversas transformações, como mapeamento de valores, cálculos matemáticos ou criação de novos objetos.
- **Encadeamento**: O `map()` pode ser usado em conjunto com outros métodos de array, como `filter` e `reduce`, para criar pipelines de processamento complexos.

### Dicas extras:

- Se precisa apenas iterar sobre um array e realizar uma ação em cada elemento sem precisar retornar um novo array, use o método `forEach()`.
- O `map()` é frequentemente usado para converter arrays de um tipo em outro, como converter um array de strings em um array de números ou vice-versa.

[Arrays](../arrays.md)