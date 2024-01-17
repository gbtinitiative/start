const clock = document.querySelector("#clock");
const clockContainer = document.querySelector("#clock-container");
const disclaimer = document.querySelector("#disclaimer");
const gbt = document.querySelector("#gbt");
let liftoff = 1705525200000;

let counter = 0;
let exitCode;

const hooray = new Audio("../shared/sounds/hooray.wav");
const twinkle = new Audio("../shared/sounds/twinkle.mp3");
const colorList = ["red", "blue", "violet", "lightblue", "white", "pink", "lightgreen"];
let lastColor = "white";

function flash() {
    let randomColor = colorList[Math.floor(Math.random()*colorList.length)];
    while (randomColor == lastColor) {
        randomColor = colorList[Math.floor(Math.random()*colorList.length)];
    }
    gbt.style.color = randomColor;
    counter += 1;
    if (counter >= 60) {
        clearInterval(exitCode);
        window.location.replace("../message/h-message.html");
    }
}

function congrats() {
    clockContainer.classList.add("inactive");
    disclaimer.classList.add("inactive");
    gbt.classList.add("active");

    hooray.play();
    twinkle.play();

    exitCode = setInterval(flash, 200);
}

function getDate() {
    return new Date().getTime();
}

function count() {
    let currentDate = new Date();
    let epoch = currentDate.getTime();
    let countdown = Math.floor((liftoff - epoch) / 1000);
    countdown = countdown < 0 ? 0 : countdown;

    let days = (countdown / 86400).toFixed().padStart(2, 0);
    let hours = ((countdown % 86400) / 3600).toFixed().padStart(2, 0);
    let minutes = (((countdown % 86400) % 3600) / 60).toFixed().padStart(2, 0);
    let seconds = (((countdown % 86400) % 3600) % 60).toFixed().padStart(2, 0);

    let format = `${days}:${hours}:${minutes}:${seconds}`;

    clock.textContent = format;

    if (countdown <= 0) {
        clearInterval(loop);
        playSound();
        setTimeout(congrats, 2000);
    } else {
        playSound();
    }
}

function playSound() {
    let tick = new Audio("../shared/sounds/tock.wav");
    tick.play();
}

count();
let loop = setInterval(count, 1000);
