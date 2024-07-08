# Acessar e Manipular Dados de um Objeto

Acessar e manipular dados de um objeto é fundamental para a construção de aplicações interativas e dinâmicas.

- **Notação de Ponto**: A maneira mais comum de acessar propriedades de um objeto é usar a notação de ponto. Por exemplo, se você tiver um objeto `pessoa` com propriedades `nome` e `idade`, poderá acessar seus valores da seguinte maneira:

```
const pessoa = {
  nome: "João",
  idade: 30
};

console.log(pessoa.nome); // Imprime "João"
console.log(pessoa.idade); // Imprime 30
```

- **Notação de Colchetes**: A notação de colchetes é útil quando se precisa:

  - Quando os nomes das competências geram caracteres especiais. Por exemplo:

```
const pessoa = {
  "nome completo": "João Silva",
  idade: 30
};

console.log(pessoa["nome completo"]); // Imprime "João Silva"
console.log(pessoa[idade]); // Imprime 30
```

   - Acessar competências dinamicamente:

```
const estudante = {
  nome: 'José Siva',
  idade: 32,
  cpf: '12312312312,'
  turma: 'JavaScript
}

function exibeInfoEstudante (objEstudante, infoEstudante) {
  return objEstudante[infoEstudante]
}

console.log(exibeInfoEstudante(estudante, 'nome'))
console.log(exibeInfoEstudante(estudante, 'cpf'))
```

- Tentar acessar uma propriedade que não existe trará o retorno de **undefined**

## Manipulando Propriedades do Objeto:

- **Criando Propriedades**: Você pode criar novas propriedades em um objeto usando a notação de ponto ou colchetes:

```
const pessoa = {};

pessoa.nome = "Maria";
pessoa["sobrenome"] = "Silva";

console.log(pessoa.nome); // Imprime "Maria"
console.log(pessoa.sobrenome); // Imprime "Silva"
```

- **Atualizando Propriedades**: Para atualizar o valor de uma propriedade existente, basta usar a mesma notação que você usaria para acessá-la:

```
const pessoa = {
  nome: "João",
  idade: 30
};

pessoa.nome = "Pedro";
pessoa.idade = 31;

console.log(pessoa.nome); // Imprime "Pedro"
console.log(pessoa.idade); // Imprime 31
```

- **Excluindo Propriedades**: Para remover uma propriedade de um objeto, utilize o operador `delete`:

```
const pessoa = {
  nome: "João",
  idade: 30
};

delete pessoa.idade;

console.log(pessoa.nome); // Imprime "João"
console.log(pessoa.idade); // Imprime undefined
```

## Métodos de Objeto:

Os métodos são funções associadas a objetos que permitem realizar ações específicas. Para acessar e chamar um método de objeto, use a notação de ponto seguida do nome do método entre parênteses:

```
const pessoa = {
  nome: "João",
  idade: 30,
  apresentar: function() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
};

pessoa.apresentar(); // Imprime "Olá, meu nome é João e tenho 30 anos."
```

### Exemplo Completo: 

```
const produto = {
  nome: "Camisa",
  preco: 59.90,
  desconto: 0.1,
  precoComDesconto: function() {
    return this.preco * (1 - this.desconto);
  }
};

console.log(`Nome do produto: ${produto.nome}`);
console.log(`Preço original: R$ ${produto.preco}`);
console.log(`Preço com desconto: R$ ${produto.precoComDesconto()}`);
```

### [Objetos](../objetos.md)