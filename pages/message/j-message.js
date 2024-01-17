// this is atrocious, the worst bodge in history
// note to self: don't ever try to pull shit like this again without learning it first

const letterIcon = document.querySelector("#letter-icon");
const letter2Icon = document.querySelector("#letter2-icon");
const letter1 = document.querySelector("#letter1");
const buttonOpen = document.querySelector("#open");
const buttonClose = document.querySelector("#close");
const buttonProceed = document.querySelector("#proceed");
const treeline = document.querySelector("#treeline");

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

const paper = new Audio("../shared/sounds/paper.wav")
const paper2 = new Audio("../shared/sounds/paper2.mp3")
const blownAway = new Audio("../shared/sounds/blownAway.wav")
let soundToggle = false;

letterIcon.classList.add("slide-in");
letterIcon.addEventListener("transitionstart", () => {paper.play()});
letterIcon.addEventListener("transitionend", e => {
    buttonOpen.classList.remove("no-display");
    buttonOpen.classList.remove("hidden");
    letter1.classList.add("display");
    buttonOpen.addEventListener("click", e => {
        paper2.play();
        letter1.classList.add("visible");
        buttonClose.addEventListener("click", e => {
            letter1.classList.remove("visible");
            letterIcon.classList.add("no-display");
            buttonOpen.classList.add("no-display");
            letter1.addEventListener("transitionend", e => {
                letter1.classList.remove("display");
                letter2Icon.classList.add("slide-in");
                letter2Icon.addEventListener("transitionstart", e => {
                    if (!soundToggle) {
                        paper.play();
                        soundToggle = true;
                    } else {
                        blownAway.play();
                    }
                    letter2Icon.addEventListener("transitionend", e => {
                        letter2Icon.classList.add("fly-off");
                        letter2Icon.addEventListener("transitionend", e => {
                            treeline.classList.add("camera");
                            buttonProceed.classList.remove("no-display");
                            treeline.addEventListener("transitionend", e => {
                                buttonProceed.classList.remove("hidden");
                                buttonProceed.addEventListener("click", e => {
                                    window.location.replace("../forest/h-forest.html")
                                });
                            })
                        })
                    })
                })
            });
        });
    });
});
