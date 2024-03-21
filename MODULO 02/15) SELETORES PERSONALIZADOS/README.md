# SELETORES PERSONALIZADOS
Os seletores personalizados, também conhecidos como seletores de classe e seletores de ID, são uma parte importante do CSS, pois permitem que você aplique estilos a elementos específicos em suas páginas da web. Vou explicar como criar e usar seletores personalizados em CSS.

**1. Seletores de Classe:**

Os seletores de classe são usados para aplicar estilos a elementos HTML que compartilham a mesma classe. Para criar um seletor de classe, você prefixa o nome da classe com um ponto (`.`) no CSS e, em seguida, adiciona a mesma classe como um atributo `class` em seus elementos HTML.

Exemplo de CSS:

```css
/* Definindo um seletor de classe chamado 'destaque' */
.destaque {
    color: red;
    font-weight: bold;
}
```

Exemplo de HTML:

```html
<p class="destaque">Este é um texto destacado.</p>
<div class="destaque">Este é outro elemento com destaque.</div>
```

Neste exemplo, ambos os elementos com a classe "destaque" terão o texto em vermelho e em negrito.

**2. Seletores de ID:**

Os seletores de ID são usados para aplicar estilos a um elemento HTML específico que possui um atributo `id` exclusivo. Para criar um seletor de ID, você prefixa o nome do ID com um hash (`#`) no CSS.

Exemplo de CSS:

```css
/* Definindo um seletor de ID chamado 'cabecalho' */
#cabecalho {
    background-color: #333;
    color: white;
}
```

Exemplo de HTML:

```html
<header id="cabecalho">
    <h1>Meu Site</h1>
</header>
```

Neste exemplo, o elemento `<header>` com o ID "cabecalho" terá um fundo cinza escuro e texto branco.

**3. Diferenças entre Classes e IDs:**

- Classes (`.`): Pode ser aplicada a múltiplos elementos. Vários elementos podem compartilhar a mesma classe.
- IDs (`#`): Deve ser único em toda a página. Cada elemento com um ID específico deve ter um ID exclusivo.

Em geral, é mais comum usar classes para estilizar elementos que compartilham estilos semelhantes e IDs para elementos únicos que requerem estilos exclusivos.

**4. Seletor de Atributo:**

Além de classes e IDs, você pode usar seletores de atributos para selecionar elementos com base em seus atributos. Por exemplo, você pode selecionar todos os links com `target="_blank"` usando `[target="_blank"]` como seletor.

```css
/* Seleciona todos os links com target="_blank" */
a[target="_blank"] {
    color: blue;
}
```

Isso aplicará um estilo de cor azul a todos os links que abrem em uma nova janela ou aba.

Os seletores personalizados são poderosos para aplicar estilos específicos a elementos em suas páginas da web e são uma parte essencial do CSS. Eles permitem uma formatação mais precisa e organização do seu código CSS.