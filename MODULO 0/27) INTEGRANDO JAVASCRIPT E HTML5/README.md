# INTEGRANDO JAVASCRIPT E HTML5
A integração de JavaScript com HTML5 é uma prática comum para tornar as páginas web dinâmicas e interativas. Aqui está um exemplo básico de como você pode integrar JavaScript em um documento HTML5:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Integração de JavaScript e HTML5</title>
    <style>
        /* Estilos CSS para melhorar a apresentação */
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 20px;
        }

        button {
            padding: 10px;
            font-size: 16px;
            margin-top: 10px;
        }
    </style>
</head>
<body>

    <h1>Integração de JavaScript e HTML5</h1>

    <!-- Elemento HTML para exibir uma mensagem -->
    <p id="mensagem">Clique no botão para exibir uma mensagem.</p>

    <!-- Botão que aciona uma função JavaScript -->
    <button onclick="exibirMensagem()">Clique Aqui</button>

    <script>
        // Função JavaScript para ser chamada pelo botão
        function exibirMensagem() {
            // Seleciona o elemento com o id "mensagem"
            var elementoMensagem = document.getElementById("mensagem");

            // Modifica o conteúdo do elemento
            elementoMensagem.innerHTML = "Olá, esta é uma mensagem exibida pelo JavaScript!";
        }
    </script>

</body>
</html>
```

**Explicação:**
- Um botão (`<button>`) é criado no HTML, com um atributo `onclick` que chama a função JavaScript `exibirMensagem()` quando o botão é clicado.
- A função `exibirMensagem()` é definida no script JavaScript incorporado, e ela seleciona um elemento HTML pelo ID (`"mensagem"`) e modifica seu conteúdo usando `innerHTML`.
- Um estilo CSS básico é adicionado para melhorar a apresentação.

Este é um exemplo simples de como integrar JavaScript e HTML5 para interatividade básica em uma página web. À medida que você avança, pode explorar técnicas mais avançadas, como manipulação do DOM, eventos, AJAX para comunicação assíncrona, e integração com bibliotecas e frameworks JavaScript.