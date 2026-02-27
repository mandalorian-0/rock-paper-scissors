TOTAL_ROUNDS = 5
let humanScore = 0
let computerScore = 0

const getComputerChoice = () => {

    let randomNum = Math.floor(Math.random() * 3)

    if (randomNum === 0) {
        return "rock"
    }
    else if (randomNum === 1) {
        return "paper"
    }
    return "scissors"
}

const getHumanChoice = () => {

    const humanChoice = prompt("What's your play?")

    return humanChoice.toLowerCase()
}

function playRound (humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!")
    }
    else if ((humanChoice === 'rock' && computerChoice === 'scissors') || 
             (humanChoice === 'paper' && computerChoice === 'rock') ||
             (humanChoice === 'scissors' && computerChoice === 'paper'))
    {
        console.log(`You won this round! ${humanChoice} beats ${computerChoice}`);
        humanScore++
    }
    else{
        console.log(`You lose this round! ${computerChoice} beats ${humanChoice}`);       
        computerScore++
    }
}

const playGame = () => {

    for(let i = 0; i < TOTAL_ROUNDS; i++) {
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()

        playRound(humanSelection, computerSelection)

    }

}

const determineAndShowWinner = () => {
    console.log(humanScore > computerScore ? "You won the game!" : "You lost the game!");
}

playGame()
determineAndShowWinner()
