const Choice = (choice) => {
    // Choice is one of 0,1,2 which indicates rock, paper, scissor respectively
    const getChoice = () => choice;
    const winAgainst = () => choice - 1 >= 0 ? choice - 1 : 2;
    const loseAgainst = () => choice + 1 <= 2 ? choice + 1 : 0;
    return { getChoice, winAgainst, loseAgainst }
}

const choiceToString = {
    0: "Rock",
    1: "Paper",
    2: "Scissor"
}

const getComputerChoice = () => {
    const randomInt = Math.floor(Math.random() * 3);
    return Choice(randomInt);
}

const playRound = (playerSelection, computerSelection) => {
    let result, message;
    switch (playerSelection.getChoice()) {
        case computerSelection.getChoice():
            result = "DRAW";
            message = "It's a draw";
            break;
        case computerSelection.loseAgainst():
            result = "WIN";
            message = "You win. " + choiceToString[playerSelection.getChoice()] + " beats " + choiceToString[computerSelection.getChoice()];
            break;
        case computerSelection.winAgainst():
            result = "LOSE";
            message = "You lose. " + choiceToString[computerSelection.getChoice()] + " beats " + choiceToString[playerSelection.getChoice()];
            break;
    }
    return {result, message};
}

const printResult = (playerScore, computerScore, round) => {
    const resultElem = document.querySelector("#result");    
    resultElem.textContent = round.message; 
    const scoreElem = document.querySelector("#score");    
    scoreElem.textContent = "Player vs Computer score: " + playerScore + " - " + computerScore;
}

const printFinalResult = (winner) => {
    const finalResultElem = document.querySelector("#final-result");
    if (winner == "YOU") {
        finalResultElem.textContent = "Congratulations! You won!";
    } else {
        finalResultElem.textContent = "You lost! Good luck next time.";
    }
}

const game = () => {
    const maxScore = 5;
    let playerScore = 0;
    let computerScore = 0;
    const choicesElem = document.querySelector("#choices");
    choicesElem.addEventListener('click', (event) => {
        if (playerScore < maxScore && computerScore < maxScore) {
            let target = event.target;
            let playerSelection;
            switch(target.id) {
                case 'rock':
                    playerSelection = Choice(0);
                    break;
                case 'paper':
                    playerSelection = Choice(1);
                    break;
                case 'scissor':
                    playerSelection = Choice(2);
                    break;
                default:
                    return;
            }
            const computerSelection = getComputerChoice();
            let round = playRound(playerSelection, computerSelection);
            switch(round.result) {
                case "WIN":
                    playerScore += 1;
                    break;
                case "LOSE":
                    computerScore += 1;
                    break;
                default:
                    break;
            }
            printResult(playerScore, computerScore, round);
            if (playerScore == 5) {
                printFinalResult("YOU");
            } else if (computerScore == 5) {
                printFinalResult("COMPUTER");
            }
        } else {
            return;
        }
    });
}

game();
