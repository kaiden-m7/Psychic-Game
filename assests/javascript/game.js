$(document).ready(function) {

    let letterChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    let winsCounter = 0; //tracks wins
    let lossesCounter = 0; //tracks loses
    let numGuesses = 10; //numbers of guesses left
    let userAnswers = []; //letters chosen by player
    

    
    const computerGuess = letterChoices[Math.floor(Math.random() * letterChoices.length)]; //computer randmonly icking a letter
    
   
    document.onkeydown = function(event) {
        var userGuess = event.key;

        if (letterChoices.indexOf(userGuess) > -1){

	        if (guessesLeft !== 0){
			    if ((userGuess !== computerGuess) && (guessesLeft > 0)){
			    	userAnswers.push(userGuess);
                    numGuesses--;
                    lossesCounter++;
			    	document.getElementById("remainingGuesses").innerHTML = "Guesses Remaining: " + guessesLeft + "</p>";
			    	document.getElementById("guessedLetters").innerHTML = "What you have guessed so far: " + lettersGuessed.join(', ');

			    } else if (userGuess === computerGuess){
			    	winsCounter ++;
			    	numGuesses = 10;
			    	document.getElementById("wins").innerHTML = "<p>Wins: " + winCounter + "</p>";
			    	document.getElementById("remainingGuess").innerHTML = "<p>Guesses Left : 10</p>";
			    	document.getElementById("guessedLetters").innerHTML = "<p>Your Guesses so far: </p>";
			    }

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