function guessingGame() {
  let numToGuess = Math.floor(Math.random() * 100);
  let count = 0;
  let gameOver = false;
  return function game(guess) {
    if(gameOver) {
      return `The game is over, you already won!`;
    }

    count++;
    
    while(guess !== numToGuess) {
      if(guess > numToGuess) {
        return `${guess} is too high!`;
      } else {
        return `${guess} is too low!`;
      }
    }
    gameOver = true;
    return `You win! You found ${numToGuess} in ${count} guesses.`
  }
}

module.exports = { guessingGame };
