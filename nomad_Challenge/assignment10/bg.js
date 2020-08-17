const body = document.querySelector("body");
const NUMBERS_OF_IMAGES = 6;

function getRandom() {
    return Math.floor((Math.random()*NUMBERS_OF_IMAGES) + 1);
}

function paintImage(num) {
    const image = new Image();
    image.src = `images/${num}.jpg`;
    image.classList.add("background");
    body.prepend(image);
}
function init() {
    const randomNum = getRandom();
    paintImage(randomNum);
}

init();