let computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let wins = 0;
let losses = 0;
let numGuesses = 10;
let remainingGuesses = 10;
let userAnswers = [];




//randomly chooses letter to guess 
let compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];



let reset = function() {
  numGuesses= 9;
  remainingGuesses = 9;
  userAnswers = [];
  
}





document.onkeydown = function(event) {
  remainingGuesses--;
  let userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  userAnswers.push(userGuess);
  

        if (numGuesses > 0) {
            if (userAnswers === compGuess){
                wins++;
                document.getElementById('#totalWins').innerHTML = "Wins: " + wins;
                reset();
            } 
        } else if (numGuesses === 0) {
            if (userAnswers !== compGuess){
            losses ++;
            document.getElementById('#remainingGuesses').innerHTML = "What you have guessed so far: " + userAnswers; 
            }
        } else if (remainingGuesses === -1) {
            losses++;
            document.getElementById('#losses').innerHTML = "Losses: " + losses; 
            alert ('I am sorry, you are not psychic, but try again!')
            reset();
        }

};
