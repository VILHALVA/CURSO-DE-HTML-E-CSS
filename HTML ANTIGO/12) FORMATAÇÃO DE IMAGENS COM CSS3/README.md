# FORMATAÇÃO DE IMAGENS COM CSS3
A formatação de imagens com CSS3 permite ajustar o layout, tamanho, sombras, bordas e outros estilos visuais. Aqui está um exemplo básico:

## HTML5:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formatação de Imagem com CSS3</title>
    <link rel="stylesheet" href="estilos.css">
</head>
<body>

    <h1>Imagem Formatada</h1>

    <!-- Tag <img> para incorporar uma imagem -->
    <img src="caminho/para/sua/imagem.jpg" alt="Descrição da imagem" class="imagem-formatada">

</body>
</html>
```

## CSS3 (estilos.css):
```css
/* Estilos para a formatação de imagem */

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
}

h1 {
    text-align: center;
}

/* Estilos para a imagem */
.imagem-formatada {
    display: block; /* Faz a imagem se comportar como um bloco, permitindo ajustes de margem e alinhamento */
    margin: 0 auto; /* Centraliza a imagem horizontalmente */
    max-width: 100%; /* Garante que a imagem não ultrapasse a largura do contêiner pai */
    height: auto; /* Mantém a proporção da imagem ao redimensionar */
    border: 2px solid #333; /* Adiciona uma borda de 2 pixels sólidos em cor cinza (#333) */
    box-shadow: 3px 3px 5px #888; /* Adiciona uma sombra à imagem */
    border-radius: 10px; /* Adiciona uma borda arredondada à imagem */
}
```

## Explicações:
1. **HTML5:**
   - Incluímos uma imagem usando a tag `<img>` e atribuímos a classe `imagem-formatada` para aplicar estilos específicos a essa imagem.

2. **CSS3 (estilos.css):**
   - `display: block;`: Faz a imagem se comportar como um bloco, permitindo ajustes de margem e alinhamento.
   - `margin: 0 auto;`: Centraliza a imagem horizontalmente.
   - `max-width: 100%;`: Garante que a imagem não ultrapasse a largura do contêiner pai.
   - `height: auto;`: Mantém a proporção da imagem ao redimensionar.
   - `border: 2px solid #333;`: Adiciona uma borda de 2 pixels sólidos em cor cinza.
   - `box-shadow: 3px 3px 5px #888;`: Adiciona uma sombra à imagem.
   - `border-radius: 10px;`: Adiciona uma borda arredondada à imagem.

Estes são apenas alguns exemplos de estilos que você pode aplicar a uma imagem usando CSS3. Dependendo das necessidades do seu projeto, você pode explorar ainda mais propriedades para personalizar a apresentação da imagem.