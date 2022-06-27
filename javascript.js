const options = ["rock","paper","scissors"];
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

rock.addEventListener('click',function(e){
    console.log(playRound('rock',computerPlay()));
});

paper.addEventListener('click',function(e){
    console.log(playRound('paper',computerPlay()));
});

scissors.addEventListener('click',function(e){
    console.log(playRound('scissors',computerPlay()));
});

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
    }else if(computerChoice===playerChoice){
        return ("Round is a tie");
    }else{
        return ("You Win! " + playerChoice + " beats " + computerChoice);
    }
}