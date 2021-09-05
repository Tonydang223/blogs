const express = require('express');
const app = express();
const path = require('path');
const handlebars = require('express-handlebars');
const port = 3001;
const morgan = require('morgan');
const route = require('./routes');
//logger middleware
app.use(morgan('combined'));
//template engine express
app.engine(
    '.hbs',
    handlebars({
        extname: '.hbs',
    }),
);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));
//middleware
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());
//Route init
route(app);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
