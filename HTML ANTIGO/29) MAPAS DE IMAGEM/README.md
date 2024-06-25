# MAPAS DE IMAGEM
Mapas de imagem em HTML são usados para criar áreas sensíveis em uma imagem, onde diferentes áreas podem ser clicadas, levando o usuário a diferentes destinos. Cada área clicável é definida por um `<area>` dentro de uma tag `<map>`. Aqui está um exemplo básico:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mapa de Imagem em HTML</title>
</head>
<body>

    <h1>Mapa de Imagem</h1>

    <!-- Imagem com mapa -->
    <img src="worldmap.jpg" alt="Mapa do Mundo" usemap="#mapaMundo" width="800" height="400">

    <!-- Mapa com áreas clicáveis -->
    <map name="mapaMundo">
        <!-- Área 1: América do Norte -->
        <area shape="rect" coords="60,70,220,200" alt="América do Norte" href="america_norte.html">

        <!-- Área 2: América do Sul -->
        <area shape="rect" coords="150,250,300,350" alt="América do Sul" href="america_sul.html">

        <!-- Área 3: Europa -->
        <area shape="circle" coords="500,150,80" alt="Europa" href="europa.html">

        <!-- Área 4: Ásia -->
        <area shape="poly" coords="600,250,700,150,700,300" alt="Ásia" href="asia.html">
    </map>

</body>
</html>
```

**Explicações:**
- Uma imagem (`<img>`) é exibida na página, com a propriedade `usemap` apontando para o nome do mapa (no caso, `#mapaMundo`).
- O mapa de imagem é definido por uma tag `<map>` com o atributo `name` igual ao valor utilizado no `usemap`.
- Cada área clicável é definida por uma tag `<area>`. Os atributos `shape` definem a forma da área (`rect` para retângulo, `circle` para círculo, `poly` para polígono), e `coords` especificam as coordenadas da área.
- O atributo `alt` fornece texto alternativo para acessibilidade, e o atributo `href` indica o destino do link quando a área é clicada.

Este é apenas um exemplo básico; você pode ajustar as coordenadas e formas conforme necessário para o seu caso de uso. Certifique-se de fornecer um texto alternativo significativo e acessível para cada área clicável para melhorar a usabilidade para todos os usuários.