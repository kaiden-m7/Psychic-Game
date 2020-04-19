
    let letterChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    let winsCounter = 0; //tracks wins
    let lossesCounter = 0; //tracks loses
    let numGuesses = 10; //numbers of guesses left
    let userAnswers = []; //letters chosen by player
    let letterPressed = false; //did the player press a key
    let isDuplicate = false; //did player already choose that letter
    let letToGuessing = null;
    let computerGuess = letterChoices[Math.floor(Math.random() * letterChoices.length)];
    
    let newGuess = function() {
    document.getElementById('#remainingGuesses').innerHTML = "Guesses left: " + guessesLeft;
    };
    
    let pickNewLetter = function() {
    computerGuess = letterChoices[Math.floor(Math.random() * letterChoices.length)];
    };
    
    let soFar = function() {
    document.getElementById('#guessedLetters').innerHTML = "What you he guessed so far: " + userAnswers.join(', ');
    };
    
    let reSet = function() {
    numGuesses = 9;
    userAnswes = [];
    pickNewLetter();
    newGuess();
    soFar();
    }

    pickNewLetter();
    newGuess();
    document.onkeydown = function(event) {
    numGuesses--;
    let whatAreYouGuessing = String.fromCharCode(event.keyCode).toLowerCase();
    userAnswers.push(whatAreYouGuessing);
    newGuess();
    soFar();
    if (numGuesses > 0){
    if (whatAreYouGuessing == computerGuess){
    winnings++;
    document.getElementById('#totalWins').innerHTML = "Wins: " + winsCounter;
    reSet();
    }
    } else if(guessesLeft == 0){
    losed++;
    document.getElementById('#losses').innerHTML = "Losses: " + lossesCounter;
    alert("Sorry! Click another letter to play again!");
    reSet();
    } else (ifDulplicate === true){
        for (let i = 0; i < userAnswers.length; i++) { //for every previous answer
            if ( == userAnswers[i]) { //check if the current answer is a previous one
            isDuplicate = true;
            alert("Try another letter you haven'/t guessed");
            break; //exit loop
    }


    };