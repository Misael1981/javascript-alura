# O que é JSON?

**JSON**, sigla para **JavaScript Object Notation**, é um formato de dados leve e legível por humanos para troca de informações entre sistemas. Ele é baseado na sintaxe de objetos do JavaScript, mas, ao contrário do que o nome sugere, não é exclusivo da linguagem e pode ser utilizado em diversos outros contextos.

## Características principais:

- **Estrutura parecida com a de objetos JS**: Ele usa o objeto JavaScript como base, mas eles têm algumas diferenças de estrutura.
  - **Não é atribuível a uma variável**: O JSON não é um tipo de dado do JS.
  - **Obrigatoriedade do uso de aspas duplas também no nome das chaves**.
  - **Não trabalha com aspas simples**.
  - `JSON` **não aceita vírgulas sobrando no final**.
- **Leveza**: Os arquivos JSON são compactos e fáceis de serem processados por máquinas.
- **Leitura humana**: A estrutura do JSON é clara e intuitiva, permitindo que pessoas a compreendam sem dificuldade.
- **Flexibilidade**: O JSON pode representar diversos tipos de dados, como números, strings, arrays e objetos.
- **Interoperabilidade**: O JSON é amplamente suportado por diversas linguagens de programação e plataformas, facilitando a troca de dados entre diferentes sistemas.

## Aplicações comuns:

- **APIs web**: O JSON é frequentemente usado para enviar e receber dados entre APIs web, permitindo que diferentes aplicações se comuniquem entre si.
- **Armazenamento de dados**: O JSON pode ser utilizado para armazenar dados estruturados de forma eficiente, como em bancos de dados NoSQL.
- **Configurações**: O JSON é uma boa opção para armazenar configurações de aplicações, pois permite que as configurações sejam facilmente modificadas e compartilhadas.

## Sintaxe do JSON

- **Funções** não são permitidas.
- **Comentários** não são permitidos.
- Suporta apenas tipos **primitivos**, **arrays** e **objetos**

### Exemplo de JSON:

```
{
  "nome": "João Silva",
  "idade": 30,
  "profissao": "Desenvolvedor",
  "habilidades": ["Programação", "Design", "Banco de Dados"],
  "endereco": {
    "rua": "Rua dos Girassóis",
    "numero": 123,
    "cidade": "São Paulo",
    "estado": "SP"
  }
}
```

## Vantagens do JSON:

- **Simplicidade**: O JSON é um formato simples e fácil de aprender, o que facilita seu uso e adoção.
- **Eficiência**: O JSON é um formato eficiente para troca de dados, pois é compacto e rápido de ser processado.
- **Versatilidade**: O JSON pode ser utilizado para diversos propósitos, desde APIs web até armazenamento de dados.
- **Padronização**: O JSON é um formato padronizado e amplamente suportado, o que garante sua interoperabilidade entre diferentes sistemas.

## Desvantagens do JSON:

- **Tipagem fraca**: O JSON não possui tipagem forte, o que pode levar a erros de dados se não for utilizado com cuidado.
- **Falta de validação**: O JSON não possui um esquema de validação padrão, o que pode dificultar a verificação da integridade dos dados.
- **Leitura complexa de dados aninhados**: A leitura de dados aninhados em um objeto JSON pode ser complexa, principalmente para humanos.

```
Em resumo, o JSON é um formato de dados leve, legível por humanos e versátil, ideal para troca de informações entre sistemas. Sua simplicidade, eficiência e padronização o tornaram um dos formatos de dados mais populares na web atualmente.
```

### [Objetos](../objetos.md)