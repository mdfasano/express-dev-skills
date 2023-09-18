const SkillModel = require('../models/skill');

function index (req, res) {
    res.render('skills/index', {
        title: 'Skills',
        skillsArray: SkillModel.listSkills() 
    })
}

function newSkill (req, res) {
    res.render('skills/new', {
        title: 'New Skill'
    });
}

function create (req, res) {
    SkillModel.addSkill(req.body.skill);
    res.redirect('/skills');
}

module.exports={ 
    index,
    create,
    newSkill
}