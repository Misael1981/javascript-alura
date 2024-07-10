# Operações com JSON

- Criar a constante para fazer a importação do aquivo JSON:

```
const estudantes = require('./estudantes.json')
```

- Criando uma função para buscar informações:

```
function buscaInformacao (lista, chave, valor) {

    return lista.find((estudante) => estudante[chave].includes(valor))
}
```

### Parâmetros

- `lista`: para buscar o JSON específico;
- `chave`: o nome da "propriedade" que se quer buscar;
- `valor`: o que se quer buscar;

### Métodos

- `find()`: método de array, retorna o primeiro elemento encontrado.

- `includes()`: retorna um booleano se a matriz "inclui" algum valor em suas entradas.

Chamando a função guardando o valor em uma constante:

```
const estudanteEncontrado = buscaInformacao(estudantes, 'nome', 'Juliet')
console.log(estudanteEncontrado)
```

Temos a saída:


```
{
  nome: 'Juliet',
  email: 'jelphey4@wikipedia.org',
  telefone: [ '1198123183', '11998123183' ],
  endereco: { logradouro: 'Rua Crownhardt', numero: '07', cep: '184366' 
}
}
```

#### Outro teste:

```
const telefoneEstudante = buscaInformacao(estudantes, 'telefone', '6804913737')
console.log(telefoneEstudante)
```

Saída: 

```
{
  nome: 'Dorothea',
  email: 'dmutimere@bizjournals.com',
  telefone: [ '6804913737', '68904913737' ],
  endereco: { logradouro: 'Rua Morrow', numero: '1' }
}
```

### [Objetos](../objetos.md)
