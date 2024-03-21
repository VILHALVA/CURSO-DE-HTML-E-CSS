# ESTILOS DO CSS
O CSS (Cascading Style Sheets) é usado para estilizar páginas da web e controlar a aparência dos elementos HTML. Existem três principais métodos para incluir estilos CSS em uma página: CSS inline, CSS interno e CSS externo.

1. **CSS Inline:**

O CSS inline é aplicado diretamente a um elemento HTML usando o atributo `style`. Ele fornece estilos específicos apenas para o elemento em questão. Aqui está um exemplo:

```html
<p style="color: red; font-size: 18px;">Este é um parágrafo com estilo inline.</p>
```

O CSS inline é útil para aplicar estilos a elementos individuais, mas pode ser menos organizado quando você tem muitos elementos com o mesmo estilo.

2. **CSS Interno (Internal ou Embedded CSS):**

O CSS interno é inserido dentro da seção `<style>` no cabeçalho do documento HTML. Os estilos definidos dentro desta seção afetam todo o documento. Aqui está um exemplo:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Página com CSS Interno</title>
    <style>
        p {
            color: blue;
            font-size: 16px;
        }
    </style>
</head>
<body>
    <p>Este é um parágrafo com estilo interno.</p>
</body>
</html>
```

O CSS interno é útil quando você deseja aplicar estilos a várias partes do seu documento HTML, mas não precisa compartilhá-los com outras páginas.

3. **CSS Externo (External CSS):**

O CSS externo é definido em um arquivo CSS separado e, em seguida, vinculado ao seu documento HTML usando a tag `<link>`. Isso permite que você mantenha seu estilo em um único local e o aplique a várias páginas. Aqui está um exemplo:

Suponha que você tenha um arquivo CSS chamado `styles.css` com o seguinte conteúdo:

```css
/* styles.css */
p {
    color: green;
    font-size: 20px;
}
```

Você pode vincular esse arquivo CSS ao seu documento HTML desta forma:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Página com CSS Externo</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <p>Este é um parágrafo com estilo externo.</p>
</body>
</html>
```

O CSS externo é uma prática recomendada quando você deseja manter seus estilos separados do conteúdo e reutilizá-los em várias páginas.

Cada método de inclusão de CSS tem suas vantagens e desvantagens, e a escolha depende das necessidades específicas do seu projeto. Geralmente, o uso de CSS externo é preferível para uma organização e manutenção mais eficientes do código.