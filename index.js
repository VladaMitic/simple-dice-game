function getRandomNumber() {
    const random = Math.floor(Math.random() * 6) + 1;
    return random;
}

function rollDices() {
    const dice1 = document.querySelector('.img1');
    const dice2 = document.querySelector('.img2');
    const playerOneRoll = getRandomNumber();
    const playerTwoRoll = getRandomNumber()
    dice1.setAttribute('src', `images/dice${playerOneRoll}.png`);
    dice2.setAttribute('src', `images/dice${playerTwoRoll}.png`);
    renderWiner(playerOneRoll, playerTwoRoll);
}

function renderWiner (firstPlayerRoll, secondPlayerRoll) {
    const title = document.querySelector('h1');
    if(firstPlayerRoll > secondPlayerRoll) {
        title.textContent = "Player one wins!"
    } else if (firstPlayerRoll === secondPlayerRoll) {
        title.textContent = "Draw!"
    } else {
        title.textContent = "Player two wins!"
    }
}
rollDices();