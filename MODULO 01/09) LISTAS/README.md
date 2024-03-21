# LISTAS
Em HTML, você pode criar diferentes tipos de listas, como listas não ordenadas (ul), listas ordenadas (ol) e listas de definição (dl). Aqui estão exemplos de como criar esses tipos de listas:

**Lista Não Ordenada (`<ul>` - Unordered List):**

Uma lista não ordenada é uma lista de itens em que a ordem não importa. Os itens são geralmente marcados com marcadores, como pontos ou círculos.

```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
```

**Lista Ordenada (`<ol>` - Ordered List):**

Uma lista ordenada é uma lista de itens em que a ordem é importante. Os itens são geralmente numerados ou ordenados alfabeticamente.

```html
<ol>
    <li>Primeiro item</li>
    <li>Segundo item</li>
    <li>Terceiro item</li>
</ol>
```

**Lista de Definição (`<dl>` - Definition List):**

Uma lista de definição é usada para associar termos a suas definições. Cada item consiste em um termo (dt - Definition Term) seguido de sua definição (dd - Definition Description).

```html
<dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language</dd>
    <dt>CSS</dt>
    <dd>Cascading Style Sheets</dd>
</dl>
```

Além disso, você pode aninhar listas dentro de outras listas para criar listas aninhadas. Por exemplo, você pode criar uma lista não ordenada de itens com subitens:

```html
<ul>
    <li>Item 1
        <ul>
            <li>Subitem 1</li>
            <li>Subitem 2</li>
        </ul>
    </li>
    <li>Item 2</li>
</ul>
```

Esses são exemplos básicos de como criar listas em HTML. Você pode estilizar essas listas usando CSS para atender às necessidades de design do seu projeto.