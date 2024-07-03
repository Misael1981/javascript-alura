# reduce()

`reduce()` é uma função embutida usada com arrays que executa uma função de callback em cada elemento do array e retorna um único valor final. É uma ferramenta valiosa para resumir ou transformar um array em um valor único ou uma estrutura de dados mais complexa.

## Características principais:

**Iterativo**: Ele percorre cada elemento do array original, aplicando a função de callback.
- **Função de retorno de chamada (redutor)**: Essa função define como os elementos do array serão acumulados para chegar ao valor final. Ela recebe quatro argumentos:
  - `acumulador`(opcional): O valor acumulado da iteração anterior (iniciado com o valor inicial se fornecido, caso contrário, com o primeiro elemento do array).
  - `elementoAtual`: O elemento atual está sendo pressionado do array original.
  - `indice`(opcional): O índice do elemento atual no array original.
  - `array`(opcional): O array original sendo reduzido.
- **Valor inicial (opcional)**: Você pode fornecer um valor inicial para o acumulador, que será usado como base para a primeira iteração da função de callback. Se não for fornecido, o primeiro elemento do array será usado como acumulador, e a iteração será a partir do segundo elemento.

## Sintaxe:

```
const valorFinal = arrayOriginal.reduce(callbackFn, valorInicial);
```

## Exemplo:

```
const numeros = [1, 3, 5, 2, 4, 6];
const soma = numeros.reduce((acumulador, elementoAtual) => acumulador + elementoAtual, 0); // Valor inicial 0

console.log(soma); // Output: 21 (soma de todos os elementos)
```

## Casos de uso comum:

- Alguns elementos de um array:

```
const precos = [10, 15, 20];
const total = precos.reduce((soma, preco) => soma + preco, 0);
```

- Encontrar o valor máximo ou mínimo:

```
const temperaturas = [25, 18, 32, 19, 28];
const temperaturaMaxima = temperaturas.reduce((max, temp) => Math.max(max, temp), -Infinity);
const temperaturaMinima = temperaturas.reduce((min, temp) => Math.min(min, temp), Infinity);
```

- Crie objetos a partir de arrays:

```
const usuarios = [
  { nome: 'Alice', idade: 25 },
  { nome: 'Bob', idade: 30 },
  { nome: 'Charlie', idade: 20 }
];
const usuariosPorIdade = usuarios.reduce((objeto, usuario) => {
  objeto[usuario.idade] = (objeto[usuario.idade] || 0) + 1;
  return objeto;
}, {});
```

`reduce()` é um método versátil que permite realizar diversas operações de agregação e transformação em matrizes de forma concisa e eficiente.

[Arrays](../arrays.md)

