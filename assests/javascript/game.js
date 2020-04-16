$(document).ready(function) {

    let letterChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    let winsCounter = 0; //tracks wins
    let lossesCounter = 0; //tracks loses
    let numGuesses = 10; //numbers of guesses left
    let userAnswers = []; //letters chosen by player
    let counter = 0; //counting numbers of wins/loses

    
    const computerGuess = letterChoices[Math.floor(Math.random() * letterChoices.length)]; //computer randmonly icking a letter
    
    let userGuess = event.key //indicating user is using letters on keyboard

   
   
    document.onkeydown = function(event) { //once key is 'pressed' it becomes players answer
    numGuesses--;
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    userAnswers.push(userGuess);
        updateGuessesLeft();
        updateGuessesSoFar();

        if (guessesLeft > 0){ //if users guess matches computer guess 
            if (userGuess == letterToGuess){
                wins++;
                document.getElementById('#totalWins').innerHTML = "Wins: " + wins;
    
            }
        }else if(guessesLeft == 0){ //if users guess does not match computer guess
            losses++;
            document.getElementById('#losses').innerHTML = "Losses: " + losses;
        }
    };
    let updateGuessesLeft = function() { //getting userAnswers from user 
    document.getElementById('#remainingGuesses').innerHTML = "Guesses Remaining: " + numGuesses;
  };

    let updateGuessesSoFar = function() { //showing users answers and seperateing by a comma with a space
    document.getElementById('#guessedLetters').innerHTML = "What you have guessed so far: " + userAnswers.join(', ');
  };

    let isDuplicate = false; //avoid answering the same letter twice
    for (let i = 0; i < userAnswers.length; i++) { //for every previous answer
    if (currentAnswer == userAnswers[i]) { //check if the current answer is a previous one
        isDuplicate = true;
        break; //exit loop
        }
    }
    if (!isDuplicate) { //different than previous
    userAnswers[userAnswers.length] = currentAnswer;
    
    }









}