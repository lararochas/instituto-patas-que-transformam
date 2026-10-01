# Instituto Patas que Transformam

## Sobre o projeto

O Instituto Patas que Transformam é um projeto web desenvolvido para representar uma instituição voltada ao resgate, acolhimento e adoção responsável de animais.

A aplicação apresenta informações sobre o instituto, seus projetos e um formulário de cadastro com recursos de interatividade, validação e persistência de dados.

## Tecnologias utilizadas

* HTML5
* CSS3
* JavaScript
* Git
* GitHub
* Vite
* Vercel

## Estrutura do projeto

```text
instituto-patas-que-transformam/
├── css/
│   └── style.css
├── html/
│   ├── cadastro.html
│   ├── index.html
│   └── projetos.html
├── imagens/
│   └── york-resgatado.jpg
├── js/
│   ├── script.js
│   └── modules/
│       ├── mascaras.js
│       ├── navegacao.js
│       └── storage.js
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

## Como executar localmente

1. Baixe ou clone o repositório.
2. Abra a pasta do projeto no Visual Studio Code.
3. Instale as dependências com:

```bash
npm install
```

4. Inicie o servidor de desenvolvimento com:

```bash
npm run dev
```

5. Acesse o endereço exibido pelo Vite no terminal, normalmente:

```text
http://localhost:5173/
```

O projeto utiliza o Vite como ferramenta de desenvolvimento e build.

## Build de produção

Para gerar a versão otimizada para produção, utilize:

```bash
npm run build
```

A build gera a pasta `dist`, contendo os arquivos preparados para publicação.

Para visualizar a versão de produção localmente, utilize:

```bash
npm run preview
```

## Funcionalidades

* Navegação entre páginas.
* Renderização dinâmica com JavaScript.
* Menu hambúrguer responsivo.
* Menu suspenso de projetos.
* Máscaras para CPF, telefone e CEP.
* Validação de formulário.
* Persistência de dados com `localStorage`.
* Navegação por teclado no submenu.
* Interface responsiva.
* Mensagem de confirmação após o cadastro.

## Versionamento

O projeto utiliza Git e GitHub para controle de versões.

O código-fonte está disponível no repositório:

`https://github.com/lararochas/instituto-patas-que-transformam`

A branch principal utilizada para a versão de produção é a `main`.

As alterações do projeto são registradas por meio de commits, permitindo acompanhar a evolução do desenvolvimento.

## Acessibilidade

Foram aplicadas práticas de acessibilidade, incluindo:

* utilização de elementos HTML semânticos;
* textos alternativos para imagens;
* navegação por teclado;
* indicadores visuais de foco;
* uso de `aria-label` no botão do menu hambúrguer;
* estrutura de formulário com `label`, `fieldset` e `legend`;
* layout responsivo para diferentes tamanhos de tela.

## Deploy

A aplicação foi publicada utilizando a Vercel, integrada ao repositório do GitHub.

A plataforma executa a build de produção e disponibiliza a aplicação na internet.

### Aplicação publicada

`https://instituto-patas-que-transformam.vercel.app/`

A integração entre GitHub e Vercel permite que novos commits enviados para a branch `main` possam gerar novos deployments da aplicação.

## Licença

Projeto desenvolvido para fins acadêmicos.
