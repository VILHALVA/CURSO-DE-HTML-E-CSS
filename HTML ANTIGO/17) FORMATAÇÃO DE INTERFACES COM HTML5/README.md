# FORMATAÇÃO DE INTERFACES COM HTML5
A formatação de interfaces com HTML5 envolve a criação da estrutura básica da página e a utilização de elementos HTML para organizar e apresentar o conteúdo. Além disso, a formatação é aprimorada com o uso de CSS3 para estilizar e dar estilo à interface. Aqui está um exemplo básico de como você pode formatar uma interface simples usando HTML5 e CSS3:

## HTML5:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Metadados do documento -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Minha Interface</title>
    <!-- Vinculando o arquivo CSS externo -->
    <link rel="stylesheet" href="estilos.css">
</head>
<body>

    <!-- Cabeçalho da Página -->
    <header>
        <h1>Minha Interface</h1>
    </header>

    <!-- Barra de Navegação -->
    <nav>
        <ul>
            <li><a href="#">Página Inicial</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Contato</a></li>
        </ul>
    </nav>

    <!-- Conteúdo Principal -->
    <main>
        <section>
            <h2>Bem-vindo à Minha Interface</h2>
            <p>Este é um exemplo de página com HTML5 e CSS3.</p>
        </section>

        <section>
            <h2>Recursos Principais</h2>
            <ul>
                <li>Layout responsivo</li>
                <li>Barra de navegação estilizada</li>
                <li>Seções de conteúdo organizadas</li>
            </ul>
        </section>
    </main>

    <!-- Rodapé da Página -->
    <footer>
        <p>&copy; 2023 Minha Interface. Todos os direitos reservados.</p>
    </footer>

</body>
</html>
```

## CSS3 (estilos.css):
```css
/* Estilos para a formatação da interface */

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    margin: 0;
    padding: 0;
}

header, nav, main, footer {
    margin: 20px;
    padding: 20px;
}

header {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 1em;
}

nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

nav li {
    display: inline;
    margin-right: 20px;
}

nav a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
}

nav a:hover {
    color: #FFD700; /* Cor do texto ao passar o mouse sobre o link */
}

main section {
    margin-bottom: 40px;
}

footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 1em;
}
```

Neste exemplo:

- O HTML5 é usado para criar a estrutura básica da página, com cabeçalho, barra de navegação, conteúdo principal e rodapé.
- O CSS3 é usado para estilizar a página, definindo cores, fontes, espaçamentos e outros estilos.

Este é um exemplo básico, e você pode personalizar ainda mais de acordo com suas preferências de design e requisitos específicos. Experimente modificar os estilos para ver como eles afetam a aparência da interface.