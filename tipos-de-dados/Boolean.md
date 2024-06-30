# Boolean

Trata-se de um tipo especial que só tem **dois valores**
`true` ou `false` (verdadeiro ou falso, respectivamente), sim ou não, ou está ou não está.

## Tipos Booleanos em JavaScript: Verdade e Falso Desvendados

No mundo da programação, os tipos booleanos assumem o papel fundamental de representar dois estados essenciais: **true** e **false** . No JavaScript, esses tipos, também conhecidos como lógicos, são elementos básicos para construir estruturas de controle, realizar comparações e tomar decisões dentro do seu código.

### 1. Compreendendo os Valores Booleanos:

Em JavaScript, os valores booleanos podem ser representados por duas palavras-chave:

- `true`: Indica que uma é verdadeira, afirmando algo como um fato ou uma possibilidade.
- `false`: Indica que uma afirmação é falsa, negando ou refutando algo.

### 2. Literais Booleanos:

Os literais booleanos são a maneira mais simples de declarar valores booleanos no seu código. São escritos diretamente como trueou false:

```
const verdadeiro = true;
const falso = false;
```

### 3. Operadores Booleanos:

Os operadores booleanos permitem combinar e comparar valores booleanos, abrindo um leque de possibilidades para controlar o fluxo do seu programa. Os principais operadores booleanos em JavaScript são:

- `&&` (e): Retorna `true` se ambos os operandos forem `true`, caso contrário, retorna `false`.

- `||`(ou): Retorna `true` se pelo menos um dos operandos for `true`, caso contrário, retorna `false`.

`!` (não): Inverta o valor do operando. Se o operando for `true`, retorna `false`; se for `false, retorna `true`.

### 4. Usando Valores Booleanos em Condições:

Os valores booleanos são essenciais em estruturas de controle como `if` e `switch`, permitindo que o programa execute diferentes blocos de código de acordo com a avaliação de uma equação:

```
const idade = 18;

if (idade >= 18) {
  console.log("Você é maior de idade!");
} else {
  console.log("Você ainda é menor de idade.");
}
```

### 5. Conversão de Tipos:

O JavaScript possui mecanismos para converter outros tipos de dados em valores booleanos. O valor `0`, strings vazias (`""`), `null` e `undefined` são convertidos para `false`, enquanto os demais valores numéricos diferentes de `0` e strings com qualquer conteúdo são convertidos para `true`.

### 6. Funções Booleanas:

Algumas funções em JavaScript retornam valores booleanos, como `isNaN`(valor) verificar se um valor é NaN (Not a Number) e `isFinite(valor)`verificar se um valor é um número finito.

### 7. Booleanos em Objetos:

Valores booleanos podem ser armazenados como propriedades em objetos, permitindo organizar e acessar informações lógicas de forma estruturada.

### 8. Importância dos Tipos Booleanos:

Dominar os tipos booleanos é crucial para:

Controle o fluxo do seu programa com base em condições.
Realizar comparações e testes lógicos.
Construir algoritmos eficientes e precisos.

[Tipos de Dados](../tipos-de-dados/tipos-de-dados.md)