const Choice = (choice) => {
    // Choice is one of 0,1,2 which indicates rock, paper, scissor respectively
    const getChoice = () => choice;
    const winAgainst = () => choice - 1 >= 0 ? choice - 1 : 2;
    const loseAgainst = () => choice + 1 <= 2 ? choice + 1 : 0;
    return { getChoice, winAgainst, loseAgainst }
}

const getComputerChoice = () => {
    const randomInt = Math.floor(Math.random()*3);
    return Choice(randomInt);
}