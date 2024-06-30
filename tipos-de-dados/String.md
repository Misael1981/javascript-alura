# Strings

**String** é o nome que usamos para representar **cadeias de caracteres**. Qualquer conjunto de caracteres entre aspas, sejam simples, duplas ou crases, são strings para o JavaScript.

```
const estudante = "Caroline";
const docente = 'Ana';
```

Porém, e se precisarmos colocar algo entre aspas dentro de um texto? Vamos criar outra constante chamada `cumprimento` e atribuir a ela o valor "nosso lema é 'estudar bastante!'", usando aspas simples entre aspas duplas. O JavaScript aceita citações com **aspas dentro de aspas**.

## Principais Métodos de Strings

1. `charAt(indice)`.:

- Obtenha o caractere na posição especificada ( `indice`) da string.
- **Exemplo**: 

```
const texto = "Hello, world!"; 
console.log(texto.charAt(3)); // Resultado: "l"
```
2. `charCodeAt(indice)`.:

- Retorna o código Unicode do caractere na posição ( indice) da string.
- **Exemplo**: 

```
const texto = "Olá, mundo!";
console.log(texto.charCodeAt(0)); // Resultado: 241 (código Unicode para "O")
```

3. `concat(...valores)`.:

- Concatena (junta) uma ou mais strings ao final da string original.
- **Exemplo**: 

```
const nome = "João"; 
const sobrenome = "Silva"; 
console.log(nome.concat(" ", sobrenome)); // Resultado: "João Silva"
```

4. `endsWith(sufixo)`:

- Verifique se a string termina com a substring especificada ( sufixo).
- **Exemplo**: 

```
const texto = "JavaScript é incrível!"; 
console.log(texto.endsWith("incrível!")); // Resultado: true
```

5. `fromCharCode(codigo_unicode)`.:

- Converta um código Unicode em um caractere correspondente.
- **Exemplo**: 

```
const codigo = 231; 
console.log(String.fromCharCode(codigo)); // Resultado: "ç"
```
6. `includes(subtexto, posicao_inicial)`.:

- Verifica se a string contém a substring especificada ( subtexto), iniciando na posição ( posicao_inicial) opcional.
- **Exemplo**:

```
const texto = "O rato roeu a roupa da rainha"; 
console.log(texto.includes("rato")); // Resultado: true
```

7. `indexOf(subtexto, posicao_inicial)`:

- Retorna a primeira posição ( posicao_inicial) da substring ( subtexto) na string, ou -1 se não encontrado.
- **Exemplo**:

```
const texto = "A casa caiu!"; 
console.log(texto.indexOf("casa")); // Resultado: 0
```

8. `lastIndexOf(subtexto, posicao_inicial)`:

- Retorna a última posição ( posicao_inicial) da substring ( subtexto) na string, ou -1 se não encontrado.
- **Exemplo**:

```
const texto = "Repita comigo: JavaScript!"; 
console.log(texto.lastIndexOf("JavaScript")); // Resultado: 23
```

9. `length`:

- Retorna o número de caracteres na string.
- **Exemplo**:

```
const texto = "Desvendando os segredos do JavaScript"; console.log(texto.length); // Resultado: 36
```

10. `match(regexp)`:

- Executa uma expressão regular ( regexp) na string e retorna um array com as correspondências.

- **Exemplo**:

```
const texto = "O código é poético"; 
const regexp = /[aeiou]/g; console.log(texto.match(regexp)); // Resultado: ["o", "e", "ó", "i", "a"]
```

11. `slice()`

-  Extrai uma parte de uma string e a retorna como uma nova string, sem modificar a string original.

- **Exemplo**:

```
const texto = "Estou aprendendo JavaScript"
const textoSlice = texto.slice(0, 5)

console.log(textoSlice); // Resultado: Estou
```

[Tipos de Dados](../tipos-de-dados/tipos-de-dados.md)