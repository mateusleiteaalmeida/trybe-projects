const express = require('express');

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());

const routes = require('./routes');

app.use(routes.UsersRoutes);
app.use(routes.LoginRoutes);
app.use(routes.CategoriesRoutes);
app.use(routes.BlogPostsRoutes);

const port = 3000;
// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.listen(port, () => console.log(`ouvindo porta ${port}!`));
