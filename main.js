// Navigation 누르면 이동할 위치 지정
let homeY = parseInt(document.querySelector(".home").getBoundingClientRect().top + window.pageYOffset);
let aboutY = parseInt(document.querySelector(".about").getBoundingClientRect().top + window.pageYOffset);
let skillsY = parseInt(document.querySelector(".skills").getBoundingClientRect().top + window.pageYOffset);
let projectY = parseInt(document.querySelector(".project").getBoundingClientRect().top + window.pageYOffset);
let contactY = parseInt(document.querySelector(".contact").getBoundingClientRect().top + window.pageYOffset);

console.log(homeY, aboutY, skillsY, projectY, contactY);

function moveHome() {
    window.location.reload();
    window.scrollTo(0, homeY);
}
function moveAbout() {
    window.scrollTo(0, aboutY);
}
function moveSkills() {
    window.scrollTo(0, skillsY);
}
function moveProjects() {
    window.scrollTo(0, projectY);
}
function moveContact() {
    window.scrollTo(0, contactY);
}


// Contact에서 전화번호, 이메일주소 복사
let contactIconTel = document.getElementsByClassName("icon01");
let telNum = document.getElementById("tel");
let contactIconEmail = document.getElementsByClassName("icon02");
let emailNum = document.getElementById("email");

function copyTel() {
    window.navigator.clipboard.writeText(telNum.textContent);
    console.log(telNum.textContent);
    alert("전화번호가 복사 되었습니다.");
}
function copyEmail() {
    window.navigator.clipboard.writeText(emailNum.textContent);
    console.log(emailNum.textContent);
    alert("이메일 주소가 복사 되었습니다.");
}


// Index 제목 아래 line
let underLine = document.querySelectorAll(".underline");

window.onscroll = function() {
    let scrollY = parseInt(window.scrollY);

    if(scrollY > (aboutY - 100) && scrollY < (skillsY - 150)) {
        underLine[0].classList.add("is-active");
        console.log("about underline 생성");
    }else if(scrollY < 100 || scrollY > skillsY) {
        underLine[0].classList.remove("is-active");
        console.log("about underline 제거");
    }
    if(scrollY > (skillsY - 100) && scrollY < (projectY - 150)) {
        underLine[1].classList.add("is-active");
        console.log("skills underline 생성");
    }else if(scrollY > projectY) {
        underLine[1].classList.remove("is-active");
        console.log("skills underline 제거");
    }
    if(scrollY > (contactY - 100) ) {
        underLine[2].classList.add("is-active");
        console.log("contact underline 생성");
    }else if(scrollY < projectY) {
        underLine[2].classList.remove("is-active");
        console.log("contact underline 제거");
    }
}