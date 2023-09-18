const person = {
    name: "Matt",
    languages: ["C", "C++", "JavaScript", "Python"],
    hobbies: ["frisbee", "yoga", "climbing", "kettlebells"]
}

const skills = ["C", "C++", "JavaScript", "Python", "Express"];

//simply returns the array of skills
function listSkills () {
    return skills;
}

// returns true if given skill is in the array of skills
function hasSkill (skill) {
    return skills.indexOf(skill);
}

function addSkill (skill) {
    skills.push(skill);
    return skills;
}

module.exports = {
    hasSkill,
    listSkills,
    addSkill
}