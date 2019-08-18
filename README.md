<h1>BarberShop</h1>
<h3>Sua barbearia virtual</h3>

<p>
Para a melhor visualização do projeto, instale via yarn os seguintes códigos:
"yarn init -y" - pra poder criar o package.json que é onde você irá adicionar as dependências abaixo.<br>
"yarn add express" - para poder adicionar o servidor express.<br>
"yarn add nodemon -D" - para poder fazer as alterações e salvar as mesmas sem ter que parar o servidor.<br>
Após configurar o nodemon, entre no package.json e abaixo de "license", você irá digitar:<br>
<pre>
"scripts": {
        "start": "nodemon src/server.js"
    },
</pre>
"yarn add nunjucks" - é para poder trabalhar com templates engines no JS, manipulando com mais facilidade.<br>
"yarn add sequelize" - ele é um mapeador de dados relacionais(tabelas, colunas e linhas) para objetos Javascript.<br>
"yarn add pg" - para trabalhar utilizando o POSTGRESQL.<br>
Para rodar o banco de dados corretamente, instalar o Docker e utilizar o comando "docker pull kartoza/postgis". Depois baixar o DBeaver e configurar.<br>
<strong>Seguintes comandos do docker e sequelize no cmd</strong><br>
docker login - logar no Docker<br>
docker run -p 5432:5432 -d -t kartoza/postgis - para fazer rodar a imagem/container<br>
docker ps - para visualizar a imagem que está utilizando agora, incluindo a porta que está utilizando.<br>
npx sequelize db:migrate - migrar as configurações feitas no database.js para o banco de dados.<br>
yarn add bcryptjs - para poder criptografar as senhas<br>
yarn add multer - para poder gerenciar o upload dos arquivos
</p>
<em>O ESlint é mais para deixar bem arrumado o código, não precisa instalar se não quiser.</em>
