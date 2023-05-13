# Projeto pessoal Clima Tempo

# Descrição:

Este projeto é uma aplicação web que permite ao usuário digitar o nome de uma cidade e obter informações sobre o clima naquela cidade. A página web é construída utilizando as tecnologias HTML, CSS e JavaScript.

A API fetch é utilizada para fazer a chamada a uma API externa, que retorna informações sobre o clima na cidade inserida pelo usuário. A resposta da API é retornada em formato JSON, que é interpretado no JavaScript.

A função consultarCidade() é acionada quando o usuário clica no botão "Consultar". Ela obtém o valor digitado pelo usuário, constrói a URL da API com base nessa informação e faz a chamada utilizando o método fetch(). Se a chamada for bem sucedida, a resposta é convertida para JSON e as informações relevantes são exibidas na página.

Em seguida, o JavaScript processa a resposta da API, extraindo os dados referentes ao clima da cidade consultada. Com esses dados, o JavaScript atualiza a página HTML com as informações recebidas da API, tais como temperatura, tempo e horário da consulta. Além disso, uma imagem de acordo com o horário atual é exibida na página.

Caso o usuário não preencha o campo de cidade, uma mensagem de erro é exibida na tela.

Além disso, a página também exibe uma imagem que muda de acordo com o horário do dia. A imagem é selecionada com base na hora atual obtida utilizando o objeto Date() do JavaScript.

Em resumo, o projeto utiliza tecnologias como HTML, CSS e JavaScript para criar uma aplicação web que faz uso da API fetch para obter informações sobre o clima de uma cidade e exibir essas informações na página.

# Ferramentas utilizadas: 

HTML

CSS

JavaScript

API Fetch

# Como utilizar:

Para utilizar o projeto, basta baixar os arquivos e abri-los em um navegador web. Em seguida, digite o nome da cidade desejada no campo de busca e clique no botão "Consultar". As informações sobre o clima da cidade consultada serão exibidas na página.
![Screenshot_3](https://github.com/TiagoMuller/Code_Front-End-ClimaTempo/assets/39675368/8c612f2e-03cf-4288-920d-4265b5fed4b0)
![Screenshot_4](https://github.com/TiagoMuller/Code_Front-End-ClimaTempo/assets/39675368/90d1fe36-1ef5-45e9-9ea3-6971a8a4b501)
![Screenshot_16](https://github.com/TiagoMuller/Code_Front-End-ClimaTempo/assets/39675368/edf38ab1-8091-423a-82ef-ff85638d7247)
