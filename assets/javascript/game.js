/* INITAL SETUP
 ----------------------------------------------------------------------------------------------------------------*/

//Create an array of words
var dwarfArray = [
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

//Pick random
var randomNumber = Math.floor(Math.random() * dwarfArray.length);
var gameStatus = false;
var dwarf = dwarfArray[randomNumber].word;
var dwarfImage1 = dwarfArray[randomNumber].image1
var dwarfImage2 = dwarfArray[randomNumber].image2

var lettersRemaining = dwarf.length;

//Set up the answer array
var answerArray = []; 

// init();

/* LISTENERS
 ----------------------------------------------------------------------------------------------------------------*/

//Use key events to listen for the letters that your players will type.
document.addEventListener("keyup", function(event){
    if(gameStatus) {
        letterCheck(event);
    } else {
        init();
    }
});

//Check if the key pressed is a letter

var alphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function letterCheck(guess) {
    if (alphabetArray.indexOf(guess.key) > -1) {
        correctGuessCheck(guess);
    }
}

//Check whether the guess is correct
var winScore = 0;
function correctGuessCheck(guess) {
    if (dwarf.indexOf(guess.key) > -1) {
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
    for (var j = 0; j < dwarf.length; j++) {
        if (guess.key === dwarf[j]) {
            answerArray[j] = guess.key.toUpperCase();
            displayCurrentWord();
            lettersRemaining--;
            console.log(lettersRemaining);
            if (lettersRemaining === 0) {
                winScore++;
                displayWins();
                changeImage();
                addCorrect();
                displayCurrentWord();
            }
        }
    }
}

//Set up an incorrect answer array

var incorrectGuessesMade = [];
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
        displayAnswer();
    }
}

/* HANDLERS
----------------------------------------------------------------------------------------------------------------*/

function displayWins() {
    var winsDisplay = document.querySelector("#winsDisplay");
    winsDisplay.textContent = winScore;
}

function displayGuessesMade() {
    var guessesMadeDisplay = document.querySelector("#guessesMadeDisplay");
    guessesMadeDisplay.textContent = incorrectGuessesMade.join(", ");
}

function displayGuessesLeft() {
    var guessesLeftDisplay = document.querySelector("#guessesLeftDisplay");
    guessesLeftDisplay.textContent = guessesLeft;
}

function displayCurrentWord() {
    var currentWordDisplay = document.querySelector("#currentWordDisplay");
    currentWordDisplay.innerHTML = answerArray.join(" ");
}

function displayImage() {
    var pictureDisplay = document.querySelector("#pictureDisplay");
    pictureDisplay.src = dwarfImage1;
}

function changeImage() {
    var pictureDisplay = document.querySelector("#pictureDisplay");
    pictureDisplay.src = dwarfImage2;
    gameStatus = false;
}

function displayAnswer() {
    var revealedAnswerDisplay = document.querySelector("#revealedAnswerDisplay");
    revealedAnswerDisplay.textContent = dwarf.toUpperCase();
}

function addCorrect() {
    var currentWordDisplay = document.querySelector("#currentWordDisplay");
    currentWordDisplay.classList.add('correct');
}

function removeCorrect() {
    var currentWordDisplay = document.querySelector("#currentWordDisplay");
    currentWordDisplay.classList.remove('correct');
}


// Re-initalize the game.

function init() {
    //Pick random
    randomNumber = Math.floor(Math.random() * dwarfArray.length);
    gameStatus = true;
    dwarf = dwarfArray[randomNumber].word;
    dwarfImage1 = dwarfArray[randomNumber].image1
    dwarfImage2 = dwarfArray[randomNumber].image2

    lettersRemaining = dwarf.length;

    //Set up the answer array
     answerArray = []; 

    for (var i = 0; i < dwarf.length; i++) {
        //If the word is 'madonna', display it like this when the game starts. '_ _ _ _ _ _ _'
        if (dwarf[i] === "+") {
            answerArray[i] = "&nbsp;";
        } else {
            answerArray[i] = "_";
        }
    }

    lettersRemaining = dwarf.length;

    guessesLeft = 9;
    displayGuessesLeft()

    incorrectGuessesMade = [];
    displayGuessesMade()

    displayCurrentWord();
    displayImage();

    revealedAnswerDisplay.textContent = "";
    document.getElementById('whosThat').play();

    removeCorrect();
}