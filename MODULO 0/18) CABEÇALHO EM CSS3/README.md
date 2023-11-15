# CABEÇALHO EM CSS3
Para criar um cabeçalho estilizado com CSS3, você pode aplicar estilos a elementos HTML, como `<header>`, `<h1>`, e outros elementos relevantes. Aqui está um exemplo básico de como você pode criar um cabeçalho simples com HTML5 e estilizá-lo usando CSS3:

## HTML5:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Metadados do documento -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cabeçalho em CSS3</title>
    <!-- Vinculando o arquivo CSS externo -->
    <link rel="stylesheet" href="estilos.css">
</head>
<body>

    <!-- Cabeçalho da Página -->
    <header>
        <h1>Meu Cabeçalho</h1>
        <p>Um exemplo de cabeçalho estilizado com CSS3.</p>
    </header>

    <!-- Conteúdo da Página -->
    <main>
        <section>
            <h2>Bem-vindo ao Meu Site</h2>
            <p>Este é um exemplo simples de cabeçalho estilizado com CSS3.</p>
        </section>
    </main>

    <!-- Rodapé da Página -->
    <footer>
        <p>&copy; 2023 Meu Site. Todos os direitos reservados.</p>
    </footer>

</body>
</html>
```

## CSS3 (estilos.css):
```css
/* Estilos para o cabeçalho */

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    margin: 0;
    padding: 0;
}

header {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 1em;
}

header h1 {
    margin: 0; /* Remova as margens padrão do h1 */
}

header p {
    margin-top: 10px;
    font-style: italic;
}

main {
    margin: 20px;
}

footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 1em;
}
```

Neste exemplo:

- O `<header>` contém um `<h1>` para o título principal e um `<p>` para um subtexto.
- O CSS3 estiliza o cabeçalho, aplicando uma cor de fundo, cor do texto, centralizando o texto e adicionando algum espaço ao redor.
- O texto do `<h1>` não tem margens padrão (removendo o espaço em branco em torno do texto).

Sinta-se à vontade para ajustar as cores, fontes, tamanhos e outros estilos conforme necessário para atender aos requisitos de design do seu cabeçalho.