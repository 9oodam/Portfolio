let posY = document.querySelector(".text01 h2").getBoundingClientRect().top + window.pageYOffset;
console.log(posY);


// 스크롤 했을 때 이벤트
window.onscroll = function() {
    console.log("스크롤 됨");
    console.log(window.scrollY);
    if(posY < window.scrollY) {
        document.querySelector(".header ").classList.add("is-active")
    }else {
        document.querySelector(".header").classList.remove("is-active");
    }
}