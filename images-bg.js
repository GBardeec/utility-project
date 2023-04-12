const body = document.querySelector('body');
const image_number = 4;

function showImages(number) {
    const img = new Image();
    img.src = `img/${number + 1}.jpg`;
    img.classList.add('bgImage');
    body.prepend(img);
}


function getRandom(){
    const number = Math.floor(Math.random() * image_number);
    return number;
}

function init() {
    const randomNumber = getRandom();
    showImages(randomNumber)
}

init()