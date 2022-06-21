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
        return ("You Lose! " + computerChoice + " beats " + playerChoice);
    }else{
        return ("You Win! " + playerChoice + " beats " + computerChoice);
    }
}

function game(){
    for(let i=0;i<5;i++){
        playerSelection = prompt("Your choice");
        computerSelection = computerPlay();
        console.log(playRound(playerSelection,computerSelection));
    }
}