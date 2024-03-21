# GIT E GITHUB
**Git** e **GitHub** são ferramentas essenciais para o desenvolvimento de software colaborativo, incluindo o versionamento de código e o compartilhamento de projetos. Aqui está uma breve explicação de ambos:

**Git:**
- Git é um sistema de controle de versão distribuído usado para rastrear as mudanças em arquivos de código fonte ao longo do tempo.
- Ele permite que várias pessoas trabalhem em um projeto ao mesmo tempo, mantendo o controle de quem fez quais mudanças e quando.
- Git é usado principalmente em um terminal de linha de comando, embora existam interfaces gráficas disponíveis.
- É uma ferramenta poderosa para o desenvolvimento de software e é amplamente adotada pela comunidade de desenvolvedores.

**GitHub:**
- GitHub é uma plataforma de hospedagem de código fonte baseada na web que utiliza o Git.
- Ele fornece uma interface web amigável para trabalhar com repositórios Git, gerenciar problemas (issues), colaborar com outros desenvolvedores e muito mais.
- É amplamente utilizado para hospedar projetos de código aberto e privados, permitindo que as pessoas colaborem em código de forma remota.
- GitHub é usado por desenvolvedores individuais, equipes de desenvolvimento e empresas em todo o mundo.

**Como Colocar seu Site no GitHub Pages:**

O GitHub Pages é um serviço gratuito do GitHub que permite hospedar sites estáticos diretamente dos repositórios do GitHub. Aqui estão os passos básicos para colocar seu site no GitHub Pages:

**1. Crie um Repositório no GitHub:**
   - Vá para o GitHub (https://github.com) e faça login em sua conta.
   - Clique no botão "Novo" para criar um novo repositório.
   - Dê um nome ao seu repositório (por exemplo, "meu-site").
   - Certifique-se de que o repositório seja público (para que seu site seja acessível) e marque a opção "Incluir um arquivo README".
   - Clique no botão "Criar repositório".

**2. Clone o Repositório para sua Máquina:**
   - Abra um terminal e navegue até o diretório onde você deseja clonar o repositório.
   - Use o comando `git clone` para clonar o repositório em sua máquina.
   
   Exemplo:
   ```bash
   git clone https://github.com/seu-usuario/meu-site.git
   ```

**3. Adicione Seu Site Estático:**
   - Coloque todos os arquivos do seu site estático (HTML, CSS, JavaScript, imagens, etc.) na pasta do repositório clonado.

**4. Faça Commits e Push para o GitHub:**
   - Use os comandos `git add`, `git commit` e `git push` para enviar suas mudanças para o GitHub.
   
   Exemplo:
   ```bash
   git add .
   git commit -m "Adicionar meu site estático"
   git push origin main
   ```

**5. Configure o GitHub Pages:**
   - Vá para as configurações do seu repositório no GitHub.
   - Role para baixo até a seção "GitHub Pages".
   - No menu suspenso "Branch", escolha a branch que contém seu código (por padrão, é a branch `main`).
   - Clique em "Salvar".

**6. Acesse seu Site Publicado:**
   - Após configurar o GitHub Pages, você verá um link para o seu site publicado na mesma seção das configurações.
   - Seu site estará disponível em um URL no formato "https://seu-usuario.github.io/seu-repositorio".

Agora, seu site está publicado no GitHub Pages e acessível publicamente. Você pode atualizar seu site fazendo novos commits em seu repositório. Certifique-se de ler a documentação do GitHub Pages para obter informações adicionais sobre personalização e configuração avançada: https://docs.github.com/pt/pages.

## [SE VOCÊ QUIZER APRENDER MAIS SOBRE GIT E GITHUB, CLIQUE AQUI PARA FAZER O NOSSO CURSO](https://github.com/VILHALVA/CURSO-DE-GIT-E-GITHUB)