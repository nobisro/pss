/* 
function computerPlay() {
    let randomNum = Math.ceil(Math.random() * 3)
    if (randomNum == 1 ) {
        console.log("Computer chooses paper");
        return "paper";
    } 
    else if (randomNum == 2 ) {
        console.log("Computer chooses scissors");
        return "scissors";
    } else {
        console.log("Computer chooses stone");
        return "stone";
    }
}


let playerSelection;

function gamePlay(playerSelect, computerSelect) {
    let playerSelection = prompt("Paper, Scissors, Stone");
    playerSelection = playerSelection.toLowerCase();
    console.log("Player chooses " + playerSelection);

    
    if (playerSelection == "paper" && computerSelect == "paper") {
        console.log("It's a tie!");
        return "tie";
    } else if (playerSelection == "paper" && computerSelect == "scissors") {
        console.log("You lose!");
        return "lose";
    } else if (playerSelection == "paper" && computerSelect == "stone") {
        console.log("You win!");
        return "win";
    } else if (playerSelection == "scissors" && computerSelect == "scissors") {
        console.log("It's a tie!");
        return "tie";
    } else if (playerSelection == "scissors" && computerSelect == "stone") {
        console.log("You lose!");
        return "lose";
    } else if (playerSelection == "scissors" && computerSelect == "paper") {
        console.log("You win!");
        return "win";
    } else if (playerSelection == "stone" && computerSelect == "stone") {
        console.log("It's a tie!");
        return "tie";
    } else if (playerSelection == "stone" && computerSelect == "paper") {
        console.log("You lose!");
        return "lose";
    } else if (playerSelection == "stone" && computerSelect == "scissors") {
        console.log("You win!");
        return "win";
        
}
}

gamePlay(playerSelection, computerPlay());

function play() {
    for (let i = 0; i < 5; i++) {
        gamePlay(playerSelection, computerPlay());
    }
}

// play();

// let button = document.querySelector(".button");

// button.onclick = function() {
//     let name = prompt('What is your name?');
//     alert('Hello ' + name + ', nice to see you');
// }
 */

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

let playerPlay = prompt('paper, scissors, stone!');
playerPlay = playerPlay.toString();
playerPlay = playerPlay.toLowerCase();
console.log(playerPlay);

if (playerPlay == 'paper' || playerPlay == 'scissors' || playerPlay == 'stone') {
    alert('OK!!'); }
    else {
    playerPlay = prompt('Try again! paper, scissors, stone!');
    playerPlay = playerPlay.toString();
    playerPlay = playerPlay.toLowerCase();
}

let computerSelect = computerPlay();
// console.log('computer chooses ' + computerSelect);
// console.log('player1 chooses ' + playerPlay);

function playRound(playerSelection, computerSelection) {

    let playerPlay = prompt('paper, scissors, stone!');
    playerPlay = playerPlay.toString();
    playerPlay = playerPlay.toLowerCase();
    console.log(playerPlay);

if (playerPlay == 'paper' || playerPlay == 'scissors' || playerPlay == 'stone') {
    alert('OK!!'); }
    else {
    playerPlay = prompt('Try again! paper, scissors, stone!');
    playerPlay = playerPlay.toString();
    playerPlay = playerPlay.toLowerCase();


    if (playerSelection == 'paper') {
        if (computerSelection == 'stone') {
            return 'You Win! Paper beats Stone';
        } else if (computerSelection == 'paper') {
            return "It's a tie!!";
        } else {
            return 'You Lose! Scissors beats Paper'
        }
    }

    if (playerSelection == 'scissors') {
        if (computerSelection == 'paper') {
            return 'You Win! Scissors beats paper';
        } else if (computerSelection == 'scissors') {
            return "It's a tie!!";
        } else {
            return 'You Lose! Stone beats Scissors'
        }
    }

    if (playerSelection == 'stone') {
        if (computerSelection == 'scissors') {
            return 'You Win! Stone beats Scissors';
        } else if (computerSelection == 'stone') {
            return "It's a tie!!";
        } else {
            return 'You Lose! Paper beats Stone'
        }
    }
}
}

// let g1 = playRound(playerPlay, computerSelect);
// console.log(g1);

function game() {
    for (let i = 0; i < 5; i++) {
        computerSelect = computerPlay();
        let newRound = playRound();
        console.log(newRound);
    }
    }

game();

