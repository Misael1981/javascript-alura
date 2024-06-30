# Operador Condicional Ternário

O operador condicional (ternário) é o único operador JavaScript que possui três operandos. Este operador é frequentemente usado como um atalho para a instrução `if`.

## Descrição

Se `condition` é `true`, o operador retornará o valor de `expr1`; se não, ele retorna o valor de `exp2`.

```
const valor = 50;
const texto = valor < 50 ? ‘valor insuficiente’ : ‘valor suficiente’;
console.log(texto); // retorna ‘valor suficiente’
```

O valor da variável texto representa o que chamamos de operador ternário e sua sintaxe é a seguinte:


```
//condição ?      caso 'true'    :     caso 'false'
valor < 50 ? 'valor insuficiente' : 'valor suficiente';
```

O operador ternário tem esse nome pois é o único em JavaScript que utiliza três operandos:

1. a **condição**, seguida do sinal `?`

2. o código a ser executado se a condição for `true`, seguida de `:`

3. o código a ser executado se a condição for `false`.

O operador ternário é normalmente utilizado em substituição ao `if…else` em que as condições têm apenas uma linha de retorno.

Confira abaixo alguns exemplos de blocos if nos quais é possível utilizar o operador ternário:

```
let matriculaAtiva = true;

function verificaMatriculaAtiva() {
 if (matriculaAtiva === true) {
   return 'matrícula ativa no sistema';
 } else {
   return 'matrícula não está ativa';
 }
}

console.log(verificaMatriculaAtiva());
// retorna 'matrícula ativa no sistema'
```

O exemplo acima mostra um `if` em que os códigos dentro dos blocos `{}` são compostos por somente uma linha cada, retornando uma string para cada caso.

A mesma lógica, usando o operador ternário:

```
let matriculaAtiva = true;

function verificaMatriculaAtiva() {
 return matriculaAtiva ? 'matrícula ativa no sistema' : 'matrícula não está ativa';
}

console.log(verificaMatriculaAtiva());
// retorna 'matrícula ativa no sistema'
```

Agora a função, ao invés de retornos (`return`) diferentes para `if` e `else`, tem apenas um retorno, que é o **resultado da condicional feita pelo operador ternário**.

Podemos interpretar a linha do `return` em português, da seguinte forma: “A matrícula está ativa? Em caso positivo (`true`), retorne o texto ’matrícula ativa no sistema’. Em caso negativo (`false`), retorne o texto ’matrícula não está ativa’.

Observe que o sinal `?` separa a condição, enquanto o sinal `:` separa os casos `true` e `false`.

[Operadores](../operadores/operadores.md)


