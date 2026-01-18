const sorcova =
    document.getElementById("sorcova");
const scoreEl =
    document.getElementById("score");
const storyText =
    document.getElementById("story-text");
const startBtn =
    document.getElementById("startGame");
const gameArea =
    document.getElementById("game-area");
const themeToggle =
    document.getElementById("themeToggle");
const gameSection =
    document.querySelector(".sorcova-game");
const playerNameInput =
    document.getElementById("playerName");
const colindSound =
    document.getElementById("colindSound");

let score = 0;

const fragments = [
    "Lunaris bate ușor la prima poartă.",
    "Fiorina ridică sorcova și rostește urarea.",
    "O lumina caldă apare în pragul unei case.",
    "Zăpada ascultă pașii copiilor.",
    "Satul respiră liniștit începutul de an."
]

function randomPosition() {
    sorcova.style.left =
        Math.random() * (gameArea.clientWidth - 40) + "px";
    sorcova.style.top =
        Math.random() * (gameArea.clientHeight - 60) + "px";
}

sorcova.addEventListener("click", () => {
    score++;
    scoreEl.textContent = score;

    if (score === 1) {
        colindSound.volume = 0.35;
        colindSound.play();
    }

    if (score <= fragments.length) {
        storyText.textContent = fragments[score - 1];
    } else {
        const name = playerNameInput.value || "Hoinarule";
        storyText.textContent = `🌿 ${name}, Sorcova a trecut și pe la tine.
        A lăsat o urare tăcută, ca o Dulce Sărutare.`;
    }

    randomPosition();
});

startBtn.addEventListener("click", () => {
    score = 0;
    scoreEl.textContent = 0;
    storyText.textContent = "Lunaris, Fiorina și Eldrin pornesc din nou prin sat.";
    colindSound.onpause();
    colindSound.currentTime = 0;
    randomPosition();
});

themeToggle.addEventListener("click", () => {
    gameSection.classList.toggle("winter");
    gameSection.classList.toggle("spring");
});