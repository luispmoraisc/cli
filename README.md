<h1 align="center">
    🍦 Vanilla JavaScript CLI
</h1>

<h4 align="center">
    ☕ Code and coffee
</h4>
<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/lennonalvesdias/cli.svg">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/lennonalvesdias/cli.svg">
  
  <a href="https://github.com/lennonalvesdias/cli/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/lennonalvesdias/cli.svg">
  </a>

  <a href="https://github.com/lennonalvesdias/cli/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/lennonalvesdias/cli.svg">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-usar">Como usar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-rodando-o-cli-na-unha">Rodando o CLI na unha</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-contribuir">Como contribuir</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Licença</a>
</p>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)

## 💻 Projeto

O Vanilla JavaScript CLI é um projeto que tem como intuíto disponibilizar uma CLI para projetos em ES6 utilizando WebPack e Babel. Foi utilizado sass no projeto, para testes unitários Jasmine + Karma. Para a documentação foi utilizado o docjs com template do docdash.

## 👨‍🏫 Como usar

### Instalação

- Faça a instalação da CLI de maneira global na sua máquina: `npm install -g vjscli`
- Verifique se foi instalado corretamente: `vjs -V`

### Gerar projeto/componente

- Visualizando helper da CLI: `vjs -h`
- Visualizando versão da CLI: `vjs -V`
- Criar novo projeto: `vjs -n <project_name> -a <author_name> -d <project_description>`
- Criar novo componente: `vjs -g <component_name>`

#### Execução do projeto criado

- Execução em desenvolvimento: `npm run local`
- Build para deploy: `npm run build`
- Gerar documentação: `npm run docs`

## 😅 Rodando o CLI na unha

- Clone o projeto
- Instalar as dependências (módulos) do projeto: `npm install`
- Visualizar o CLI imediatamente: `npm start`
- Executa o `build` e o `test` juntos: `npm run create` ou `npm run screate` (versão sudo)
- Compilar o arquivo TypeScript `index.ts` em `index.js` e `index.d.ts`: `npm run build`
- Instalar a CLI globalmente com `npm i -g` e disparando o CLI `vjs`: `npm run test` ou `npm run stest` (versão sudo)
- Remove os módulos, o `package-lock.json` e executa o `npm install`: `npm run refresh`

## 🤔 Como contribuir

- Faça um fork desse repositório
- Cria uma branch com a sua feature: `git checkout -b minha-feature`
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`
- Faça push para a sua branch: `git push origin minha-feature`

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

## 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Este projeto está em constante evolução e refatoração, mande também a sua contribuição.
