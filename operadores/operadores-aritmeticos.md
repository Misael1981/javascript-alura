# Operadores aritméticos

Um operador aritmético toma valores numéricos (literais ou variáveis) como operandos e retorna um único valor numérico. Os operadores aritméticos padrão são adição ( `+`), subtração (`-`), multiplicação (`*`) e divisão (`/`). Esses operadores funcionam como na maioria das outras linguagens de programação quando usados ​​com números de ponto flutuante (em particular, observe que a divisão por zero produz `Infinity`). Por exemplo:

Além das operações aritméticas padrão ( +, -, *, /), o JavaScript fornece os operadores aritméticos listados na tabela a seguir:


| Operador	| Descrição	| Exemplo |
|-----------|-----------|---------|
| Restante   ( %) | Operador binário. Retorna o resto inteiro da divisão dos dois operandos. | 12 % 5 retorna 2. |
|Incremento ( ++)          |Operador unário. Adiciona um ao seu operando. Se usado como um operador prefixo ( ++x), retorna o valor do seu operando após adicionar um; se usado como um operador pós-fixo ( x++), retorna o valor do seu operando antes de adicionar um.            | Se xfor 3, então ++xdefine xcomo 4 e retorna 4, enquanto x++retorna 3 e, somente então, define xcomo 4. |
|Decremento ( --)          |  Operador unário. Subtrai um de seu operando. O valor de retorno é análogo ao do operador de incremento.          | Se xfor 3, então --xdefine xcomo 2 e retorna 2, enquanto x--retorna 3 e, só então, define xcomo 2.         |
| Negação unária ( -)          | Operador unário. Retorna a negação do seu operando.           | Se xfor 3, então -xretorna -3.         |
| Unário mais ( +)         |  Operador unário. Tenta converter o operando em um número , se ainda não for.          |  +"3"retorna 3. +trueretorna 1.        |
|  Operador de exponenciação ( **)        | Calcula o baseelevado à exponentpotência, ou seja,base^exponent           |  2 ** 3retorna 8. 10 ** -1 retorna 0.1.        |

[Operadores](../operadores/operadores.md)