function getComputerSelection(){
    let selection = Math.floor(Math.random()*4);
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
        displayResult("Draw!");
    }else if ((playerSelection == "Rock" && computerSelection == "Scissors") || ( playerSelection == "Paper" && computerSelection == "Rock") || (playerSelection == "Scissors" && computerSelection == "Paper")){
        playerWins ++;
        displayResult(`You Win! ${playerSelection} beats ${computerSelection}`);
    } else {
        computerWins++;
        displayResult(`You Lose! ${computerSelection} beats ${playerSelection}`);
    }
    displayScore();
    if(computerWins == 5 || playerWins == 5){
        if(computerWins == 5){
            displayResult(`Computer Wins`);
            restart();
        }else{
            displayResult(`Player Wins`);
            restart(); 
        }
    }
}

function displayResult(string){
    result.textContent = string;
}
function displayScore(){
    p_score.textContent = `${playerWins}`;
    c_score.textContent = `${computerWins}`;
}

function restart(){
    //FIX ME:
    choices.forEach((choice) =>{
        choice.removeEventListener('click',  event => playRound(event.target.textContent));
    });

    const restart_bt = document.createElement('button');
    restart_bt.classList.add('restart');
    restart_bt.textContent = `Restart`;
    restart_bt.addEventListener('click', () => {reset()});
    scoreboard.appendChild(restart_bt);
}

function reset(){
    result.textContent = `Humans vs Computers`;
    p_score.textContent = `0`;
    c_score.textContent = `0`;
    playerWins = 0;
    computerWins = 0;
    scoreboard.removeChild(scoreboard.lastChild);
}

const scoreboard = document.querySelector('.scoreboard');
const choices = Array.from(document.querySelectorAll('.choice'));
choices.forEach((choice) =>{
    choice.addEventListener('click',  event => playRound(event.target.id));
});

const p_score = document.querySelector('.p_score');
const c_score = document.querySelector('.c_score');
const result = document.querySelector('.result');

let computerWins = 0;
let playerWins = 0;


