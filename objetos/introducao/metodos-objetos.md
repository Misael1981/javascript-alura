# Métodos de objeto

**Um método é uma função que é executada no contexto de um objeto e está associada a ele**. Em um objeto literal, métodos são definidos da mesma forma que as funções normais são definidas, tendo parâmetros, retorno e um bloco definido, com exceção do caso das arrow functions e do uso do `this`.

Vamos revisitar e expandir nossas noções sobre alguns métodos de objeto do JavaScript, para uma compreensão mais abrangente:

- `Object.keys()` e `Object.values()`: são usados para extrair informações específicas de um objeto. Esses métodos fornecem, respectivamente, as chaves e os valores presentes em um objeto. São úteis para iterar ou fazer operações específicas em conjuntos de dados de um objeto.

```
const meuObjeto = { a: 1, b: 2, c: 3 };
const chaves = Object.keys(meuObjeto);
const valores = Object.values(meuObjeto);

console.log(chaves); // Saída: ['a', 'b', 'c']
console.log(valores); // Saída: [1, 2, 3]
```

- `Object.entries()`: este método retorna um array de arrays que representam pares chave-valor. É útil em situações que demandam iterações mais complexas ou manipulação mais minuciosa dos dados.

```
const meuObjeto = { a: 1, b: 2, c: 3 };
const entradas = Object.entries(meuObjeto);

console.log(entradas);
// Saída: [['a', 1], ['b', 2], ['c', 3]]
```

- `Object.assign()`: usado para fusão e cópia de objetos. Este método permite combinar propriedades de diferentes objetos em um único objeto.

```
const objetoOriginal = { a: 1, b: 2 };
const objetoParaCopiar = { b: 3, c: 4 };

const objetoFusionado = Object.assign({}, objetoOriginal, objetoParaCopiar);

console.log(objetoFusionado);
// Saída: { a: 1, b: 3, c: 4 }
```

Explorar estes métodos adicionais expandirá ainda mais sua proficiência na manipulação de objetos em JavaScript.

Sabemos que o ecossistema JavaScript é muito vasto e sofre diversas mudanças em função do tempo, então vale a pena dedicarmos um tempo para olhar a documentação e testar alguns exemplos.

### [Objetos](../objetos.md)