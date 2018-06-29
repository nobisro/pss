let userWins = 0;
let computerWins = 0;
let rounds = 5;

//Computer randomly selects move
 function computerPlay() {
     let rand = Math.round(Math.random() * 2);
     //creates random number 0 - 2

     if (rand == 0) {
        return 'paper';
     } else if (rand == 1) {
        return 'scissors';
     } else {
        return 'stone';
     }
 }
//  Human inputs move
function humanPlay() {
    let playerPlay;
    let validityCheck;
    do {
        if (typeof playerPlay === "undefined") {
            playerPlay = prompt('paper, scissors, stone!');
        } else {  playerPlay = prompt('Only paper, scissors, stone please!!');
    }  
        playerPlay = playerPlay.toLowerCase();

    switch (playerPlay) {
        case 'paper':
            validityCheck = 1;
            break;
        case 'scissors':
            validityCheck = 1;
            break;
        case 'stone':
            validityCheck = 1;
            break;
        default:
            validityCheck = 0;
            break;
        }
    } 
    while (validityCheck !== 1); 
        return playerPlay;
}


function humanWin() {
    userWins++;
    console.log(userWins);
}

function computerWin() {
    computerWins++;
}

function playRound(playerSelection, computerSelection) {
    // Sets values for computer and human for single round
    
    console.log('player1 chooses ' + playerSelection);
    console.log('computer chooses ' + computerSelection);
   

    if (playerSelection == 'paper') {
        if (computerSelection == 'stone') {
            humanWin();
            return 'You Win! Paper beats Stone';
        } else if (computerSelection == 'paper') {
            return "It's a tie!!";
        } else {
            computerWin();
            return 'You Lose! Scissors beats Paper';
        }
    }

    if (playerSelection == 'scissors') {
        if (computerSelection == 'paper') {
            humanWin();
            return 'You Win! Scissors beats paper';
        } else if (computerSelection == 'scissors') {
            return "It's a tie!!";
        } else {
            computerWin();
            return 'You Lose! Stone beats Scissors';
        }
    }

    if (playerSelection == 'stone') {
        if (computerSelection == 'scissors') {
            humanWin();
            return 'You Win! Stone beats Scissors';
        } else if (computerSelection == 'stone') {
            return "It's a tie!!";
        } else {
            computerWin();
            return 'You Lose! Paper beats Stone';
        }
    }
}

function playGame() {
    for (let i = 0; i < rounds; i++) {
        let game = playRound(humanPlay(), computerPlay());
        console.log('Round ' + (i+1) + ': ' + game);
    }

    console.log('-----FINAL SCORE-----');
    console.log('you: ' + userWins);
    console.log('computer: ' + computerWins);

    if (userWins > computerWins) {
        console.log('YOU WIN!!!!');
    } else {
        console.log('YOU LOSE!!!!');
    }
}

playGame();