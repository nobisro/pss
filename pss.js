
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
    } else if (playerSelection == "paper" && computerSelect == "scissors") {
        console.log("You lose!");
    } else if (playerSelection == "paper" && computerSelect == "stone") {
        console.log("You win!");
    } else if (playerSelection == "scissors" && computerSelect == "scissors") {
        console.log("It's a tie!");
    } else if (playerSelection == "scissors" && computerSelect == "stone") {
        console.log("You lose!");
    } else if (playerSelection == "scissors" && computerSelect == "paper") {
        console.log("You win!");
    } else if (playerSelection == "stone" && computerSelect == "stone") {
        console.log("It's a tie!");
    } else if (playerSelection == "stone" && computerSelect == "paper") {
        console.log("You lose!");
    } else if (playerSelection == "stone" && computerSelect == "scissors") {
        console.log("You win!");
        
}
}

// gamePlay(playerSelection, computerPlay());

function play() {
    for (let i = 0; i < 5; i++) {
        gamePlay(playerSelection, computerPlay());
    }
}

play();