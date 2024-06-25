# LINKS EM HTML5
Em HTML5, você pode criar links usando a tag `<a>`. Aqui está um exemplo básico de como usar a tag `<a>` para criar links:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Links em HTML5</title>
</head>
<body>

    <h1>Exemplo de Links</h1>

    <!-- Link para uma página externa -->
    <a href="https://www.example.com" target="_blank">Visite o Exemplo.com</a>

    <!-- Link para uma página interna no mesmo diretório -->
    <a href="pagina_interna.html">Página Interna</a>

</body>
</html>
```

Explicações:

- `<a>`: Define um link. O atributo `href` especifica o destino do link.
- `href="https://www.example.com"`: Um exemplo de link para uma página externa (website).
- `target="_blank"`: O atributo `target="_blank"` faz com que o link seja aberto em uma nova aba/janela do navegador.
- `href="pagina_interna.html"`: Um exemplo de link para uma página interna no mesmo diretório.

Além disso, você pode criar links para seções específicas de uma página usando âncoras (`#`). Por exemplo:

```html
<a href="#secao1">Ir para Seção 1</a>

<!-- ... -->

<section id="secao1">
    <h2>Seção 1</h2>
    <p>Conteúdo da Seção 1.</p>
</section>
```

Este é um exemplo básico, e há muitas outras opções e atributos que você pode explorar para personalizar seus links. Lembre-se sempre de criar links acessíveis e significativos para melhorar a experiência do usuário.