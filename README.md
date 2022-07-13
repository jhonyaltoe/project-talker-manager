# Projeto Talker Manager

## Sobre
Este projeto foi realizado durante meu estudo na escola [Trybe](https://www.betrybe.com/ "Home page Trybe") e tem como finalidade colocar em prática meus conhecimentos em back-end, especificamente o express e algumas ferramentas. Não existe um banco de dados e os mesmos são simulados com arquivos json.

### Habilidades desenvolvidas

* Criar end-points

* Criar validações para endpoints

* Iniciando estrutura MSC

## Como iniciar a aplicação?

Necessário ter o Node instalado ou Docker Compose para criação do container.

Rode o seguinte comando dentro da pasta raiz para instalar as dependências do projeto:

``` npm install ```

Em seguida rode o seguinte comando para iniciar a aplicação:

``` npm start ```

### Se preferir também é possível usar o Docker como ambiente para abrir a aplicação e o mesmo já vem com o Node ###

Rode um desses comandos para montar o container, vai depender da versão do seu Docker Compose

``` docker-compose up -d ```
``` docker compose up -d ```

Em seguida, acesse o terminal do node dentro do container para iniciar a aplicação usando os passos anteriores.

```docker container exec -it talker_manager bash```
