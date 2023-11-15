# FORMULÁRIOS 
## GERAL:
**HTML (index.html):**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulário Básico</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <h1>Formulário Básico</h1>

    <form id="myForm">
        <label for="name">Nome:</label>
        <input type="text" id="name" name="name" required>

        <label for="email">E-mail:</label>
        <input type="email" id="email" name="email" required>

        <label for="message">Mensagem:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="button" onclick="submitForm()">Enviar</button>
    </form>

    <div id="result"></div>

    <script src="script.js"></script>
</body>
</html>
```

**Explicação:**
- Este é o arquivo HTML principal que contém o formulário básico.
- O formulário inclui campos para nome, e-mail e mensagem.
- O botão "Enviar" chama a função `submitForm()` quando clicado.
- Um `<div>` com o id "result" é usado para exibir o resultado do envio do formulário.

---

**CSS (styles.css):**
```css
body {
    font-family: Arial, sans-serif;
    text-align: center;
    padding: 20px;
}

h1 {
    color: #333;
}

form {
    max-width: 400px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
}

label {
    display: block;
    margin-bottom: 8px;
}

input,
textarea {
    width: 100%;
    padding: 8px;
    margin-bottom: 16px;
    box-sizing: border-box;
}

button {
    background-color: #4caf50;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}
```

**Explicação:**
- Este arquivo CSS estiliza o formulário para torná-lo visualmente atraente.
- Define a aparência do corpo (`body`), o cabeçalho (`h1`), o formulário (`form`), as etiquetas (`label`), os campos de entrada (`input` e `textarea`), e o botão (`button`).
- Adiciona regras de estilo para aprimorar a experiência do usuário.

---

**JavaScript (script.js):**
```javascript
function submitForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Simulação de envio do formulário (você pode adicionar lógica de envio real aqui)
    var result = document.getElementById('result');
    result.innerHTML = `<p>Formulário enviado com sucesso!</p>
                        <p>Nome: ${name}</p>
                        <p>E-mail: ${email}</p>
                        <p>Mensagem: ${message}</p>`;
}
```

**Explicação:**
- Este arquivo JavaScript adiciona funcionalidade ao formulário.
- A função `submitForm()` é chamada quando o botão "Enviar" é clicado.
- Obtém os valores dos campos de nome, e-mail e mensagem.
- Simula o envio do formulário exibindo os dados na `<div>` com id "result".
- Neste exemplo, a lógica de envio é simulada; em um cenário real, você precisaria enviar os dados para um servidor.

## ESTRUTURA E SELETORES:
1. **`<form>`:**
   - A tag `<form>` é usada para criar um formulário HTML. Ela envolve todos os elementos do formulário.

2. **`<label>`:**
   - A tag `<label>` é usada para rotular um campo de entrada no formulário. Ela melhora a acessibilidade e usabilidade.

3. **`<input>`:**
   - A tag `<input>` é usada para criar diferentes tipos de campos de entrada, como texto (`type="text"`), senha (`type="password"`), caixa de seleção (`type="checkbox"`), etc.

4. **`<textarea>`:**
   - A tag `<textarea>` é usada para criar um campo de texto multilinha, ideal para inserção de blocos de texto.

5. **`<select>` e `<option>`:**
   - A tag `<select>` é usada para criar uma lista suspensa (dropdown), e `<option>` define as opções dentro dessa lista.

6. **`<button>`:**
   - A tag `<button>` é usada para criar botões dentro do formulário, como o botão de envio (`type="submit"`).

Esses elementos formam a estrutura básica de um formulário HTML. Os atributos `id` e `name` são frequentemente usados para identificar e referenciar campos de entrada. Associar `<label>` a campos de entrada usando o atributo `for` melhora a acessibilidade, tornando os formulários mais amigáveis para leitores de tela.

## TIPOS DE TYPES:
Vou explicar alguns dos tipos mais comuns do atributo `type` da tag `<input>` em HTML:

1. **`text`:**
   - **Descrição:** Cria um campo de texto de uma linha.
   - **Exemplo:** `<input type="text" name="username">`

2. **`password`:**
   - **Descrição:** Cria um campo de senha, onde os caracteres digitados são mascarados.
   - **Exemplo:** `<input type="password" name="password">`

3. **`checkbox`:**
   - **Descrição:** Cria uma caixa de seleção que permite ao usuário selecionar ou desmarcar uma opção.
   - **Exemplo:** `<input type="checkbox" name="subscribe" checked>`

4. **`radio`:**
   - **Descrição:** Cria botões de rádio, permitindo ao usuário selecionar uma opção de um grupo.
   - **Exemplo:** 
     ```html
     <input type="radio" name="gender" value="male"> Masculino
     <input type="radio" name="gender" value="female"> Feminino
     ```

5. **`submit`:**
   - **Descrição:** Cria um botão de envio que envia os dados do formulário para o servidor.
   - **Exemplo:** `<input type="submit" value="Enviar">`

6. **`reset`:**
   - **Descrição:** Cria um botão que reseta todos os campos do formulário para seus valores padrão.
   - **Exemplo:** `<input type="reset" value="Limpar">`

7. **`file`:**
   - **Descrição:** Cria um campo para upload de arquivos, permitindo que o usuário selecione um arquivo em seu dispositivo.
   - **Exemplo:** `<input type="file" name="file-upload">`

8. **`hidden`:**
   - **Descrição:** Cria um campo oculto que não é exibido ao usuário, mas pode ser enviado com os dados do formulário.
   - **Exemplo:** `<input type="hidden" name="user-id" value="123">`

9. **`number`:**
   - **Descrição:** Cria um campo para entrada numérica, permitindo apenas valores numéricos.
   - **Exemplo:** `<input type="number" name="quantity" min="1" max="100">`

10. **`date`:**
    - **Descrição:** Cria um campo para entrada de data.
    - **Exemplo:** `<input type="date" name="birthdate">`

Esses são apenas alguns dos tipos de entrada disponíveis em HTML. Cada tipo serve a um propósito específico e oferece funcionalidades diferentes para a coleta de dados em formulários.