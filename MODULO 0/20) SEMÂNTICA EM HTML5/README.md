# SEMÂNTICA EM HTML5
A semântica em HTML5 refere-se à utilização de elementos HTML de maneira significativa e apropriada para a estruturação e descrição do conteúdo de uma página web. O HTML5 introduziu vários elementos semânticos que ajudam a descrever melhor a estrutura e o significado do conteúdo, tornando as páginas mais acessíveis e compreensíveis tanto para os desenvolvedores quanto para os navegadores, mecanismos de busca e outras tecnologias.

Aqui estão alguns dos elementos semânticos mais importantes em HTML5:

## 1. **\<header\>, \<footer\>, \<nav\>, \<main\>, \<article\>, \<section\>:**
Esses elementos são usados para definir partes específicas da página.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplo de Semântica em HTML5</title>
</head>
<body>

    <header>
        <h1>Meu Site</h1>
    </header>

    <nav>
        <ul>
            <li><a href="#">Página Inicial</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Contato</a></li>
        </ul>
    </nav>

    <main>
        <section>
            <h2>Artigo Principal</h2>
            <p>Conteúdo do artigo...</p>
        </section>

        <section>
            <h2>Outro Artigo</h2>
            <p>Conteúdo do outro artigo...</p>
        </section>
    </main>

    <footer>
        <p>&copy; 2023 Meu Site. Todos os direitos reservados.</p>
    </footer>

</body>
</html>
```

## 2. **\<article\>:**
Usado para representar um conteúdo autônomo e independente que pode ser reutilizado, como um post de blog.

```html
<article>
    <h2>Título do Artigo</h2>
    <p>Conteúdo do artigo...</p>
</article>
```

## 3. **\<figure\> e \<figcaption\>:**
Usado para incorporar imagens e outros conteúdos multimídia.

```html
<figure>
    <img src="imagem.jpg" alt="Descrição da Imagem">
    <figcaption>Legenda da Imagem</figcaption>
</figure>
```

## 4. **\<aside\>:**
Usado para conteúdo relacionado ao conteúdo principal, mas que pode ser considerado separado dele.

```html
<aside>
    <h2>Anúncios</h2>
    <p>Conteúdo dos anúncios...</p>
</aside>
```

## 5. **\<details\> e \<summary\>:**
Usado para criar um widget de detalhes/sumário, geralmente utilizado para mostrar ou ocultar informações adicionais.

```html
<details>
    <summary>Detalhes</summary>
    <p>Conteúdo adicional...</p>
</details>
```

Ao utilizar esses elementos semânticos, você torna o código mais claro, acessível e compreensível, além de proporcionar benefícios adicionais para SEO (otimização para mecanismos de busca). Certifique-se de escolher os elementos adequados de acordo com a estrutura e o significado do conteúdo em sua página.