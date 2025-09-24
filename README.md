# Desafio Pokémon - React Avançado

## Boas-vindas! 👋

Este projeto foi desenvolvido como parte de um desafio técnico para criar uma aplicação web interativa que consome a API de Pokémon (PokeAPI). O objetivo é demonstrar habilidades em React, gerenciamento de estado com Context API, navegação com `react-router-dom` e estilização com `styled-components`.

---

## Sobre o Projeto

O aplicativo é uma **Single Page Application (SPA)** que possui duas páginas principais:

1. **Página Inicial (Home):**
   - Exibe uma lista inicial de 10 Pokémon.
   - Cada Pokémon na lista mostra sua imagem e nome.
   - É possível "Carregar mais" Pokémon clicando em um botão, adicionando 10 Pokémon à lista atual.
   - Cada item da lista é clicável e leva à página de detalhes do Pokémon correspondente.
2. **Página de Detalhes:**
   - Exibe informações detalhadas sobre um Pokémon específico, incluindo:
     - Imagem
     - Nome
     - Lista de movimentos (moves)
     - Lista de habilidades (abilities) com descrição
     - Tipo (type)

### Funcionalidades Adicionais

- **Alternância de Tema:** A aplicação possui um botão que permite ao usuário alternar entre o tema claro (`light`) e o tema escuro (`dark`).
- **Estilização:** O projeto foi estilizado usando a biblioteca `styled-components`.

---

## Requisitos Técnicos

- **React.js:** Para a construção da interface.
- **Context API:** Utilizada para o gerenciamento global do estado do tema (claro/escuro).
- **`react-router-dom`:** Para a navegação entre as páginas.
- **`styled-components`:** Para a estilização dos componentes.
- **Vite:** Como ambiente de desenvolvimento e build.
- **PokeAPI:** A API pública utilizada para obter os dados dos Pokémon.

---

## Como Rodar o Projeto Localmente

Siga os passos abaixo para instalar as dependências e executar o projeto em sua máquina:

1. Clone este repositório para o seu ambiente local.
2. Navegue até o diretório do projeto via terminal.
3. Instale as dependências com o comando:
   ```bash
   npm install
   ```
4. Inicie o servidor de desenvolvimento para visualizar o projeto:
   ```bash
   npm run dev
   ```
   O projeto será aberto no seu navegador em `http://localhost:5173/` (ou em uma porta similar, dependendo da sua configuração).

---

## Estrutura de Código

- `src/components`: Contém os componentes reutilizáveis da aplicação.
- `src/context`: Contém o contexto da aplicação, como o `ThemeContext` para gerenciar o tema.
- `src/pages`: Contém os componentes que representam as páginas da aplicação (`Home.jsx` e `Details.jsx`).
- `src/services`: Contém a lógica para interação com a PokeAPI.
- `src/App.jsx`: Componente principal que define as rotas da aplicação.

---

## Conclusão

Agradeço muito a oportunidade de desenvolver este projeto e demonstrar minhas habilidades em React. Foi uma ótima experiência e me permitiu aprofundar meus conhecimentos em gerenciamento de estado e arquitetura de componentes.

## (ABO)

Ataides Blume Oliveira
