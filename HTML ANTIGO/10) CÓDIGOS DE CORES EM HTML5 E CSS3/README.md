# CÓDIGOS DE CORES EM HTML5 E CSS3
Vamos explorar códigos de cores em HTML5 e CSS3. Abaixo estão trechos de código com explicações:

## HTML5:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cores em HTML5 e CSS3</title>
    <link rel="stylesheet" href="estilos.css">
</head>
<body>

    <header>
        <h1>Códigos de Cores</h1>
        <p>Exemplo de uso de cores em HTML5 e CSS3.</p>
    </header>

    <section>
        <h2>Texto Colorido</h2>
        <!-- Parágrafos com cores específicas -->
        <p class="cor-azul">Este texto é azul.</p>
        <p class="cor-vermelha">Este texto é vermelho.</p>
        <p class="cor-verde">Este texto é verde.</p>
    </section>

</body>
</html>
```

## CSS3 (estilos.css):
```css
/* Estilos para a formatação de texto */

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
}

header {
    background-color: #f0f0f0;
    padding: 20px;
    text-align: center;
}

h1 {
    color: #333;
}

section {
    margin: 20px;
}

/* Cores de Texto */
.cor-azul {
    color: #0000ff; /* Código hexadecimal para azul */
}

.cor-vermelha {
    color: #ff0000; /* Código hexadecimal para vermelho */
}

.cor-verde {
    color: #008000; /* Código hexadecimal para verde */
}
```

## Explicações:
1. **HTML5:**
   - O documento HTML5 está estruturado com cabeçalho, corpo e seções.
   - É vinculado um arquivo CSS externo chamado `estilos.css`.

2. **CSS3 (estilos.css):**
   - Definimos um estilo global para o corpo do documento, como a fonte e a altura da linha.
   - Estilizamos o cabeçalho da página com um fundo cinza claro e um título principal em preto.
   - Criamos uma seção com parágrafos coloridos.
   - Utilizamos classes CSS para aplicar cores específicas a diferentes elementos HTML.
   - Os códigos de cores são representados em hexadecimal (`#RRGGBB`), onde RR, GG e BB representam os valores de vermelho, verde e azul, respectivamente.

Este exemplo demonstra como usar códigos de cores em HTML5 e CSS3 para aplicar estilos de texto colorido em uma página web.

## TIPOS DE CORES:
Vou explicar sobre os sistemas de representação de cores RGB e hexadecimal, que são amplamente utilizados em desenvolvimento web.

### 1. **RGB (Red, Green, Blue):**
O modelo de cor RGB é baseado na combinação de três cores primárias: vermelho (Red), verde (Green), e azul (Blue). Cada cor é representada por um valor numérico que varia de 0 a 255. A combinação dessas cores em diferentes intensidades cria uma ampla gama de cores.

- **Sintaxe:**
  - `rgb(valorRed, valorGreen, valorBlue)`

- **Exemplo:**
  - `rgb(255, 0, 0)` representa vermelho puro.
  - `rgb(0, 255, 0)` representa verde puro.
  - `rgb(0, 0, 255)` representa azul puro.

### 2. **Hexadecimal:**
O sistema hexadecimal é uma base numérica de 16 dígitos, sendo 0-9 e A-F. Cada cor RGB é representada por um par de dígitos hexadecimais, resultando em uma representação compacta.

- **Sintaxe:**
  - `#RRGGBB`

- **Exemplo:**
  - `#FF0000` representa vermelho puro.
  - `#00FF00` representa verde puro.
  - `#0000FF` representa azul puro.

### 3. **RGBA e Hexadecimal com Alpha:**
Além disso, pode-se adicionar um canal alfa (alpha) para representar a transparência da cor. No sistema RGB, isso é feito com a função `rgba`, e no sistema hexadecimal, adicionamos dois dígitos hexadecimais para o canal alfa.

- **Exemplo de RGBA:**
  - `rgba(255, 0, 0, 0.5)` representa vermelho com 50% de transparência.

- **Exemplo de Hexadecimal com Alpha:**
  - `#FF000080` representa vermelho com 50% de transparência (80 em hexadecimal é aproximadamente 50% em decimal).

Esses sistemas são amplamente utilizados em desenvolvimento web, especialmente ao definir cores em CSS para elementos HTML. A escolha entre RGB e hexadecimal muitas vezes se resume à preferência pessoal e ao contexto de uso. Ambos os sistemas oferecem uma maneira eficaz de representar cores no ambiente digital.