// main.js

let divs = document.querySelectorAll(".grid-container div");
function randomNumber(min,max) {
    return Math.random() * (max - min) + min;
}

function randomize() {
    console.log(divs.length, "randomize!");
    divs.forEach(function(div){
        let scale = randomNumber(0.2, 1.2);
        let translateX = randomNumber(0, 30);
        let translateY = randomNumber(0, 30);
        let rotate = randomNumber(0, 360);

        if (Math.random() > 0.5) {
            scale = 1;
            translateX = randomNumber (0, 70);
            translateY = randomNumber (0, 70);
        }
        div.style.transform = `scale(${scale}) translate(${translateX}%, ${translateY}%) rotate(${rotate}deg)`;
    });
}

document.addEventListener("click", randomize);