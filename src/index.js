import "./styles/index.css";
import background from "./images/main.jpeg"
import angry from "./images/angry.gif";
import happy from "./images/happy.jpeg";

function mainPage() {
    let body = document.querySelector("body");
    body.innerHTML = "";
    const mainPageContainer = document.createElement("div");
    mainPageContainer.classList.add("main-container");

    const valentineText = document.createElement("div"); 
    const valentineTextFirstLine = document.createElement("p");
    valentineTextFirstLine.textContent = "Nikita Love Carter,";
    const valentineTextSecondLine = document.createElement("p");
    valentineTextSecondLine.textContent = "Will you be my valentine?"
    valentineText.appendChild(valentineTextFirstLine);
    valentineText.appendChild(valentineTextSecondLine);
    valentineTextFirstLine.classList.add("text")
    valentineTextSecondLine.classList.add("text")

    const buttonsContainer = document.createElement("div");
    const yesButton = document.createElement("button");
    yesButton.classList.add("yes-button");
    yesButton.textContent = "Yes"
    const noButton = document.createElement("button");
    noButton.textContent = "No";
    noButton.classList.add("no-button");
    buttonsContainer.appendChild(yesButton);
    buttonsContainer.appendChild(noButton);
    buttonsContainer.classList.add("button-container");

    mainPageContainer.appendChild(valentineText);
    mainPageContainer.appendChild(buttonsContainer);
    document.body.appendChild(mainPageContainer);

    body.style.backgroundImage = `url(${background})`;

    yesButton.addEventListener("click", () => {
    yesPage();
    })

    noButton.addEventListener("click", () => {
        noPage();
    })
}

mainPage();


function noPage () {
    const backButton = document.createElement("button");
    backButton.classList.add("no-page-back-button")
    backButton.textContent = "Wtf bitch go back! 😠"
    let body = document.querySelector("body");
    body.innerHTML = "";
    body.style.backgroundImage = `url(${angry})`;
    backButton.addEventListener("click", () => {
        mainPage();
    })
    body.appendChild(backButton);
}


function yesPage () {
    const happyButton = document.createElement("button");
    happyButton.textContent = "YAY, CYA TOMM! 😊"
    let body = document.querySelector("body");
    body.innerHTML = "";
    body.style.backgroundImage = `url(${happy})`;
    happyButton.addEventListener("click", () => {
        mainPage();
    })
    body.appendChild(happyButton);
}
