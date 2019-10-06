// Player Buttons
let playerChoiceClicked = false
let clickedRock = document.getElementById('player-rock')
let clickedPaper = document.getElementById('player-paper')
let clickedScissors = document.getElementById('player-scissors')
clickedRock.addEventListener('click', addRound)
clickedPaper.addEventListener('click', addRound)
clickedScissors.addEventListener('click', addRound)

// Reset Buttons
// let resetScore = document.querySelector('#start-over')
// resetScore.addEventListener('click', startOver)

// Score Counters
let round = 0,
    // playerScore = 0,
    // computerScore = 0,
    totalRounds = 5

// let playerScoreDisplay = document.getElementById('display-player-score')
// let computerScoreDisplay = document.getElementById('display-computer-score')

// // Level Counters
// let levelDisplay = document.getElementById('level')
// let roundDisplay = document.getElementById('round')

// // Pop Ups
// let tiePopUp = 'tie'

// // Game Over
// let gameOverContent = 'game-over'