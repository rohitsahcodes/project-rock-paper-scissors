// to get computer choice with the help of random number generator and store in computerChoice
let computerChoice = "";
function getComputerChoice() {
    let = randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        computerChoice = "rock";
    } else if (randomNumber === 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice;
}



// To get input form human/user and store in humanChoice variable
let humanChoice = "";
function getHumanChoice() {
    humanChoice = prompt("Enter rock, paper, or scissors:");
    humanChoice = humanChoice.toLowerCase();
    // console.log(userChoice);
    // if (humanChoice === null){
    //     console.log("Did you just cancelled? I got it! you don't want to play with me? Okay fine..");
    // }
    if (
        humanChoice !== "rock" &&
        humanChoice !== "paper" &&
        humanChoice !== "scissors"
    ) {
        console.log("Invalid input");
        getHumanChoice();
    }
    return humanChoice;
}



// taking computer and human choice and checkin first which case satisfy and then resulting the winner accordingly
let humanScore = 0;
let computerScore = 0;

function getWinLost(hum, com) {
    // let hum = humanChoice;
    // let com = computerChoice;
    if ((hum === "rock" || com === "rock") && (hum === "paper" || com === "paper")) {
        if (hum === "rock") {
            console.log("You lost!");
            computerScore++;
        } else {
            console.log("You won!");
            humanScore++;
        }
    } else if ((hum === "rock" || com === "rock") && (hum === "scissors" || com === "scissors")) {
        if (hum === "scissors") {
            console.log("You lost!");
            computerScore++;
        } else {
            console.log("You won!");
            humanScore++;
        }
    } else if ((hum === "paper" || com === "paper") && (hum === "scissors" || com === "scissors")) {
        if (hum === "paper") {
            console.log("You lost!");
            computerScore++;
        } else {
            console.log("You won!");
            humanScore++;
        }
    }
    else {
        console.log("It's is tie, babay");
    }
}








for ( let i = 1; i <= 5; i++) {

    
    getComputerChoice();
    console.log("computer choice : ", getComputerChoice());

    let temp = getHumanChoice();
    console.log("human choice : ", temp);
    getWinLost(humanChoice, computerChoice);

    console.log("HumanScore: ", humanScore);
    console.log("ComputerScore: ", computerScore);

    console.log(i," round completed");

}

if (humanScore > computerScore){
    prompt("You deafeated computer!");
    console.log("You won this game after 5 round");
} else {
    prompt("computer deafeated you! better luck next time");
    console.log("Computer won this time, after 5 round");

}





