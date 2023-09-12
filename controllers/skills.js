const skillModel = require('../models/skill');

function index(req, res, next) {
    res.render('skills/index', {
        title: 'Skills',
        skillsArray: skillModel.listSkills() 
    })
}

module.exports={ index }