const SkillModel = require('../models/skill');

function index (req, res) {
    res.render('skills/index', {
        title: 'Skills',
        skillsArray: SkillModel.listSkills() 
    })
}

function show (req, res) {
    let value;
    if (SkillModel.hasSkill(req.params.id) !== -1) value = true;
    else value = false;
    res.render('skills/show', {
        title: `Has skill ${req.params.id}?`,
        val: value
    });
}

module.exports={ 
    index,
    show,
}