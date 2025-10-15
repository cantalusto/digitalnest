# 🚀 Comandos Rápidos - DigitalNest

## 📦 Instalação Inicial

```powershell
# Navegar até o diretório do projeto (se necessário)
cd "c:\Users\lucas\OneDrive\Área de Trabalho\digitald"

# Instalar todas as dependências
npm install
```

## ⚡ Desenvolvimento

```powershell
# Iniciar servidor de desenvolvimento
npm run dev

# O projeto estará disponível em: http://localhost:5173
```

## 🏗️ Build e Deploy

```powershell
# Criar build de produção
npm run build

# Visualizar build localmente
npm run preview

# Fazer deploy na Vercel (após instalar CLI)
npm i -g vercel
vercel
```

## 🧹 Linting e Formatação

```powershell
# Executar ESLint
npm run lint

# Formatar código com Prettier
npm run format
```

## 📝 Estrutura Criada

✅ Configuração completa do Vite + React + TypeScript
✅ TailwindCSS com tema personalizado
✅ Design System completo (6 componentes UI)
✅ Sistema de tradução PT-BR ↔ EN
✅ Dark/Light Mode com persistência
✅ Navbar responsiva com menu mobile
✅ Footer com links sociais
✅ 5 páginas completas (Home, About, Services, Portfolio, Contact)
✅ Formulário de contato com EmailJS
✅ Animações Framer Motion
✅ React Router configurado
✅ ESLint e Prettier configurados

## 🎯 Próximos Passos

1. Execute `npm install` para instalar as dependências
2. Execute `npm run dev` para ver o projeto funcionando
3. Configure o EmailJS no arquivo `src/pages/Contact.tsx`
4. Personalize cores e conteúdo conforme necessário
5. Faça o deploy na Vercel quando estiver pronto

## ⚙️ Configuração do EmailJS

Para ativar o formulário de contato:

1. Acesse: https://www.emailjs.com/
2. Crie uma conta gratuita
3. Configure um serviço (Gmail, Outlook, etc)
4. Crie um template de email
5. Copie: Service ID, Template ID e Public Key
6. Cole em: `src/pages/Contact.tsx` (linhas 48-56)

## 🎨 Personalização Rápida

### Cores (tailwind.config.js)

- primary: #F97316 (laranja)
- secondary: #2563EB (azul)
- accent: #9333EA (roxo)

### Traduções (src/i18n/locales/)

- pt.json - Português
- en.json - Inglês

### Fontes (index.html)

- Poppins - Títulos
- Inter - Corpo do texto

## 🌐 URLs Importantes

- Desenvolvimento: http://localhost:5173
- Vercel Deploy: https://vercel.com
- EmailJS: https://www.emailjs.com
- TailwindCSS Docs: https://tailwindcss.com
- Framer Motion: https://www.framer.com/motion

---

**Projeto criado com sucesso! 🎉**
**Pronto para causar uma excelente primeira impressão! ✨**
