const options = ["Rock","Paper","Scissors"];

function computerPlay(){
    let choice = Math.floor(Math.random()*options.length);
    console.log(options[choice]);
}