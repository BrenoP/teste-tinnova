# 📋 Cadastro de Usuários – React + Vite

Este projeto é uma aplicação front-end desenvolvida com **React** utilizando **Vite**, cujo objetivo é realizar o **cadastro, listagem, edição e exclusão de usuários**.

A aplicação consome uma **API apenas para carregar os dados iniciais**, e a partir disso utiliza o **localStorage** como persistência principal, garantindo que alterações feitas pelo usuário sejam mantidas mesmo após recarregar a página.

---

## 🚀 Funcionalidades

- 📄 **Listagem de usuários** (tela inicial)
- ➕ **Cadastro de novos usuários**
- ✏️ **Edição de usuários existentes**
- 🗑️ **Exclusão de usuários**
- 💾 Persistência de dados via **localStorage**
- 🔔 Feedbacks visuais com **toasts**
- ✅ Validação de formulários

---

## 🖥️ Demonstração

O projeto está disponível online e pode ser acessado pelo link:

👉 **[[Link do deploy do projeto](https://brenop.github.io/teste-tinnova)]**

> Obs: Caso o link mude ou fique indisponível, é possível rodar o projeto localmente seguindo as instruções abaixo.

---

## 🛠️ Principais Tecnologias Utilizadas

### 🧠 Arquitetura
Toda a estrutura do projeto foi construído pensando em escalabilidade, desde a organização de arquivos e pastas até as chamadas com TanStack React Query e configurações globais.

### ⚛️ React
Biblioteca principal para construção da interface do usuário, permitindo a criação de componentes reutilizáveis e uma arquitetura baseada em estados e efeitos.

### ⚡ Vite
Ferramenta de build moderna e extremamente rápida, utilizada para:
- Ambiente de desenvolvimento ágil
- Build otimizado para produção
- Configuração simples

### 🧭 React Router DOM
Responsável pelo **roteamento da aplicação**, permitindo navegação entre páginas como:
- Listagem
- Cadastro
- Edição

Também é utilizado para redirecionamentos e controle de rotas dinâmicas.

### 🔄 TanStack React Query
Utilizado para:
- Buscar os dados iniciais da API
- Gerenciar cache
- Controlar estados de loading e erro

Após a carga inicial, os dados passam a ser gerenciados via **localStorage**, evitando chamadas desnecessárias à API.

### 📝 React Hook Form
Biblioteca para gerenciamento de formulários, trazendo:
- Melhor performance
- Menos re-renderizações
- API simples e escalável

### ✅ Zod
Usado em conjunto com o React Hook Form para:
- Validação de dados
- Definição de schemas
- Garantia de tipagem e consistência dos formulários

### 🎨 Material UI (MUI)
Utilizado para componentes prontos de UI, como:
- Inputs
- Labels
- Mensagens de erro

Com customização de tema para manter identidade visual do projeto.

### 💅 Styled Components
Usado para estilização dos componentes de forma isolada e reutilizável, permitindo:
- Estilos dinâmicos
- Melhor organização do CSS
- Evitar conflitos globais

### 🎭 Emotion
Dependência necessária para funcionamento do Material UI, responsável pelo sistema de estilização e theming.

### 🔔 React Toastify
Biblioteca para exibição de notificações (toasts), utilizada para:
- Feedback de sucesso
- Erros
- Ações do usuário (criar, editar, excluir)

### 🎯 React Icons
Utilizada para inclusão de ícones de forma simples e consistente na interface.

---

## 📂 Estrutura Geral do Projeto

- `pages/` → Telas principais (Listagem, Cadastro)
- `components/` → Componentes reutilizáveis (Navbar, Inputs, Toasts, etc.)
- `data/` → Funções de acesso à API e localStorage
- `style/` → Estilos globais e temas
- `types/` → Tipagens globais

---

## ▶️ Como Rodar o Projeto Localmente

### Pré-requisitos

- **Node.js** (versão 18 ou superior)
- **npm** ou **yarn**

### Passo a passo

1. Clone o repositório:
  ```bash
  git clone https://github.com/seu-usuario/seu-repositorio.git
  ```

2. Acesse a pasta do projeto:
  ```bash
  cd seu-repositorio
  ```

3. Instale as dependências:
  ```bash
  npm install
  # ou
  yarn
  ```
4. Inicie o servidor de desenvolvimento:
  ```bash
  npm run dev
  # ou
  yarn dev
  ```
5. Acesse no navegador:
  ```bash
  http://localhost:5173
  ```