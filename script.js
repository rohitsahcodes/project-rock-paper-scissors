// to get computer random choice 
function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3) + 1;
    console.log(randomNumber);
    console.log(typeof(randomNumber));
    let computerChoice = "";
    if (randomNumber === 1) {
        computerChoice = "rock";
    } else if (randomNumber === 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    console.log("h");
    console.log(randomNumber);
    console.log(computerChoice);
    console.log("k");
}
getComputerChoice();


// To get input form user
function getHumanChoice() {
    let userChoice = prompt("Enter rock, paper, or scissors:");
    userChoice = userChoice.toLowerCase();
    // console.log(userChoice);
    if (
        userChoice !== "rock" &&
        userChoice !== "paper" &&
        userChoice !== "scissors"
    ) {
        console.log("Invalid input");
        return getHumanChoice();
    }
    console.log(userChoice);
}
// getHumanChoice();

let humanScore = 0;
let computerScore = 0;




