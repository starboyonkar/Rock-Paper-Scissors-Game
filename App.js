const userChoiceDisplay = document.getElementById("user-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const resultDisplay = document.getElementById("result");
const userScoreDisplay = document.getElementById("user-score");
const computerScoreDisplay = document.getElementById("computer-score");
const buttons = document.querySelectorAll(".choice-btn");
const resetBtn = document.getElementById("reset-btn");

let userScore = 0;
let computerScore = 0;

const emojiMap = {
    rock: "✊🏻",
    paper: "✋🏻",
    scissors: "✌🏻"
};

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const userChoice = button.dataset.choice;
        playGame(userChoice);
    });
});

function playGame(userChoice) {
    const computerChoice = getComputerChoice();

    resultDisplay.textContent = "Playing...";

    userChoiceDisplay.textContent = "🤛🏻";
    computerChoiceDisplay.textContent = "🤜🏻";

    userChoiceDisplay.classList.remove("animate");
    computerChoiceDisplay.classList.remove("animate");

    void userChoiceDisplay.offsetWidth;   
    void computerChoiceDisplay.offsetWidth;

    userChoiceDisplay.classList.add("animate");
    computerChoiceDisplay.classList.add("animate");

    setTimeout(() => {
        userChoiceDisplay.textContent = emojiMap[userChoice];
        computerChoiceDisplay.textContent = emojiMap[computerChoice];

        const result = getResult(userChoice, computerChoice);

        resultDisplay.innerHTML = `
            You chose ${emojiMap[userChoice]} <br>
            Computer chose ${emojiMap[computerChoice]} <br><br>
            ${result}
        `;

        updateScore(result);
    }, 1800);
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function getResult(user, computer) {
    if (user === computer) {
        return "It's a Draw!";
    }

    if (
        (user === "rock" && computer === "scissors") ||
        (user === "paper" && computer === "rock") ||
        (user === "scissors" && computer === "paper")
    ) {
        return "You Win!";
    } else {
        return "Computer Wins!";
    }
}

function updateScore(result) {
    if (result === "You Win!") {
        userScore++;
    } else if (result === "Computer Wins!") {
        computerScore++;
    }

    userScoreDisplay.textContent = userScore;
    computerScoreDisplay.textContent = computerScore;
}

resetBtn.addEventListener("click", () => {
    userScore = 0;
    computerScore = 0;
    userScoreDisplay.textContent = 0;
    computerScoreDisplay.textContent = 0;
    userChoiceDisplay.textContent = "🤛🏻";
    computerChoiceDisplay.textContent = "🤜🏻";
    resultDisplay.textContent = "Make your move!";
});
