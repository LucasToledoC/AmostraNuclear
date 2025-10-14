# Amostra Nuclear: Hiroshima & Nagasaki Quiz

Este projeto é um site interativo desenvolvido em React com TailwindCSS que aborda a história dos bombardeios de Hiroshima e Nagasaki através de um quiz gamificado. O objetivo é educar os usuários sobre este evento histórico crucial, ao mesmo tempo em que oferece uma experiência envolvente e interativa.

## Funcionalidades

*   **Página Educacional:** Conteúdo detalhado sobre os antecedentes, o ataque, o impacto imediato e as consequências pós-ataque dos bombardeios de Hiroshima e Nagasaki.
*   **Quiz Interativo:** Um quiz com perguntas de múltipla escolha para testar o conhecimento do usuário. Inclui feedback visual para respostas corretas/incorretas e um sistema de pontuação.
*   **Sistema de Recompensas Desbloqueáveis:** Conteúdo adicional e aprofundado sobre temas relacionados (e.g., Projeto Manhattan, Testemunhos dos Hibakusha, Reconstrução das Cidades, Debate Ético e Legado Nuclear), que são desbloqueados à medida que o usuário acumula pontos no quiz.
*   **Design Responsivo:** O site é totalmente responsivo, adaptando-se a diferentes tamanhos de tela (desktop, tablet, mobile) para uma experiência de usuário consistente.
*   **Navegação Fixa:** Um cabeçalho de navegação que se adapta ao scroll da página e oferece links para as seções principais do site, com um menu hambúrguer para dispositivos móveis.

## Tecnologias Utilizadas

*   **React:** Biblioteca JavaScript para construção de interfaces de usuário.
*   **TailwindCSS:** Framework CSS utilitário para estilização rápida e responsiva.
*   **Vite:** Ferramenta de build rápida para projetos web modernos.
*   **Lucide React:** Biblioteca de ícones para React.
*   **pnpm:** Gerenciador de pacotes rápido e eficiente.

## Estrutura do Projeto

```
AmostraNuclear/
├── public/
│   ├── index.html
│   └── hero-image.png
├── src/
│   ├── assets/ (para futuras imagens ou outros assets)
│   ├── components/
│   │   ├── layout/ (Header, Footer)
│   │   ├── sections/ (Hero, EducationalContent, QuizSection, RewardsSection)
│   │   └── ui/ (componentes Shadcn/UI, se utilizados)
│   ├── data/ (quizData.js, rewardsData.js)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
├── package.json
├── pnpm-lock.yaml
├── .gitignore
└── README.md
```

## Como Rodar o Projeto Localmente

Siga os passos abaixo para configurar e rodar o projeto em sua máquina local:

1.  **Clone o repositório:**
    ```bash
    git clone <URL_DO_SEU_REPOSITORIO>
    cd AmostraNuclear
    ```

2.  **Instale as dependências:**
    Certifique-se de ter o `pnpm` instalado. Se não tiver, instale-o globalmente:
    ```bash
    npm install -g pnpm
    ```
    Em seguida, na raiz do projeto:
    ```bash
    pnpm install
    ```
    *Se você encontrar erros de resolução de dependência, tente:* `pnpm install --legacy-peer-deps`

3.  **Inicie o servidor de desenvolvimento:**
    ```bash
    pnpm run dev
    ```

    O projeto estará disponível em `http://localhost:5173/` (ou outra porta disponível, como `5174`, `5175`, etc.).

## Build para Produção

Para gerar uma versão otimizada do projeto para deploy:

```bash
pnpm run build
```

Os arquivos de produção serão gerados na pasta `dist/`.

## Deploy

O projeto pode ser facilmente deployado em plataformas como Vercel, Netlify, GitHub Pages, etc. Para o Vercel, você pode simplesmente conectar seu repositório GitHub e ele detectará automaticamente o projeto React e fará o deploy da pasta `dist`.
