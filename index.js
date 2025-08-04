const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let aiScore = 0;
const aiChoice = document.getElementById("ia-choice");
const currentResult = document.getElementById("current-result");
const playerScoreEl = document.getElementById("player-score");
const aiScoreEl = document.getElementById("ai-score");
const restartBtn = document.querySelector(".restart-btn");

restartBtn.addEventListener("click", restartScore);
const cards = document.querySelectorAll(".cards__item");
cards.forEach((card) => {
  card.addEventListener("click", play);
});

const getAIChoice = () => {
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
};

const getWinner = (playerChoice, computerChoice) => {
  if (playerChoice === computerChoice) return 0;

  if (
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "rock" && computerChoice === "scissors")
  ) {
    return 1;
  }
  return -1;
};

function play(e) {
  const playerChoice = e.currentTarget.dataset.choice;
  const computerChoice = getAIChoice();
  aiChoice.textContent = `AI choose ${computerChoice}`;
  const winner = getWinner(playerChoice, computerChoice);

  if (winner === -1) {
    currentResult.textContent = "AI wins";
    aiScore++;
  } else if (winner === 1) {
    currentResult.textContent = "You win!";
    playerScore++;
  } else {
    currentResult.textContent = "It's a draw";
  }
    updateScore(playerScore, aiScore);

}

function restartScore() {
    playerScore = 0;
    aiScore = 0;
    updateScore(playerScore, aiScore);
}

function updateScore(playerScore, aiScore){
    playerScoreEl.textContent = playerScore;
    aiScoreEl.textContent = aiScore;
}