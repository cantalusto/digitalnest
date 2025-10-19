# 📧 Guia de Configuração do EmailJS - DigitalNest

## ❌ Erro Atual
```
EmailJSResponseStatus {status: 422, text: 'The recipients address is empty'}
```

**Causa:** O template do EmailJS não está configurado corretamente para receber o e-mail de destino.

---

## ✅ Solução: Configurar Template no EmailJS

### 1. **Acesse o EmailJS Dashboard**
1. Vá para: https://dashboard.emailjs.com/
2. Faça login com sua conta
3. Selecione seu serviço de e-mail

### 2. **Edite o Template**
1. Clique em **"Email Templates"** no menu lateral
2. Encontre o template: `template_jofebkp`
3. Clique em **"Edit"** (ícone de lápis)

### 3. **Configure os Campos do Template**

#### **Campo "To Email" (Destinatário):**
Na seção **"Settings"** ou **"To Email"**, adicione:
```
{{to_email}}
```

#### **Conteúdo do E-mail:**
Use este template como referência:

**Subject (Assunto):**
```
Nova mensagem de {{user_name}} - DigitalNest
```

**Body (Corpo do e-mail):**
```html
<h2>Nova Mensagem do Site DigitalNest</h2>

<p><strong>Nome:</strong> {{user_name}}</p>
<p><strong>E-mail:</strong> {{user_email}}</p>

<h3>Mensagem:</h3>
<p>{{message}}</p>

<hr>
<p><small>Esta mensagem foi enviada através do formulário de contato do site digitalnest.app.br</small></p>
```

**From Name (Nome do Remetente):**
```
DigitalNest - Site
```

**From Email (E-mail Remetente):**
```
noreply@digitalnest.app.br
```
*Obs: Use o e-mail configurado no seu serviço EmailJS*

**Reply To (Responder para):**
```
{{reply_to}}
```

### 4. **Variáveis que o código está enviando:**

O formulário envia estes parâmetros:
```javascript
{
  user_name: "Nome do cliente",
  user_email: "email@cliente.com",
  message: "Mensagem do cliente",
  to_email: "contato@digitalnest.app.br",
  reply_to: "email@cliente.com"
}
```

**Certifique-se de que todas essas variáveis estão no template!**

### 5. **Teste o Template**
1. No EmailJS Dashboard, clique em **"Test It"**
2. Preencha os campos de teste:
   - `user_name`: João Silva
   - `user_email`: joao@teste.com
   - `message`: Teste de mensagem
   - `to_email`: contato@digitalnest.app.br
   - `reply_to`: joao@teste.com
3. Clique em **"Send Test Email"**
4. Verifique se o e-mail chegou em `contato@digitalnest.app.br`

---

## 🎯 Checklist de Configuração

- [ ] Template criado/editado no EmailJS
- [ ] Campo "To Email" configurado com `{{to_email}}`
- [ ] Campo "Reply To" configurado com `{{reply_to}}`
- [ ] Variáveis `{{user_name}}`, `{{user_email}}`, `{{message}}` no corpo
- [ ] Teste enviado com sucesso
- [ ] E-mail recebido em contato@digitalnest.app.br

---

## 🔧 Configuração Visual do Template

### **1. Settings (Configurações)**
```
Service: [Seu serviço de e-mail]
Template ID: template_jofebkp
Template Name: Contact Form - DigitalNest
```

### **2. To Email (Para)**
```
{{to_email}}
```
⚠️ **IMPORTANTE:** Este campo é onde você coloca `{{to_email}}` para que o código possa enviar para o e-mail correto!

### **3. From Name (De - Nome)**
```
DigitalNest Contact Form
```

### **4. From Email (De - E-mail)**
```
[use o e-mail configurado no seu serviço]
```

### **5. Subject (Assunto)**
```
Nova mensagem de {{user_name}}
```

### **6. Reply To (Responder para)**
```
{{reply_to}}
```

### **7. Content (Conteúdo)**
```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #10f080;">Nova Mensagem - DigitalNest</h2>
  
  <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
    <p><strong>Nome:</strong> {{user_name}}</p>
    <p><strong>E-mail:</strong> {{user_email}}</p>
  </div>
  
  <div style="margin: 20px 0;">
    <h3>Mensagem:</h3>
    <p style="white-space: pre-wrap;">{{message}}</p>
  </div>
  
  <hr style="border: 1px solid #e0e0e0; margin: 20px 0;">
  
  <p style="color: #666; font-size: 12px;">
    Esta mensagem foi enviada através do formulário de contato do site 
    <a href="https://digitalnest.app.br" style="color: #10f080;">digitalnest.app.br</a>
  </p>
</div>
```

---

## 🆘 Problemas Comuns

### 1. **Erro 422 - "recipients address is empty"**
**Causa:** Campo "To Email" não configurado no template
**Solução:** Adicione `{{to_email}}` no campo "To Email" do template

### 2. **E-mail não chega**
**Causa:** Serviço de e-mail não configurado corretamente
**Solução:** Verifique se o serviço EmailJS está conectado ao seu provedor (Gmail, Outlook, etc.)

### 3. **Erro 401 - Unauthorized**
**Causa:** Public Key incorreta
**Solução:** Verifique a chave pública no arquivo `.env`

### 4. **Variáveis não aparecem no e-mail**
**Causa:** Nome das variáveis incorreto
**Solução:** Use exatamente: `{{user_name}}`, `{{user_email}}`, `{{message}}`, `{{to_email}}`, `{{reply_to}}`

---

## 📞 Suporte

Se continuar com problemas:
1. Acesse: https://www.emailjs.com/docs/
2. Veja o guia: https://www.emailjs.com/docs/tutorial/creating-email-template/

---

**Última atualização:** 19/10/2025

**Importante:** Após configurar o template, aguarde 1-2 minutos e teste novamente o formulário no site!
