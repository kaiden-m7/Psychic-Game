

const computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let wins = 0;
let losses = 0;
let numGuesses = 10;
let remainingGuesses = 10;
let userAnswers = [];
let letterToGuess = null;



//randomly chooses letter to guess 
let compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

let updateGuessesLeft = function() {
  document.getElementById('#remainingGuesses').innerHTML = "Guesses left: " + remainingGuesses;
};

let updateLetterToGuess = function() {
  this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};
let updateGuessesSoFar = function() {
  document.getElementById('#remainingGuesses').innerHTML = "What you have guessed so far: " + guessedLetters.join(', ');
};

let reset = function() {
    numGuesses= 9;
  remainingGuesses = 9;
  userAnswers = [];

  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
}

updateLetterToGuess();
updateGuessesLeft();



document.onkeydown = function(event) {
    remainingGuesses--;
  let userAnswers = String.fromCharCode(event.keyCode).toLowerCase();

  userAnswers.push(userGuess);
  updateGuessesLeft();
  updateGuessesSoFar();

        if (guessesLeft > 0){
            if (userAnswers === letterToGuess){
                wins++;
                document.getElementById('#totalWins').innerHTML = "Wins: " + wins;
                reset();
            } 
        }else (remainingGuesses === 0){
            losses++;
            document.getElementById('#losses').innerHTML = "Losses: " + losses;
            // Then we'll call the reset. 
            reset();
        } else if (isDuplicate === true) {
            for (let i = 0; i < userAnswers.length; i++) { //for every previous answer
                if (currentAnswer == userAnswers[i]) { //check if the current answer is a previous one
                isDuplicate = true;
                alert("Try another letter you haven'/t guessed");
                break; //exit loop
        }
};