# PetShop

Projeto de uma aplicação web SPA usando Next.js, Typescript e Supabase (Baas - Back-End as a Service).

## 08_filtro-de-categorias

## Resumo do ciclo de comunicação da prop que passa uma função do pai (ListaPosts) para o filho (FiltroCategorias)

- Usuário clica em um botão do FiltroCategorias
- Esse clique (`onClick`) ele "chama" a prop `aoSelecionar`, passando pra ela a categoria escolhida (por exemplo, 'bem-estar')
- O `aoSelecionar` na verdade é um apontamento para o `setCategoriaAtiva` definida no pai (ListaPosts)
- O React/Next atualiza o estado (o state `categoriaAtiva`) do pai
- O pai (ListaPosts) reexecuta com o novo estado, exibindo os posts conforme a categoria ativa
- O `postsFiltrados` é atualizado e os posts filtrados aparecem.

em resumo, o filtro **não muda o estado sozinho**. Ele só **avisa** o pai.

Quem tem o estado, tem o controle.
quem tem o `state tem o controle - Pai`

---

## 07_componentes-SemPosts-e-notFound-da-rota-de-posts

- Criação do components `SemPosts` e aplicação de renderização condicional na page `Home`
- Criação da page `not-found.tsx` e aplicação ma rota dinâmica de posts usando verificação de erro status 404 e chamada da função `notFound()`.

## 06_fake-api-usando-json-server-e-aplicando-rota-dinamica

- Instalação e configuração do `json-server` como dependência de desenvolver: Para instalar `npm install json-server --save-dev`
- No arquivo pack.json - no script coloca o "api": "json-server --watch db.json --port 2112 --host 0.0.0.
- Exclusão do array de posts
- Utilização do `fetch` com `async/await` na página Home para consumir os posts da fake-api
- Substituição do array fixo de posts por dados da fake-api
- Configuração de rota dinâmica com carregamento de dados a partir de parâmetros da rota
- Uso de `Promise` como tipo para a prop `params`
- Geração de metadados dinâmicos usando a função `generateMetadata`
- Refatoração da programação de busca de dados na fake-api usando uma função dedicada (`buscarPostPorId`)

## 05_home-com-lista-de-posts-a-partir-de-um-array

- Configuração de um novo type `Post.ts`
- Adição de um array de dados: `array-posts.ts`
- Componente `ListasPosts.tsx` com prop `posts`
- Utilização do `map` para renderizar os <article> com os conteúdo dinâmico de cada post

---

## 04_melhorias-nas-paginas-e-componente-container

- Adição de conteúdo às pages (Sobre, Produtos, Contato)
- Utilização de imagem SVG na page Not found
- Criação e aplicação do componente Container usando children
- Desativação do compilador Turbopack para evitar bugs de cache (em especial quando a alguns módulos CSS)

---

## 03_componentes-cabecalho-menu-e-modulos-de-estilo

- Criação de componentes `Cabecalho` e `Menu`
- Denifição de link ativo no menu utilizando o hook `usePathname`
- Ativação a renderização de componente em modo cliente com `use client`(usado no componente Menu)
- Importação e aplicação de módulos CSS

---

## 02_paginas-basicas-links-ajustes-de-layout-metadados

- Criação das páginas/rotas (usando pastas e arquivo page)
- Definição de metadados específicos para cada página
- Adição do componente `<Link>` para navegação entre as rotas (neste caso usa o Link do next.js e não usa o to como no react, mantém o href)
- Ajustes diversos de estrutura HTML

---

## 01_css-global-fonts-favicon-metadados

- Adição de estilos globais
- Importação, configuração e aplicação de fonts da web usando `next/fonts`
- Adicção de mais metadados - nome do autor e keywords
- Aplicação automática de favicon adicionando arquivo `icon.png` direto na pasta `app`

---

## 00_projeto-zerado

Ajustes e exclusões de elementos da instalação padrão do Next.js

---

### Revisando tópicos importantes

- src/app/page.tsx: página principal (index, Home). Obs.: o nome do arquivo **precisa ser** `page.tsx`, mas o nome interno (na função) pode ser qualquer um.

- `src/app/layout.tsx`: componente/arquivo especial que define a estrutura padrão (layout) para todas a páginas.
