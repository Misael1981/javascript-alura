# Propriedade enumeráveis

Em JavaScript, objetos são estruturas que armazenam dados em pares chave-valor. Cada propriedade em um objeto possui atributos que determinam seu comportamento e acessibilidade. Uma característica importante dessas propriedades é a enumeração, que define se uma propriedade será incluída em operações como iteração.

## Propriedades enumeráveis

Propriedades enumeráveis são aquelas que são consideradas durante operações de iteração, como `for … in` e métodos como `Object.keys()`. Por padrão, todas as propriedades criadas diretamente em um objeto são enumeráveis, o que significa que elas são visíveis durante a iteração.

```
const meuObjeto = {
  nome: "ChatGPT",
  linguagem: "JavaScript",
  versao: "3.5"
};

for (let chave in meuObjeto) {
  console.log(chave); // Saída: nome, linguagem, versao
}
```

## Propriedades não enumeráveis

Propriedades não enumeráveis não são consideradas durante operações de iteração. Essas propriedades são geralmente associadas a métodos internos de objetos ou configurações específicas que não precisam ser expostas durante iterações comuns.

```
const meuObjeto = {};

Object.defineProperty(meuObjeto, 'propriedadeNaoEnumeravel', {
  value: 42,
  enumerable: false
});

for (let chave in meuObjeto) {
  console.log(chave); // Saída: (nenhuma, pois não há propriedades enumeráveis)
}
```

## Manipulando enumerabilidade

Para controlar a enumerabilidade de uma propriedade, a função `Object.defineProperty()` pode ser utilizada. O segundo argumento desta função permite a configuração de diversas propriedades, incluindo a enumerabilidade.

```
const meuObjeto = {};

Object.defineProperty(meuObjeto, 'propriedadeNaoEnumeravel', {
  value: 42,
  enumerable: false
});

console.log(Object.keys(meuObjeto)); // Saída: []
```

```
const meuObjeto = {};

// Criando uma propriedade não enumerável
Object.defineProperty(meuObjeto, 'propriedadeNaoEnumeravel', {
  value: 42,
  enumerable: true // Definindo a enumerabilidade como true
});

// Mesmo com enumerable:true, Object.keys ainda pode ser utilizado
console.log(Object.keys(meuObjeto)); // Saída: ['propriedadeNaoEnumeravel']

// Exibindo o valor da propriedade
console.log(meuObjeto.propriedadeNaoEnumeravel); // Saída: 42
```

Neste exemplo, a propriedade `propriedadeNaoEnumeravel` é configurada com `enumerable: true`, o que significa que a propriedade será listada quando utilizamos `Object.keys()`. Mesmo sendo enumerável, o valor da propriedade ainda pode ser acessado normalmente.

A enumerabilidade é uma das diversas propriedades de objetos em JavaScript e está relacionada à forma como eles são construídos na linguagem. Você pode consultar a [documentação do MDN sobre enumerabilidade e posse de propriedades](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) para conferir mais dados e exemplos.

### [Objetos](../objetos.md)