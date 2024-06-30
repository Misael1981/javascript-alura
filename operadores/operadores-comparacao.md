# Operadores de comparação

Um operador de comparação compara seus operandos e retorna um valor lógico com base no fato de a comparação ser verdadeira. Os operandos podem ser valores numéricos, de string, lógicos ou de objeto . As strings são comparadas com base na ordem lexicográfica padrão, usando valores Unicode. Na maioria dos casos, se os dois operandos não forem do mesmo tipo, o JavaScript tenta convertê-los em um tipo apropriado para comparação. Esse comportamento geralmente resulta na comparação numérica dos operandos. As únicas exceções à conversão de tipo nas comparações envolvem os operadores `===` e `!==`, que realizam comparações estritas de igualdade e desigualdade. Esses operadores não tentam converter os operandos em tipos compatíveis antes de verificar a igualdade. A tabela a seguir descreve os operadores de comparação em termos deste código de exemplo:

|   Operador        |    	Descrição   | Exemplos retornando true  |
|-------------------|------------------|--------------| 
|Igual ( ==) | Retorna `true`se os operandos forem iguais|`3 == var1`   `"3" == var1`   `3 == '3'`|
|Não igual ( !=) | Retorna truese os operandos não forem iguais. | `var1 != 4` `var2 != "3"`|
|Igualdade estrita ( ===)| Retorna `true` se os operandos são iguais e do mesmo tipo.| `3 === var1`|
|Estrito diferente ( !==)|Retorna truese os operandos são do mesmo tipo, mas não iguais, ou são de tipos diferentes.| `var1 !== "3"` `3 !== '3'`|
|Maior que ( >)| Retorna `true` se o operando esquerdo for maior que o operando direito.| `var2 > var1` `"12" > 2`|
|Maior ou igual ( >=)|Retorna `true` se o operando esquerdo for maior ou igual ao operando direito.| `var2 >= var1` `var1 >= 3`|
|Menor que ( <)|Retorna `true` se o operando esquerdo for menor que o operando direito.| `var1 < var2` `"2" < 12`|
|Menor ou igual ( <=)| Retorna `true` se o operando esquerdo for menor ou igual ao operando direito.| `var1 <= var2` `var2 <= 5`|

[Operadores](../operadores/operadores.md)