# ÁLBUM DE FOTOS EM HTML5
Para criar um álbum de fotos em HTML5, você pode usar uma combinação de tags HTML e CSS para estruturar e estilizar as imagens. Aqui está um exemplo básico para começar:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Álbum de Fotos</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
        }

        h1 {
            color: #333;
        }

        /* Estilos para a galeria de fotos */
        .gallery {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
        }

        .photo {
            width: 200px;
            height: 200px;
            overflow: hidden;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .photo img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    </style>
</head>
<body>

    <h1>Meu Álbum de Fotos</h1>

    <!-- Galeria de Fotos -->
    <div class="gallery">
        <!-- Foto 1 -->
        <div class="photo">
            <img src="foto1.jpg" alt="Foto 1">
        </div>

        <!-- Foto 2 -->
        <div class="photo">
            <img src="foto2.jpg" alt="Foto 2">
        </div>

        <!-- Adicione mais fotos conforme necessário -->
    </div>

</body>
</html>
```

**Explicações:**
- A estrutura básica contém um título (`<h1>`) e uma `<div>` para a galeria de fotos.
- A classe `.gallery` usa flexbox para criar um layout flexível e responsivo.
- A classe `.photo` define o estilo para cada foto na galeria, incluindo uma borda arredondada e sombra.
- A classe `.photo img` garante que a imagem dentro da div `.photo` se ajuste corretamente ao contêiner.

Substitua "foto1.jpg" e "foto2.jpg" pelos caminhos reais das suas imagens. Adicione mais fotos seguindo o mesmo padrão.

Este é um ponto de partida simples. Dependendo das suas necessidades, você pode adicionar recursos como lightbox para visualização em tela cheia, navegação entre fotos, ou até mesmo incorporar JavaScript para interatividade adicional.