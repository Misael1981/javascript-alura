# spread operator

O **spread operator** (operador de propagação), representado por três pontos (`...`), é uma ferramenta poderosa para JavaScript ES6 (ECMAScript 2015) que permite expandir elementos de um iterável (como arrays, strings ou objetos) em lugares onde vários argumentos ou elementos são esperados.

## Funcionalidades principais:

- **Expandir arrays**: Combine arrays em um único array maior.
- **Copiar matrizes e objetos**: Cria cópias superficiais de matrizes e objetos, permitindo modificar sem afetar o original.
- **Mesclar arrays e objetos**: Combine propriedades de um ou mais arrays ou objetos em um único objeto novo.
- **Passar argumentos para funções**: Transmita os elementos de um iterável como argumentos individuais para uma função.
- **Criar matrizes e objetos literais**: Simplifica a criação de matrizes e objetos com elementos predefinidos.

## Sintaxe:

```
// Expandir array em outro array:
const numeros1 = [1, 2, 3];
const numeros2 = [4, 5, 6];
const todosNumeros = [...numeros1, ...numeros2]; // Combina os arrays

// Copiar array:
const arrayOriginal = [7, 8, 9];
const arrayCopia = [...arrayOriginal]; // Cria uma cópia superficial

// Mesclar objetos:
const obj1 = { nome: 'Alice', idade: 30 };
const obj2 = { cidade: 'Rio de Janeiro', profissao: 'Desenvolvedora' };
const objCompleto = { ...obj1, ...obj2 }; // Combina as propriedades

// Passar argumentos para função:
function soma(a, b, c) {
  return a + b + c;
}
const numeros = [10, 20, 30];
const resultadoSoma = soma(...numeros); // Passa os elementos como argumentos individuais

// Criar literal de array:
const frutas = [...'banana', 'maçã', 'laranja']; // Cria um array a partir de uma string
```

## Casos de uso comum:

- Combine dados de diferentes fontes em um array único:

```
const dadosUsuario = { nome: 'Bob', idade: 25 };
const cursos = ['JavaScript', 'Python'];
const perfilCompleto = { ...dadosUsuario, cursos };
```

- Passar arrays como argumentos para funções de formato flexível:

```
function calcularMedia(...notas) {
  const soma = notas.reduce((acumulador, nota) => acumulador + nota, 0);
  return soma / notas.length;
}
const notasAlunos = [8, 9, 7, 10];
const mediaGeral = calcularMedia(...notasAlunos);
```

- Crie arrays e objetos dinamicamente:

```
const ingredientes = ['leite', 'ovos', 'farinha'];
const receitaBolo = { ingredientes, modoPreparo: 'Misture tudo e leve ao forno...' };
```

O **spread operator** oferece uma maneira elegante e concisa de trabalhar com arrays e objetos no JavaScript, simplificando código e tornando-o mais expressivo. Com sua versatilidade, o `...` se tornou uma ferramenta essencial para desenvolvedores JavaScript em diversos projetos.

[Arrays](../arrays.md)