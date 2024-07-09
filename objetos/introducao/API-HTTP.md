# O que são APIs?

**APIs** são interfaces entre aplicações. **Podemos pensar em APIs como pontos de contato ou comunicação entre partes de um sistema ou entre sistemas diferentes**, por exemplo:

- O back-end de uma aplicação disponibiliza uma API para que o front-end possa buscar dados para popular uma página (no caso da API da Alura).
- Uma aplicação quer utilizar um sistema de busca de CEPs disponibilizado por terceiros. O serviço de busca disponibiliza uma API para ser usada pela aplicação (um exemplo famoso é o **ViaCEP**).
- Grande parte dos serviços em nuvem, como a AWS e o Google Cloud, disponibilizam APIs para que clientes possam utilizar seus serviços.

Parece muita coisa? Não se preocupe! Nas próximas formações de Node.js vamos abordar a fundo os usos e os tipos de API, além de criarmos nossas próprias APIs.

## APIs e JSON

O formato JSON é o padrão atual para envio de recebimento de dados entre aplicações. Na prática, isso significa que usamos JSON para, por exemplo:

- Um front-end pegar dados de um formulário em uma página e enviar para o back-end criar um cadastro de cliente, como em `{“nome”: “José”, “email”: “jose@email.com”, “telefone”: “551199999999”}`;
- Um back-end consultar dados armazenados em tabelas de um banco de dados e formatá-los em JSON para enviá-los ao front (como a API da Alura).

E como é feito esse envio e recebimento de JSON?

## JSON e requisições

Quando queremos “transitar” um objeto JSON entre computadores na web através do **protocolo HTTP** é necessário transformar toda a estrutura em strings, pois nessa comunicação trafegam apenas dados em texto.

Por esse motivo, é bastante comum a operação de transformar um JSON em string e também reconverter um texto em JSON para que o objeto possa ser utilizado pelo programa.

### [Objeto](../objetos.md)