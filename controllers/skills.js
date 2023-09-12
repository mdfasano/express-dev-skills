const SkillModel = require('../models/skill');

function index(req, res, next) {
    res.render('skills/index', {
        title: 'Skills',
        skillsArray: SkillModel.listSkills() 
    })
}

module.exports={ index }