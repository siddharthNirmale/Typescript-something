
import { useState } from 'react'
import words from './wordList.json';
import './App.css'
import HangmanDrawing from './components/HangmanDrawing';
import HangManWord from './components/HangManWord';
import Keyboard from './components/Keyboard';

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  console.log(wordToGuess);

  return (
    <div style={{
      maxWidth: "800px",
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
      margin: '0 auto',
      alignItems: 'center',

    }}>
      <div style={{
        fontSize: '2rem',
        fontWeight: 'bold',
        textAlign: 'center',


      }}>
        Lose
        Win
      </div>

      <HangmanDrawing/>
      <HangManWord />
      <Keyboard />
    </div>
  )
}

export default App
