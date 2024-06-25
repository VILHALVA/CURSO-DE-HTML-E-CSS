# ESTILOS CSS PARA TABELAS EM HTML5
A estilização de tabelas em HTML5 é realizada principalmente usando estilos CSS. Abaixo estão alguns estilos CSS comuns para tabelas, incluindo formatação de bordas, cores e espaçamento:

## Estilos Básicos para Tabelas:
```css
table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
}

th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

th {
    background-color: #f2f2f2;
}
```

**Explicação:**
- `width: 100%;`: Faz a tabela ocupar 100% da largura do contêiner pai.
- `border-collapse: collapse;`: Mescla as bordas das células, criando uma aparência mais limpa.
- `margin-bottom: 20px;`: Adiciona um espaço na parte inferior da tabela.
- `border: 1px solid #ddd;`: Adiciona uma borda de 1 pixel com uma cor cinza clara a todas as células.
- `padding: 8px;`: Adiciona um preenchimento interno de 8 pixels para as células.
- `text-align: left;`: Alinha o texto à esquerda nas células.
- `background-color: #f2f2f2;`: Adiciona uma cor de fundo cinza claro para as células do cabeçalho.

## Estilos Alternados para Linhas:
```css
tr:nth-child(even) {
    background-color: #f9f9f9;
}
```

**Explicação:**
- `tr:nth-child(even)`: Seleciona todas as linhas pares.
- `background-color: #f9f9f9;`: Adiciona uma cor de fundo ligeiramente diferente para tornar as linhas pares distintas.

## Estilos ao Passar o Mouse:
```css
tr:hover {
    background-color: #e6f7ff;
}
```

**Explicação:**
- `tr:hover`: Aplica estilos quando o mouse está sobre a linha.
- `background-color: #e6f7ff;`: Adiciona uma cor de fundo diferente para destacar a linha quando o mouse passa sobre ela.

Esses estilos podem ser ajustados conforme necessário, dependendo do design específico que você deseja para suas tabelas em HTML5. Lembre-se de adaptar as cores e tamanhos de acordo com a aparência desejada em seu site.