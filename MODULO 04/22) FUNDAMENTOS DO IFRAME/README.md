# FUNDAMENTOS SOBRE IFRAME
O elemento `<iframe>` (Inline Frame) é uma parte fundamental do HTML que permite incorporar conteúdo de outras fontes em uma página da web. Ele é usado para exibir uma página web dentro de outra, criando uma espécie de "janela" dentro da página principal. Aqui estão os fundamentos sobre o elemento `<iframe>`:

**Sintaxe Básica:**

A tag `<iframe>` é usada com o atributo `src` para especificar a URL da página que você deseja incorporar. Aqui está um exemplo simples:

```html
<iframe src="https://www.example.com"></iframe>
```

Neste exemplo, a página do site "https://www.example.com" será incorporada na página atual onde o `<iframe>` está localizado.

**Atributos Importantes:**

- `src`: Especifica a URL da página que será incorporada no `<iframe>`.
- `width` e `height`: Define a largura e a altura do `<iframe>`. Você pode usar valores em pixels (`px`) ou porcentagens (`%`).
- `frameborder`: Define se deve haver uma borda ao redor do `<iframe>`. Geralmente, você pode defini-lo como "0" para remover a borda ou "1" para adicioná-la.
- `scrolling`: Controla a exibição da barra de rolagem dentro do `<iframe`. Você pode configurá-lo como "yes", "no" ou "auto".
- `name`: Define um nome para o `<iframe`, que pode ser usado como destino para links e formulários em outras partes da página.

```html
<iframe src="https://www.example.com" width="500" height="300" frameborder="0" scrolling="auto" name="meu-iframe"></iframe>
```

**Uso Comum do `<iframe>`:**

O elemento `<iframe>` é frequentemente usado para incorporar conteúdo de outros sites, como vídeos do YouTube, mapas do Google Maps, widgets de redes sociais, entre outros. Por exemplo:

```html
<iframe src="https://www.youtube.com/embed/VIDEO_ID"></iframe>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2dLONGITUDE!3dLATITUDE!4d0"></iframe>
<iframe src="https://www.facebook.com/plugins/page.php?href=URL_DA_PAGINA&tabs=EVENTS&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=APP_ID"></iframe>
```

**Segurança e Limitações:**

É importante notar que o uso de `<iframe>` pode representar riscos de segurança, especialmente ao incorporar conteúdo de fontes não confiáveis. Além disso, alguns sites podem definir políticas de segurança, como "Content Security Policy" (CSP), que podem bloquear a incorporação de seu conteúdo em outros sites.

Portanto, ao usar `<iframe>`, verifique sempre a origem do conteúdo que você está incorporando e esteja ciente das implicações de segurança. Em muitos casos, sites e serviços populares fornecem códigos de incorporação seguros que você pode usar para evitar problemas de segurança.