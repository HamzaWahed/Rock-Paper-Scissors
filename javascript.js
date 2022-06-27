const options = ["rock","paper","scissors"];
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const results = document.querySelector('.results');

let playerScore = 0;
let computerScore = 0;

rock.addEventListener('click',function(e){
    tracker('rock');
    checkWinner();
});

paper.addEventListener('click',function(e){
    tracker('paper');
    checkWinner();
});

scissors.addEventListener('click',function(e){
    tracker('scissors');
    checkWinner();
});

function computerPlay(){
    let choice = Math.floor(Math.random()*options.length);
    return options[choice];
}

function playRound(playerSelection, computerSelection){
    let computerChoice = computerSelection.toLowerCase();
    let playerChoice = playerSelection.toLowerCase();
    let outcome = [];
    let choice = "";
    let winner = 0;
    if((computerChoice===options[0] && playerChoice===options[2])
    || (computerChoice===options[1] && playerChoice===options[0])
    || (computerChoice===options[2] && playerChoice===options[1])){
        choice = "You Lose! " + computerChoice + " beats " + playerChoice;
    }else if(computerChoice===playerChoice){
        choice = ("Round is a tie");
        winner = 1;
    }else{
        choice = ("You Win! " + playerChoice + " beats " + computerChoice);
        winner = 2;
    }

    outcome.push(choice,winner);
    return outcome;
}

function tracker(choice){
    if(checkWinner()){
        return;
    }

    outcome = playRound(choice,computerPlay())
    if(outcome[1]===0){
        computerScore++;
    }else if(outcome[1]===2){
        playerScore++;
    }
    results.innerHTML =`<p> ${outcome[0]} <br> Score: ${playerScore}:${computerScore}`
}

function checkWinner(){
    if(computerScore > 4){
        results.innerHTML = `<p> Computer wins </p>`
        return true;
    }else if (playerScore > 4){
        results.innerHTML = `<p> Player wins </p>`
        return true;
    }else{
        return false;
    }
}