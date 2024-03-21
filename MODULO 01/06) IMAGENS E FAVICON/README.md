# IMAGENS E FAVICON
Vou explicar como incluir imagens e um favicon (ícone de favoritos) em uma página HTML.

1. **Incluir Imagens (`<img>`):**

   Para incluir imagens em uma página HTML, você usa a tag `<img>`. A tag `<img>` tem um atributo `src` que especifica o caminho da imagem e um atributo `alt` que fornece uma descrição alternativa para acessibilidade. Aqui está um exemplo:

   ```html
   <img src="imagem.jpg" alt="Descrição da Imagem">
   ```

   - `src`: O atributo `src` deve conter o caminho (URL ou caminho local) para a imagem que você deseja incluir.
   - `alt`: O atributo `alt` fornece uma descrição da imagem, que é exibida quando a imagem não pode ser carregada e é usada por leitores de tela para acessibilidade.

2. **Incluir Favicon:**

   Um favicon é um pequeno ícone que é exibido na aba do navegador e ao lado do título da página. Para incluir um favicon em sua página HTML, você precisa adicionar um link para o arquivo do ícone no cabeçalho do documento. Aqui está um exemplo:

   ```html
   <head>
       <link rel="icon" href="favicon.ico" type="image/x-icon">
       <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
       <title>Minha Página com Favicon</title>
   </head>
   ```

   - `<link rel="icon">`: Esta tag define o ícone padrão para a página.
   - `<link rel="shortcut icon">`: Esta tag é usada para compatibilidade com navegadores mais antigos.
   - `href`: O atributo `href` contém o caminho para o arquivo de ícone. Geralmente, é um arquivo `.ico`, mas também pode ser uma imagem em outros formatos compatíveis, como `.png`.

   Certifique-se de colocar o código acima dentro da seção `<head>` do seu documento HTML.

   Lembre-se de substituir `"favicon.ico"` pelo caminho correto para o seu ícone.

Ao seguir essas instruções, você pode incluir imagens e um favicon em sua página HTML para torná-la mais atrativa e identificável. Certifique-se de ter os arquivos de imagem e ícone no local correto em seu projeto e ajuste os caminhos de acordo com a estrutura do seu projeto.