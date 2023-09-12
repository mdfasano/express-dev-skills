const SkillModel = require('../models/skill');

function search (req, res) {
console.log('searching')
    res.render('search/search', {
        title: 'search'
    });
}

module.exports = { 
    search
}