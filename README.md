# RaffSimpleTools

Página Web contendo algumas aplicações básicas como conversor, gerador de números randômicos e um timer pomodoro. 
Projeto feito para a conclusão da atividade da disciplina de Desenvolvimento Web no curso Desenvolvimento de Software Multiplataforma (Fatec Franca).

## 🚀 Começando

Clone este repositório.

Consulte **[Implantação](#-implanta%C3%A7%C3%A3o)** para saber como implantar o projeto.

### 📋 Pré-requisitos

Um editor de código qualquer. (Vscode, Sublime Text, Brackets, etc...)

### 🔧 Instalação

Não é necessário instalação! Apenas um browser para executar o arquivo html.
O que eu recomendaria seria usar a extensão **Go Live** do VsCode (caso esteja usando o vscode) para rodar o projeto e ter feedback em tempo real das alterações.


### 🧱 Estrutura

## Html

 * HTML: ``` Tag utilizada para declarar um documento html. ```
 * HEAD: ``` Tag utilizada para declarar informações sobre o html que não serão visualizadas na página. ```
 * LINK: ``` Tag utilizada para declarar acesso do arquivo html a outros recursos. ```
 * META: ``` Tag utilizada para declarar meta informações do documento html. ```
 * BODY: ``` Tag utilizada para declarar o contéudo da página.```
 * HEADER: ``` Tag utilizada para declarar a parte inicial de um documento html. Geralmente é onde estão a logo e o menu de um site. ```
 * DIV: ``` Tag utilizada para criar uma caixa ou container onde conteúdos serão agrupados```
 * INPUT: ``` Tag utilizada para criar uma forma de inserir dados: texto, numero e etc... ```
 * LABEL: ``` Tag utilizada para criar um etiqueta de identificação para o input.```
 * BUTTON: ``` Tag utilizada para criar um botão para disparar algum evento. ```
 * A: ``` Tag utilizada para criar um link para outra página ou URL.```
 * SCRIPT: ``` Tag utilizada para declarar acesso do documento html a um script Javascript externo.```

## Css

### Home:
* **body**: ```Seletor da tag Body, onde configuro propriedades do corpo da página como cor de background, alinhamento dos elementos, fonte e etc...```
* **header**: ```Seletor da tag Header, onde configuro barra superior, declarando a cor de background, espaçamento interno, tamanho e alinhamento do texto.```
* **h1**: ```Seletor da tag H1, onde configuro o tamanho do texto de cabeçalho e sua cor.```
* **h2**: ```Seletor da tag H2, onde configuro tamanho do texto de cabeçalho.```
* **.container**: ```Classe criada para configurar a forma de apresentação dos elementos da tela, alinhamento e posição.```
* **.grid**: ```Classe criada para aplicar o Grid-Layout do Css. Nessa classe, crio um Grid 2x2 (2 colunas e 2 linhas), além de configurar tamanho máximo dos elementos, espaçamento interno e etc.```
* **.card**: ```Classe criada para criar um card onde será apresentado as opções de ferramentas. Nessa classe configuro espaçamento interno, arredondamento de bordas, comportamento do cursos, transição e alinhamento de texto.```
* **.card:hover**: ```Classe criada para adicionar a animações do deslocamento do card para 5 pixels acima quando o cursor do mouse se posicionar em cima do elemento.```
* **.cyan: ```Classe criada para adicionar a cor cyan no backgroud```
* **.green: ```Classe criada para adicionar a cor green no backgroud```
* **.purple: ```Classe criada para adicionar a cor purple no backgroud```
* **.red: ```Classe criada para adicionar a cor red no backgroud```
* **@media: ```Funcionalidade css conhecida como Media Query que tem por função para alterar layout baseado em tamanhos de telas e dispositivos.```

### Calculator:
* **body**: ```Seletor da tag Body, onde configuro propriedades do corpo da página como cor de background, alinhamento dos elementos, fonte e etc...```
* **header**: ```Seletor da tag Header, onde configuro barra superior, declarando a cor de background, espaçamento interno, tamanho e alinhamento do texto.```
* **h1**: ```Seletor da tag H1, onde configuro o tamanho do texto de cabeçalho e sua cor.```
* **button**: ```Seletor da tag Button, onde configuro as propriedadades do botão como tamanho do texto, cor da fonte, cor de background, arredontamento e etc.```
* **button:hover**: ```Seletor da tag Button com comportamento ao cursor se posicionar em cima do elemento, onde altero cor do background e cor da fonte.```
* **.calculator**: ```Classe criada para configurar o layout da calculadora, onde adiciono sombra, arredondamento, tamanho, espaçamento interno e externo.```
* **.display input**: ```Classe criada para configurar a tela onde são mostrada os números e resultado das operações. Essa classe aplica esse estilo ao elemento input que é filho de algum elemento com a classe display.```
* **.display input**: ```Classe criada para estilizar os botões da calculadora, configurando a forma de apresentação com grid.```

### Conversor:
* **body**: ```Seletor da tag Body, onde configuro propriedades do corpo da página como cor de background, alinhamento dos elementos, fonte e etc...```
* **header**: ```Seletor da tag Header, onde configuro barra superior, declarando a cor de background, espaçamento interno, tamanho e alinhamento do texto.```
* **h1**: ```Seletor da tag H1, onde configuro o tamanho do texto de cabeçalho e sua cor.```
* **button**: ```Seletor da tag Button, onde configuro as propriedadades do botão como tamanho do texto, cor da fonte, cor de background, arredontamento e etc.```
* **button:hover**: ```Seletor da tag Button com comportamento ao cursor se posicionar em cima do elemento, onde altero cor do background e cor da fonte.```
* **.content**: ```Classe criada para configurar alinhamento dos elementos.```
* **.converter**: ```Classe criada para configurar a seção de conversão. Aqui configuro cor de background, espaçamento, alinhamento de texto e arredondamento.```
* * **#result**: ```Classe criada e aplicada ao elemento com id result. É estilizado a espaçmento superior, tamnho da fonte e sua cor. Este é o elemento que exibe o resultado da conversão.```
 
## Megasena:
* **body**: ```Seletor da tag Body, onde configuro propriedades do corpo da página como cor de background, alinhamento dos elementos, fonte e etc...```
* **header**: ```Seletor da tag Header, onde configuro barra superior, declarando a cor de background, espaçamento interno, tamanho e alinhamento do texto.```
* **h1**: ```Seletor da tag H1, onde configuro o tamanho do texto de cabeçalho e sua cor.```
* **button**: ```Seletor da tag Button, onde configuro as propriedadades do botão como tamanho do texto, cor da fonte, cor de background, arredontamento e etc.```
* **button:hover**: ```Seletor da tag Button com comportamento ao cursor se posicionar em cima do elemento, onde altero cor do background e cor da fonte.```
* **.content**: ```Classe criada para configurar alinhamento dos elementos.```
* **.megasena**: ```Classe criada para alinhar as bolinhas onde serão apresentado os números.```
* **.ball**: ```Classe criada para criar as bolinhas onde serão apresentado dos números.```

## Pomodoro:
* **body**: ```Seletor da tag Body, onde configuro propriedades do corpo da página como cor de background, alinhamento dos elementos, fonte e etc...```
* **header**: ```Seletor da tag Header, onde configuro barra superior, declarando a cor de background, espaçamento interno, tamanho e alinhamento do texto.```
* **h1**: ```Seletor da tag H1, onde configuro o tamanho do texto de cabeçalho e sua cor.```
* **button**: ```Seletor da tag Button, onde configuro as propriedadades do botão como tamanho do texto, cor da fonte, cor de background, arredontamento e etc.```
* **button:hover**: ```Seletor da tag Button com comportamento ao cursor se posicionar em cima do elemento, onde altero cor do background e cor da fonte.```
* **label**: ```Seletor da tag Label, onde configuro as propriedadades da etiqueta do input, adicionando espacaçemento e cor da fonte.```
* **input**: ```Seletor da tag Input, onde configuro o tamanho do input, arredondamento das bordas, espaçamento externo.```
* **.content**: ```Classe criada para configurar alinhamento dos elementos.```
* **.timer-display**: ```Classe criada para estilizar onde será apresentado o timer.```
* **.controls**: ```Classe criada para estilizar os botões de controle do timer.```
* **.timer-display**: ```Classe criada para estilizar onde será apresentado o tempo.```
* **.pomodoro**: ```Classe criada para estilizar onde é agrupado os elementos do timer. Aqui adiciono, bordas, cor de background, largura, espaçamento e alinhamento do texto```












## 📦 Implantação

Adicione notas adicionais sobre como implantar isso em um sistema ativo

## 🛠️ Construído com

Mencione as ferramentas que você usou para criar seu projeto

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - O framework web usado
* [Maven](https://maven.apache.org/) - Gerente de Dependência
* [ROME](https://rometools.github.io/rome/) - Usada para gerar RSS

## 🖇️ Colaborando

Por favor, leia o [COLABORACAO.md](https://gist.github.com/usuario/linkParaInfoSobreContribuicoes) para obter detalhes sobre o nosso código de conduta e o processo para nos enviar pedidos de solicitação.

## 📌 Versão

Nós usamos [SemVer](http://semver.org/) para controle de versão. Para as versões disponíveis, observe as [tags neste repositório](https://github.com/suas/tags/do/projeto). 

## ✒️ Autores

Mencione todos aqueles que ajudaram a levantar o projeto desde o seu início

* **Um desenvolvedor** - *Trabalho Inicial* - [umdesenvolvedor](https://github.com/linkParaPerfil)
* **Fulano De Tal** - *Documentação* - [fulanodetal](https://github.com/linkParaPerfil)

Você também pode ver a lista de todos os [colaboradores](https://github.com/usuario/projeto/colaboradores) que participaram deste projeto.

## 📄 Licença

Este projeto está sob a licença (sua licença) - veja o arquivo [LICENSE.md](https://github.com/usuario/projeto/licenca) para detalhes.

## 🎁 Expressões de gratidão

* Conte a outras pessoas sobre este projeto 📢;
* Convide alguém da equipe para uma cerveja 🍺;
* Um agradecimento publicamente 🫂;
* etc.


---
⌨️ com ❤️ por [Armstrong Lohãns](https://gist.github.com/lohhans) 😊
