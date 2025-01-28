


let computerChoice = "none";
function getComputerChoice() {

    const Choice = Math.floor(Math.random() * 3);
   

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







let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
    let result = "";

    if (humanChoice == "rock" && computerChoice == "paper") {
        result = "You lose! Paper beats Rock.";
        computerScore++;
    }
    else if (humanChoice == "rock" && computerChoice == "scissors") {
        result = "You win! Rock beats Scissors.";
        humanScore++;
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        result = "You win! Paper beats Rock.";
        humanScore++;
    }
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        result = "You lose! Scissors beat Paper.";
        computerScore++;
    }
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        result = "You lose! Rock beats Scissors.";
        computerScore++;
    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        result = "You win! Scissors beat Paper.";
        humanScore++;
    }
    else {
        result = "It's a Draw!";
    }

    return result;
}



function playGame(humanChoice) {
    const computerSelection = getComputerChoice();
    // console.log(humanChoice, computerSelection);
    const result = playRound(humanChoice, computerSelection);

    document.getElementById("resultDisplay").textContent = result;
    document.getElementById('scoreDisplay').textContent = "Human Score:" + humanScore + "Computer Score:" + computerScore;
    

}


//     let winner = "No one won";
//     if (humanScore > computerScore){
//         winner = "You won!"
//     }
//     else {
//         winner = "You lost!"
//     }

//     console.log(winner);
// }





const rock = document.createElement('button');
const paper = document.createElement('button');
const scissors = document.createElement('button');

rock.addEventListener('click', () => playGame('rock'));
rock.textContent = "Rock";
paper.addEventListener('click', () => playGame('paper'));
paper.textContent = "Paper";
scissors.addEventListener('click', () => playGame('scissors'));
scissors.textContent = "Scissors";

const container = document.getElementById('container')
container.appendChild(rock);
container.appendChild(paper);
container.appendChild(scissors);




