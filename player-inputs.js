// COMPUTER INPUT
let getComputerChoice = function() {
    let randomNum = Math.floor(Math.random()*3)
    let computerChoice = ''
    switch (randomNum) {
        case 0:
            computerChoice = 'rock'
            break;
        case 1:
            computerChoice = 'paper'
            break;
        case 2:
            computerChoice = 'scissors'
            break;
    }
    return computerChoice
}

// USER INPUT
let getPlayerChoice = function() {
    let playerChoice
    if(this == clickedRock){
        playerChoice = 'rock'
    } else if (this == clickedPaper){
        playerChoice = 'paper'
    } else if (this == clickedScissors){
        playerChoice = 'scissors'
    }
    return playerChoice
}
// Add Round After Click
let addRound = function(){
    if (round < totalRounds){
        round++
        console.log(round)
        console.log(getComputerChoice())
        console.log(getPlayerChoice())
    }
}
