Hangman Game 🎯

A simple Hangman game built with React + TypeScript.
Guess the letters and try not to hang the man! 🪢

How It Works

The game picks a random word from a list

Type letters on your keyboard or click the on-screen keys

Wrong guesses add parts to the hangman

Correct guesses reveal letters

Press Enter to start a new game

Features

Responsive layout:

Desktop: Game on the left, keyboard on the right

Mobile: Game on top, keyboard below

Track correct and incorrect guesses

Hangman drawing updates as you guess

How to Play Locally

Clone the repo:

git clone <your-repo-url>
cd hangman-react


Install dependencies:

npm install
# or
yarn install


Start the app:

npm start
# or
yarn start


Open http://localhost:3000
 in your browser.

Customize

Add more words in wordList.json

Change max wrong guesses in App.tsx (incorrectLetters.length >= 6)

Update styles in App.css or keyboard.module.css

Have fun guessing! 😎
