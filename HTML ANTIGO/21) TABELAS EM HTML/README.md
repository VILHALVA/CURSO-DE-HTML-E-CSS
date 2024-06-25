# TABELAS EM HTML
## Exemplo 1: Tabela Básica em HTML
**Código:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tabela Básica</title>
    <style>
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
    </style>
</head>
<body>

    <!-- Tabela -->
    <table>
        <!-- Cabeçalho da Tabela -->
        <thead>
            <tr>
                <th>Nome</th>
                <th>Idade</th>
                <th>País</th>
            </tr>
        </thead>
        <!-- Linhas da Tabela -->
        <tbody>
            <tr>
                <td>João</td>
                <td>25</td>
                <td>Brasil</td>
            </tr>
            <tr>
                <td>Maria</td>
                <td>30</td>
                <td>Portugal</td>
            </tr>
            <tr>
                <td>Carlos</td>
                <td>22</td>
                <td>Espanha</td>
            </tr>
        </tbody>
    </table>

</body>
</html>
```

**Explicação:**
- `<table>`: Define a tabela.
- `border-collapse: collapse;`: Mescla as bordas das células.
- `<thead>`: Define a seção de cabeçalho da tabela.
- `<tr>`: Define uma linha.
- `<th>`: Define uma célula de cabeçalho.
- `<tbody>`: Define a seção do corpo da tabela.
- `<td>`: Define uma célula de dados.
- Estilos CSS são utilizados para adicionar bordas, espaçamento e cor de fundo ao cabeçalho.

Este exemplo cria uma tabela simples com três colunas: Nome, Idade e País.

## Exemplo 2: Tabela com Colunas Adicionais
**Código:**
```html
<table>
    <thead>
        <tr>
            <th>Produto</th>
            <th>Preço</th>
            <th>Quantidade</th>
            <th>Total</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Item 1</td>
            <td>$10.00</td>
            <td>2</td>
            <td>$20.00</td>
        </tr>
        <tr>
            <td>Item 2</td>
            <td>$15.00</td>
            <td>3</td>
            <td>$45.00</td>
        </tr>
    </tbody>
</table>
```

**Explicação:**
- Uma tabela com informações de produtos.
- Adicionadas as colunas "Quantidade" e "Total".
- Cada linha representa um item, e as células contêm informações relevantes.

Adapte esses exemplos conforme necessário para suas necessidades específicas. As tabelas em HTML são flexíveis e podem ser expandidas conforme a complexidade dos dados que você está representando.