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


// Possible words and choosing the goal word
var possibleWords = ["a", "be", "cuf", "diey"];
var wordDisplay = ""
var computerGuess = possibleWords[Math.floor(Math.random() * possibleWords.length)];
// log win condition for debugging
console.log("the word is " + computerGuess);

// loop that adds "_" to a for computerGuess.length
for (var i = 0; computerGuess.length > i; i++ ){
  wordDisplay = wordDisplay +  "_";
};
goalWordText.textContent = wordDisplay;


// Key press event Listener
document.onkeyup = function(event){
  var guess =  event.key.toLocaleLowerCase();  
  console.log("User Guess: " + guess);
  // when key is pressed loop through each character of computerGuess   
  for (i = 0; computerGuess.length > i; i++){

    // If key pressed is one of the letters in the word
    // replace the "_" with the guessed letter
    if (guess === computerGuess[i]){
      wordDisplay[i] = guess;
      console.log(wordDisplay);
      goalWordText.textContent = wordDisplay;
    }
    else{
      console.log(false)
    }
  }
}