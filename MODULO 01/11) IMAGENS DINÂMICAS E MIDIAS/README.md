# IMAGENS DINÂMICAS E MIDIAS
Para incluir imagens dinâmicas e mídia (como áudio e vídeo) em uma página HTML, você pode usar várias tags HTML e incorporar elementos. Vou explicar como fazer isso com exemplos:

**Incluir Imagens Dinâmicas (`<img>`):**

A tag `<img>` é usada para incorporar imagens estáticas em uma página HTML. Para imagens dinâmicas (que podem mudar com base em eventos ou interações), você pode usar JavaScript. Aqui está um exemplo simples de como carregar uma imagem dinamicamente com JavaScript:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Imagem Dinâmica</title>
</head>
<body>
    <img id="imagem-dinamica" src="" alt="Imagem Dinâmica">
    
    <script>
        // JavaScript para carregar uma imagem dinâmica
        const imagem = document.getElementById("imagem-dinamica");
        imagem.src = "caminho-da-imagem-dinamica.jpg";
    </script>
</body>
</html>
```

Neste exemplo, uma imagem dinâmica é carregada usando JavaScript. O elemento `<img>` é selecionado pelo seu ID e seu atributo `src` é definido para o caminho da imagem dinâmica.

**Incluir Áudio (`<audio>`):**

A tag `<audio>` é usada para incorporar elementos de áudio em uma página HTML. Você pode definir uma fonte de áudio para reprodução usando o atributo `src`. Aqui está um exemplo:

```html
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    Seu navegador não suporta o elemento de áudio.
</audio>
```

Neste exemplo, um elemento de áudio é criado com controles de reprodução. O atributo `src` define a fonte do áudio (um arquivo MP3 neste caso).

**Incluir Vídeo (`<video>`):**

A tag `<video>` é usada para incorporar elementos de vídeo em uma página HTML. Você pode definir uma fonte de vídeo para reprodução usando o atributo `src`. Aqui está um exemplo:

```html
<video controls width="320" height="240">
    <source src="video.mp4" type="video/mp4">
    Seu navegador não suporta o elemento de vídeo.
</video>
```

Neste exemplo, um elemento de vídeo é criado com controles de reprodução, largura e altura especificadas. O atributo `src` define a fonte do vídeo (um arquivo MP4 neste caso).

Lembre-se de que para criar conteúdo de mídia verdadeiramente dinâmico e interativo, você provavelmente precisará usar JavaScript para controlar o comportamento desses elementos em resposta a eventos do usuário. Além disso, certifique-se de fornecer formatos de mídia alternativos para suportar uma variedade de navegadores e dispositivos.