# INTRODUÇÃO AO JAVASCRIPT
O JavaScript é uma linguagem de programação de alto nível, orientada a objetos e interpretada. Ela é uma das principais tecnologias para o desenvolvimento web, permitindo a criação de páginas interativas e dinâmicas. Abaixo está uma breve introdução aos conceitos fundamentais do JavaScript:

## **1. Incorporação de JavaScript em HTML:**
Você pode incluir código JavaScript diretamente em seu documento HTML usando a tag `<script>`.

**Exemplo:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Introdução ao JavaScript</title>
</head>
<body>

    <h1>Minha Página Web</h1>

    <script>
        // Seu código JavaScript vai aqui
        console.log("Olá, mundo!");
    </script>

</body>
</html>
```

## **2. Variáveis e Tipos de Dados:**
No JavaScript, você pode usar a palavra-chave `var`, `let`, ou `const` para declarar variáveis.

**Exemplo:**
```javascript
// Declarando variáveis
var nome = "João";
let idade = 25;
const PI = 3.1415;

// Tipos de dados
let booleano = true;
let numero = 42;
let texto = "Isso é uma string";
let array = [1, 2, 3];
let objeto = { chave: "valor" };
```

## **3. Estruturas de Controle:**
O JavaScript suporta estruturas de controle de fluxo, como `if`, `else`, `for`, e `while`.

**Exemplo:**
```javascript
// Estrutura condicional
let hora = 14;

if (hora < 12) {
    console.log("Bom dia!");
} else if (hora < 18) {
    console.log("Boa tarde!");
} else {
    console.log("Boa noite!");
}

// Estrutura de repetição
for (let i = 0; i < 5; i++) {
    console.log("Número: " + i);
}
```

## **4. Funções:**
Você pode definir funções em JavaScript para reutilizar blocos de código.

**Exemplo:**
```javascript
// Definindo uma função
function saudacao(nome) {
    return "Olá, " + nome + "!";
}

// Chamando a função
let mensagem = saudacao("Maria");
console.log(mensagem);
```

## **5. Manipulação do DOM:**
JavaScript é amplamente utilizado para interagir com o DOM (Document Object Model) e modificar elementos na página.

**Exemplo:**
```javascript
// Selecionando um elemento pelo ID
let meuElemento = document.getElementById("meuId");

// Modificando o conteúdo do elemento
meuElemento.innerHTML = "Novo Conteúdo";

// Adicionando uma classe ao elemento
meuElemento.classList.add("destaque");
```

Esta é apenas uma introdução básica ao JavaScript. À medida que você avança, pode explorar tópicos mais avançados, como manipulação de eventos, AJAX para comunicação assíncrona, uso de bibliotecas (por exemplo, jQuery) e frameworks (por exemplo, React, Angular, Vue) para desenvolvimento mais sofisticado de aplicações web.

# SAIBA MAIS:
* [CLIQUE AQUI PARA FAZER O CURSO DE JAVASCRIPT](https://github.com/VILHALVA/CURSO-DE-JAVASCRIPT)