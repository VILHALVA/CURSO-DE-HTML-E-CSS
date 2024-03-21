# CONSTRUÇÃO DE TABELAS
Construir tabelas em HTML é uma maneira eficaz de exibir dados tabulares e organizá-los em linhas e colunas. Aqui estão os passos básicos para criar tabelas em HTML:

**1. Estrutura da Tabela:**

Para criar uma tabela em HTML, você deve usar as tags `<table>`, `<tr>`, `<th>`, e `<td>`. Aqui está uma estrutura básica de tabela:

```html
<table>
    <tr>
        <th>Cabeçalho da Coluna 1</th>
        <th>Cabeçalho da Coluna 2</th>
    </tr>
    <tr>
        <td>Dado 1</td>
        <td>Dado 2</td>
    </tr>
    <tr>
        <td>Dado 3</td>
        <td>Dado 4</td>
    </tr>
</table>
```

- `<table>`: Define a tabela.
- `<tr>`: Define uma linha na tabela.
- `<th>`: Define um cabeçalho de coluna (opcional, geralmente usado na primeira linha da tabela).
- `<td>`: Define um dado de célula.

**2. Adicionar Cabeçalhos de Coluna (opcional):**

Você pode usar a tag `<th>` para definir cabeçalhos de coluna, o que ajuda a identificar o conteúdo das colunas. Normalmente, os cabeçalhos de coluna são usados na primeira linha da tabela (dentro de uma tag `<tr>`).

```html
<tr>
    <th>Nome</th>
    <th>Email</th>
    <th>Idade</th>
</tr>
```

**3. Preencher a Tabela com Dados:**

Use as tags `<tr>` e `<td>` para preencher a tabela com dados. Cada `<tr>` representa uma nova linha e cada `<td>` representa um dado de célula.

```html
<tr>
    <td>John Doe</td>
    <td>john@example.com</td>
    <td>30</td>
</tr>
<tr>
    <td>Jane Smith</td>
    <td>jane@example.com</td>
    <td>25</td>
</tr>
```

**4. Estilizar a Tabela (opcional):**

Você pode usar CSS para estilizar sua tabela, definindo cores de fundo, bordas, tamanhos de fonte e outros estilos.

```css
table {
    border-collapse: collapse; /* Combina as bordas das células */
    width: 100%;
}

th, td {
    border: 1px solid #ddd; /* Adiciona bordas às células */
    padding: 8px; /* Espaçamento interno */
    text-align: left; /* Alinhamento de texto */
}

th {
    background-color: #f2f2f2; /* Cor de fundo dos cabeçalhos de coluna */
}
```

**5. Resultado:**

Aqui está o resultado da tabela com os dados preenchidos e algum estilo aplicado:

```html
<table>
    <tr>
        <th>Nome</th>
        <th>Email</th>
        <th>Idade</th>
    </tr>
    <tr>
        <td>John Doe</td>
        <td>john@example.com</td>
        <td>30</td>
    </tr>
    <tr>
        <td>Jane Smith</td>
        <td>jane@example.com</td>
        <td>25</td>
    </tr>
</table>
```

Isso é um exemplo simples de como criar uma tabela HTML básica. Você pode expandir essa estrutura para criar tabelas mais complexas e estilizadas, conforme necessário para seu projeto.