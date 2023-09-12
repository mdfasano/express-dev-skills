const person = {
    name: "Matt",
    languages: ["C", "C++", "JavaScript", "Python"],
    hobbies: ["frisbee", "yoga", "climbing", "kettlebells"]
}

const skills = ["C", "C++", "JavaScript", "Python", "Express"];

//simply returns the array of skills
function getSkills () {
    return skills;
}

// returns true if given skill is in the array of skills
function hasSkill (skill) {
    return skills.indexOf(skill) ? true : false;
}

module.exports = {
    hasSkill,
    getSkills
}