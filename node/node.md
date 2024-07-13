# Node.js

## O que é o Node.js?

Todo programa precisa de um **ambiente de execução** para funcionar, independentemente da linguagem utilizada. No caso do JavaScript, existem dois ambientes principais: os **navegadores** e o **runtime**, como é conhecido, que inclui o Node, bem como seus concorrentes, como o Dyno e o BAN.

Contudo, é a escolha mais significativa e utilizada como ambiente de execução (runtime) do JavaScript fora do navegador. Esse ambiente já inclui diversas funções prontas para uso, como o `console.log`, que são familiares desde os primeiros passos na programação.

A biblioteca que contém a palavra console e o método log já vem **implementada por padrão** tanto nos navegadores quanto no **Node.js**. Essa implementação padrão é tão comum e amplamente utilizada que podemos acessá-la facilmente nos navegadores ou no Node.js através do terminal.

Esse fato nos permite utilizar **várias funções sem a necessidade de instalar** nada, pois elas estão disponíveis por padrão, tanto nos navegadores quanto no Node.js. Em resumo, um ambiente de execução inclui não apenas o código base, mas também as bibliotecas necessárias para seu funcionamento.

## O que são bibliotecas?

```
Uma biblioteca consiste em conjuntos de códigos reutilizáveis que solucionam problemas específicos ou atendem necessidades particulares.
```

Em outras palavras, na programação, existem diversos problemas e demandas comuns, como exibir texto no console, para os quais não precisamos escrever código do zero.

Optamos por utilizar código pronto para evitar o retrabalho. O termo "reinventar a roda" é empregado na programação quando, ao invés de utilizar uma solução já existente, testada e implementada, tentamos criar algo totalmente novo.

## Por que utilizamos a biblioteca?

1. Diversos usos e funcionalidades

2. Reaproveitamento e eficiência

3. Empresas e comunidades

4. Qualquer pessoa pode criar uma lib e publicá-la

Existem várias razões pelas quais utilizamos bibliotecas na programação. Primeiramente, elas abrangem uma vasta gama de **funcionalidades**, o que é importante dado que os problemas enfrentados na programação atualmente tendem a ser complexos.

Em outras palavras, existem bibliotecas prontas para realizar validações, autenticações, testes, conexões com bancos de dados, bem como conexões com uma variedade de outros serviços que uma aplicação pode requerer.

No front-end, enfrentamos desafios comuns como **animação e conversão de arquivos**. Esses problemas são encontrados em praticamente todas as aplicações e, para evitarmos reinventar a roda, utilizamos **bibliotecas pré-desenvolvidas**, conhecidas como pacotes de código. Durante o curso, também desenvolveremos isso.

Essas bibliotecas não só nos poupam tempo, mas também nos permitem **programar de forma mais eficiente ao reutilizar o código desenvolvido** e testado por outras pessoas em diversos cenários.

Quando desenvolvemos algo do zero, é necessário realizar extensos **testes** para garantir seu funcionamento. No entanto, bibliotecas, especialmente as populares, já passaram por testes abrangentes, identificaram e corrigiram bugs, eliminando a necessidade de reinventar soluções já existentes.

Algumas bibliotecas comuns são **nativas nos ambientes de execução**, como o `console.log`. Nos navegadores, há bibliotecas específicas para lidar com elementos de tela, enquanto o Node.js possui suas próprias bibliotecas para diferentes funcionalidades.

Muitas bibliotecas importantes, como as de autenticação, validação e conexão com bancos de dados, são desenvolvidas por empresas ou comunidades externas. Frequentemente, as empresas criam essas bibliotecas e as disponibilizam para uso geral.

Algumas dessas bibliotecas são originalmente desenvolvidas para uso interno, mas, ao perceberem sua utilidade geral, são liberadas para uso externo. Isso ocorre porque resolveram problemas específicos dentro da empresa, mas viram potencial em compartilhar essas soluções com outras pessoas desenvolvedoras.

As comunidades também desenvolvem bastante, inclusive, se você quer contribuir para resolver um bug em determinada biblioteca ou para ajudar em alguma coisa, as comunidades costumam ajudar nos códigos das bibliotecas que são públicas.

Qualquer pessoa tem a capacidade de **criar e publicar uma biblioteca** em qualquer linguagem de programação, especialmente em JavaScript, desde que atenda a **certos requisitos**. A disponibilidade da publicação da biblioteca dependerá da plataforma escolhida para isso.

### [Volar ao README principal](../READMe.md)


### Acessando e lendo arquivos 

- [process.argv](../node/acessando-lendo-arquivos/process-argv.md)

- [File System](../node/acessando-lendo-arquivos/file-system.md)

- [Caminho absoluto vs Relativo](../node/acessando-lendo-arquivos/caminho-absoluto-relativo.md)

- [Cracteres de quebra de linha](../node/acessando-lendo-arquivos/caracteres-quebra-linha.md)
