const Course = require('../models/Course');
const { mongooseToObject, mutipleMongooseToObject } = require('../../util/mongoose')

class CourseController {
    course(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('course', { 
                    courses: mutipleMongooseToObject(courses)
                })
            })
            .catch(next);
    }
    show(req, res, next){
        Course.findOne({ slug: req.params.slug})
            .then(course => {
                res.render('courseDetail', { course: mongooseToObject(course)})
            })
            .catch(next)
    }
}

module.exports = new CourseController();
