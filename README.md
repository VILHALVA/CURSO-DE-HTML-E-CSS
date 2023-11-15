# CURSO DE HTML E CSS
👨‍⚖️HTML (HYPERTEXT MARKUP LANGUAGE) É A LINGUAGEM DE MARCAÇÃO USADA PARA ESTRUTURAR E ORGANIZAR O CONTEÚDO DE UMA PÁGINA DA WEB. O CSS (CASCADING STYLE SHEETS) É UMA LINGUAGEM DE ESTILO USADA PARA DEFINIR A APARÊNCIA E O LAYOUT DOS ELEMENTOS EM UMA PÁGINA DA WEB.

[![GitHub Repo stars](https://img.shields.io/badge/VILHALVA-GITHUB-03A9F4?logo=github)](https://github.com/VILHALVA) 
[![GitHub Repo stars](https://img.shields.io/badge/VEJA%20OS-VIDEOS-03A9F4?logo=youtube)](https://www.youtube.com/@vilhalva100/search?query=HTMLCSS)<br>

[![GitHub Repo stars](https://img.shields.io/badge/DOCUMENTAÇÃO-HTML-03A9F4?logo=google)](https://developer.mozilla.org/en-US/docs/Web/HTML) 
[![GitHub Repo stars](https://img.shields.io/badge/DOCUMENTAÇÃO-CSS-03A9F4?logo=google)](https://developer.mozilla.org/en-US/docs/Web/CSS) <br>


[![GitHub Repo stars](https://img.shields.io/badge/-MODULO%200-blueviolet)](https://youtube.com/playlist?list=PLHz_AreHm4dlAnJ_jJtV29RFxnPHDuk9o&si=Q0DrguukqqNMxUhj)
[![GitHub Repo stars](https://img.shields.io/badge/-MODULO%201-blueviolet)](https://www.youtube.com/playlist?list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n)
[![GitHub Repo stars](https://img.shields.io/badge/-MODULO%202-blueviolet)](https://www.youtube.com/playlist?list=PLHz_AreHm4dlUpEXkY1AyVLQGcpSgVF8s)
[![GitHub Repo stars](https://img.shields.io/badge/-MODULO%203-blueviolet)](https://www.youtube.com/playlist?list=PLHz_AreHm4dmcAviDwiGgHbeEJToxbOpZ)
[![GitHub Repo stars](https://img.shields.io/badge/-MODULO%204-blueviolet)](https://www.youtube.com/playlist?list=PLHz_AreHm4dkcVCk2Bn_fdVQ81Fkrh6WT) <br>

<img src="https://camo.githubusercontent.com/6ed9c2c50ea2a6dc8fa23f8f41fcb98aebf2b0eb4e816c7c85247280331bd4fa/68747470733a2f2f796f67656e6472612e6d652f323031372f30372f32302f6d6967726174696f6e2d6d616e69612f68746d6c2d6a732d6373732e706e67" align="center" width="300"> <br>

![](https://i.imgur.com/waxVImv.png)

# 🤳SINTAXE DA LINGUAGEM:
## 🔶HTML:
### VISÃO PANORÂMICA:
| PERGUNTA | RESPOSTA |
| :---: | :---: |
| DATA DE CRIAÇÃO | 1990 |
| NOME DO CRIADOR | Equipe de cientistas e engenheiros liderada por Tim Berners-Lee | 
| SIGNIFICADO DO NOME | O nome "HTML" deriva de "HyperText" (hipertexto) e "Markup Language" (linguagem de marcação) |
| EXTENÇÃO DO ARQUIVO | .html |
| É MAIS USADA | Apenas Desenvolvimento Web |

* O HTML (HyperText Markup Language) foi desenvolvido por uma equipe de cientistas e engenheiros liderada por Tim Berners-Lee. O HTML foi criado como parte do projeto World Wide Web (WWW) no CERN (Organização Europeia para a Pesquisa Nuclear) no início dos anos 1990.
* O HTML é uma linguagem de marcação que permite a estruturação e apresentação de conteúdo na web. Ele define a estrutura dos elementos de uma página web usando tags e atributos. Através do HTML, é possível criar links, formatar texto, inserir imagens, criar formulários e muitas outras coisas que são essenciais para a criação de páginas web.
* O nome "HTML" deriva de "HyperText" (hipertexto) e "Markup Language" (linguagem de marcação). O termo "hipertexto" refere-se ao conceito de criar um sistema de documentos interconectados através de links. A "linguagem de marcação" se refere à utilização de tags para marcar diferentes partes do conteúdo e definir sua função e aparência.
* Em essência, o HTML é a base da web moderna. Ele fornece a estrutura fundamental para a criação de páginas web e permite a interconexão de informações através de links. O HTML é interpretado pelos navegadores web, que exibem o conteúdo de acordo com as marcações e estilos definidos no código HTML.
* O HTML evoluiu ao longo dos anos, com novas versões e recursos sendo introduzidos para atender às demandas crescentes da web. Atualmente, a versão mais recente é o HTML5, que trouxe melhorias significativas em termos de recursos multimídia, elementos semânticos, APIs e suporte para dispositivos móveis.
* Em suma, o HTML foi desenvolvido por Tim Berners-Lee e sua equipe no CERN como parte do projeto World Wide Web. Ele permite a estruturação e apresentação de conteúdo na web e é a base para a criação de páginas web interconectadas. O nome "HTML" deriva de "HyperText Markup Language" e reflete a capacidade de marcar e estruturar informações na web.

### CÓDIGO:

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

### PROPRIEDADES:

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

### CARACTERISTICAS:
O HTML (HyperText Markup Language) é uma linguagem de marcação utilizada para estruturar e apresentar conteúdo na web. Aqui estão algumas das características do HTML:
* **1 - Estruturação de conteúdo:** O HTML permite estruturar o conteúdo de uma página web de forma hierárquica, utilizando elementos como \<html>, \<head>, \<body>, \<div>, \<p>, entre outros. Isso facilita a organização e compreensão do conteúdo.
* **2 - Tags e elementos:** O HTML é baseado em tags e elementos, que são utilizados para envolver e definir o conteúdo. Cada tag tem uma função específica, como \<h1> para títulos, \<p> para parágrafos, \<img> para imagens, \<a> para links, entre muitas outras.
* **3 - Atributos:** As tags HTML podem ter atributos, que fornecem informações adicionais sobre o elemento. Por exemplo, o atributo src especifica a origem de uma imagem e o atributo href define o destino de um link.
* **4 - Semântica:** O HTML oferece elementos semânticos que descrevem o significado do conteúdo, tornando-o mais acessível e compreensível para os leitores e também para os mecanismos de busca. Exemplos de elementos semânticos incluem \<header>, \<nav>, \<article>, \<section>, \<footer>, entre outros. 
* **5 - Formulários:** O HTML possui recursos embutidos para criar formulários interativos, permitindo a coleta de dados dos usuários. Elementos como \<input>, \<select>, \<textarea>, entre outros, são usados para criar campos de entrada e seleção.
* **6 - Integração com outras tecnologias:** O HTML é a base para a construção de páginas web e pode ser combinado com outras tecnologias, como CSS para estilização e JavaScript para interatividade e manipulação de dados.
* **7 - Compatibilidade com navegadores:** O HTML é uma linguagem padrão amplamente suportada pelos navegadores web modernos, o que significa que as páginas HTML são exibidas consistentemente em diferentes dispositivos e plataformas.
* **8 - Estruturação de dados:** O HTML também pode ser utilizado para estruturar dados, utilizando elementos como \<table>, \<ul>, \<ol>, \<dl>, entre outros, para criar listas, tabelas e definições.
 
## 🔷CSS:
### VISÃO PANORÂMICA:
| PERGUNTA | RESPOSTA |
| :---: | :---: |
| DATA DE CRIAÇÃO | 1996 |
| NOME DO CRIADOR | Equipe liderada por Håkon Wium Lie e Bert Bos | 
| SIGNIFICADO DO NOME | O nome "CSS" deriva de "Cascading" (cascata) |
| EXTENÇÃO DO ARQUIVO | .css |
| É MAIS USADA | Apenas Desenvolvimento Web |

* O CSS (Cascading Style Sheets) foi desenvolvido por uma equipe liderada por Håkon Wium Lie e Bert Bos. O trabalho inicial em CSS começou no final da década de 1990, e a primeira especificação do CSS, conhecida como CSS1, foi publicada em dezembro de 1996 pelo World Wide Web Consortium (W3C).
* O CSS é uma linguagem de estilo utilizada para definir a apresentação e a formatação de documentos HTML e XML. Com o CSS, é possível controlar o layout, as cores, as fontes, os efeitos visuais e outros aspectos visuais de uma página web. Ele separa o conteúdo da apresentação, permitindo que os desenvolvedores apliquem estilos consistentes em várias páginas e simplifiquem a manutenção e atualização do design de um site.
* O nome "CSS" deriva de "Cascading" (cascata), referindo-se à forma como as regras de estilo são aplicadas em cascata, ou seja, a partir das regras mais específicas para as mais gerais. Isso permite que as propriedades de estilo sejam herdadas e substituídas conforme necessário, oferecendo maior flexibilidade e controle sobre o design de uma página.
* O CSS evoluiu ao longo dos anos com o lançamento de novas versões, como CSS2, CSS3 e CSS4. Cada versão trouxe recursos e funcionalidades adicionais para melhorar a experiência de design e estilização de páginas web.
* Em resumo, o CSS foi criado por Håkon Wium Lie e Bert Bos e é uma linguagem de estilo utilizada para definir a apresentação e a formatação de documentos HTML e XML. Ele separa o conteúdo da apresentação, permitindo o controle e a personalização do design de uma página web. O nome "CSS" deriva de "Cascading Style Sheets" e reflete a forma como as regras de estilo são aplicadas em cascata.

### CÓDIGO:
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
### PROPRIEDADES:

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

### CARACTERISTICAS:
O CSS (Cascading Style Sheets) é uma linguagem de estilo utilizada para definir a aparência e o layout de elementos HTML em uma página web. Aqui estão algumas das principais características do CSS:
* **1 - Seletor e propriedades:** O CSS permite selecionar elementos HTML com base em seu tipo, classe, ID ou outros atributos e aplicar propriedades de estilo a esses elementos. Por exemplo, é possível selecionar todos os parágrafos <p> e definir sua cor de texto como vermelho.
* **2 - Estilização de elementos:** Com o CSS, é possível alterar a aparência de elementos HTML, como texto, cores, fontes, espaçamento, margens, bordas e fundos. Ele oferece uma ampla variedade de propriedades para personalizar a aparência dos elementos.
* **3 - Cascata e herança:** O CSS segue o princípio da cascata, onde várias regras de estilo podem ser aplicadas a um elemento e elas são combinadas e aplicadas em uma ordem específica. Além disso, o CSS também permite a herança de estilos, onde um elemento filho pode herdar as propriedades de estilo de seu elemento pai.
* **4 - Seletores avançados:** O CSS oferece uma variedade de seletores avançados que permitem selecionar elementos de forma mais precisa e específica. Por exemplo, é possível selecionar elementos com base em sua posição na estrutura do documento, em seus atributos, em estados de interação (como :hover e :active), entre outros.
* **5 - Layout responsivo:** O CSS permite criar layouts responsivos, adaptando a aparência e o posicionamento dos elementos de acordo com o tamanho da tela do dispositivo. Isso possibilita a criação de sites que se ajustam automaticamente em diferentes dispositivos, como desktops, tablets e smartphones.
* **6 - Animações e transições:** O CSS permite animar elementos e criar transições suaves entre diferentes estados de estilo. É possível definir animações personalizadas, alterar propriedades gradualmente ao longo do tempo e criar efeitos visuais interessantes.
* **7 - Reutilização de estilos:** Com o CSS, é possível definir estilos em uma única declaração e aplicá-los a vários elementos em uma página ou em várias páginas, facilitando a reutilização e a manutenção dos estilos.
* **8 - Compatibilidade com navegadores:** O CSS é amplamente suportado pelos navegadores modernos, permitindo que as regras de estilo sejam interpretadas e aplicadas corretamente na maioria dos dispositivos e navegadores.

