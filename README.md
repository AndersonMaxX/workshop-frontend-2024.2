# 📜 Valorant Agents

Uma aplicação React que consome dados de uma API externa para exibir informações sobre os agentes do jogo Valorant. Este projeto tem como objetivo apresentar uma lista de agentes com detalhes como nome, função e descrição.

[Ver Projeto](https://valorant-renovatt.vercel.app/)

## 🛠️ Tecnologias Utilizadas

-   **React**: Biblioteca JavaScript para construção da interface de usuário.
-   **Fetch API**: Para realizar requisições HTTP e obter dados da API externa.
-   **CSS**: Estilização da interface de usuário.

## 📂 Estrutura do Projeto

-   **public/**: Contém o arquivo `index.html` que serve como ponto de entrada para a aplicação.
-   **src/**: Contém todos os componentes React e estilos do projeto.
    -   **components/**: Componentes reutilizáveis, como `AgentsList.js`.
    -   **App.js**: Componente principal que gerencia a navegação entre as páginas.
    -   **index.js**: Ponto de entrada do React.
    -   **App.css**: Estilos principais da aplicação.

## 🚀 Funcionalidades

-   **🔍 Listagem de Agentes**: Exibe os agentes do jogo Valorant, com imagem, nome, função e descrição.
-   **🗺️ Navegação Simples**: Links de navegação para alternar entre a página inicial e a página de agentes.
-   **🌐 Consumo de API Externa**: Usa a API pública do Valorant para buscar dados dos agentes em tempo real.

## 📋 Pré-requisitos

-   **Node.js** (versão 14 ou superior)
-   **npm** (gerenciador de pacotes do Node.js)

## ⚙️ Instalação

1.  Clone o repositório:
    
    bash
    
    Copiar código
    
    `git clone https://github.com/andinhomax/workshop-frontend-2024.2.git` 
    
2.  Navegue até o diretório do projeto:
    
    bash
    
    Copiar código
    
    `cd valorant-agents` 
    
3.  Instale as dependências:
    
    bash
    
    Copiar código
    
    `npm install` 
    

## ▶️ Executando o Projeto

Para iniciar o servidor de desenvolvimento, execute:

bash

Copiar código

`npm start` 

O projeto estará disponível em `http://localhost:3000`.

## 📁 Estrutura de Pastas


Copiar código

plaintext

`valorant-agents/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── AgentsList.js
│   ├── App.js
│   ├── App.css
│   └── index.js
└── package.json` 

## 🛠️ Como Funciona

1.  **Navegação**: A navegação entre "Início" e "Agentes" é controlada pelo estado React no `App.js`.
2.  **Consumo de API**: O componente `AgentsList` faz uma requisição à API do Valorant e exibe os agentes.
3.  **Estilização**: O CSS é utilizado para definir o layout e os estilos da página, incluindo a imagem de fundo.

## 🤝 Contribuição

Se quiser contribuir com o projeto, sinta-se à vontade para abrir um _pull request_ ou relatar problemas.

## 📄 Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo `LICENSE` para obter mais informações.

## 👏 Créditos

-   **API Valorant**: [Valorant API](https://valorant-api.com/)
-   **Desenvolvido por**: Anderson Max
