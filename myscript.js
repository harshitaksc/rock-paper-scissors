// console.log ("Hello") ;


let computerChoice = "none";
function getComputerChoice(){
    
    let Choice = Math.floor (Math.random() * 4);
    // console.log (Choice)
   
    if (Choice <= 1){
        return computerChoice = "rock" ;
    }
    else if (Choice <= 2) {
        return computerChoice = "paper";
    }
    else if (Choice <= 3) {
        return computerChoice = "scissors" ;
    }
    

}

// console.log (getComputerChoice ());

let humanChoice = "none";

function getHumanChoice() {
   humanChoice = prompt("What's your choice?");
    if (humanChoice.toLowerCase() === "rock") {
        return humanChoice = "Rock"
    }
    else if (humanChoice.toLowerCase() === "paper") {
        return humanChoice = "Paper";
    }
    else if (humanChoice.toLowerCase() === "scissors" || humanChoice.toLowerCase() === "scissor") {
        return humanChoice = "Scissors" ;
    }
}

// console.log(getHumanChoice());


let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice,computerChoice) {
    if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock.") ;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors.") ;
        humanScore ++;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock.") ;
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beat Paper.") ;
        computerScore++;
    } 
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats Scissors.") ;
        computerScore++;
    } 
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beat Paper.");
        humanScore++;
    }
    else {
        console.log("It's a Draw!");
    }
}

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

    console.log("Your current score is " + humanScore) ;
    console.log("Computer's current score is " + computerScore);