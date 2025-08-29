import { useCallback, useEffect, useState } from 'react'
import words from './wordList.json'
import './App.css'
import { HangManDrawing } from './components/HangManDrawing'
import { HangManWord } from './components/HangManWord'
import { Keyboard } from './components/Keyboard'

function getWord() {
  return words[Math.floor(Math.random() * words.length)]
}

function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord)
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const incorrectLetters = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  )

  const isLoser = incorrectLetters.length >= 6
  const isWinner = wordToGuess.split('').every(letter => guessedLetters.includes(letter))

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return
      setGuessedLetters(currentLetters => [...currentLetters, letter])
    },
    [guessedLetters, isLoser, isWinner]
  )

  // Reset game on Enter
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase()
      if (key !== 'enter') return
      e.preventDefault()
      setGuessedLetters([])
      setWordToGuess(getWord())
    }

    document.addEventListener('keypress', handler)
    return () => {
      document.removeEventListener('keypress', handler)
    }
  }, [])

  // Listen for letter key presses
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase()
      if (!key.match(/^[a-z]$/)) return
      e.preventDefault()
      addGuessedLetter(key)
    }

    document.addEventListener('keypress', handler)
    return () => {
      document.removeEventListener('keypress', handler)
    }
  }, [guessedLetters, addGuessedLetter])

  return (
    <div className="app-container">
      {/* Game side */}
      <div className="game-section">
        <div className="status-text">
          {isWinner && 'Winner! 🎉 Press Enter to play again'}
          {isLoser && 'Game Over 💀 Press Enter to play again'}
          {!isWinner && !isLoser && 'Keep Guessing!'}
        </div>

        <HangManDrawing numberOfGuesses={incorrectLetters.length} />
        <HangManWord reveal={isLoser} guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
      </div>

      {/* Keyboard side */}
      <div className="keyboard-section">
        <Keyboard
          disabled={isWinner || isLoser}
          activeLetters={guessedLetters.filter(letter => wordToGuess.includes(letter))}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </div>
  )
}

export default App
