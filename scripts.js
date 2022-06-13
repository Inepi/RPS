



function playerSelection() {
    let playerChoice = prompt("Please type your choice");
    playerChoice = playerChoice.toLowerCase();
    console.log(playerChoice);
    return playerChoice;
}


function computerSelection() {

    let computerRandom = Math.floor(Math.random()*(3-1+1))+1;
    console.log(computerRandom);
    computerRandom = computerRandom.toString();
    console.log(typeof computerRandom);
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

    computerChoice = computerChoice.toLowerCase();
    console.log(computerChoice);
    return computerChoice;
}