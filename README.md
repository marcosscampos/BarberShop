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
"yarn add sequelize" - ele é um mapeador de dados relacionais(tabelas, colunas e linhas) para objetos Javascript.
"yarn add pg" - para trabalhar utilizando o POSTGRESQL.
</p>
<em>O ESlint é mais para deixar bem arrumado o código, não precisa instalar se não quiser.</em>
