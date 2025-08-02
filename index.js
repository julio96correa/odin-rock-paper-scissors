const choices = ["rock", "paper", "scissors"];

const getComputerChoice = () => {
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
};

const getHumanChoice = () => {
  let choice = "";
  while (true) {
    choice = prompt("Type Rock, Paper or Scissors\nCase insensitive:").toLowerCase();
    if (choices.includes(choice)) break;
    alert("Type a valid option!");
  }
  return choice;
};

const playARound = () => {
    const humanChoice = getHumanChoice()
    const computerChoice = getComputerChoice()
    console.log(`You chose ${humanChoice}, AI chose ${computerChoice}`)

   if (humanChoice === computerChoice) return 0;

   if (
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "rock" && computerChoice === "scissors")
   ){
    return 1;
   }
   return -1;
}

const play = () => {
    let humanPoints = 0
    let computerPoints = 0
    const rounds = 5
    for (let i = 0; i < rounds; i++) {
        const result = playARound()

        if (result === -1){
            console.log("AI wins")
            computerPoints++;
        } else if (result === 1){
            console.log("Player wins")
            humanPoints++;
        } else {
            console.log("It's a tie")
        }
        console.log("Player: " + humanPoints)
        console.log("AI: " + computerPoints)
        console.log("   --------")
    }

    if (humanPoints > computerPoints) {
        console.log("You win the game!");
    } else if (computerPoints > humanPoints) {
        console.log("AI wins the game!");
    } else {
        console.log("The game is a tie!");
    }
}
    
play()