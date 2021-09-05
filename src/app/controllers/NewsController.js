class NewsController {
    index(req, res) {
        res.render('new');
    }
    blog(req, res) {
        res.render('blog');
    }
}

module.exports = new NewsController();
