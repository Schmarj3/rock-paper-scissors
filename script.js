function playerChoice() {
    let answer = prompt('Type : Rock, Paper, or Scissors').toLowerCase()
    if (answer === 'rock' || answer === 'paper' || answer === 'scissors'){
        return answer
    } else {
        return `Invalid Answer - Game Over!`
    }
}

function computerPlay() {
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

function playRound(playerSelection, computerSelection) {
    tie = `It's a tie`
    
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

function game(numOfRounds) {
    let results = ''
    let playerScore = 0
    let computerScore = 0

    if (playerChoice().includes('Invalid')) {
        alert(playerChoice())
        return playerChoice
    } else {
        for (let i = 1; i <= numOfRounds; i++){
            const playerSelection = playerChoice()
            const computerSelection = computerPlay()

            results = playRound(playerSelection, computerSelection)

            results.includes('Win')? playerScore = playerScore + 1
                : results.includes('Lose')? computerScore = computerScore + 1
                :''
        
            console.log(`Round ${i}: ${results}! Your Score : ${playerScore}. Computer Score : ${computerScore}.`)  
        } 
    }
}

game(5)