# Set

No JavaScript, o `Set` um tipo de dado inserido no ES6 (ECMAScript 2015) que representa uma conjunto de valores únicos. Ele garante que cada valor ocorra apenas uma vez dentro do conjunto, tornando-o ideal para trabalhar com conjuntos de dados que não devem conter duplicatas.

## Características principais:

- **Armazena valores únicos**: Cada elemento no `Set` é único e não pode ser duplicado.
- **Valores diversos**: Você pode armazenar diferentes tipos de valores, como números, strings, objetos, arrays e até funções.
- **Eficiência de pesquisa**: Permite pesquisar elementos rapidamente usando a interface interna do `Set`.
- **Ordenação**: A ordem de inserção dos elementos é preservada, mas não é garantida em iterações.
- **Operações úteis**: Oferece métodos para verificar a presença de elementos, remover elementos, unir conjuntos e realizar interseções.

## Sintaxe:

- Criação de um Set:

```
const meuSet = new Set(); // Cria um Set vazio
const meuSetComValores = new Set([1, 2, 3, 'texto', { nome: 'Alice' }]); // Cria um Set com valores iniciais
```

- Métodos importantes:

  - `add(valor)`: Adiciona um novo valor ao Set. Se o valor já existir, ele não será duplicado.
  - `has(valor)`: Verifique se um valor específico está presente no Set.
  - `delete(valor)`: Remova um valor específico do Set.
  - `size`: Retorna o número de elementos no Set.
  - `forEach(callback)`: Itera sobre cada elemento do Set e executa a função de callback.
  - [`...meuSet`]: Converta o Set em um array.

## Casos de uso comum:

- Remover duplicatas de um array:

```
const numerosComDuplicatas = [1, 3, 2, 1, 4, 3];
const numerosUnicos = new Set(numerosComDuplicatas);
console.log([...numerosUnicos]); // Output: [1, 3, 2, 4]
```

- Comparar conjuntos de dados:

```
const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);
const intersecao = new Set([...setA].filter(x => setB.has(x))); // Encontra elementos em ambos os conjuntos
const diferenca = new Set([...setA].filter(x => !setB.has(x))); // Encontra elementos apenas no setA
console.log(intersecao); // Output: Set(3)
console.log(diferenca); // Output: Set(1, 2)
```

- Armazenar dados únicos em cache:

```
function carregarDados(url) {
  // Carrega dados do servidor
  const dados = /* ... */;
  const cacheDados = new Set();
  cacheDados.add(url); // Armazena a URL na cache

  return dados;
}

// Evita carregar dados duplicados
const dadosCacheados = carregarDados('https://exemplo.com/dados');
const outrosDadosCacheados = carregarDados('https://exemplo.com/dados'); // Retorna os dados cacheados

console.log(dadosCacheados === outrosDadosCacheados); // Output: true (mesmos dados)
```

O oferece `Set` uma maneira eficiente e confiável de gerenciar coleções de dados únicos em JavaScript. Sua simplicidade e funcionalidade tornam-se uma ferramenta valiosa para diversos cenários de programação.

[Arrays](../arrays.md)