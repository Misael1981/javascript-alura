# Caracteres de quebra de linha

Caracteres precedidos pela barra `\` são chamados **“caracteres de escape”** e deixam de ter significado literal (por exemplo, a letra N) e passam a significar instruções específicas dadas ao interpretador do texto. Por exemplo, inserir uma quebra de linha, inserir caracteres especiais, tabulação e espaços etc.

#### Alguns exemplos de caracteres de escape:

- `\'` insere aspas simples
- `\"` insere aspas duplas
- `\\` insere barra invertida
- `\n` insere nova linha (new line)
- `\r` insere nova linha (carriage return)
- `\t` insere tabulação
- `\b` insere backspace

Para finalizar “fim de linha” ou “quebra de linha”, existem alguns caracteres diferentes e diferentes sistemas operacionais utilizam estes caracteres de formas diferentes ao interpretarem textos.

- Em sistemas Unix e Unix-like (como o Linux) o caractere usado é `\n` (new line).
- `\n` também é caractere de escape padrão para quebra de linha em todas as linguagens baseadas em C (é o caso do JavaScript).
- Em sistemas Windows, a quebra de linha usa o caractere `\r`, ou `carriage return`. O nome vem das antigas máquinas de escrever em que o posicionamento da peça responsável por imprimir as letras (carro ou carriage em inglês) era feito manualmente a cada fim de linha.
- Em antigos sistemas Mac (anteriores ao macOS X) o padrão era `\r\n`, nessa ordem.
- A diferença não é apenas no caractere: `\n` representa o fim de uma linha, o que para Linux e Mac é o equivalente a começar uma nova linha de texto. Já `\r` move o cursor para o início de uma nova linha (como a máquina de escrever).
- É **muito importante** entender a forma como os sistemas operacionais e as linguagens “encodam” (ou interpretam) os caracteres em uma string para transformá-los em texto, pois as diferenças podem causar bugs de interpretação de caracteres onde menos se espera.

### [Menu-node](../node.md)