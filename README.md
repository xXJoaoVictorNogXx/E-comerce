# 🛒 Econverse - E-Commerce Landing Page

Projeto desenvolvido como parte do desafio técnico da **Econverse**, focado na construção de uma landing page e-commerce fiel ao layout do Figma, com arquitetura modular de componentes, tipagem estática e suporte responsivo mobile-first.

---

## 🚀 Tecnologias

- **React** + **TypeScript**
- **Sass (SCSS)** (Flexbox, CSS Grid, Mídias Queries e variáveis)
- **Vite** (Ambiente de desenvolvimento)

---

## ✨ Recursos e Implementações

- **Header Otimizado & Responsivo:**
  - **Desktop:** Navegação em linha com atalhos de ações (carrinho, conta, favoritos, pedidos).
  - **Mobile:** Menu *dropdown* vertical sanfonado e busca expandida ao lado da logo, oculta ícones desnecessários em telas menores.

- **Grid de Categorias:**
  - Cards arredondados fiéis ao protótipo, com feedback visual de seleção ativa.
  - Navegação mobile via touch com *scroll-snap* nativo.

- **Banners & Parceiros:**
  - *Hero Banner* principal e seções duplas de ofertas/parceiros com ajuste dinâmico de layout.

- **Vitrine de Produtos:**
  - Grid de 4 colunas no desktop.
  - Carrossel fluido com rolagem horizontal no mobile.

- **Footer & Newsletter:**
  - Formulário completo para captura de e-mails com checkbox de aceite de termos.
  - Organização adaptativa: colunas institucionais alinhadas no desktop e empilhadas no mobile.

---

## 📁 Estrutura do Projeto

```text
src/
├── assets/          # Recursos estáticos e imagens
├── components/      # Componentes modulares
│   ├── Footer/      # Componente do rodapé e newsletter
│   ├── Header/      # Header com lógica do dropdown mobile
│   └── Showcase/    # Vitrine e cards de produtos
├── styles/          # Estilização global e variáveis SCSS
│   └── global.scss
├── types/           # Interfaces TypeScript
└── App.tsx          # Estrutura principal da página
🛠️ Como Executar
Clone o repositório:

Bash
git clone [https://github.com/seu-usuario/econverse-challenge.git](https://github.com/seu-usuario/econverse-challenge.git)
Instale as dependências:

Bash
npm install
Execute o ambiente local:

Bash
npm run dev
Acesse no seu navegador através do endereço exibido no terminal (geralmente http://localhost:5173).
