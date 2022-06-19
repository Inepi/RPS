
playerWins = 0;
computerWins = 0;

const buttons = document.querySelectorAll('.container button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id);
    });
});

function playerPlay() {
    let playerChoice = prompt("Please type your choice");
    playerSelection = playerChoice.toLowerCase();
    return playerSelection;
}

function computerPlay() {
    let computerRandom = Math.floor(Math.random()*(3-1+1))+1;
    computerRandom = computerRandom.toString();
    let computerChoice;
    switch (computerRandom) {
        case '1':
            computerChoice = "Rock";
            break;
        case '2':
            computerChoice = "Paper";
            break;
        case '3':
            computerChoice = "Scissors";
            break;
    }
    computerSelection= computerChoice.toLowerCase();
    return computerSelection;
}

function playRound (playerSelection) {
    computerPlay();
    let victor;
    switch (playerSelection) {
        case 'rock':
            if (computerSelection == 'rock') {
                console.log("You both picked Rock! It's a tie.")
            }
            else if (computerSelection == 'scissors') {
                console.log("Rock beats Scissors, you win!");
                victor = "true";
            }
            else if (computerSelection == 'paper') {
                console.log("Paper beats Rock, you lose!");
                victor = "false";
            }
            break;
        case 'paper':
            if (computerSelection == 'rock') {
                console.log("Paper beats Rock, you win!")
                victor = "true";
            }
            else if (computerSelection == 'scissors') {
                console.log("Scissors beats Paper, you lose!");
                victor = "false";
            }
            else if (computerSelection == 'paper') {
                console.log("You both picked Paper! It's a tie.");
            }
            break; 
        case 'scissors':
            if (computerSelection == 'rock') {
                console.log("Rock beats Scissors, you lose!")
                victor = "false";
            }
            else if (computerSelection == 'scissors') {
                console.log("You both picked Scissors. It's a tie!");
            }
            else if (computerSelection == 'paper') {
                console.log("Scissors beats Paper, you win!");
                victor = "true";
            }
            break;
        default:
            console.log("Something went wrong. The player probably entered something they shouldn't have");
    }
    resultsTally(victor);
    return victor;
}

function resultsTally(victor) {
    if (victor == "true") {
        playerWins++;
    }
    else if (victor == "false") {
        computerWins++;
    }
}

/*function game() {
    let playerWins = 0;
    let computerWins = 0;
    for (let i = 0; i < 5; i++) {
        playerPlay();
        computerPlay();
        playerVictory = playRound(playerSelection, computerSelection);
        if (playerVictory == "true") {
            playerWins++;
        }
        else if (playerVictory == "false" ) {
            computerWins++;
        }
    }
    console.log("The player won a total of " + playerWins + " times, while the computer won a total of " + computerWins + " times.");
    if (playerWins > computerWins) {
        console.log("The player wins!");
        playerWins = 0;
        computerWins = 0;
    }
    else if (playerWins < computerWins) {
        console.log("The computer wins!");
        playerWins = 0;
        computerWins = 0;
    }
    else if (playerWins == computerWins) {
        console.log("It was a draw!");
        playerWins = 0;
        computerWins = 0;
    }
} */