
playerWins = 0;
computerWins = 0;

const container = document.querySelector('.container');

const results = document.createElement('div'); 
results.setAttribute('id', 'results');
results.style.textAlign = 'center';
container.appendChild(results);

const gameResult = document.createElement('p');
gameResult.style.textAlign = 'center';
gameResult.textContent = 'gaming';
results.appendChild(gameResult);


const buttons = document.querySelectorAll('.container button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id);
        results.textContent = `The current score is ${playerWins} to ${computerWins}`
        results.appendChild(gameResult);
        gameStatus();
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
                gameResult.textContent = "You both picked Rock! It's a tie.";
            }
            else if (computerSelection == 'scissors') {
                gameResult.textContent = "Rock beats Scissors, you win!";
                victor = "true";
            }
            else if (computerSelection == 'paper') {
                gameResult.textContent = "Paper beats Rock, you lose!";
                victor = "false";
            }
            break;
        case 'paper':
            if (computerSelection == 'rock') {
                gameResult.textContent = "Paper beats Rock, you win!"
                victor = "true";
            }
            else if (computerSelection == 'scissors') {
                gameResult.textContent = "Scissors beats Paper, you lose!";
                victor = "false";
            }
            else if (computerSelection == 'paper') {
                gameResult.textContent = "You both picked Paper! It's a tie.";
            }
            break; 
        case 'scissors':
            if (computerSelection == 'rock') {
                gameResult.textContent = "Rock beats Scissors, you lose!"
                victor = "false";
            }
            else if (computerSelection == 'scissors') {
                gameResult.textContent = "You both picked Scissors. It's a tie!";
            }
            else if (computerSelection == 'paper') {
                gameResult.textContent = "Scissors beats Paper, you win!";
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

function gameStatus() {
    if(computerWins >= 5) {
        results.remove();
        buttons.forEach((button) => {
                button.remove();
                });
        const reloadGame = document.createElement('p');
        reloadGame.style.textAlign = 'center';
        reloadGame.textContent = 'The computer won. Thanks for playing! Reload to play again';
        container.appendChild(reloadGame);
        }
    else if (playerWins >= 5) {
        results.remove();
        buttons.forEach((button) => {
            button.remove();
            });
        const reloadGame = document.createElement('p');
        reloadGame.style.textAlign = 'center';
        reloadGame.textContent = 'You won! Thanks for playing! Reload to play again';
        container.appendChild(reloadGame);
    }
}