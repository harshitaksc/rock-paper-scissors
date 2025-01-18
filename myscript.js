// console.log ("Hello") ;


var computerChoice = "none";
function getComputerChoice() {

    const Choice = Math.floor(Math.random() * 3);
    // console.log (Choice)

    if (Choice <= 1) {
        return computerChoice = "rock";
    }
    else if (Choice <= 2) {
        return computerChoice = "paper";
    }
    else if (Choice <= 3) {
        return computerChoice = "scissors";
    }


}

console.log(getComputerChoice());

var humanChoice = "none";

function getHumanChoice() {
    humanChoice = prompt("What's your choice?");
    if (humanChoice.toLowerCase() == "rock") {
        return humanChoice = "rock"
    }
    else if (humanChoice.toLowerCase() == "paper") {
        return humanChoice = "paper";
    }
    else if (humanChoice.toLowerCase() == "scissors" || humanChoice.toLowerCase() == "scissor") {
        return humanChoice = "scissors";
    }
}

// console.log(getHumanChoice());


let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lose! Paper beats Rock.");
        computerScore++;
    }
    else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win! Rock beats Scissors.");
        humanScore++;
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! Paper beats Rock.");
        humanScore++;
    }
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You lose! Scissors beat Paper.");
        computerScore++;
    }
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You lose! Rock beats Scissors.");
        computerScore++;
    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! Scissors beat Paper.");
        humanScore++;
    }
    else {
        console.log("It's a Draw!");
    }
}




function playGame() {
    for (let i = 1; i <= 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);

        console.log("Your current score is " + humanScore);
        console.log("Computer's current score is " + computerScore);
    }
    let winner = "No one won";
    if (humanScore > computerScore){
        winner = "You won!"
    }
    else {
        winner = "You lost!"
    }

    console.log(winner);
}

playGame();