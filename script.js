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
//Executing function so that this game got a random computer choice..
getComputerChoice();


//Declearing humanChoice var and initilizing it to empty sting.. 
let humanChoice = "";

//Selecting all three rock,paper,scissors buttons and initiliazing it to distinct a variable..
const rockChoosen = document.querySelector(".btn.rock");
const paperChoosen = document.querySelector(".btn.paper");
const scissorsChoosen = document.querySelector(".btn.scissors");

const comScrBtn = document.querySelector("#comScrBtn");
const humScrBtn = document.querySelector("#humScrBtn");

//receiving user choice using click event listener.. 
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

//Declearing then initializing both human and computer Score to 0;
let humanScore = 0;
let computerScore = 0;

//Displaying scores on screen 
comScrBtn.textContent = computerScore;
humScrBtn.textContent = humanScore;

//Selected #mym and #mymInfo section so that i can manupulate.. 
const mym = document.querySelector("#mym");
const mymInfo = document.querySelector("#mymInfo");

//infoAboutGame is the bottom div which display winner after getting 3 score first..
const infoAboutGame = document.querySelector("#infoAboutGame");

//taking computer and human choice as a argument and checkin first which case satisfy and then resulting the winner aor loser ccordingly
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

//Selected #result i.e. Make your move wala container 
const mymToPlayAgainBtn = document.querySelector("#result");  //mym means make your move sections..

//Created new button element so that it listed click and reset game..
const playAgainBtn = document.createElement("button");

function playAgain() {
    //#result div has other HTML content so clearing first then adding text..
    mymToPlayAgainBtn.innerHTML = "";
    playAgainBtn.textContent = "Play AGAIN!";

    //styling playAgain buttons
    playAgainBtn.id = "mym";
    playAgainBtn.style.margin = "10px";
    playAgainBtn.style.borderRadius = '15px';
    playAgainBtn.style.backgroundColor = "rgb(141, 200, 181)";
    playAgainBtn.style.border = "1px"
    playAgainBtn.style.padding = "15px"
    playAgainBtn.style.fontWeight = 600;

    //appending playagain button to mym div...
    mymToPlayAgainBtn.appendChild(playAgainBtn);

    //Click listener to refresh the page and play then game again..
    const replay = playAgainBtn.addEventListener("click", ()=>{
        location.reload();  //refreshed the page- which reset everything..
    })

    newGame();

}


function newGame() {
    if (humanScore === 3) {
        // mym.textContent= "Wooh!";
        // mymInfo.textContent = "You defeated Computer!"; 
        infoAboutGame.textContent = "Congratulations! You defeated computer!";
        infoAboutGame.style.fontSize = "large";
    } else if (computerScore === 3) {
        // mym.textContent = "Computer defeated you!";
        // mymInfo.textContent = "Better luck next time"
        infoAboutGame.textContent = "Computer deafeated you! Better luck next time";
        infoAboutGame.style.fontSize = "large";
    } else {
        infoAboutGame.textContent = "Those who score 3 first gonna win.. Have Fun!";
    }
    mym.textContent = "Make your move!";
    mymInfo.textContent = null;

    resetScore();
}

//function to reset score but delaying it because i want to show the result on screen but values reset...
function resetScore() {
    setTimeout(() => {
        humanScore = 0;
        computerScore = 0;
    }, 300);

}



