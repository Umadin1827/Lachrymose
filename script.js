const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const mainQuestion = document.getElementById("mainQuestion");
const finalScreen = document.getElementById("finalScreen");
const mainContainer = document.getElementById("mainContainer");
const bgMusic = document.getElementById("bgMusic");

let noHoverCount = 0;

const noTexts = [
    "Are you sure? 😢",
    "Think again 🥺",
    "Please? 💔",
    "Don’t do this 😭",
    "You’re breaking my heart 💘",
    "Really? 😶",
    "It's already 8th, leave 9 as a lucky number for me 😳"
];

function moveButton() {
    const container = document.querySelector(".buttons");

    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    const maxX = container.clientWidth - btnWidth;
    const maxY = container.clientHeight - btnHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

// 🔥 Hover logic (movement + text change together)
noBtn.addEventListener("mouseover", () => {

    // First 7 hovers
    if (noHoverCount < 7) {
        noBtn.innerText = noTexts[noHoverCount];
        noHoverCount++;
        moveButton();
    }

    // 8th hover — stop moving
    else if (noHoverCount === 7) {
        mainQuestion.innerText = "If you really want to press it… ok press 😌";
        noBtn.innerText = "Press it then 😏";
        noHoverCount++;
    }
});

// Click only works after dramatic pause
noBtn.addEventListener("click", () => {
    if (noHoverCount === 8) {
        mainQuestion.innerText = "You have only 2 choices: press yes or just leave. I'll give this question again when I deserve you ❤️";
        noBtn.style.display = "none";
    }
});

// YES works anytime
yesBtn.addEventListener("click", () => {

    mainContainer.style.display = "none";
    finalScreen.style.display = "flex";

    bgMusic.volume = 0;
    bgMusic.play().then(() => {

        let fade = setInterval(() => {
            if (bgMusic.volume < 0.7) {
                bgMusic.volume += 0.05;
            } else {
                clearInterval(fade);
            }
        }, 200);

    }).catch(error => {
        console.log("Music failed:", error);
    });
});


