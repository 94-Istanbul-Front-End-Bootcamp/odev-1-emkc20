let btn = document.getElementById("btn-name-age");
let nameSurname = document.getElementById("nameSurname");
let age = document.getElementById("age");

let linkedinUrl = document.querySelector("#linkedinUrl");
let githubUrl = document.querySelector("#githubUrl");

btn.addEventListener("click", () => {

    nameSurname.textContent = "Mustafa İlhan Emekci"
    age.textContent = 26;
    btn.style.display = "none"

});


linkedinUrl.setAttribute("href", "https://www.linkedin.com/in/mustafa-ilhan-emekci-1b1031203/");
linkedinUrl.setAttribute("target", "_blank");
let linkedin = document.createElement("i");
linkedin.setAttribute("class", "fab fa-linkedin-in");
linkedinUrl.appendChild(linkedin);

githubUrl.setAttribute("href", "https://github.com/emkc20");
githubUrl.setAttribute("target", "_blank");
let github = document.createElement("i");
github.setAttribute("class", "fab fa-github");
githubUrl.appendChild(github);