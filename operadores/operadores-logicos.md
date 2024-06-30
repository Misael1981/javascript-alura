# Operadores lógicos

## O que são os Operadores Lógicos em JavaScript?

Os operadores lógicos são essenciais na programação, independentemente da linguagem que você esteja utilizando. Em JavaScript, não é diferente. Operadores lógicos são símbolos ou palavras-chave que nos permitem realizar operações lógicas entre dois valores booleanos (verdadeiro ou falso).

## Existem três operadores lógicos principais em JavaScript:
### 1. Operador AND (&&):

Este operador retorna verdadeiro se ambos os operandos forem verdadeiros. Caso contrário, ele retorna falso. Por exemplo, se tivermos duas expressões, A e B, A && B será verdadeiro somente se ambas as expressões forem verdadeiras.

- O operador AND é usado para realizar duas ou mais verificações simultâneas.
- Se todas as verificações forem verdadeiras, o resultado será verdadeiro. Caso contrário, será falso.
- Exemplo: 

```
if (idade >= 18 && possuiCarteiraDeMotorista === true) {}
```

### 2. Operador OR (||):

Este operador retorna verdadeiro se pelo menos um dos operandos for verdadeiro. Se ambos os operandos forem falsos, então o resultado será falso. Por exemplo, se tivermos duas expressões, A e B, A || B será verdadeiro se pelo menos uma das expressões for verdadeira.

- O operador OR é usado para realizar uma escolha entre duas ou mais condições.
- Se pelo menos uma das condições for verdadeira, o resultado será verdadeiro. Somente se todas as condições forem falsas, o resultado será falso.
- Exemplo: 

```
if (tipo === “admin” || tipo === “superadmin”) {}
```

### 3. Operador NOT (!):

Este operador inverte o valor de um operando booleano. Se um operando for verdadeiro, o operador NOT o tornará falso e vice-versa. Por exemplo, se tivermos uma expressão A, !A será verdadeiro se A for falso.

- O operador NOT é usado para inverter o valor booleano de uma expressão.
- Se a expressão for verdadeira, o resultado será falso. Se a expressão for falsa, o resultado será verdadeiro.
- Exemplo: 

```
if (!isLoggedIn) {}
```

[Operadores](../operadores/operadores.md)