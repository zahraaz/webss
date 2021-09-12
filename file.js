let prev = document.getElementById("prev");
let next = document.getElementById("next");
let thumbnail = document.getElementsByClassName("thumbnail");
let hero = document.getElementById("hero");

var backgroundImg = new Array(
    "bg1.png",
    "bg2.png",
    "bg3.png",
    "bg4.png",
    "bg5.png"
);

let i = 0;
next.onclick = function() {

    if (i < 4) {
        hero.style.backgroundImage = 'url("' + backgroundImg[i + 1] + '")';
        thumbnail[i + 1].classList.add("active");
        thumbnail[i].classList.remove("active");
        i++;
    }
}
prev.onclick = function() {

    if (i > 0) {
        hero.style.backgroundImage = 'url("' + backgroundImg[i - 1] + '")';
        thumbnail[i - 1].classList.add("active");
        thumbnail[i].classList.remove("active");
        i--;
    }
}