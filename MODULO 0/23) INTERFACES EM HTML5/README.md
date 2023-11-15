# INTERFACES EM HTML5
Ao criar interfaces em HTML5, você geralmente combina uma variedade de elementos semânticos para estruturar e organizar o conteúdo. Aqui está um exemplo de uma interface básica usando HTML5, incluindo cabeçalho, navegação, conteúdo principal e rodapé:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Metadados do documento -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Minha Interface</title>

    <!-- Estilos CSS para a interface -->
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }

        header {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 1em;
        }

        nav {
            background-color: #444;
            color: white;
            padding: 1em;
        }

        nav ul {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            justify-content: space-around;
        }

        nav a {
            text-decoration: none;
            color: white;
            font-weight: bold;
        }

        main {
            padding: 20px;
        }

        footer {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 1em;
            position: fixed;
            bottom: 0;
            width: 100%;
        }
    </style>
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
        <h2>Bem-vindo à Minha Interface</h2>
        <p>Este é um exemplo de uma interface simples usando HTML5.</p>
    </main>

    <!-- Rodapé da Página -->
    <footer>
        <p>&copy; 2023 Minha Interface. Todos os direitos reservados.</p>
    </footer>

</body>
</html>
```

**Explicação:**
- `header`: Define o cabeçalho da página.
- `nav`: Define a barra de navegação.
- `main`: Contém o conteúdo principal da página.
- `footer`: Define o rodapé da página.

Os estilos CSS estão incluídos para melhorar a aparência da interface, mas você pode personalizar esses estilos conforme necessário. Este é apenas um exemplo básico, e interfaces mais complexas podem envolver a utilização de grids, flexbox, CSS frameworks ou até mesmo JavaScript para interatividade. Adaptar o código acima é um bom ponto de partida para criar interfaces em HTML5.