# FONTES EM CSS3
## CONCEITO:
Em CSS3, você pode estilizar fontes de várias maneiras, incluindo a escolha da fonte, tamanho, estilo e outros atributos. Aqui está um exemplo básico de como você pode estilizar fontes usando CSS3:

### HTML5:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Metadados do documento -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Estilizando Fontes com CSS3</title>
    <!-- Vinculando o arquivo CSS externo -->
    <link rel="stylesheet" href="estilos.css">
</head>
<body>

    <!-- Conteúdo da Página -->
    <main>
        <section>
            <h1>Estilizando Fontes</h1>
            <p>Este é um exemplo de estilização de fontes com CSS3.</p>
            <p class="fonte-estilizada">Este texto usa uma fonte estilizada.</p>
        </section>
    </main>

</body>
</html>
```

### CSS3 (estilos.css):
```css
/* Estilos para a estilização de fontes */

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    margin: 0;
    padding: 0;
}

main {
    margin: 20px;
    text-align: center;
}

h1 {
    color: #333;
}

.fonte-estilizada {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 18px;
    font-weight: bold;
    font-style: italic;
    color: #0066cc;
}
```

Neste exemplo:

- O `<h1>` usa a fonte padrão do navegador, enquanto a classe `.fonte-estilizada` usa uma fonte específica e estilizações adicionais.
- A propriedade `font-family` define a família de fontes desejada, fornecendo uma lista de opções em caso de indisponibilidade.
- `font-size` define o tamanho da fonte.
- `font-weight` define a espessura da fonte (negrito).
- `font-style` define o estilo da fonte (itálico).
- `color` define a cor do texto.

Sinta-se à vontade para experimentar diferentes valores para personalizar ainda mais as fontes de acordo com suas preferências de design. Lembre-se de fornecer fontes alternativas em caso de a fonte desejada não estar disponível no dispositivo do usuário.

## TIPOS:
### 1. **Tipos de Fontes:**
Existem basicamente dois tipos principais de fontes em CSS3:

- **Fontes Genéricas:** São famílias de fontes mais amplas e genéricas, como `serif`, `sans-serif`, `monospace`, `cursive` e `fantasy`.

- **Fontes Específicas:** São fontes específicas que você pode fornecer, como Arial, Helvetica, Times New Roman, etc.

Exemplo de uso de tipos de fontes em CSS3:

```css
body {
    font-family: Arial, sans-serif; /* Fonte específica (Arial) e genérica (sans-serif) */
}

h1 {
    font-family: 'Times New Roman', serif; /* Fonte específica (Times New Roman) e genérica (serif) */
}
```

### 2. **Fontes Internas:**
Fontes internas referem-se àquelas que são incorporadas diretamente no seu código, geralmente usando a propriedade `@font-face` em CSS. Isso é útil quando você deseja usar uma fonte personalizada em seu site.

Exemplo de uso de fontes internas em CSS3:

```css
@font-face {
    font-family: 'MinhaFonte';
    src: url('minha-fonte.woff2') format('woff2'),
         url('minha-fonte.woff') format('woff');
}

body {
    font-family: 'MinhaFont', sans-serif;
}
```

Neste exemplo, `MinhaFonte` é uma fonte personalizada que está sendo usada no corpo do documento. Os formatos `.woff2` e `.woff` são tipos de arquivos de fonte compatíveis.

### 3. **Fontes Externas:**
Fontes externas são aquelas que são carregadas a partir de um local externo, geralmente na internet. Isso é útil quando você deseja usar fontes específicas disponíveis online.

Exemplo de uso de fontes externas em CSS3:

```css
/* Importando uma fonte do Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

body {
    font-family: 'Roboto', sans-serif;
}
```

Neste exemplo, a fonte Roboto está sendo importada diretamente do Google Fonts e, em seguida, é utilizada no corpo do documento.

Lembre-se de que, ao usar fontes externas, você precisa garantir que possui permissão para usar essas fontes e que o servidor onde as fontes estão hospedadas está acessível.

Esses são apenas exemplos básicos, e há muitas outras nuances e propriedades que você pode explorar ao trabalhar com fontes em CSS3.