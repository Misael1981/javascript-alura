# While loop

O loop while, também conhecido como laço de repetição while , é outra estrutura de controle de fluxo utilizada em programação para executar um bloco de código repetidamente enquanto uma determinada condição é verdadeira.

Diferentemente do loop for, que necessita de um número predefinido de iterações, o loop while executa o código até que a condição se torne falsa. Isso torna o loop while ideal para situações onde você não sabe exatamente quantas vezes precisa repetir o bloco de código.

Pense em um cenário onde você quer continuar solicitando um número para o usuário até que ele digite um valor maior que 10.   Com um loop while, você pode verificar a condição a cada vez que o usuário inserir um número e continuar solicitando novos valores até que a condição esteja satisfeita.

Veja a estrutura básica de um loop while:

```
while (condição) {
  // bloco de código a ser repetido
}
```
Aqui, a **condição** é uma expressão booleana que determina a execução do loop. O bloco de código continuará sendo executado enquanto a condição for verdadeira.

Por exemplo, para pedir números ao usuário até que ele digite um valor maior que 10, o loop while ficaria assim:

```
int numero;

while (numero <= 10) {
  print("Digite um número: ");
  numero = readInt();
}

print("Você digitou um número maior que 10!");
```
- O loop continua perguntando números ao usuário enquanto `numero` for menor ou igual a 10 (condição).
- Dentro do loop, o valor digitado pelo usuário é armazenado na variável `numero`.

Dessa forma, o loop continuará solicitando números até o usuário entre um valor maior que 10.

## Aplicações do loop while:

O loop while é bastante versátil e pode ser utilizado em diversas situações que envolvem envolvimento baseado em uma condição, tais como:

- **Menus interativos**: Crie menus onde o usuário pode escolher opções e o programa continua rodando até que ele decida sair.

- **Validação de dados**: Verifique se os dados digitados pelo usuário estão dentro de um intervalo esperado e solicite uma correção até que um valor válido seja fornecido.

- **Adivinhação de números**: Jogos simulados onde o usuário precisa adivinhar um número secreto através de tentativas.

- **Simulações**: modele comportamentos repetitivos em programas de simulação, como o movimento de um personagem em um jogo.

Loops while são essenciais para criar programas que interajam com o usuário e se adaptem a diferentes cenários.

## Dicas para usar loop while:

- **Certifique-se de ter uma condição de parada**: É crucial garantir que o loop não seja executado infinitamente.

- **Evite loop infinito**: A condição de parada deve sempre ter a chance de se tornar falsa para que o loop termine.

- **Utilize flags para controlar o loop**: Em alguns casos, pode ser útil usar variáveis ​​booleanas para indicar quando o loop deve ser finalizado.

- **Considere loop for quando o número de iterações é conhecido**: Se você sabe exatamente quantas vezes o código precisa ser executado, o loop for pode ser uma opção mais limpa e eficiente.
