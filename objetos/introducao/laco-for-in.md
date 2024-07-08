# Laço de repetição `for..in`

O laço `for...in` é usado para iterar sobre as propriedades enumeráveis ​​de um objeto. Isso significa que ele percorre cada chave-valor do objeto, na ordem em que foram definidos.

## Sintaxe:

```
for (chave in object) {
  // Código a ser executado para cada propriedade
}
```

## Explicação:

- `chave`: Uma variável que receberá o nome de cada propriedade do objeto durante a iteração.
- `object`: O objeto sobre o qual o laço será executado.

## Exemplo:

```
const person = {
  nome: "João",
  idade: 30,
  profissao: "Desenvolvedor"
};

for (const propriedade in person) {
  console.log(`${propriedade}: ${person[propriedade]}`);
}
```
Este código irá imprimir o seguinte no console:

```
nome: João
idade: 30
profissao: Desenvolvedor
```
- Para acessar o valor apenas de cada propriedade do objeto, basta chamar a primeira variável `console.log(propriedade)`
- Para acessao o **valor** de cada propriedade precisamos chamar o objeto:
  - Tanto faz se usarmos a notação de ponto (`person.propriedade`), pois sabemos que existe a propriedade de nome ou notação de colchetes (`person['propriedade']`).


## Pontos importantes:

- A `for...in` itera apenas sobre as propriedades enumeráveis ​​do objeto. Isso significa que propriedades herdadas do protótipo do objeto não serão iteradas a menos que sejam definidas como enumeráveis ​​no próprio objeto.
- A ordem de iteração das propriedades não é garantida. Se você precisar iterar sobre as propriedades em uma ordem específica, utilize um laço `for` com índices numéricos ou o método `forEach()`.
- O `for...in` não é recomendado iterar sobre arrays. Para iterar sobre arrays, utilize um laço `for` com índices numéricos ou o método `forEach()`.

### Diferença entre `for...in` e `for...of`:

O JavaScript possui outro laço de iteração, o `for...of`, que é usado para iterar sobre os valores iteráveis ​​de um objeto. A principal diferença entre o `for...in` e o `for...of` é que o `for...in` itera sobre as propriedades enumeráveis ​​do objeto, enquanto o `for...of` itera sobre os valores iteráveis ​​do objeto.

Em resumo, ele `for...in` é utilizado para iterar sobre as propriedades enumeráveis ​​de um objeto, enquanto `for...of` é utilizado para iterar sobre os valores iteráveis ​​de um objeto.

### [Objetos](../objetos.md)

