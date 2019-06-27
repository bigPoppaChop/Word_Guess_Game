// 
// 
// 
// 

// Var's to hold HTML elements
var goalWordText = document.getElementById("goalWord");
var userChoiceText = document.getElementById("userGuess");
var lettersGuessedText = document.getElementById("lettersGuessed");
var chancesText = document.getElementById("chances");
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");


// Game Data
var possibleWords = ["alchemist", "abbadon", "slark", "viper"];
var chances = 10;
var wins = 0;
var losses = 0;
var wordDisplay = []
var lettersGuessed = [];
var computerGuess = possibleWords[Math.floor(Math.random() * possibleWords.length)];
//add array of alphabet to check key pressed is a letter
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// log win condition for debugging
console.log("the word is " + computerGuess);

// loop that adds "_" to a for computerGuess.length
for (var i = 0; computerGuess.length > i; i++ ){
  wordDisplay.push("_")
};
goalWordText.textContent = wordDisplay.join(" ");



// Key press event Listener
document.onkeyup = function(event){
  var guess =  event.key.toLocaleLowerCase();  
  //If pressed key is not in alphabet array
  if (alphabet.indexOf(guess)=== -1){
    alert("Only guess letters please.");
  }
  // If letter was already guessed
  else if (lettersGuessed.indexOf(guess) > -1 ){
    alert("You've already guessed that key");
  }

  // If letter is NOT in the word
  else if (computerGuess.indexOf(guess) === -1){
    // Decrease number of chances
    chances = chances - 1;
    // Add letter guessed to lettersGuessed array
    lettersGuessed.push(guess);
    lettersGuessedText.textContent = "Letters Guessed: " + lettersGuessed;

    // Update rest of page text
    userChoiceText.textContent = "Your Guess: " + guess;
    chancesText.textContent = "Remaining Guesses: " + chances;
    
    // If the player runs out of guesses
    if (chances === 0){
      losses++;
      winsText.textContent = "Wins: " + wins;
      lossesText.textContent = "Losses: " + losses;

      alert("You lose, refresh to try again")
    }
  }

  // If letter IS in the word
  else if (computerGuess.indexOf(guess) > -1){

    // Update page
    userChoiceText.textContent = "Your Guess: " + guess;
    lettersGuessed.push(guess);
    lettersGuessedText.textContent = "Letters Guessed: " + lettersGuessed;
     
    for (i = 0; computerGuess.length > i; i++){
    // If key pressed is one of the letters in the word
    // replace the "_" with the guessed letter
      if (guess === computerGuess[i]){
        wordDisplay[i] = computerGuess[i];
        goalWordText.textContent = wordDisplay.join(" ");
        if (wordDisplay.indexOf("_") === -1){
          alert("you win");
          wins++;
          winsText.textContent = "Wins: " + wins;
          lossesText.textContent = "Losses: " + losses;
        }
      }
    }
  }
}
