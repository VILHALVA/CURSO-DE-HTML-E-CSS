# TIPOGRAFIA E FONTES
A tipografia desempenha um papel fundamental no design de páginas da web, afetando a legibilidade, a estética e a experiência do usuário. É importante escolher fontes adequadas e usá-las de forma consistente em seu projeto. Além disso, vou explicar como usar o Google Fonts para incorporar fontes personalizadas em seu site.

**1. Tipografia em CSS:**

Em CSS, você pode controlar a tipografia de texto usando várias propriedades, incluindo:

- `font-family`: Define a família de fontes a ser usada, como "Arial", "Helvetica", "Georgia", etc.
- `font-size`: Define o tamanho da fonte, por exemplo, "16px" ou "1.2em".
- `font-weight`: Controla a espessura da fonte, como "normal", "bold" (negrito) ou números de 100 a 900.
- `font-style`: Define o estilo da fonte, como "normal", "italic" (itálico) ou "oblique" (obliqua).
- `text-align`: Alinha o texto à esquerda, à direita, ao centro ou justificado.

Aqui está um exemplo de como você pode usar essas propriedades para definir a tipografia de um parágrafo:

```css
p {
    font-family: Arial, sans-serif;
    font-size: 16px;
    font-weight: bold;
    font-style: italic;
    text-align: center;
}
```

**2. Google Fonts:**

O Google Fonts é um serviço gratuito que oferece uma ampla variedade de fontes personalizadas que você pode incorporar em seu site. Para usar o Google Fonts, siga estas etapas:

- Visite o site do [Google Fonts](https://fonts.google.com/).

- Pesquise ou navegue pelas fontes disponíveis e clique na fonte que deseja usar.

- Na parte superior da página da fonte, você verá uma opção para "Selecionar este estilo". Clique nela para adicionar o estilo da fonte à sua seleção.

- Quando terminar de selecionar todas as fontes que deseja usar, vá até a parte inferior da página e você verá uma janela flutuante com as fontes selecionadas. Clique no botão "Incorporar" para obter o código de incorporação.

- Copie e cole o código fornecido no cabeçalho do seu documento HTML, entre as tags `<head>`. Isso importará as fontes personalizadas para seu site.

- Agora você pode usar as fontes personalizadas em seu CSS, definindo `font-family` com o nome da fonte importada. Por exemplo:

```css
h1 {
    font-family: 'Nome-da-Fonte', sans-serif;
}
```

Lembre-se de que, ao usar fontes personalizadas, você deve fornecer fontes de fallback em caso de falha no carregamento da fonte personalizada. O valor `sans-serif` é um exemplo de uma fonte genérica que funciona como um fallback.

Usar fontes personalizadas pode dar um toque exclusivo ao seu site e melhorar sua aparência. Certifique-se de escolher fontes que se alinhem com a identidade e o objetivo do seu site.