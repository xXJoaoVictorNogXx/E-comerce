# Teste Técnico Front-End - Econverse

Este repositório contém a solução para o teste técnico da vaga de Desenvolvedor Front-End na **Econverse**. O projeto consiste na construção de uma interface de e-commerce responsiva com vitrine de produtos e modal interativo consumindo dados de uma API em JSON.

---

## 🛠️ Tecnologias Utilizadas

- **React**: Biblioteca principal para a componentização da interface.
- **TypeScript**: Tipagem estática para estruturação dos dados da API e props dos componentes.
- **Sass (SCSS)**: Pré-processador CSS para estilização modular, variáveis e mixins (sem bibliotecas de UI externas).
- **Vite**: Bundler e servidor de desenvolvimento otimizado.

---

## 📁 Estrutura do Projeto

```text
src/
├── assets/          # Logos, ícones SVG e imagens estáticas
├── components/      # Componentes React (Header, Showcase, ProductCard, Modal, Footer, etc.)
├── services/        # Serviço de requisição do JSON (API)
├── styles/          # Variáveis SCSS, mixins e estilos globais
├── types/           # Interfaces e tipos do TypeScript
├── App.tsx          # Componente raiz da aplicação
└── main.tsx         # Ponto de entrada da aplicação
⚙️ Instruções para Instalar, Rodar, Compilar e Testar
Pré-requisitos
Certifique-se de ter o Node.js (versão 18 ou superior) instalado em sua máquina.

1. Clonar e Instalar Dependências
Bash
git clone [https://github.com/SEU_USUARIO/teste-econverse.git](https://github.com/SEU_USUARIO/teste-econverse.git)
cd teste-econverse
npm install
