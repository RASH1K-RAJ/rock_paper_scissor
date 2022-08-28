function getComputerSelection(){
    let selection = Math.random(0, 3);
    if (selection == 0){
        return "Rock";
    }
    else if(selection == 1){
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection = getComputerSelection()){
    if (playerSelection == computerSelection){
        return "Draw!"
    }else if ((playerSelection == "Rock" && computerSelection == "Scissors") || ( playerSelection == "Paper" && computerSelection == "Rock") || (playerSelection == "Scissors" && computerSelection == "Paper")){
        return `You Win! ${playerSelection} beats ${computerSelection}`;
        playerWins ++;

    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
        computerWins++;
    }
}

let computerWins = 0;
let playerWins = 0;

function game(){
    for(let i = 0; i<5; i++){
        let playerChoice = prompt("Rock, Paper or Scissors?").toLowerCase();
        playerChoice = playerChoice[0].toUpperCase() + playerChoice.slice(1);
        console.log(playRound(playerChoice));
    }
}
game();

if (computerWins > playerWins){
    console.log("Computer Wins");
}else{
    console.log("Player Wins");
}