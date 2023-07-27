const buttonsEle = document.querySelectorAll("button");
const resultEle = document.getElementById("result");

const playerScoreEle = document.getElementById("user-score")
const computerScoreEle = document.getElementById("computer-score")


let playerScore = 0;
let computerScore = 0;

buttonsEle.forEach((button) => {
  button.addEventListener("click", () => {
    const result = playRound(button.id, computerPlay());
    resultEle.textContent = result;

    // console.log("Users Choice!", button.id, "Computer Choice!", computerPlay());
    //    console.log(result);
  });
});

function computerPlay() {
  const choicesArray = ["rock", "paper", "scissor"];
  const randomChoice = Math.floor(Math.random() * choicesArray.length);
  return choicesArray[randomChoice];
}

function playRound(palyerSelection, computerSelection) {
  if (palyerSelection === computerSelection) {
    return "It's a tie";
  } else if (
    (palyerSelection === "rock" && computerSelection === "scissor") ||
    (palyerSelection === "paper" && computerSelection === "rock") ||
    (palyerSelection === "scissor" && computerSelection === "paper")
  ) {
    playerScore++;
    playerScoreEle.textContent = playerScore;
    return " You Win 👍 !  "  + palyerSelection + " beats" + computerSelection;
  } else {
    computerScore++;
    computerScoreEle.textContent = computerScore;
    return " You Loose 👎 !  "  +  computerSelection + " beats " + palyerSelection;
  }
}
