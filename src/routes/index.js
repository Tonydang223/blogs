const routerNews = require('./news');
const routerSite = require('./site');
function route(app) {
    app.use('/news', routerNews);
    //post
    app.post('/search', (req, res) => {
        console.log(req.body.q);
        res.send('');
    });
    app.use('/', routerSite);
}

module.exports = route;
