const newsRouter = require('./news');
const courseRouter = require('./course');
const siteRouter = require('./site')

function routes(app) {
    app.use('/news', newsRouter);
    app.use('/course', courseRouter);
    app.use('/', siteRouter)
}

module.exports = routes;
