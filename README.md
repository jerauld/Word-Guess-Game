# Pokemon Hangman

## Overview

Pokemon Hangman was created for the Word Guess Game homework assignment for Berkeley Coding Bootcamp and features dynamically updated HTML and CSS powered by Javascript running in a browser.

## Requirements

- Choose a theme for your game.
- Use key events to listen for the letters that your players will type.
- Display the following on the page:
    - The phrase “Press any key to get started!”
    - Wins: (# of times of user guessed the word correctly).
    - If the word is ‘madonna’, display it like this when the game starts `_ _ _ _ _ _ _`.
    - As the user guesses the correct letters, reveal them: `m a d o _ _ a`.
    - 

Number of Guesses Remaining: (# of guess remaining for the user).

**Note: Since the video demo shows ‘Guesses Remaining’ reducing by one only when the user guesses incorrectly, I chose to implement the same concept.**

    - Letters already guessed: (Letters the user has guessed, displayed like `L Z Y H`).
    - After the user wins/loses the game should automatically choose another word and make the user play it.

**Note: In the animated Pokemon series, viewers were sometimes asked to “Name that Pokemon” with a silhouette as a hint, then revealed after commercial break. I utilized a similar hint in my game with the initial image as the Pokemon silhouette and the Pokemon revealed regardless whether the user solved the word. Therefore, I chose not to auto-generate a new word as its implementation didn’t make sense for my game. Instead, the user can simply press any key to proceed to the next round.**

## Screenshots

<img src="https://raw.githubusercontent.com/julienshim/Word-Guess-Game/master/assets/images/screenshot-guess.png" width="500" />

<img src="https://raw.githubusercontent.com/julienshim/Word-Guess-Game/master/assets/images/screenshot-reveal.png" width="500" />
