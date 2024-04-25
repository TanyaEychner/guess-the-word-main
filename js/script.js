const guessedLettersElements = document.querySelector(".guessed-letters");
const guessLetterButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress= document.querySelector(".word-in-progress");
const remainingGuessesElement = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";
const guessedLetters = [];

//display symbols as placeholders for the chosen word's letters

const placeholder = function(word) {
    const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push("●");
}

wordInProgress.innerText = placeholderLetters.join("");
};

placeholder(word);

guessLetterButton.addEventListener("click", function(e) {
e.preventDefault();
//empty message paragraph
message.innerText = "";
//grab what was entered in the input
const guess = letterInput.value;
//make sure that it is a single letter
const goodGuess = validateInput(guess);

//console.log(guess);
if (goodGuess){
    //it's a letter - let's guess
    makeGuess(guess);
}
letterInput.value = "";
});

const validateInput = function(input) {
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === 0) {
        //is the input empty?
    message.innerText = "Oops! You didn't enter a letter.";
    } else if (input.length > 1) {
        //did you type more than one letter?
        message.innerText = "Please enter a single letter.";
    } else if (!input.match(acceptedLetter)) {
        //did you type a non-number?
    message.innerText = "Only enter a letter from A to Z.";
   } else {
    //they added a single letter! Yay!
    return input;
   }
};

const makeGuess = function(guess){
guess = guess.toUpperCase();
if (guessedLetters.includes(guess)) {
    message.innerText = "You already guessed that letter. Try again.";
    } else {
        guessedLetters.push(guess);
        console.log(guessedLetters);
    }
};

