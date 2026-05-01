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

//receiving user choice using click listener.. 
rockChoosen.addEventListener("click", (e) => {
    humanChoice = "rock";
    getWinLost(humanChoice, getComputerChoice());
    comScrBtn.textContent = computerScore;
    humScrBtn.textContent = humanScore;
});

paperChoosen.addEventListener("click", (e) => {
    humanChoice = "paper";
    // console.log(humanChoice);
    getWinLost(humanChoice, getComputerChoice());
    comScrBtn.textContent = computerScore;
    humScrBtn.textContent = humanScore;
});
scissorsChoosen.addEventListener("click", (e) => {
    humanChoice = "scissors";
    // console.log(humanChoice);
    getWinLost(humanChoice, getComputerChoice());
    comScrBtn.textContent = computerScore;
    humScrBtn.textContent = humanScore;
});

let humanScore = 0;
let computerScore = 0;

comScrBtn.textContent = computerScore;
humScrBtn.textContent = humanScore;


// taking computer and human choice and checkin first which case satisfy and then resulting the winner accordingly
const mym = document.querySelector("#mym");
const mymInfo = document.querySelector("#mymInfo");
// console.log(mymInfo);
const infoAboutGame = document.querySelector("#infoAboutGame");


function getWinLost(hum, com) {
    // let hum = humanChoice;
    // let com = computerChoice;
    if ((hum === "rock" || com === "rock") && (hum === "paper" || com === "paper")) {
        if (hum === "rock") {
            console.log("You lost!");
            mym.textContent = "You lose!";
            mymInfo.textContent = "(paper beats rock)";

            computerScore++;
        } else {
            console.log("You won!");
            mym.textContent = "You win!";
            mymInfo.textContent = "(paper beats rock)";
            humanScore++;
        }
    } else if ((hum === "rock" || com === "rock") && (hum === "scissors" || com === "scissors")) {
        if (hum === "scissors") {
            console.log("You lose!");
            mym.textContent = "You lose!";
            mymInfo.textContent = "(rock beats scissors)";
            computerScore++;
        } else {
            console.log("You won!");
            mym.textContent = "You win!";
            mymInfo.textContent = "(rock beats scissors)";
            humanScore++;
        }
    } else if ((hum === "paper" || com === "paper") && (hum === "scissors" || com === "scissors")) {
        if (hum === "paper") {
            console.log("You lose!");
            mym.textContent = "You lose!";
            mymInfo.textContent = "(scissors beats paper)";
            computerScore++;
        } else {
            console.log("You won!");
            mym.textContent = "You win!";
            mymInfo.textContent = "(scissors beats paper)";
            humanScore++;
        }
    }
    else {
        console.log("It's tie, baby!");
        mym.textContent = "It's a tie, baby!";
        mymInfo.textContent = `Both choosed "${humanChoice}"`;
    }

    if (humanScore === 3 || computerScore === 3) {
        playAgain();
    }

}

const playAgainShow = document.querySelector("#result");

function playAgain() {
    const playAgainDiv = document.createElement("div");
    playAgainShow.innerHTML = "";
    playAgainDiv.textContent = "Play AGAIN!";

    playAgainDiv.id = "mym";

    playAgainShow.appendChild(playAgainDiv);

    newGame();

}


function newGame() {
    if (humanScore === 3) {
        // mym.textContent= "Wooh!";
        // mymInfo.textContent = "You defeated Computer!"; 
        infoAboutGame.textContent = "Wohh! You defeated computer!";
    } else if (computerScore === 3) {
        // mym.textContent = "Computer defeated you!";
        // mymInfo.textContent = "Better luck next time"
        infoAboutGame.textContent = "Computer deafeated you! Better luck next time";
    } else {
        infoAboutGame.textContent = "Those who score 3 first gonna win.. Have Fun!";
    }



    humanScore = 0;
    computerScore = 0;
    mym.textContent = "Make your move!";
    mymInfo.textContent = null;
}


/*



if (humanScore > computerScore) {
    prompt("You deafeated computer!");
    console.log("You won this game after 5 round");
} else {
    prompt("computer deafeated you! better luck next time");
    console.log("Computer won this time, after 5 round");

}



*/

