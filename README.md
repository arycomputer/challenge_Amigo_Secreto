# Projeto Challenge Amigo Secreto <center><img align="right" src="assets/logo-alura.svg" alt="logo Alura"> <img align="right" src="assets/gone.webp" alt= "Projeto G One"></center>
<br>

## 🔖 Sobre

Um projeto simples de Amigo Secreto utilizando HTML, CSS e JavaScript, Projeto utilizado nos cursos de lógica de programação da 

[![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=arycomputer&repo=challenge_Amigo_Secreto)](https://github.com/anuraghazra/github-readme-stats)

## Índice

:point_right: [Descrição](#descrição)  
:point_right: [Tecnologias Utilizadas](#tecnologias-utilizadas)  
:point_right: [Instalação](#instalação)  
:point_right: [Uso](#uso)  
:point_right: [Contribuição](#contribuição)  
:point_right: [Licença](#licença)  

## Descrição

O projeto Amigo Secreto permite a organização de um sorteio de amigo secreto de maneira fácil e rápida. Com uma interface amigável, os usuários podem adicionar participantes e realizar o sorteio diretamente no navegador.

## 🚀 Tecnologias Utilizadas

<div>
  <img src="https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
</div>

## Instalação

Para visualizar e utilizar o projeto localmente, siga os passos abaixo:

1. Clone o repositório:
    ```bash
    git clone https://github.com/usuario/amigo-secreto.git
    ```

2. Navegue até o diretório do projeto:
    ```bash
    cd amigo-secreto
    ```
3. Abra o arquivo `index.html` no seu navegador preferido.

## Uso

Here is a simple flow chart:

```mermaid
stateDiagram-v2
state if_state <<choice>>
    [*] --> IsPositive
    IsPositive --> if_state
    if_state --> False: if n < 0
    if_state --> True : if n >= 0
    [*] --> Still
    Still --> [*]
%% this is a comment
    Still --> Moving
    Moving --> Still %% another comment
    Moving --> Crash
    Crash --> [*]
```
```mermaid
flowchart LR

A[Hard] -->|Text| B(Round)
B --> C{Decision}
C -->|Válido| D[Result 1]
C -->|Vazio| E[Result 2]
```

```flow
st=>start: Login
op=>operation: Login operation
cond=>condition: Successful Yes or No?
e=>end: To admin

st->op->cond
cond(yes)->e
cond(no)->op
```
1. Adicione o nome do participante no campo de entrada.
2. Clique no botão "Adicionar" para incluir cada nome na lista.
3. Após adicionar todos os participantes, clique no botão "Sortear Amigo" para realizar o sorteio.
4. O resultado do sorteio será exibido na tela.

## Contribuição

Para contribuir com o projeto, siga as etapas abaixo:

1. Faça um fork do projeto.
2. Crie uma nova branch para sua feature (`git checkout -b feature/nome-da-feature`).
3. Commit suas alterações (`git commit -m 'Adiciona nova feature'`).
4. Faça um push para a branch (`git push origin feature/nome-da-feature`).
5. Abra um Pull Request.

## 📝 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

![visitor badge](https://visitor-badge.glitch.me/badge?page_id=arycomputer.visitor-badge&left_color=red&right_color=green&left_text=Hello%20Visitors)

# list
- [x] indice
- [x] indice 

#![visitors](https://visitor-badge.glitch.me/badge?page_id=arycomputer.challenge_Amigo_Secreto&left_color=green&right_color=red)

<img src="https://visitor-badge.glitch.me/badge?page_id=arycomputer.challenge_Amigo_Secreto" alt="visitor badge"/>

