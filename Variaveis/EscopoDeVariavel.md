# Escopo de variável

O escopo de variável em JavaScript define a visibilidade de uma variável dentro de um programa. Ou seja, determinar em quais partes do código a variável pode ser acessada e utilizada.

Existem três tipos principais de escopo em JavaScript:

## 1. Escopo Global:

- As variáveis ​​declaradas com a palavra-chave `var` fora de qualquer função ou bloco de código possuem escopo global.

- Isso significa que elas podem ser acessadas e modificadas em qualquer lugar do programa.

- **Exemplo**:

```
var nomeGlobal = "João"; // Variável global

function mostrarNome() {
  console.log(nomeGlobal); // Acessando variável global dentro da função
}

mostrarNome(); // Resultado: João
```

## 2. Escopo de Função:

- As variáveis ​​declaradas dentro de uma função possuem escopo de função.
- Elas só podem ser acessadas e modificadas dentro da função em que foram declaradas.
- **Exemplo**:

```
function calcularSoma(a, b) {
  var soma = a + b; // Variável local à função
  return soma;
}

console.log(soma); // Erro: 'soma' não está definida fora da função
```

## 3. Escopo de Bloco:

- As variáveis ​​declaradas com as palavras-chave `let` ou `const` dentro de um bloco de código (`{}`) possuem escopo de bloco.
- Elas só podem ser acessadas e modificadas dentro desse bloco e em blocos aninháveis.
- **Exemplo**: 

```
if (true) {
  let nomeBloco = "Maria"; // Variável local ao bloco
  console.log(nomeBloco); // Acessando variável dentro do bloco
}

console.log(nomeBloco); // Erro: 'nomeBloco' não está definida fora do bloco
```

## Diferenças entre Escopos:

- **Global**: Acessível em todo o programa.
- **Função**: Acessível apenas dentro da função em que foi declarada.
- **Bloco**: Acessível apenas dentro do bloco em que foi declarado e em blocos aninhados.

## Regras importantes:

- Uma variável dentro de um escopo interno não pode ter o mesmo nome de uma variável em um escopo externo.
- Variáveis ​​de escopo externo não podem ser acessadas a partir de um escopo interno.
- A palavra-chave `var` permite redeclaração de variáveis ​​no mesmo escopo.
- As palavras-chave `let` e `const` não permitem redeclaração de variáveis ​​no mesmo escopo.

## Benefícios do Escopo de Variável:

- **Organização do código**: Permite dividir o código em módulos e evitar conflitos de nomes.

- **Segurança**: Evita modificações acidentais em variáveis ​​de outros escopos.

- **Legibilidade**: Torna o código mais fácil de ler e entender.

## Dicas para Usar o Escopo de Variável:

- Utilize `let` ou `const` em vez de `var` para maior clareza e escopo do bloco.

- Defina variáveis ​​no menor escopo possível para reduzir o isolamento entre partes do código.
- Evite usar variações globais quando possível.

[Variaveis](../Variaveis/Variaveis.md)
