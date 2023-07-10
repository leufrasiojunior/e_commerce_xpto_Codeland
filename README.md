# Projeto CodeLand - E-Commerce XPTO

O intuito do projeto é construir um e-commerce completo como projeto final.

Foi usado o Vercel para deploy do projeto. Para acessar [Clique aqui](https://e-commerce-xpto-codeland.vercel.app/)

## Tecnologias e bibliotecas usadas

- React
- JS
- UseState
- UseEffects
- Axios
- Numeric Format

![Homepage](https://uploaddeimagens.com.br/images/004/537/479/original/home.jpg)

\*\*

## Bugs conhecidos e funções não implementadas

- Ao entrar no carrinho não logado, fica em loop infinito
- Não implementado carrinho completo. Parcialmente funcionando (Somente um produto por vez)
- Não há indicação de nome de usuário e quantidade de itens no carrinho, nem a soma.
- o CSS não foi feito com o styled-component.
- Como só tem um item no carrinho, o botão remove, e redireciona para a listagem de produtos.

## Como usar?

Ao acessar a página principal já será mostrado a listagem de produtos.
A página está responsiva, sendo que quando acessado de celular, será adaptado ao usuário.
![Página responsiva](https://uploaddeimagens.com.br/images/004/537/480/original/home.jpg)

Ao acessar a página de detalhes será exibido um carrossel de imagens, e ao lado uma descrição com o valor.

![Página de Detalhes do produto](https://uploaddeimagens.com.br/images/004/537/481/original/home.jpg?1688957076)
![Página de detalhes responsivo](https://uploaddeimagens.com.br/images/004/537/482/original/home2.jpg?1688957110)

Ao clicar em Comprar agora, será redirecionado imediatamente para o carrinho.![Página de compras](https://uploaddeimagens.com.br/images/004/537/483/original/home2.jpg?1688957233)
![Página de Compra responsivo](https://uploaddeimagens.com.br/images/004/537/484/original/home2.jpg?1688957318)

Caso o usuário esteja logado e clique em finalizar a compra, será processada. Caso não, será exibido um alerta informando que o usuário não está logado e redireciona para a página de login. Por algum problema na compilação do Vercel, isto não está funcionando.

![Erro ao comprar sem logar](https://uploaddeimagens.com.br/images/004/537/485/original/home2.jpg?1688957473)
![Página de login](https://uploaddeimagens.com.br/images/004/537/486/original/home2.jpg?1688957552)
Aqui o usuário poderá realizar o cadastro normalmente ou logar.
Ao logar será redirecionado para o carrinho.

Não foi possível incluir uma validação de formulários.
