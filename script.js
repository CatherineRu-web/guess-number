let randomNumber=Math.floor(Math.random() * 100) +1 
let attemptsLeft = 7;
const guessField = document.getElementById("guessField")
const resultMessage = document.getElementById("resultMessage")
const attemptsRemaining = document.getElementById("attemptsRemaining")
const guessSubmit = document.getElementById("guessSubmit")
const resetContainer = document.getElementById("resetContainer")

function checkGuess() {
    const userGuess = guessField.value;
    const userGuessNumber = Number(userGuess);

    if(userGuess === "") {
        resultMessage.textContent = "Введите число" 
        return;
    }
    if(userGuessNumber < 1 || userGuessNumber > 100) {
        resultMessage.textContent = "Введите число, от 1 до 100"; 
        return;
    }

    for (let i = 0; i < 1; i++) {
        attemptsLeft--;

        if(userGuessNumber === randomNumber) {
            resultMessage.textContent = "Вы выиграли";
            setGameOver();
            break;
        }
        else if(attemptsLeft === 0) {
            resultMessage.textContent = "Вы проиграли";
            setGameOver();
            break;
        }
        else {
            if(userGuessNumber < randomNumber) {
                resultMessage.textContent = "Загаданное число больше";
            }
            else if(userGuessNumber > randomNumber) {
                resultMessage.textContent = "Загаданное число меньше";
            }
            attemptsRemaining.textContent = `Осталось попыток: ${attemptsLeft}`
        }
    }
    guessField.value = "";
    guessField.focus();
}
function setGameOver() {
    attemptsRemaining.textContent = `Осталось попыток: ${attemptsLeft}`
    guessField.disabled = true;
    guessSubmit.disabled = true;

    const resetButton = document.createElement("button");
    resetButton.textContent = "Начать заново";
    resetButton.classList.add("reset-button");
    resetContainer.appendChild(resetButton);
    resetButton.addEventListener("click", resetGame)
}

function resetGame() {
    attemptsLeft = 7;

    guessField.value = "";
    guessField.focus();

    const resetButton = document.querySelector(".reset-button");
    resetContainer.removeChild(resetButton);
    resultMessage.textContent = "";

    attemptsRemaining.textContent = `Осталось попыток: ${attemptsLeft}`

    guessField.disabled = false;
    guessSubmit.disabled = false;

    randomNumber=Math.floor(Math.random() * 100) +1 
}