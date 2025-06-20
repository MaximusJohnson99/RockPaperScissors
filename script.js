let playerChoiceDisplay = document.getElementById("player-choice");
let computerChoiceDisplay = document.getElementById("computer-choice");
let roundResultDisplay = document.getElementById("result-display");
let score = JSON.parse(localStorage.getItem("Score"));
  if (score === null) {
    score = {
    Wins: 0,
    Ties: 0,
    Losses: 0,
  }
}

updateScore();

function ComputerMove() {
  const choicesConvert = ["rock", "paper", "scissors"];
  let choice = choicesConvert[Math.floor(Math.random() * 3)];
  return choice;
}

function determineResult(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    score.Ties++;
    return "It's a tie!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "rock")
  ) {
    score.Wins++;
    return "You won!";
  } else {
    score.Losses++;
    return "You lost!";
  }
}

function updateScore() {
  let playerScore = document.getElementById("player-score");
  playerScore.innerText = score.Wins;
  let computerScore = document.getElementById("computer-score");
  computerScore.innerText = score.Losses;
  localStorage.setItem("Score", JSON.stringify(score));
  let ties = document.getElementById("ties");
  ties.innerText = score.Ties;
}

function updateDisplay(playerChoice, computerChoice, roundResult) {
  playerChoiceDisplay.innerText = playerChoice;
  computerChoiceDisplay.innerText = computerChoice;
  roundResultDisplay.innerText = roundResult;
}

function playRound(buttonid) {
  let playerChoice = buttonid;
  let computerChoice = ComputerMove();
  let roundResult = determineResult(playerChoice, computerChoice);
  updateScore();
  updateDisplay(playerChoice, computerChoice, roundResult);
}

function resetScore() {
  score.Wins = 0;
  score.Ties = 0;
  score.Losses = 0;
  updateScore();
  playerChoiceDisplay.innerText = "?";
  computerChoiceDisplay.innerText = "?";
  roundResultDisplay.innerText = "Waiting...";
}
