# Funções de Expressão

No mundo vibrante do JavaScript, as funções de expressão surgem como ferramentas poderosas e dinâmicas, permitindo criar funções de forma mais concisa e flexível. Imagine-as como ninjas do código, prontas para serem usadas em qualquer lugar e a qualquer momento, trazendo agilidade e detalhes ao seu desenvolvimento.

### O que são funções de expressão em JavaScript?

As funções de expressão são uma maneira alternativa de declarar funções em JavaScript, utilizando uma sintaxe mais compacta e dinâmica. Elas se assemelham às funções declarativas tradicionais, mas oferecem algumas vantagens importantes.

Diferenças entre funções de expressão e funções declarativas:

|Caracteristica| 	Função declarativa | 	Função de expressão |
|--------------|----------------------|-------------|
|Sintaxe | `function nomeDaFuncao(parâmetros) { ... }`|`const nomeDaFuncao = (parâmetros) => { ... }`|
|Escopo | Funcional | Bloco|
|Nome	|Opcional (pode ser omitido) | Obrigatório |
|Armazenamento| Pode ser declarado antes de ser usado|Pode ser declarado e usado no mesmo local|

### Vantagens das funções de expressão:

- **Sintaxe mais concisa**: As funções de expressão ocupam menos linhas de código, tornando seu código mais legível e fácil de manter.

- **Flexibilidade**: Permitem declarar funções em qualquer lugar do seu código, inclusive dentro de outras funções e expressões.

- **Escopo de bloco**: As funções de expressão possuem escopo de bloco, o que significa que as variáveis ​​declaradas dentro delas são acessíveis dentro da própria função.

- **Closures**: Facilitam a criação de closures, que são funções que podem acessar variáveis ​​de seu escopo externo, mesmo após a função externa ter sido retornada.

### Exemplos de funções de expressão:

#### Função simples:

```
const somar = (numero1, numero2) => numero1 + numero2;

const resultado = somar(5, 3);
console.log(resultado); // Resultado: 8
```

#### Função com retorno implícito:

```
const dobrar = numero => numero * 2;

const dobro = dobrar(10);
console.log(dobro); // Resultado: 20
```

#### Função com múltiplas linhas:

```
const calcularMedia = (notas) => {
  let soma = 0;
  for (const nota of notas) {
    soma += nota;
  }
  const media = soma / notas.length;
  return media;
};

const notas = [7, 8, 9, 10];
const media = calcularMedia(notas);
console.log(media); // Resultado: 8.5
```

### Dicas para usar funções de expressão:

- Utilize-as quando a função for pequena e simples.
- Evite-as em situações em que exijam nomes de funções descritivas ou legibilidade aprimorada.
- Preste atenção ao escopo do bloco, pois as variáveis ​​declaradas dentro da função de expressão só são acessíveis dentro dela.
- As funções de expressão são ideais para callbacks, funções anônimas e encerramentos.

[Funções](../funcoes/funcoes.md)