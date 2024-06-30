# Arrow Functions ou Funções de seta

Funções de seta, Pers no ECMAScript 2015 (ES6), são uma forma concisa de escrever funções em JavaScript. Elas oferecem uma sintaxe mais curta e limpa em comparação com as funções de expressão tradicionais.

Veja os principais aspectos das funções de seta:

### Sintaxe:

```
const funcao = (parametros) => { instrucoes; }
```
- `parametros`: São os argumentos passados ​​para a função.

- `=>`: O operador arrow separa os parâmetros das instruções de função.

- `instrucoes`: O bloco de código que define o que a função deve fazer.

### Características:

- **Sintaxe concisa**: As funções de seta geralmente ocupam menos linhas de código, tornando seu código mais legível.

- **Retorno implícito**: Para funções de uma única linha, o retorno da função está implícito. Você não precisa usar a palavra `return` específica.

- **Lexical isto**: O valor de `this` dentro de uma função de flecha é herdado do escopo externo onde ela foi definida, ao contrário das funções declarativas tradicionais que criam seu próprio escopo para `this`.

- `Não podem ser usadas como construtoras`: As funções Arrow não podem ser usadas com o operador newpara criar objetos.

### Vantagens:

- **Código mais limpo e compacto**: A sintaxe mais curta torna o código mais fácil de ler e escrever.

- **Ideias para callbacks**: Devido à sua natureza concisa, as funções de seta são frequentemente utilizadas como callbacks em métodos como `forEach`, e . `map` `filter`
- **Lexical this**: Em certos casos, o lexical this pode simplificar o gerenciamento do contexto da função.

Exemplos:

- **Função tradicional vs. Função Arrow**:

```
// Função tradicional
function somar(x, y) {
  return x + y;
}

// Arrow function (uma linha)
const somar = (x, y) => x + y;

const resultado = somar(5, 3);
console.log(resultado); // 8
```

- #### Função com múltiplas linhas:

```
const calcularArea = (base, altura) => {
  const area = base * altura;
  return area;
};

const areaRetangulo = calcularArea(10, 5);
console.log(areaRetangulo); // 50
```
#### Lembrando:

- As funções de seta não são adequadas para todas as situações. Se a função precisar de seu próprio escopo para thisou para ser usada como um construtor, use uma função declarativa tradicional.
- Use o bom senso ao escolher entre as funções de seta e funções de expressão tradicionais, considerando a legibilidade e o contexto do seu código.

[Funções](../funcoes/funcoes.md)
