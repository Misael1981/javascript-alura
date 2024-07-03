# Desestruturação (ou destructuring, em inglês) do JavaScript em arrays

A desestruturação de arrays em JavaScript é um recurso nativo no ES6 que permite extrair elementos de um array e armazená-los em variáveis ​​​​separadas de maneira concisa e legível.

Imagine uma matriz:

```
const frutas = ["maçã", "banana", "laranja"];
```

Sem desestruturação:

Para acessar cada fruta positiva, você precisaria usar índices:

```
const primeiraFruta = frutas[0]; // maçã
const segundaFruta = frutas[1]; // banana
const terceiraFruta = frutas[2]; // laranja
```

Com desestruturação:

A desestruturação permite extrair cada fruta diretamente para variáveis ​​com nomes descritivos:

```
const [maçã, banana, laranja] = frutas;
```

Vantagens da desestruturação:

- **Concisão**: Reduz a quantidade de código repetitivo, tornando-o mais legível e fácil de manter.
- **Clareza**: Atribui nomes descritivos às variáveis, melhorando a compreensão do código.
- **Flexibilidade**: Permite extrair subconjuntos específicos do array, ignorando elementos indesejados.
- **Desestruturação aninhada**: Permite desestruturar arrays dentro de outros arrays ou objetos.

Exemplo com desestruturação aninhada:

```
const usuarios = [
  { nome: "João", cidade: "Belo Horizonte" },
  { nome: "Maria", cidade: "São Paulo" },
];

const [usuario1, usuario2] = usuarios;
const { nome: nomeUsuario1, cidade: cidadeUsuario1 } = usuario1;
const { nome: nomeUsuario2, cidade: cidadeUsuario2 } = usuario2;

console.log(nomeUsuario1, cidadeUsuario1); // João, Belo Horizonte
console.log(nomeUsuario2, cidadeUsuario2); // Maria, São Paulo
```

### Exemplo de desestruturação de arrays

```
const alunos = ["João", "Juliana", "Caio", "Ana"]
const medias = [10, 8, 7.5, 9]

const lista = [alunos, medias]

function exibeNomeENota (aluno) {

    if(lista[0].includes(aluno)) {
       
        const indice = lista[0].indexOf(aluno)
        const mediaAluno = lista[1][indice]
        console.log(`${aluno} tem a média ${mediaAluno}`)
    } else {
       console.log(`Estudante não existe na lista`) 
    }
}

exibeNomeENota("Juliana")
exibeNomeENota("Vini")
```

### Array desestruturado

```
const alunos = ["João", "Juliana", "Caio", "Ana"]
const medias = [10, 8, 7.5, 9]

const lista = [alunos, medias]

function exibeNomeENota (aluno) {

    lista
    if(lista[0].includes(aluno)) {
        const [alunos, medias] = lista
        const indice = alunos.indexOf(aluno)
        const mediaAluno = medias[indice]
        console.log(`${aluno} tem a média ${mediaAluno}`)
    } else {
       console.log(`Estudante não existe na lista`) 
    }
}

exibeNomeENota("Juliana")
exibeNomeENota("Vini")
```

[Arrays](../arrays.md)