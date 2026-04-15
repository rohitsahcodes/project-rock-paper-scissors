// to get computer random choice 
let computerChoice = "";
function getComputerChoice() {
    let = randomNumber = Math.floor(Math.random() * 3) + 1;
    // console.log("randomNumber : ", randomNumber);
    // console.log("type of randomNumber : ", typeof (randomNumber));
    if (randomNumber === 1) {
        computerChoice = "rock";
    } else if (randomNumber === 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    // console.log("randomNumber value : ", randomNumber);
    // console.log("computerChoice value : ", computerChoice);
    return computerChoice;
}
getComputerChoice();
console.log("computerChoise : ",computerChoice);




// console.log("below values if for human input");
// To get input form human/user
let humanChoice = "";
function getHumanChoice() {
    humanChoice = prompt("Enter rock, paper, or scissors:");
    humanChoice = humanChoice.toLowerCase();
    // console.log(userChoice);
    if (
        humanChoice !== "rock" &&
        humanChoice !== "paper" &&
        humanChoice !== "scissors"
    ) {
        console.log("Invalid input");
        return getHumanChoice();
    }
    // console.log("humanChoice: ", humanChoice);
}
getHumanChoice();
console.log("humanChoice :", humanChoice);






// // I forgot why i wrote this function..
// function getWinLost(computerChoice, HumanChoice) {
//     if (computerChoice === "rock" && HumanChoice === "paper") {
//         console.log("You won!");
//     } else if (computerChoice === "rock" && HumanChoice === "scissors") {
//         console.log("You lost!");
//     } else if (computerChoice === "rock" && HumanChoice === "paper") {
//         console.log("You won!");
//     }
// }

console.log("result below line")

// taking two input and checkin first whic case satisfy and then resulting accordingly
let humanScore = 0;
let computerScore = 0;
function getWinLost() {
    let hum = humanChoice;
    let com = computerChoice;
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
getWinLost();

console.log("HumanScore: ", humanScore);
console.log("ComputerScore: ", computerScore);

console.log("first round completed now next round i guess");





// while (humanScore <= 5 || computerScore <= 5){

// }




// if (humanScore === 5 && computerScore < 5) {
//     console.log("This time you won the game");
// } else if (computerScore === 5 && humanScore < 5) {
//     console.log("This time computer won the game");
// }

