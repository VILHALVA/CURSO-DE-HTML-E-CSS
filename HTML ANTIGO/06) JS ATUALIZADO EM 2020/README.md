# JS ATUALIZADO EM 2020
Lembre-se de que as tecnologias podem evoluir e mudar, então é sempre uma boa ideia verificar as versões mais recentes das especificações e práticas recomendadas. Vamos criar um exemplo simples que exiba uma mensagem em um navegador quando o usuário interage com um botão:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplo JavaScript</title>
</head>
<body>

    <h1>Exemplo JavaScript</h1>

    <p>Clique no botão para exibir uma mensagem:</p>

    <!-- Botão que dispara o script JavaScript -->
    <button onclick="exibirMensagem()">Clique Aqui</button>

    <!-- Script JavaScript -->
    <script>
        // Função para exibir a mensagem
        function exibirMensagem() {
            alert('Olá! Esta é uma mensagem de exemplo.');
        }
    </script>

</body>
</html>
```

Neste exemplo:

- Um botão é criado no corpo do documento.
- O atributo `onclick` é usado para associar a função `exibirMensagem()` ao evento de clique do botão.
- A função `exibirMensagem()` contém um comando `alert`, que exibirá uma caixa de diálogo com a mensagem 'Olá! Esta é uma mensagem de exemplo.' quando o botão for clicado.

Esse é apenas um exemplo muito básico para te introduzir ao JavaScript. Conforme você avança nos estudos, você poderá aprender sobre manipulação do DOM, AJAX para comunicação assíncrona, frameworks como React, Vue ou Angular, entre muitos outros conceitos e práticas avançadas. Certifique-se de ficar atualizado com as melhores práticas e recursos mais recentes da linguagem.