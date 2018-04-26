/* INITAL SETUP
 ----------------------------------------------------------------------------------------------------------------*/

//Array of pokemon objects each with words (name), image1 (Pokemon Silhouettes), image2 (Pokemon Reveal)
var pokemonArray = [
    {
        word: "greninja",
        image1: "assets/images/658greninja-b.png",
        image2: "assets/images/658greninja.png"
    },
    {
        word: "arceus",
        image1: "assets/images/493arceus-b.png",
        image2: "assets/images/493arceus.png"
    },
    {
        word: "mew",
        image1: "assets/images/151mew-b.png",
        image2: "assets/images/151mew.png"
    },
    {
        word: "pikachu",
        image1: "assets/images/025pikachu-b.png",
        image2: "assets/images/025pikachu.png"
    },
    {
        word: "sylveon",
        image1: "assets/images/700sylveon-b.png",
        image2: "assets/images/700sylveon.png"
    },
    {
        word: "charizard",
        image1: "assets/images/006charizard-b.png",
        image2: "assets/images/006charizard.png"
    },
    {
        word: "genesect",
        image1: "assets/images/649genesect-b.png",
        image2: "assets/images/649genesect.png"
    },
    {
        word: "rayquaza",
        image1: "assets/images/384rayquaza-b.png",
        image2: "assets/images/384rayquaza.png"
    },
    {
        word: "meloetta",
        image1: "assets/images/648meloetta-b.png",
        image2: "assets/images/648meloetta.png"
    },
    {
        word: "zygarde",
        image1: "assets/images/718zygarde-b.png",
        image2: "assets/images/718zygarde.png"
    },
    {
        word: "mewtwo",
        image1: "assets/images/150mewtwo-b.png",
        image2: "assets/images/150mewtwo.png"
    },
    {
        word: "eevee",
        image1: "assets/images/133eevee-b.png",
        image2: "assets/images/133eevee.png"
    },
    {
        word: "jirachi",
        image1: "assets/images/385jirachi-b.png",
        image2: "assets/images/385jirachi.png"
    },
    {
        word: "darkrai",
        image1: "assets/images/491darkrai-b.png",
        image2: "assets/images/491darkrai.png"
    },
    {
        word: "lucario",
        image1: "assets/images/448lucario-b.png",
        image2: "assets/images/448lucario.png"
    },
    {
        word: "diancie",
        image1: "assets/images/719diancie-b.png",
        image2: "assets/images/719diancie.png"
    },
    {
        word: "hoopa",
        image1: "assets/images/720hoopa-b.png",
        image2: "assets/images/720hoopa.png"
    },
    {
        word: "keldeo",
        image1: "assets/images/647keldeo-b.png",
        image2: "assets/images/647keldeo.png"
    },
    {
        word: "victini",
        image1: "assets/images/494victini-b.png",
        image2: "assets/images/494victini.png"
    },
    {
        word: "manaphy",
        image1: "assets/images/490manaphy-b.png",
        image2: "assets/images/490manaphy.png"
    },
    {
        word: "reshiram",
        image1: "assets/images/643reshiram-b.png",
        image2: "assets/images/643reshiram.png"
    },
    {
        word: "kyogre",
        image1: "assets/images/382kyogre-b.png",
        image2: "assets/images/382kyogre.png"
    },
    {
        word: "kyurem",
        image1: "assets/images/646kyurem-b.png",
        image2: "assets/images/646kyurem.png"
    },
    {
        word: "magnemite",
        image1: "assets/images/081magnemite-b.png",
        image2: "assets/images/081magnemite.png"
    },
    {
        word: "shaymin",
        image1: "assets/images/492shaymin-b.png",
        image2: "assets/images/492shaymin.png"
    }]

//gameStatus is my start/stop controller between questions    
var gameStatus = false;

//Generate randomNumber
var randomNumber = Math.floor(Math.random() * pokemonArray.length);

//Apply randomNumber to obtain random word (answer), and related images.
var pokemon = pokemonArray[randomNumber].word;
var pokemonImage1 = pokemonArray[randomNumber].image1
var pokemonImage2 = pokemonArray[randomNumber].image2

//Establish lettersRemaining (for win);
var lettersRemaining = pokemon.length;

//Set up the answer array to store word (answer) as an array for indexing.
var answerArray = []; 

/* LISTENERS
 ----------------------------------------------------------------------------------------------------------------*/

//Use key events to listen for the letters that your players will type.
document.addEventListener("keyup", function(event){
    //If gameStatus (or game round) has been initialized, then proceed to playing.
    if(gameStatus) {
        letterCheck(event);
    } else {
        //If gameStatus (or game round) has completed, re-initialize (or reset) the game.
        init();
    }
});

//Setup alphabet array for letter checking
var alphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function letterCheck(guess) {
    //If letter key is press, check if the letter pressed is in the answer.
    if (alphabetArray.indexOf(guess.key) > -1) {
        correctGuessCheck(guess);
    }
}

//Check whether the guess is correct
var winScore = 0;
function correctGuessCheck(guess) {
    if (pokemon.indexOf(guess.key) > -1) {
        //if guess is correct, run correctGuess function.
        correctGuess(guess);
    } else {
        //If guess is incorrect, run incorrectGuess function.
        incorrectGuess(guess);
    }
}

function correctGuess(guess) {
    if (answerArray.indexOf(guess.key.toUpperCase()) < 0) {
        //If the correctGuess doesn't exist in the answerArray, run addCorrectLetter function.
        addCorrectLetter(guess);
    }
}

function addCorrectLetter(guess) {
    for (var j = 0; j < pokemon.length; j++) {
        //If guess matches an existing letter in the answer.
        if (guess.key === pokemon[j]) {
            //Push correct letter to answerArray as upperCase.
            answerArray[j] = guess.key.toUpperCase();
            displayCurrentWord();
            //Reduce letters remaining for win by one.
            lettersRemaining--;
            //If letters left has reached 0, user wins. 
            if (lettersRemaining === 0) {
                //Add 1 to win score.
                winScore++;
                //Display new win score.
                displayWins();
                //Reveal the Pokemon's identiy.
                changeImage();
                //Turn correct answer green.
                addCorrect();
                //display currentWord with new green font.
                displayCurrentWord();
            }
        }
    }
}

//Set up an incorrect answer array
var incorrectGuessesMade = [];
//Establish the number of guesses.
var guessesLeft = 9;

function incorrectGuess(guess) {
    if (incorrectGuessesMade.indexOf(guess.key.toUpperCase()) < 0) {
        //If the inCorrectGuess doesn't exist in the answerArray, run addIncorrectLetter function.
        addIncorrectLetter(guess);
    }
}

function addIncorrectLetter(guess) {
    //Push incorrect guess into the incorrectGuessesMade array
    incorrectGuessesMade.push(guess.key.toUpperCase());
    //Inform user of incorrectGuessesMade
    displayGuessesMade();
    //Lower guessesLeft by 1
    guessesLeft--;
    //Inform user of guessesLeft
    displayGuessesLeft();
    if (guessesLeft === 0) {
        //If guesses left reaches equals 0, then Game Over.
        changeImage();
        //Display corrent answer.
        displayAnswer();
    }
}

/* HANDLERS
----------------------------------------------------------------------------------------------------------------*/

//Displays the number of wins user has obtains.
function displayWins() {
    var winsDisplay = document.querySelector("#winsDisplay");
    winsDisplay.textContent = winScore;
}

//Displays the letters the user has guessed.
function displayGuessesMade() {
    var guessesMadeDisplay = document.querySelector("#guessesMadeDisplay");
    guessesMadeDisplay.textContent = incorrectGuessesMade.join(", ");
}

//Displays how many user guesses are left.
function displayGuessesLeft() {
    var guessesLeftDisplay = document.querySelector("#guessesLeftDisplay");
    guessesLeftDisplay.textContent = guessesLeft;
}

//Displays current solve status of answerArray.
function displayCurrentWord() {
    var currentWordDisplay = document.querySelector("#currentWordDisplay");
    currentWordDisplay.innerHTML = answerArray.join(" ");
}

//Displays silhouette of Pokemon when game initalizes.
function displayImage() {
    var pictureDisplay = document.querySelector("#pictureDisplay");
    pictureDisplay.src = pokemonImage1;
}

//Reveals Pokemon identiy regardless of whether user was able to solve. 
function changeImage() {
    var pictureDisplay = document.querySelector("#pictureDisplay");
    pictureDisplay.src = pokemonImage2;
    gameStatus = false;
}

//Reveals answer if user is unable to solve.
function displayAnswer() {
    var revealedAnswerDisplay = document.querySelector("#revealedAnswerDisplay");
    revealedAnswerDisplay.textContent = pokemon.toUpperCase();
}

//Turns current word green (to indicate correctness)
function addCorrect() {
    var currentWordDisplay = document.querySelector("#currentWordDisplay");
    currentWordDisplay.classList.add('correct');
}

//Removes green color of current word (for re-initalizing purposes)
function removeCorrect() {
    var currentWordDisplay = document.querySelector("#currentWordDisplay");
    currentWordDisplay.classList.remove('correct');
}


/* Initalize (or re-initialize) the game.
----------------------------------------------------------------------------------------------------------------*/

function init() {
    //Changes gameStatus to ready.
    gameStatus = true;
    
    //Generate a new random number
    randomNumber = Math.floor(Math.random() * pokemonArray.length);
    
    //Apply new randomNumber to obtain random word (answer), and related images.
    pokemon = pokemonArray[randomNumber].word;
    pokemonImage1 = pokemonArray[randomNumber].image1
    pokemonImage2 = pokemonArray[randomNumber].image2

    //Re-establish lettersRemaining (for win);
    lettersRemaining = pokemon.length;

    //Re-establish answer array.
     answerArray = []; 

    //Convert word answer into an array.
    for (var i = 0; i < pokemon.length; i++) {
        //If an answer has more than one word, use + as a separator. A space will be displayed when currentWord is displayed. Not applicable for this particlar Pokemon game, but here for flexibility.
        if (pokemon[i] === "+") {
            answerArray[i] = "&nbsp;";
        } else {
            //Replace word answer with "_"s
            answerArray[i] = "_";
        }
    }

    //Re-establish lettersRemaining (for win)
    lettersRemaining = pokemon.length;

    //Re-establish guessesLeft for user.
    guessesLeft = 9;
    displayGuessesLeft()

    //Re-establish guessesMade array.
    incorrectGuessesMade = [];
    displayGuessesMade()
    
    //Display current word.
    displayCurrentWord();

    //Display Pokemon silhouette.
    displayImage();

    //Empty revealedAnswer display if user was unsuccessful previously.
    revealedAnswerDisplay.textContent = "";

    //Play "Who's that pokemon?" audio.
    document.getElementById('whosThat').play();

    //Remove greenColor from currentWord if user was successful previously.
    removeCorrect();
}