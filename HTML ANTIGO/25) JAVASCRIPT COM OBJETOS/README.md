# JAVASCRIPT COM OBJETOS
Em JavaScript, os objetos são uma estrutura de dados que permite armazenar e organizar informações de maneira mais complexa. Aqui está um exemplo simples de como trabalhar com objetos em JavaScript:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript com Objetos</title>
</head>
<body>

    <h1>Trabalhando com Objetos em JavaScript</h1>

    <script>
        // Criando um objeto pessoa
        var pessoa = {
            nome: "João",
            idade: 30,
            cidade: "São Paulo",
            saudacao: function() {
                return "Olá, meu nome é " + this.nome + " e eu moro em " + this.cidade + ".";
            }
        };

        // Exibindo propriedades do objeto
        console.log("Nome:", pessoa.nome);
        console.log("Idade:", pessoa.idade);
        console.log("Cidade:", pessoa.cidade);

        // Chamando o método do objeto
        var mensagem = pessoa.saudacao();
        console.log(mensagem);

        // Modificando propriedade do objeto
        pessoa.idade = 31;

        // Adicionando uma nova propriedade
        pessoa.profissao = "Desenvolvedor";

        // Exibindo todas as propriedades após as modificações
        console.log("Nome:", pessoa.nome);
        console.log("Idade:", pessoa.idade);
        console.log("Cidade:", pessoa.cidade);
        console.log("Profissão:", pessoa.profissao);
    </script>

</body>
</html>
```

**Explicação:**
- Um objeto `pessoa` é criado com propriedades como `nome`, `idade`, `cidade` e um método `saudacao`.
- O método `saudacao` usa a palavra-chave `this` para se referir às propriedades do próprio objeto.
- As propriedades do objeto são acessadas e exibidas no console.
- A propriedade `idade` é modificada e uma nova propriedade, `profissao`, é adicionada ao objeto.
- As modificações são exibidas no console.

Este é um exemplo básico para ilustrar a criação, modificação e acesso a propriedades de um objeto em JavaScript. À medida que você avança, pode explorar conceitos mais avançados, como protótipos, classes (introduzidas no ECMAScript 6), e métodos para manipulação de objetos.