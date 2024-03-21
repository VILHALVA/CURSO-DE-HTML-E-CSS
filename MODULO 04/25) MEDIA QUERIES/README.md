# MEDIA QUERIES
Media queries são uma parte fundamental do design responsivo em CSS. Elas permitem que você aplique estilos diferentes a um documento HTML com base nas características do dispositivo, como a largura da tela, a orientação e a resolução. Isso torna possível criar layouts flexíveis que se adaptam automaticamente a diferentes dispositivos e tamanhos de tela. Aqui estão os conceitos básicos das media queries:

**1. Sintaxe Básica:**

Uma media query começa com a palavra-chave `@media` seguida de uma condição que especifica quando as regras CSS dentro dela devem ser aplicadas. A condição é definida entre parênteses e inclui uma ou mais propriedades de mídia (media features) e seus valores.

Aqui está uma media query simples que aplica estilos quando a largura da tela é no máximo 600 pixels:

```css
@media (max-width: 600px) {
    /* Estilos a serem aplicados quando a largura da tela for no máximo 600px */
    body {
        font-size: 16px;
    }
}
```

**2. Media Features Comuns:**

Algumas das media features mais comuns incluem:

- `width`: Largura da tela do dispositivo.
- `height`: Altura da tela do dispositivo.
- `min-width` e `max-width`: Largura mínima e máxima da tela.
- `min-height` e `max-height`: Altura mínima e máxima da tela.
- `orientation`: Orientação do dispositivo (retrato ou paisagem).
- `aspect-ratio`: Relação de aspecto da tela (largura:altura).
- `resolution`: Resolução do dispositivo (dpi ou dppx).

**3. Exemplos de Uso:**

Aqui estão alguns exemplos de como você pode usar media queries para criar designs responsivos:

```css
/* Estilos para telas pequenas (até 600px de largura) */
@media (max-width: 600px) {
    /* Estilos para telas pequenas */
    body {
        font-size: 14px;
    }
}

/* Estilos para telas médias (601px a 1024px de largura) */
@media (min-width: 601px) and (max-width: 1024px) {
    /* Estilos para telas médias */
    body {
        font-size: 16px;
    }
}

/* Estilos para telas grandes (mais de 1024px de largura) */
@media (min-width: 1025px) {
    /* Estilos para telas grandes */
    body {
        font-size: 18px;
    }
}
```

**4. Design Responsivo com Media Queries:**

Ao usar media queries em seu CSS, você pode criar layouts flexíveis que se ajustam automaticamente ao tamanho e à orientação da tela. Isso é especialmente importante para oferecer uma experiência de usuário consistente em dispositivos variados, como smartphones, tablets e desktops.

Ao desenvolver um site responsivo, é comum começar com uma abordagem mobile-first, onde você projeta e estiliza para dispositivos móveis primeiro e, em seguida, adiciona media queries para ajustar o layout e os estilos para telas maiores.

Por exemplo:

```css
/* Estilos base para dispositivos móveis (mobile-first) */
body {
    font-size: 14px;
}

/* Media query para tablets (acima de 600px de largura) */
@media (min-width: 601px) {
    body {
        font-size: 16px;
    }
}

/* Media query para desktops (acima de 1024px de largura) */
@media (min-width: 1025px) {
    body {
        font-size: 18px;
    }
}
```

Essas são as noções básicas das media queries. Combinadas com CSS flexbox e outras técnicas de design responsivo, você pode criar layouts que se adaptam perfeitamente a uma variedade de dispositivos e tamanhos de tela.