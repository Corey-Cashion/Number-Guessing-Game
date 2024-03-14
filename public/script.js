function runGame() {
    let guessString = ""; 
    let guessNumber = 0;
    let correct = false;
    let numTries = 0;

    const randomNumber = Math.random() * 100;
    const randomInteger = Math.floor(randomNumber);
    const target = randomInteger + 1;

    do {
        guessString = prompt('I am thinking of a number in the range of 1 to 100.\n\nWhat is the number?');
        guessNumber = +guessString;
        numTries += 1;
        correct = checkGuess(guessNumber, target);
    } while (!correct);

    alert('You guessed the number! The number was ' + target + '.\n\nYou guessed ' + numTries + ' times before guessing the number I was thinking of.');
}

function checkGuess(guessNumber, target) {
    let correct = false;

    if (isNaN(guessNumber)) {
        alert('You have not entered a number.\n\nPlease enter a number in the range of 1 to 100.');
    } else if (guessNumber < 1 || guessNumber > 100) {
        alert('Please enter a number between 1 and 100');
    } else if (guessNumber > target) {
        alert('Your number is greater than the number I am thinking of');
    } else if (guessNumber < target) {
        alert('Your number is less than the number I am thinking of');
    } else {
        correct = true;
    }

    return correct;
}
