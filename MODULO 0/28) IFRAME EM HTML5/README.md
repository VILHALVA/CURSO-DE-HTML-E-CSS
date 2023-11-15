# IFRAME EM HTML5
O elemento `<iframe>` em HTML5 é usado para incorporar outro documento HTML dentro do documento atual. Ele é frequentemente utilizado para incluir conteúdo de outras páginas da web, incorporar vídeos, mapas, ou exibir páginas externas. Abaixo está um exemplo básico de como usar `<iframe>`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplo de IFRAME em HTML5</title>
</head>
<body>

    <h1>Exemplo de IFRAME</h1>

    <!-- IFRAME incorporando uma página web externa -->
    <iframe src="https://www.example.com" width="600" height="400" title="Exemplo"></iframe>

    <!-- IFRAME incorporando um documento HTML interno -->
    <h2>Conteúdo Incorporado</h2>
    <iframe srcdoc="<html><body><p>Conteúdo interno no IFRAME.</p></body></html>" width="300" height="200" title="Conteúdo Interno"></iframe>

</body>
</html>
```

**Explicação:**
- O primeiro `<iframe>` incorpora uma página web externa (substitua "https://www.example.com" pelo URL desejado).
- O segundo `<iframe>` incorpora um documento HTML interno usando o atributo `srcdoc`.

**Atributos Importantes:**
- `src`: Especifica o URL da página a ser incorporada.
- `srcdoc`: Permite que você insira diretamente o código HTML a ser exibido no IFRAME.
- `width` e `height`: Definem a largura e altura do IFRAME em pixels.
- `title`: Fornece um texto de descrição para acessibilidade.

**Observações:**
- O uso de `<iframe>` deve ser feito com cautela, pois carregar conteúdo externo em um IFRAME pode apresentar riscos de segurança.
- Certifique-se de ter permissão para incorporar o conteúdo desejado.
- Sempre considere a acessibilidade e a responsividade ao definir largura e altura do IFRAME.

Utilize `<iframe>` com responsabilidade, levando em consideração os aspectos de segurança e usabilidade ao incorporar conteúdo de terceiros em suas páginas web.