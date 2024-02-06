# SINTAXE DA LINGUAGEM:
## CÓDIGO HTML:
 ````html
# HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exemplo de Tags HTML</title>
</head>
<body>
  <h1>Título Principal</h1>
  
  <h2>Subtítulo</h2>
  
  <p>Parágrafo de texto.</p>
  
  <a href="https://www.example.com">Link para o site exemplo</a>
  
  <img src="imagem.jpg" alt="Imagem de exemplo">
  
  <ul>
    <li>Item da lista não ordenada</li>
    <li>Outro item da lista não ordenada</li>
  </ul>
  
  <ol>
    <li>Item da lista ordenada</li>
    <li>Outro item da lista ordenada</li>
  </ol>
  
  <table>
    <tr>
      <th>Nome</th>
      <th>Sobrenome</th>
    </tr>
    <tr>
      <td>João</td>
      <td>Silva</td>
    </tr>
    <tr>
      <td>Maria</td>
      <td>Santos</td>
    </tr>
  </table>
  
  <form action="/processar" method="post">
    <label for="nome">Nome:</label>
    <input type="text" id="nome" name="nome" required>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    
    <button type="submit">Enviar</button>
  </form>
</body>
</html>
````

## PROPRIEDADES DO HTML:
| TAG | USADO PARA |
| :---: | :---: |
| \<html> | Define o elemento raiz do documento HTML. |
| \<head> | Contém metadados e informações sobre o documento. |
| \<title> | Define o título da página que é exibido na barra de título do navegador. |
| \<body> | Contém o conteúdo visível da página. |
| \<h1>, \<h2> | Define títulos e subtítulos. |
| \<p> | Define parágrafos de texto. |
| \<a> | Define links. |
| \<img> | Insere uma imagem. |
| \<ul>, \<ol>, \<li> | Define listas não ordenadas e ordenadas e seus itens.| 
| \<table>, \<tr>, \<th>, \<td> | Define uma tabela e suas linhas e células. |
| \<form>, \<label>, \<input>, \<button> | Cria um formulário com campos de entrada e um botão de envio.| 

## CÓDIGO CSS:
````css
/* Estilos CSS */
body {
  font-family: "Arial", sans-serif;
  background-color: #f2f2f2;
  color: #333;
}

h1 {
  font-size: 24px;
  color: #ff0000;
  text-align: center;
}

p {
  font-size: 16px;
  line-height: 1.5;
}

a {
  text-decoration: none;
  color: #0066cc;
}

.container {
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}

.button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #0066cc;
  color: #fff;
  border-radius: 4px;
  text-decoration: none;
  text-transform: uppercase;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #004488;
}
````
## PROPRIEDADES DO CSS:
| PROPRIEDADE | DEFINIÇÃO |
| :---: | :---: |
| font-family | Define a família de fontes a ser utilizada para o texto. |
| background-color | Define a cor de fundo do elemento. |
| color | Define a cor do texto. |
| font-size | Define o tamanho da fonte. |
| line-height | Define a altura da linha do texto. | 
| text-decoration | Define a decoração do texto (no caso do exemplo, removendo o sublinhado do link). |
| width | Define a largura do elemento. |
| margin | Define as margens ao redor do elemento. |
| padding | Define o espaçamento interno do elemento. | 
| box-shadow | Adiciona uma sombra ao elemento. |
| display | Define o tipo de exibição do elemento.
| border-radius | Define o raio do canto arredondado da borda. |
| text-transform | Transforma o texto em maiúsculas. |
| transition | Define a transição suave de uma propriedade ao longo do tempo. |