# Qual o tipo de dado correto?

Até agora percebemos que objetos desempenham um papel crucial ao organizar e armazenar dados de forma mais complexa do que variáveis isoladas. Esses objetos podem conter diferentes tipos de dados, oferecendo flexibilidade na modelagem e representação de informações.

Confira alguns exemplos de como diferentes tipos de dados podem ser aplicados em objetos para representar de maneira eficaz informações específicas.

## String

Pode ser utilizado para armazenar o nome de uma pessoa ou o endereço completo.

```
const pessoa = {
  nome: "João",
  endereco: "Rua das Flores, 123",
}
```

Também utilizamos string para representar dados como CPF, número de telefone e até mesmo cartão de crédito. Isso acontece porque esses dados possuem formatos específicos com caracteres especiais, como espaços, hífens e pontos. Além disso, esses números podem perder precisão para representar grandes inteiros. Isso pode ser um problema ao lidar com CPFs, que são números de 11 dígitos no Brasil. Representá-los como strings evita esse problema, pois é mais fácil manter o formato original e facilitar a validação.

```
const pessoa = {
  telefone: 123456789,
  cpf: 12543652266,
}
```

## Number

Pode ser utilizado para armazenar informações numéricas:

```
const produto = {
  preco: 29.99, 
  quantidadeEstoque: 50, 
}
```

```
const carro = {
  velocidadeMaxima: 200,
  consumoCombustivel: 12.5,km/l
};
```

## Boolean

O uso de valores booleanos em objetos é comum em situações em que precisamos representar estados de verdadeiro/falso, ativação/desativação, permissões de acesso, entre outros. Essas propriedades booleanas são frequentemente usadas em conjunto com estruturas de controle de fluxo para tomar decisões dinâmicas no código.

```
// Objeto representando um usuário com permissões
const usuario = {
  nome: 'Alice',
  idade: 25,
  isAdmin: true // Propriedade booleana indicando se o usuário é um administrador
};

// Exemplo de uso em uma condição
if (usuario.isAdmin) {
  console.log(`${usuario.nome} tem permissões de administrador.`);
} else {
  console.log(`${usuario.nome} não é um administrador.`);
}
```

## Object

Permite criar objetos aninhados, úteis para representar estruturas mais complexas. Por exemplo, um objeto `endereco` dentro de um objeto `pessoa`.

```
const pessoa = {
  nome: "Maria",
  endereco: {
    rua: "Avenida Principal",
    numero: “456”,
  },
}
```

## Números como string

Antes de definir o melhor tipo de dado, temos que pensar nos diversos valores que esse dado pode ter. o número de uma casa, por exemplo, é melhor representado como uma string, pois pode conter caracteres além de números (por exemplo, "123A"), ou outras variações dependendo do endereço

```
const endereco = {
  rua: "Rua das Flores",
  numero: "123A",
}
```

## Datas como objetos

Para representar datas, pode-se utilizar objetos do tipo `Date`, que oferecem métodos úteis para manipulação.


```
const evento = {
  nome: "Aniversário",
  data: new Date(2000, 5, 15),
}
```

Datas e horas são tipos de informação mais complexos e seus formatos podem variar muito, inclusive dependendo do que está sendo usado pelo banco de dados. Para saber mais sobre manipulação de datas com JavaScript, confira o artigo da **Alura** [sobre o objeto Date](https://www.alura.com.br/artigos/trabalhando-com-datas-em-javascript) e sobre os diversos [formatos de data](https://www.alura.com.br/artigos/objeto-format-date-e-formato-datas-em-javascript) utilizados no dia a dia.

A escolha do tipo de dado em um objeto depende da natureza dos dados que você está representando. Utilizar o tipo adequado facilita o entendimento do código e a manipulação dos dados de maneira eficaz. A escolha entre número, string, boolean, array, object etc., deve ser guiada pelas necessidades específicas do contexto em que o objeto está sendo utilizado.

#### [Objectos](../objetos.md)