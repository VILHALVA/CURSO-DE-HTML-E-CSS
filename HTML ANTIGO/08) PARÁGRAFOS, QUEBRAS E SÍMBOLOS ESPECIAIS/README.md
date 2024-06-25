# PARÁGRAFOS, QUEBRAS E SÍMBOLOS ESPECIAIS
## 1. **Cabeçalho e Metadados:**
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <!-- Metadados do documento -->
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       
       <!-- Título da página -->
       <title>Exemplo HTML5</title>
   </head>
   ```
   - `<!DOCTYPE html>`: Define a versão do HTML.
   - `<html lang="en">`: Elemento raiz do documento HTML com atributo de idioma.
   - `<head>`: Contém metadados, como codificação de caracteres e título da página.

## 2. **Cabeçalho da Página:**
   ```html
   <body>

       <header>
           <!-- Título principal -->
           <h1>Bem-vindo ao Meu Site</h1>
           <!-- Descrição do site -->
           <p>Um exemplo simples de HTML5.</p>
       </header>
   ```
   - `<body>`: Contém o conteúdo visível da página.
   - `<header>`: Seção de cabeçalho que geralmente inclui títulos e descrições.

## 3. **Navegação:**
   ```html
       <nav>
           <!-- Lista não ordenada de links de navegação -->
           <ul>
               <li><a href="#inicio">Início</a></li>
               <li><a href="#sobre">Sobre</a></li>
               <li><a href="#contato">Contato</a></li>
           </ul>
       </nav>
   ```
   - `<nav>`: Define uma seção de navegação.
   - `<ul>`: Lista não ordenada.
   - `<li>`: Item de lista.
   - `<a>`: Link de navegação.

## 4. **Conteúdo Principal:**
   ```html
       <main>
           <!-- Seção Inicial -->
           <section id="inicio">
               <!-- Título da seção -->
               <h2>Seção Inicial</h2>
               <!-- Parágrafo de texto -->
               <p>Bem-vindo à seção inicial do meu site.</p>
           </section>
   ```
   - `<main>`: Define o conteúdo principal da página.
   - `<section>`: Agrupa conteúdo relacionado.

## 5. **Rodapé da Página:**
   ```html
       <footer>
           <!-- Parágrafo de rodapé -->
           <p>&copy; 2023 Meu Site. Todos os direitos reservados.</p>
       </footer>
   ```
   - `<footer>`: Define um rodapé para a página.

## 6. **Parágrafos, Quebras de Linha e Símbolos Especiais:**
   ```html
       <!-- Parágrafos de texto -->
       <p>Este é um parágrafo de texto simples.</p>
       <p>Outro parágrafo para ilustrar a estrutura.</p>

       <!-- Quebra de Linha -->
       <p>Esta é uma linha.<br>Esta é outra linha após uma quebra de linha.</p>

       <!-- Símbolos Especiais -->
       <!-- Utilização de entidades HTML para símbolos especiais -->
       <p>Alguns símbolos especiais: &copy; &lt; &gt;</p>
   ```
   - `<p>`: Define um parágrafo.
   - `<br>`: Insere uma quebra de linha.
   - Entidades HTML como `&copy;`, `&lt;`, e `&gt;` para símbolos especiais.

