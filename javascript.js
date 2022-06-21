const options = ["rock","paper","scissors"];

function computerPlay(){
    let choice = Math.floor(Math.random()*options.length);
    return options[choice];
}

function playRound(playerSelection, computerSelection){
    let computerChoice = computerSelection.toLowerCase();
    let playerChoice = playerSelection.toLowerCase();
    if((computerChoice===options[0] && playerChoice===options[2])
    || (computerChoice===options[1] && playerChoice===options[0])
    || (computerChoice===options[2] && playerChoice===options[1])){
        console.log("You Lose! " + computerChoice + " beats " + playerChoice);
    }else{
        console.log("You Win! " + playerChoice + " beats " + computerChoice);
    }
}