# 📧 Configuração do Formulário de Contato

O formulário de contato usa **EmailJS** para enviar emails diretamente do frontend.

## 🚀 Como Configurar

### 1. Criar Conta no EmailJS

1. Acesse [EmailJS](https://www.emailjs.com/)
2. Crie uma conta gratuita (100 emails/mês grátis)
3. Faça login no dashboard

### 2. Configurar Email Service

1. No dashboard, vá em **Email Services**
2. Clique em **Add New Service**
3. Escolha seu provedor de email (Gmail, Outlook, etc.)
4. Siga as instruções para conectar sua conta
5. Copie o **Service ID** gerado

### 3. Criar Email Template

1. Vá em **Email Templates**
2. Clique em **Create New Template**
3. Use o seguinte template:

```html
Olá {{to_name}}, Você recebeu uma nova mensagem de contato do site DigitalNest: Nome: {{from_name}}
Email: {{from_email}} Mensagem: {{message}} --- Enviado via DigitalNest Contact Form
```

4. Copie o **Template ID** gerado

### 4. Obter Public Key

1. Vá em **Account** > **General**
2. Copie sua **Public Key**

### 5. Configurar Variáveis de Ambiente

1. Crie um arquivo `.env` na raiz do projeto (copie do `.env.example`)
2. Adicione suas credenciais:

```env
VITE_EMAILJS_SERVICE_ID=seu_service_id_aqui
VITE_EMAILJS_TEMPLATE_ID=seu_template_id_aqui
VITE_EMAILJS_PUBLIC_KEY=sua_public_key_aqui

# WhatsApp (formato: código do país + DDD + número, sem espaços)
VITE_WHATSAPP_NUMBER=5511999999999
```

3. Reinicie o servidor de desenvolvimento:

```bash
npm run dev
```

## 💬 Botão do WhatsApp

### Configuração do Número

Edite o número no arquivo `.env`:

```env
VITE_WHATSAPP_NUMBER=5511999999999
```

**Formato:**

- `55` - Código do Brasil
- `11` - DDD de São Paulo
- `999999999` - Número do celular

**Outros países:**

- Portugal: `351912345678`
- EUA: `1234567890`
- Argentina: `5491123456789`

### Funcionalidades do Botão

- ✅ Fixo no canto inferior direito
- ✅ Animação de entrada suave
- ✅ Efeito de pulse constante
- ✅ Tooltip ao passar o mouse
- ✅ Glow effect verde (cor oficial do WhatsApp)
- ✅ Abre conversa com mensagem pré-definida
- ✅ Responsivo (mobile e desktop)
- ✅ Z-index alto para ficar sempre visível

## ✅ Funcionalidades Implementadas

- ✅ Validação de campos obrigatórios
- ✅ Loading state durante envio
- ✅ Mensagens de sucesso e erro
- ✅ Limpeza automática do formulário após envio
- ✅ Estados disabled durante envio
- ✅ Animações suaves de feedback
- ✅ Auto-reset de mensagens após 5 segundos

## 🎨 Estados Visuais

- **Idle**: Formulário pronto para uso
- **Submitting**: Botão mostra "Enviando..." e campos ficam disabled
- **Success**: Mensagem verde com ícone de check
- **Error**: Mensagem vermelha com ícone de alerta

## 🔒 Segurança

- As credenciais estão em variáveis de ambiente (não commitadas)
- O arquivo `.env` está no `.gitignore`
- EmailJS usa HTTPS para comunicação segura

## 📝 Modo Demo

Se as variáveis de ambiente não estiverem configuradas, o formulário ainda funciona em modo demo:

- Mostra mensagem de sucesso
- Limpa o formulário
- Não envia email real

Isso permite testar a interface sem configurar o EmailJS.
