# Guia para o File System do Node.js

O **File System** é um módulo integrado do **NODE.js** que fornece uma API para interagir com o systema de arquivos do computador em que o Node.js está sendo executado. Ele permite leitura, gravação, exclusão e manipulação de arquivos e diretórios.

Com o módulo `fs`, é possível criar, abrir, ler, gravar e fechar arquivos, além de manipular diretórios, como criar, renomear e excluir. Ele também inclui recursos para a manipulação de fluxos de dados, como a criação de fluxos de leitura e gravação. 

O módulo `fs` é amplamente utilizado em aplicativos Node.js para tarefas que envolvem interação com o sistema de arquivos, como o armazenamento de arquivos de configuração, logs, arquivos de dados e muito mais. Ele é especialmente útil em aplicativos de servidor, como servidores da web e aplicativos de back-end, que precisam interagir com o sistema de arquivos do servidor para armazenar e recuperar dados.

## `fs.readFile()`

Uma das tarefas mais comuns que podemos fazer com o módulo FS é ler o conteúdo de um arquivo. Neste caso utilizaremos o método `fs.readFile()`:

```
const fs = require("fs");

fs.readFile("./caminho/do/arquivo.txt", "utf-8", (err, deta) => {
    if(err) throw err;
    console.log(data);
})
```

Neste exemplo, estamos lendo o conteúdo de um arquivo de texto chamado `arquivo.txt` usando o método `fs.readFile()`. O primeiro argumento é o caminho para o arquivo que queremos ler. O segundo argumento é um objeto de opções que pode incluir uma opção para especificar a codificação de caracteres usada para ler o arquivo, neste caso `utf8`, que nos permitirá ler o arquivo como texto e preservar sua acentuação. Se não for especificada uma opção de codificação, o conteúdo do arquivo será retornado como um objeto **Buffer** em vez de uma string de texto.

O método `readFile()` é assíncrono, o que significa que ele **não bloqueia o código enquanto lê o arquivo**. Em vez disso, ele executa uma função de retorno de chamada quando a operação de leitura é concluída. Neste exemplo, a função de retorno de chamada é uma função anônima que verifica se ocorreu um erro durante a leitura. Se não houver erros, ele exibe o conteúdo do arquivo no console.


Além de ler arquivos, podemos usar o módulo `FS` para criar e escrever em arquivos. Aqui está um exemplo simples de como criar um arquivo e escrever conteúdo nele usando o método `fs.writeFile()`:

```
const content = "Este é o conteúdo que será escrito no arquivo";

fs.writeFile("./caminho/do;arquivo.txt", content), (err, = > {
    if(err) throw err;
    console.log("O arquivo foi salvo com sucesso!");
})
```

Neste caso, estamos criando um arquivo chamado `novo-arquivo.txt` e escrevendo o conteúdo da variável `content` no arquivo usando o método `fs.writeFile()`. O primeiro argumento é o caminho para o arquivo que queremos criar. O segundo argumento é o conteúdo que queremos escrever no arquivo. O terceiro argumento é uma função de retorno de chamada que é executada quando a operação de gravação é concluída. Neste exemplo, estamos apenas exibindo uma mensagem no console para indicar que o arquivo foi salvo com sucesso.

Além de manipular arquivos, o módulo FS também nos permite manipular diretórios em nosso sistema de arquivos. Aqui estão algumas funções úteis que podemos usar para trabalhar com diretórios:

- `fs.mkdir()` - cria um novo diretório.
- `fs.readdir()` - lista os arquivos e subdiretórios em um diretório.
- `fs.rmdir()` - remove um diretório vazio.
- `fs.unlink()` - remove um arquivo.

## `fs.mkdir()`

Aqui está um exemplo de como criar um diretório usando o método `fs.mkdir()`:

```
fs.mkdir("../caminho/do/novo-diretorio", (err) => {
    if(err) throw err;
    console.log("O diretório foi criado com sucesso");
})
```

Neste exemplo, estamos criando um novo diretório `chamado novo-diretorio` usando o método `fs.mkdir()`. O primeiro argumento é o caminho para o diretório que queremos criar. O segundo argumento é uma função de retorno de chamada que é executada quando a operação de criação de diretório é concluída.

## `fs.readdir()`

Já o método `fs.readdir()`  é utilizado para listar os arquivos e subdiretórios em um determinado diretório.

```
fs.readdir("../caminho/do/difetorio", (err, arquivos) => {
    if(err) throw err;
    console.log("Arquivos e subdiretórios em'../caminho/do/difetorio':");
    arquivos.forEach((arquivo) => {
        console.log(arquivo);
    })
})
```

O primeiro parâmetro passado para `fs.readdir()` é o caminho para o diretório que queremos listar. No exemplo dado, o caminho para o diretório é `"/caminho/do/diretorio"`. O segundo parâmetro é uma função de retorno de chamada que é executada quando a lista de arquivos é retornada. A função de retorno de chamada recebe dois argumentos: um erro (se houver) e um array de nomes de arquivos e subdiretórios.

Dentro da função de retorno de chamada, verificamos se há um erro e, se houver, lançamos uma exceção. Caso contrário, percorremos o array de nomes de arquivos e subdiretórios usando o método `forEach()` e imprimimos cada nome na saída padrão usando `console.log()`. No exemplo, estamos imprimindo cada nome de arquivo ou subdiretório em uma nova linha.

**Esta função é útil para listar o conteúdo de um diretório em um sistema de arquivos.**

## `fs.rmdir()`

Esta função usa o método `fs.rmdir()` para remover um diretório vazio.

```
fs.rmdir("../caminho/do/diretorio", (ert) => {
    if(err) throw err;
    console.log("O diretório '../caminho/do/diretorio' foi removido com sucesso!");
})
```

O primeiro parâmetro passado para `fs.rmdir()` é o caminho para o diretório que queremos remover. No exemplo dado, o caminho para o diretório é `"/caminho/do/diretorio"`. O segundo parâmetro é uma função de retorno de chamada que é executada quando o diretório é removido. A função de retorno de chamada recebe um argumento: um erro (se houver).

Dentro da função de retorno de chamada, verificamos se há um erro e, se houver, lançamos uma exceção. Caso contrário, imprimimos uma mensagem informando que o diretório foi removido com sucesso usando `console.log()`.

Esta função é útil para remover diretórios vazios em um sistema de arquivos e pode ser usada em conjunto com as demais.

## `fs.unlink()`

Enquanto o método `fs.rmdir()` remove um diretório vazio, o método `fs.unlink()` remove um arquivo.

```
fs.unlink("./caminho/do;arquivo.txt", (err) => {
    if(err) throw err;
    console.log(`O arquivo "./caminho/do;arquivo.txt" foi excluído com sucesso`);
})
```

O método `fs.unlink()` é usado para excluir um arquivo específico em um aplicativo Node.js. Se o arquivo não existir, o método `fs.unlink()` lançará um erro. 

É importante lembrar que, assim como com a função `fs.rmdir()`, você deve ter as permissões necessárias para excluir o arquivo e deve ter certeza de que o arquivo não está sendo usado por outros processos ou programas.

**Com isso, podemos notar que todas as funções do módulo FS do Node.js, o primeiro argumento é o caminho para o arquivo ou diretório com o qual se deseja trabalhar.**

O módulo `fs` é uma parte essencial do **Node.js** que nos permite interagir com o sistema de arquivos do nosso computador. Neste artigo, exploramos algumas das funções mais comuns do módulo FS, incluindo a leitura e escrita de arquivos, bem como a criação e remoção de diretórios. Com essas ferramentas em nossa caixa de ferramentas, podemos criar aplicativos **Node.js** poderosos que podem manipular e gerenciar arquivos e diretórios com facilidade.

O caminho pode ser absoluto ou relativo. Se o caminho for relativo, ele será resolvido em relação ao diretório de trabalho atual do **Node.js**. Para trabalhar com o diretório atual, pode-se usar o módulo path do **Node.js** para obter o caminho absoluto do diretório atual:

```
const path = require("path")

// Obter o caminho absoluto do diretório atual
const diretorioAtual = path.resove("./");
```

### [fonte: Artigo escrito por Valdir Alves, para a DIO](https://www.dio.me/articles/guia-para-o-file-system-do-nodejs)

### [Menu node](../node.md)



