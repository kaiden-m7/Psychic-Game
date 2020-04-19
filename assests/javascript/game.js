$document.ready(function(){ 

    let letterChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    let winsCounter = 0; //tracks wins
    let lossesCounter = 0; //tracks loses
    let numGuesses = 10; //numbers of guesses left
    let userAnswers = []; //letters chosen by player
    let letterPressed = false; //did the player press a key
    let isDuplicate = false; //did player already choose that letter
    


        function isLetter(event.keypress) { //allow player to start on keypress 
            let userAnswers = [];
            letterPressed = true;
            document.getElementById("#totalWins").innerHTML = 'Wins: ';
            document.getElementById("#losses").innerHTML = 'Losses: ';
            let computerGuess = letterChoices[Math.floor(Math.random() * letterChoices.length)]; //computer randmonly picking a letter
            console.log("Select any letter key to play.");
        
            document.onkeydown = function(event) {
            var userGuess = event.key;

            if (letterChoices.indexOf(userGuess) > -1){ 

                    if (guessesLeft !== 0){ //if letter chosen is not computers guess 
                    if ((userGuess !== computerGuess) && (numGuesses > 0)){
			    	userAnswers.push(userGuess);
                    numGuesses--;
                    lossesCounter++;
			    	document.getElementById("remainingGuesses").innerHTML = "Guesses Remaining: " + guessesLeft;
                    document.getElementById("guessedLetters").innerHTML = "What you have guessed so far: " + lettersGuessed.join(', ');
                    
                    } else if (userGuess === computerGuess){ //if letter chosen is computer guess
			    	winsCounter ++;
			    	numGuesses = 10;
			    	document.getElementById("wins").innerHTML = "Wins: " + winCounter;
			    	document.getElementById("remainingGuess").innerHTML = "Guesses Left : 10";
                    document.getElementById("guessedLetters").innerHTML = "Your Guesses so far: ";
                    reSet ()
			        }

                
                    for (let i = 0; i < userAnswers.length; i++) { //for every previous answer
                    if (currentAnswer == userAnswers[i]) { //check if the current answer is a previous one
                    isDuplicate = true;
                    alert("Try another letter you haven'/t guessed");
                    break; //exit loop
                        }
                    }
                }
            }   

    }
}

     function reSet () {
    numGuesses = 10;
    userAnswers = [];
    computerGuess =  letterChoices[Math.floor(Math.random() * letterChoices.length)];
    }   

});




