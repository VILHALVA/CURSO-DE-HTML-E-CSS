# FUNÇÕES JAVASCRIPT
As funções são uma parte fundamental do JavaScript, permitindo a criação de blocos de código reutilizáveis. Aqui está um exemplo básico de como trabalhar com funções em JavaScript:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Funções em JavaScript</title>
</head>
<body>

    <h1>Trabalhando com Funções em JavaScript</h1>

    <script>
        // Função simples sem parâmetros
        function saudacao() {
            console.log("Olá, seja bem-vindo!");
        }

        // Chamando a função
        saudacao();

        // Função com parâmetros
        function cumprimentar(nome, idade) {
            console.log("Olá, " + nome + "! Você tem " + idade + " anos.");
        }

        // Chamando a função com argumentos
        cumprimentar("Maria", 28);

        // Função que retorna um valor
        function somar(a, b) {
            return a + b;
        }

        // Chamando a função e exibindo o resultado
        var resultado = somar(5, 3);
        console.log("A soma é:", resultado);

        // Função anônima atribuída a uma variável
        var quadrado = function(x) {
            return x * x;
        };

        // Chamando a função anônima
        console.log("O quadrado de 4 é:", quadrado(4));

        // Função com escopo léxico (closure)
        function contador() {
            var contagem = 0;

            return function() {
                contagem++;
                console.log("Contagem:", contagem);
            };
        }

        // Criando uma instância da função com escopo léxico
        var incrementarContagem = contador();

        // Chamando a função interna
        incrementarContagem();
        incrementarContagem();
    </script>

</body>
</html>
```

**Explicação:**
- A função `saudacao` é declarada sem parâmetros e apenas exibe uma mensagem no console.
- A função `cumprimentar` recebe dois parâmetros (nome e idade) e exibe uma mensagem personalizada.
- A função `somar` recebe dois parâmetros e retorna a soma.
- Uma função anônima é atribuída a uma variável (`quadrado`).
- Uma função com escopo léxico (closure) é declarada, contendo uma variável interna (`contagem`) que é acessada mesmo após o término da execução da função externa.

Esses exemplos ilustram diferentes aspectos das funções em JavaScript, incluindo declaração, chamada, parâmetros, retorno de valores, funções anônimas e closures. À medida que você explora mais a linguagem, encontrará diversos padrões e técnicas associadas às funções em JavaScript.