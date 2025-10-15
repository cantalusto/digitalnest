# 🚀 DigitalNest

> Seu ninho de criatividade digital

**Projeto front-end moderno e responsivo** construído com as mais recentes tecnologias web, apresentando um design inovador com tema escuro e paleta de cores vibrantes inspirada em plataformas crypto/tech.

## 📋 Stack Técnica

- **React** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Superset JavaScript com tipagem estática
- **Vite** - Build tool moderna e rápida
- **TailwindCSS** - Framework CSS utilitário
- **Framer Motion** - Biblioteca para animações suaves
- **React Router** - Roteamento SPA
- **i18next** - Internacionalização (PT-BR ↔ EN)
- **EmailJS** - Integração de formulário de contato
- **Lucide React** - Ícones modernos

## ✨ Funcionalidades

- 🎨 **Design Moderno**: Interface com tema escuro, gradientes vibrantes e efeitos glassmorphism
- � **Bilíngue**: Suporte completo para Português (PT-BR) e Inglês (EN)
- 📱 **Totalmente Responsivo**: Otimizado para todos os dispositivos (Mobile-first)
- ✉️ **Formulário de Contato**: Integração funcional com EmailJS
- 🎭 **Animações Suaves**: Transições elegantes com Framer Motion
- ⚡ **Performance**: Construído com Vite para máxima velocidade
- 🎯 **TypeScript**: Código type-safe e robusto
- 🔥 **Tema Escuro**: Design moderno com paleta crypto/tech

## 🚀 Como Executar

### Pré-requisitos

- Node.js 16+ instalado
- npm ou yarn

### Instalação

```bash
# Instalar dependências
npm install

# Executar em modo de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview
```

## ⚙️ Configuração do EmailJS

Para que o formulário de contato funcione, você precisa configurar o EmailJS:

1. Crie uma conta em [EmailJS](https://www.emailjs.com/)
2. Configure um serviço de email
3. Crie um template de email
4. Substitua as credenciais em `src/pages/Contact.tsx`:
   - `YOUR_SERVICE_ID`
   - `YOUR_TEMPLATE_ID`
   - `YOUR_PUBLIC_KEY`

## 📁 Estrutura do Projeto

```
src/
├── assets/           # Imagens e recursos
├── components/       # Componentes React
│   ├── ui/          # Design System
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ThemeToggle.tsx
│   └── LanguageToggle.tsx
├── pages/           # Páginas da aplicação
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Portfolio.tsx
│   └── Contact.tsx
├── i18n/            # Traduções
│   ├── locales/
│   └── index.ts
├── styles/          # Estilos globais
├── App.tsx
└── main.tsx
```

## 🎨 Design System

### Paleta de Cores (Crypto-Intelligence Theme)

- **Primary**: `#592EF2` (Roxo vibrante - Inovação e Tecnologia)
- **Secondary**: `#29F280` (Verde neon - Energia e Crescimento)
- **Accent**: `#BFCAD9` (Cinza azulado - Equilíbrio e Sofisticação)
- **Background**: `#141926` (Azul escuro profundo - Profissionalismo)
- **Dark Accent**: `#24733F` (Verde escuro - Estabilidade)

### Tipografia

- **Display**: Space Grotesk (700-900) - Títulos impactantes
- **Sans**: Inter (400-600) - Texto corpo
- **Mono**: JetBrains Mono - Código e destaques

### Componentes UI

- **Button**: 3 variantes (primary, secondary, outline) com animações
- **Card**: Glassmorphism com bordas sutis e hover effects
- **Input**: Estados de validação com feedback visual
- **Section**: Backgrounds alternados para hierarquia
- **Navbar**: Transparente com blur effect ao scroll

## 🌐 Deploy

O projeto está otimizado para deploy na **Vercel**:

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Preview da build
- `npm run lint` - Executa ESLint
- `npm run format` - Formata código com Prettier

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## 📄 Licença

Este projeto está sob a licença MIT.

---

**Desenvolvido com ❤️ pela equipe DigitalNest**
