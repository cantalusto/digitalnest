# 📋 Instruções de Instalação e Execução

## ✅ Passo a Passo

### 1. Instalar Dependências

Abra o terminal no diretório do projeto e execute:

```bash
npm install
```

Este comando irá instalar todas as dependências listadas no `package.json`.

### 2. Configurar EmailJS (Opcional mas Recomendado)

Para que o formulário de contato funcione:

1. Acesse [EmailJS](https://www.emailjs.com/) e crie uma conta gratuita
2. Crie um novo serviço de email (ex: Gmail, Outlook)
3. Crie um template de email
4. Copie suas credenciais:
   - Service ID
   - Template ID
   - Public Key

5. Abra o arquivo `src/pages/Contact.tsx` e substitua:
   ```typescript
   await emailjs.send(
     'YOUR_SERVICE_ID', // Seu Service ID aqui
     'YOUR_TEMPLATE_ID', // Seu Template ID aqui
     {
       from_name: formData.name,
       from_email: formData.email,
       message: formData.message,
     },
     'YOUR_PUBLIC_KEY' // Sua Public Key aqui
   );
   ```

### 3. Executar em Modo Desenvolvimento

```bash
npm run dev
```

O projeto será aberto automaticamente em `http://localhost:5173`

### 4. Build para Produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`

### 5. Preview da Build

```bash
npm run preview
```

Visualiza a versão de produção localmente antes do deploy.

---

## 🚀 Deploy na Vercel

### Método 1: Via Interface Web (Mais Fácil)

1. Acesse [vercel.com](https://vercel.com)
2. Faça login com sua conta GitHub
3. Clique em "Add New Project"
4. Importe seu repositório
5. A Vercel detectará automaticamente as configurações do Vite
6. Clique em "Deploy"

### Método 2: Via CLI

```bash
# Instalar Vercel CLI globalmente
npm i -g vercel

# Fazer login
vercel login

# Deploy
vercel

# Deploy para produção
vercel --prod
```

---

## 🎨 Personalizações Rápidas

### Alterar Cores do Tema

Edite `tailwind.config.js`:

```javascript
colors: {
  primary: '#SUA_COR_AQUI',
  secondary: '#SUA_COR_AQUI',
  // ...
}
```

### Adicionar Novas Traduções

Edite os arquivos em `src/i18n/locales/`:

- `pt.json` - Português
- `en.json` - Inglês

### Mudar Fontes

Edite `index.html` para trocar os imports do Google Fonts.

---

## 📦 Tecnologias Utilizadas

- ⚛️ React 18
- 📘 TypeScript
- ⚡ Vite
- 🎨 Tailwind CSS
- 🎭 Framer Motion
- 🧭 React Router
- 🌍 i18next
- ✉️ EmailJS
- 🎯 Lucide Icons

---

## 🐛 Solução de Problemas

### Erro ao instalar dependências

```bash
# Limpar cache e reinstalar
rm -rf node_modules package-lock.json
npm install
```

### Porta 5173 já está em uso

```bash
# Usar outra porta
npm run dev -- --port 3000
```

### Erros de TypeScript

```bash
# Verificar tipos
npm run type-check
```

---

## 📞 Suporte

Para dúvidas ou problemas:

- Abra uma issue no GitHub
- Entre em contato via email: contato@digitalnest.com.br

---

**Bom desenvolvimento! 🚀**
