let playerChoice = function() {
    let playerChoice = ''
    if(this == playerClickedRock){
        playerChoice = 'rock'
        round++
    } else if (this == playerClickedPaper){
        playerChoice = 'paper'
        round++
    } else if (this == playerClickedScissors){
        playerChoice = 'scissors'
        round++
    }
    startRound(5 ,playerChoice)
    displayScores()
}

let computerChoice = function() {
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

let playRound = function(playerSelection, computerSelection) {
    let tie = `It's a tie`
    
    switch (playerSelection){
        case 'rock':
            return computerSelection === 'rock' ? tie
                 : computerSelection === 'paper'? `You Lose! Paper beats Rock`
                 : `You Win! Rock beats Scissors`
        case 'paper':
            return computerSelection === 'rock' ? `You Win! Paper beats Rock`
                 : computerSelection === 'paper'? tie
                 : `You Lose! Scissors beats Paper`
        case 'scissors':
            return computerSelection === 'rock' ? `You Lose! Rock beats Scissors`
                 : computerSelection === 'paper'? `You Win! Scissors beats Paper`
                 : tie
    }
}


function startRound(totalRounds, playerChoice) {
    let results = ''
    const playerSelection = playerChoice
    const computerSelection = computerChoice()

    results = playRound(playerSelection, computerSelection)
    results.includes('Win')? playerScore += 1
        : results.includes('Lose')? computerScore += 1
        :''
    console.log(`Round ${round} out of ${totalRounds}: ${results}! Your Score : ${playerScore}. Computer Score : ${computerScore}.`)
}

let displayScores = function (){
    playScore.innerHTML = playerScore
    compScore.innerHTML = computerScore
}


// function tieBreaker(){

// }

// function gameLevel(){
    // 1 - 5
    // 2 - 4
    // 3 - 3
    // 4 - 2
    // 5 - 1
// }