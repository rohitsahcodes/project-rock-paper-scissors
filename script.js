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

getComputerChoice();

// To get input form human/user and store in humanChoice variable


let humanChoice = "";

//upper prompt replacement codes below..
const rockChoosen = document.querySelector(".btn.rock");
const paperChoosen = document.querySelector(".btn.paper");
const scissorsChoosen = document.querySelector(".btn.scissors");

const comScrBtn = document.querySelector("#comScrBtn");
const humScrBtn = document.querySelector("#humScrBtn");

//receiving usier chice using click listener.. 
rockChoosen.addEventListener("click", () => {
    humanChoice = "rock";
    getWinLost(humanChoice, getComputerChoice());
    console.log("Human Score: ",humanScore);
    console.log("Computer Score: ", computerScore);
    comScrBtn.textContent = computerScore;
    humScrBtn.textContent = humanScore;

});





paperChoosen.addEventListener("click", () => {
    humanChoice = "paper";
    // console.log(humanChoice);
    getWinLost(humanChoice, getComputerChoice());
});
scissorsChoosen.addEventListener("click", () => {
    humanChoice = "scissors";
    // console.log(humanChoice);
    getWinLost(humanChoice, getComputerChoice());
});

let humanScore = 0;
let computerScore = 0;
console.log(humanScore);
console.log(computerScore);




// taking computer and human choice and checkin first which case satisfy and then resulting the winner accordingly


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


getWinLost(humanChoice, getComputerChoice());

/*



for (let i = 1; i <= 5; i++) {


    getComputerChoice();
    console.log("computer choice : ", getComputerChoice());

    let temp = getHumanChoice();
    console.log("human choice : ", temp);
    getWinLost(humanChoice, computerChoice);

    console.log("HumanScore: ", humanScore);
    console.log("ComputerScore: ", computerScore);

    console.log(i, " round completed");

}

if (humanScore > computerScore) {
    prompt("You deafeated computer!");
    console.log("You won this game after 5 round");
} else {
    prompt("computer deafeated you! better luck next time");
    console.log("Computer won this time, after 5 round");

}



*/

