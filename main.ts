const skillButton = document.getElementById("Skill-btn") as HTMLButtonElement;
const EduButton = document.getElementById("Education-btn") as HTMLButtonElement;
const WorkButton = document.getElementById("Work-btn") as HTMLButtonElement;

const skill = document.getElementById("skill-section") as HTMLElement;
const education = document.getElementById("education-sec") as HTMLElement;
const experience = document.getElementById("experience") as HTMLElement


// skills function 
skillButton.addEventListener('click', () => {
    if (skill.style.display === "none") {
        skill.style.display = "block" ;
        education.style.display ="none";
        experience.style.display = "none";
    } else {
        skill.style.display = "none";  
    }
});

// Education function 
EduButton.addEventListener('click',()=>{
    if(education.style.display === "none"){
        education.style.display = "block";
        skill.style.display = "none";
        experience.style.display = "none";
    }
    else{
        education.style.display = "none";
    }
})

WorkButton.addEventListener('click',()=>{
    if(experience.style.display === "none"){
        experience.style.display = "block";
        skill.style.display = "none";
        education.style.display ="none";
    }else{
        education.style.display = "none";
      }
})