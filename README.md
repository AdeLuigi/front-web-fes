# Vagas de Estágio IC - UFRJ
![image info](./imagem.jpg)

**Um MVP para cadastro de estágios para os alunos de computação da UFRJ**


Este MVP criado para a disciplina de fundamentos da engenharia de software em 2021.1 e todo código fonte é de acesso livre.

---
## Pré-requisitos para rodar o sistema
Para rodar o sistema será necessário instalar o [node](https://nodejs.org/en/ "Clique e veja como baixar o node").
## Rodando o projeto
````git
$ git clone https://github.com/AdeLuigi/front-web-fes.git
$ cd front-web-fes
$ npm install
````
**Neste momento app já deve estar pronto para rodar**
````git
$ npm start
````

## Links para acesso ao SPA e para a API
Caso você queira ver o sistema rodando ou ter acesso a API, basta clicar nestes links: [SPA](https://vagas-estagio-front.herokuapp.com/vaga "Clique e veja o site"), [API](https://vagas-estagio.herokuapp.com/ "Clique e veja a API").

## Rodas da API:
{ POST } https://vagas-estagio.herokuapp.com/cadastro: Cadastro
{ POST } https://vagas-estagio.herokuapp.com/login: Login
{ POST } https://vagas-estagio.herokuapp.com/vaga: Cadastrar vaga de estágio
{ GET } https://vagas-estagio.herokuapp.com/vaga: Listagem de vagas
{ GET } https://vagas-estagio.herokuapp.com/vaga/{idVaga}: Detalhar vaga
{ POST } https://vagas-estagio.herokuapp.com/vaga/{idVaga}: Se candidatar