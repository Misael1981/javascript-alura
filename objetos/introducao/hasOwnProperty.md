# `hasOwnProperty()`

O método `hasOwnProperty()` em JavaScript verifica se um objeto possui uma propriedade específica como uma propriedade definida diretamente nesse mesmo objeto, e não herdada de um protótipo. Em outras palavras, ele verifica se a propriedade pertence ao próprio objeto e não foi herdada de um objeto pai na cadeia de protótipos.

O método recebe um argumento único, que é o nome da propriedade a ser verificado (como uma string ou um símbolo). Ele retorna um valor booleano:

- **true**: se a propriedade for encontrada como uma propriedade definida diretamente no objeto;
- **false**: se a propriedade não for encontrada como uma propriedade definida diretamente no objeto, ou se o argumento não for uma string ou um símbolo válido.

## Diferença entre `hasOwnProperty()` e `in`:

O operador `in` verifica se uma propriedade existe em um objeto, incluindo propriedades herdadas de repositórios. Já o `hasOwnProperty()` verifica apenas se a propriedade foi definida diretamente no objeto em questão.

### Exemplo de uso:

```
const carro = {
  marca: "Fiat",
  modelo: "Uno",
  ano: 2020
};

console.log(carro.hasOwnProperty("marca")); // true
console.log(carro.hasOwnProperty("cor")); // false (a propriedade "cor" não está definida diretamente no objeto)

// Verificando propriedade herdada (do protótipo de Object)
console.log(carro.hasOwnProperty("toString")); // true (a propriedade "toString" é herdada do protótipo de Object)
```

### Observações:

- O método `hasOwnProperty()` é definido no protótipo de Object, então todos os objetos em JavaScript o possuem.
- É importante usar o `hasOwnProperty()` quando você precisa saber se uma propriedade foi definida diretamente no objeto em questão, e não se ela existe em algum lugar na cadeia de protótipos.
- Para verificar se uma propriedade existe em um objeto, incluindo propriedades herdadas, utilize o operador `in`.

### [Objeto](../objetos.md)