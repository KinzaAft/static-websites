var skillButton = document.getElementById("Skill-btn");
var EduButton = document.getElementById("Education-btn");
var WorkButton = document.getElementById("Work-btn");
var skill = document.getElementById("skill-section");
var education = document.getElementById("education-sec");
var experience = document.getElementById("experience");
// skills function 
skillButton.addEventListener('click', function () {
    if (skill.style.display === "none") {
        skill.style.display = "block";
        education.style.display = "none";
        experience.style.display = "none";
    }
    else {
        skill.style.display = "none";
    }
});
// Education function 
EduButton.addEventListener('click', function () {
    if (education.style.display === "none") {
        education.style.display = "block";
        skill.style.display = "none";
        experience.style.display = "none";
    }
    else {
        education.style.display = "none";
    }
});
WorkButton.addEventListener('click', function () {
    if (experience.style.display === "none") {
        experience.style.display = "block";
        skill.style.display = "none";
        education.style.display = "none";
    }
    else {
        education.style.display = "none";
    }
});
