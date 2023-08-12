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
    switch (playerSelection.getChoice()) {
        case computerSelection.getChoice():
            return "It's a draw";
        case computerSelection.loseAgainst():
            return "You win. " + choiceToString[playerSelection.getChoice()] + " beats " + choiceToString[computerSelection.getChoice()];
        case computerSelection.winAgainst():
            return "You lose. " + choiceToString[computerSelection.getChoice()] + " beats " + choiceToString[playerSelection.getChoice()];
    }
}

const game = () => {
    for (let i = 0; i < 5; i++) {
        let playerInput;
        const availableInput = [0, 1, 2];
        while (!availableInput.includes(playerInput)) {
            playerInput = parseInt(prompt("Enter one of: 0 means Rock, 1 means Paper, 2 means Scissor"));
        }
        const playerSelection = Choice(playerInput);
        const computerSelection = getComputerChoice();
        alert(playRound(playerSelection, computerSelection));
    }
    alert("Well done.");
}

game();