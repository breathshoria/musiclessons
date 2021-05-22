const express = require('express');
const cors = require('cors');
const expHbs = require('express-handlebars');
const bodyParser = require('body-parser');
const errors = require('./controllers/errors');
const mainRoutes = require('./routes/mainRoutes');

const port = 8000;
const host = '0.0.0.0'
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.engine('hbs', expHbs({
  layoutsDir: 'views/layouts',
  partialsDir: 'views/partials',
  defaultLayout: 'base',
  extname: 'hbs',
}));
app.set('view engine', 'hbs');
app.set('views', 'views');
app.use(express.static('static'));
app.use('/', mainRoutes);
// app.use(errors.get404);
// app.use((error, req, res, next) => {
//   console.log(error);
//   errors.get500(req, res, next);
// });

(async () => {
  try {;
    app.listen(port, host);
    console.log('Connection has been established successfully.');
  } catch (error) {
      console.log(error);
  }
})();
