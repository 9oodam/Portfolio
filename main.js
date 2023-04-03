// Navigation 누르면 이동할 위치 지정
let homeY = document.querySelector(".home").getBoundingClientRect().top + window.pageYOffset;
let aboutY = document.querySelector(".about").getBoundingClientRect().top + window.pageYOffset;
let skillsY = document.querySelector(".skills").getBoundingClientRect().top + window.pageYOffset;
let projectY = document.querySelector(".project").getBoundingClientRect().top + window.pageYOffset;
let contactY = document.querySelector(".contact").getBoundingClientRect().top + window.pageYOffset;

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