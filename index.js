// write a function that plays a single round of Rock Paper Scissors.
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        let message = "It's a draw! You both selected " + computerSelection;
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
        }
    }
}
// write a function that randomly returns rock, paper, or scissors
function getComputerChoice() {
    let myArray = ["Rock","Paper","Scissors"];
    let randomNumber = Math.floor(Math.random() * myArray.length);
    return myArray[randomNumber];
}
// player and computer selections
let playerSelection = prompt("What is your selection?", "");
let computerSelection = getComputerChoice();
// this function formats the user's selection so that it has a capitalized first letter only
function formatString(playerSelection) {
    let restOfString = playerSelection.slice(1);
    let firstLetter = playerSelection.charAt(0);
    firstLetter = firstLetter.toUpperCase();
    restOfString = restOfString.toLowerCase();
    return firstLetter + restOfString;
}
// print to console
console.log("You chose " + formatString(playerSelection) + " while computer chose " + computerSelection);
console.log(playRound(formatString(playerSelection), computerSelection));