$(document).ready(function) {
    let letterChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

    let wins = 0;
    let losses = 0;
    let numGuesses = 10;
    let userAnswers = [];

    const letterToBeGuessed = computerOptions[Math.floor(Math.random() * computerOptions.length)];

    document.onkeydown = function(event) {
        
    }

//avoid answering the same letter twice
    let isDuplicate = false;
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