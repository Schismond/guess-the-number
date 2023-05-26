let choiceElement = document.getElementById("choice");
let checkButton = document.getElementById("check");
let resultElement = document.getElementById("result");

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let pcNumber = getRandomNumber(1, 100);

checkButton.addEventListener("click", handleButtonClick);

function handleButtonClick() {
  let playerNumber = `${choiceElement.value}`;

  if (playerNumber === pcNumber.toString()) {
    let winnerMessage = "🥳 We have a WINNER 🥳";
    displayResult(winnerMessage);
    checkButton.innerText = "Play Again";
    checkButton.addEventListener("click", function () {
      document.location.reload(false);
    });
  } else if (playerNumber > pcNumber) {
    let highMessage = "😢 You are higher 😢";
    if (playerNumber - pcNumber > 10) {
      highMessage = "😭 You are way too high 😭";
    }
    displayResult(highMessage);
  } else {
    let lowMessage = "😢 You are lower 😢";
    if (pcNumber - playerNumber > 10) {
      lowMessage = "😭 You are way too low 😭";
    }
    displayResult(lowMessage);
  }
}

// Function to display the result
function displayResult(message) {
  resultElement.innerText = message;
}