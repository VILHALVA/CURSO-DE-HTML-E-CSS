# AINDA PODEMOS USAR TABELAS EM HTML?
Sim, é possível e permitido usar tabelas em HTML. Tabelas HTML ainda têm um papel importante quando se trata de apresentar dados tabulares, como planilhas ou informações organizadas em linhas e colunas. No entanto, é importante entender a diferença entre o uso apropriado de tabelas para dados tabulares e o uso indevido de tabelas para layout, que era comum no passado.

**Uso Adequado de Tabelas em HTML:**

Você deve usar tabelas HTML quando estiver representando dados tabulares. Isso inclui informações organizadas em colunas e linhas, como:

- Tabelas de preços.
- Dados estatísticos.
- Tabelas de horários.
- Dados financeiros.
- Dados de estoque.
- Qualquer conjunto de informações que se beneficie de uma organização em grade.

Exemplo de uma tabela HTML simples para exibir preços de produtos:

```html
<table>
    <thead>
        <tr>
            <th>Produto</th>
            <th>Preço</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Produto A</td>
            <td>R$ 19.99</td>
        </tr>
        <tr>
            <td>Produto B</td>
            <td>R$ 29.99</td>
        </tr>
    </tbody>
</table>
```

**Uso Indevido de Tabelas em HTML:**

O uso indevido de tabelas em HTML refere-se a quando as tabelas são usadas exclusivamente para criar layouts de página. No passado, muitos desenvolvedores utilizavam tabelas para posicionar elementos em páginas da web. Isso era conhecido como "layout baseado em tabelas" e era uma prática comum nos primeiros dias da web.

No entanto, isso não é mais considerado uma boa prática. Em vez disso, deve-se utilizar CSS e técnicas de posicionamento, como flexbox e grid, para criar layouts de página. O uso de tabelas para layout pode resultar em código HTML confuso e dificuldades na manutenção do site. Além disso, não é compatível com os princípios modernos de acessibilidade na web.

**Resumo:**

Em resumo, tabelas em HTML ainda têm um lugar legítimo e importante para apresentar dados tabulares. No entanto, é fundamental evitar o uso indevido de tabelas para criar layouts de página. Em vez disso, utilize HTML semântico e CSS para criar layouts flexíveis e acessíveis. Esse é o padrão atual e a prática recomendada para o desenvolvimento de sites modernos.