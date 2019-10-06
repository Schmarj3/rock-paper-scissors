// Player Buttons
let playerClickedRock = document.getElementById('player-rock')
let playerClickedPaper = document.getElementById('player-paper')
let playerClickedScissors = document.getElementById('player-scissors')
playerClickedRock.addEventListener('click', playerChoice)
playerClickedPaper.addEventListener('click', playerChoice)
playerClickedScissors.addEventListener('click', playerChoice)

// Reset Buttons
let resetScore = document.querySelector('#start-over')
resetScore.addEventListener('click', startOver)



// Score Counters
let round = 0,
    playerScore = 0,
    computerScore = 0,
    totalRounds = 5

let playScore = document.getElementById('display-player-score')
let compScore = document.getElementById('display-computer-score')

// Pop Ups
let tiePopUp = 'tie'