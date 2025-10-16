# 🔧 Guia de Correção do Template EmailJS

## Problema Detectado

Erro 422 indica que o template do EmailJS não está configurado corretamente ou os nomes das variáveis não correspondem.

## ✅ Solução: Atualizar Template no EmailJS

### 1. Acesse o EmailJS Dashboard

1. Vá para [https://dashboard.emailjs.com/](https://dashboard.emailjs.com/)
2. Faça login com sua conta

### 2. Edite o Template

1. Clique em **Email Templates** no menu lateral
2. Encontre o template `template_jofebkp` (ou crie um novo)
3. Clique em **Edit**

### 3. Configure o Template Corretamente

**Subject (Assunto):**
```
Nova mensagem de contato - {{user_name}}
```

**Content (HTML ou Text):**
```html
<h2>Nova Mensagem de Contato - DigitalNest</h2>

<p><strong>De:</strong> {{user_name}}</p>
<p><strong>Email:</strong> {{user_email}}</p>

<h3>Mensagem:</h3>
<p>{{message}}</p>

<hr>
<p style="color: #666; font-size: 12px;">
  Esta mensagem foi enviada através do formulário de contato do site DigitalNest.
</p>
```

**To Email:**
```
contato@digitalnest.com
```
*(ou seu email real)*

**Reply To:**
```
{{reply_to}}
```

### 4. Variáveis Usadas no Código

O código está enviando estas variáveis:

```javascript
{
  user_name: "Nome do usuário",
  user_email: "email@usuario.com",
  message: "Mensagem do usuário",
  to_email: "contato@digitalnest.com",
  reply_to: "email@usuario.com"
}
```

### 5. Salve e Teste

1. Clique em **Save** no template
2. Volte ao site e teste o formulário novamente
3. Verifique o console do navegador para logs

## 📋 Template Alternativo (Mais Detalhado)

Se quiser um template mais elaborado:

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #10f080; color: #000; padding: 20px; text-align: center; }
    .content { background: #f9f9f9; padding: 20px; margin: 20px 0; }
    .field { margin: 15px 0; }
    .label { font-weight: bold; color: #555; }
    .footer { text-align: center; color: #999; font-size: 12px; padding: 20px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>DigitalNest</h1>
      <p>Nova Mensagem de Contato</p>
    </div>
    
    <div class="content">
      <div class="field">
        <span class="label">Nome:</span>
        <p>{{user_name}}</p>
      </div>
      
      <div class="field">
        <span class="label">Email:</span>
        <p>{{user_email}}</p>
      </div>
      
      <div class="field">
        <span class="label">Mensagem:</span>
        <p>{{message}}</p>
      </div>
    </div>
    
    <div class="footer">
      <p>Esta mensagem foi enviada através do formulário de contato do site DigitalNest</p>
      <p>Para responder, use o botão "Reply" ou envie para: {{reply_to}}</p>
    </div>
  </div>
</body>
</html>
```

## 🔍 Verificação

Após atualizar o template, teste:

1. Abra o site: `http://localhost:5173`
2. Role até a seção de contato
3. Preencha o formulário
4. Clique em "Enviar"
5. Verifique o console do navegador (F12)
6. Deve aparecer: "Email sent successfully!"

## ⚠️ Troubleshooting

Se ainda der erro:

1. **Verifique o Service ID**: `service_k00o88e`
2. **Verifique o Template ID**: `template_jofebkp`
3. **Verifique a Public Key**: `8peeK_XeRb0jy5hDy`
4. **Limite de emails**: Conta gratuita tem 200 emails/mês
5. **CORS**: EmailJS já está habilitado para todos os domínios por padrão

## 📧 Email de Destino

No dashboard do EmailJS, em **Email Services**, verifique se o email de destino está configurado corretamente.

## 🎯 Teste Manual no EmailJS

1. Vá até o template no dashboard
2. Clique em **Test it**
3. Preencha os campos de teste
4. Clique em **Send test email**
5. Verifique se chegou no seu email

Se o teste manual funcionar, o problema está na configuração das variáveis no código.
