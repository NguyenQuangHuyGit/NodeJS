const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose')

class SiteController {

    home(req, res) {
        res.render('home');
    }
}

module.exports = new SiteController();
