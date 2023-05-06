// write a function that plays a single round of Rock Paper Scissors.
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        let message = "It's a draw! You both selected " + computerSelection + ".";
        return message;
    } else {
        if (playerSelection === "Scissors" && computerSelection === "Rock") {
            let message = "You lost! " + computerSelection + " breaks " + playerSelection + "!";
            return message;
        } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
            let message = "You win! " + playerSelection + " breaks " + computerSelection + "!";
            return message;
        } else if (playerSelection === "Rock" && computerSelection === "Paper") {
            let message = "You lose! " + computerSelection + " covers " + playerSelection + "!";
            return message;
        } else if (playerSelection === "Paper" && computerSelection === "Rock") {
            let message = "You win! " + playerSelection + " covers " + computerSelection + "!";
            return message;
        } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
            let message = "You lose! " + computerSelection + " cuts " + playerSelection + "!";
            return message;
        } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
            let message = "You win! " + playerSelection + " cuts " + computerSelection + "!";
            return message;
        } else {
            return "Invalid selection";
        }
    }
}
// write a function that randomly returns rock, paper, or scissors
function getComputerChoice() {
    let myArray = ["Rock","Paper","Scissors"];
    let randomNumber = Math.floor(Math.random() * myArray.length);
    return myArray[randomNumber];
}
// function to get player's choice
function getPlayerChoice() {
    return new Promise((resolve, reject) => {
        const rockButton = document.querySelector('#rock');
        const paperButton = document.querySelector('#paper');
        const scissorsButton = document.querySelector('#scissors');
        
        rockButton.addEventListener('click', () => {
          resolve('Rock');
        });
        
        paperButton.addEventListener('click', () => {
          resolve('Paper');
        });
        
        scissorsButton.addEventListener('click', () => {
          resolve('Scissors');
        });
    });
}
let computerWins = 0;
let playerWins = 0;
let gamesPlayed = 0;
let computerCounter = document.querySelector('#computer-wins');
let playerCounter = document.querySelector('#player-wins');
let message = document.querySelector('#message');
function updateComputerDisplay() {
    computerCounter.innerHTML = "Computer Wins: " + computerWins;
}
function updatePlayerDisplay() {
    playerCounter.innerHTML = "Player Wins: " + playerWins;
}
// reset 
function resetGame() {
    computerWins = 0;
    playerWins = 0;
    gamesPlayed = 0;
    computerCounter.innerHTML = "Computer Wins: " + computerWins;
    playerCounter.innerHTML = "Player Wins: " + playerWins;
    (async function() {
        console.log(await game());
      })();
}
const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', resetGame);
// play 5 games
async function game() {
    let numberOfGames = prompt("How many games would you like to play?")
    const winningNum = Math.floor(numberOfGames / 2) + 1;
    // starting display
    updateComputerDisplay();
    updatePlayerDisplay();
    for (gamesPlayed = 0; 
        gamesPlayed < numberOfGames && 
        playerWins < winningNum && 
        computerWins < winningNum;
        gamesPlayed++) {
        let playerSelection = await getPlayerChoice();
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        if (result.includes("draw")) {
            message.innerHTML = result;
        } else if (result.includes("You win")) {
            playerWins++;
            updatePlayerDisplay();
            message.innerHTML = result;
        } else {
            computerWins++;
            updateComputerDisplay();
            message.innerHTML = result;
        }
    }
    return playerWins > computerWins ? "You won the game." : "You lost the game."
}
(async function() {
    console.log(await game());
  })();