function getComputerChoice() {
  const randomNumber = Math.random();

  if (randomNumber < 1 / 3) {
    return "rock";
  } else if (randomNumber < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

const resultsDiv = document.querySelector('#results');
const scoreboardDiv = document.querySelector('#scoreboard');

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    resultsDiv.textContent = "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    resultsDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    resultsDiv.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;

  }

  scoreboardDiv.textContent = (`Score: You ${humanScore} - ${computerScore} Computer`);
  if (humanScore === 5 || computerScore === 5) {
    document.querySelector('#buttons').style.display = 'none';
    resultsDiv.textContent = humanScore > computerScore
      ? "You won the game!"
      : "The computer won the game!";
  }
}

 document.querySelector('#buttons').addEventListener('click', (e) => {
  if (e.target.tagName !== 'BUTTON') return;
  const humanChoice = e.target.dataset.choice;
  const computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
});


