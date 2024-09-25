import { useState } from "react";
import words from "./wordList.json";
import HangmanDrawing from "./components/HangmanDrawing/HangmanDrawing";
import HangmanWord from "./components/HangmanWord/HangmanWord";
import Keyboard from "./components/Keyboard/Keyboard";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const wrongGuessedLetters: string[] = guessedLetters.filter(
    (guessedLetter) => !wordToGuess.includes(guessedLetter)
  );

  function handleAddGuessedLetters(letter: string) {
    setGuessedLetters((letters: string[]) => [...letters, letter]);
  }

  return (
    <div className="container">
      <div
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
        }}
      >
        Win or Lose
      </div>
      <HangmanDrawing numberOfWrongGuess={wrongGuessedLetters.length} />
      <HangmanWord />
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard onAddGuessedLetters={handleAddGuessedLetters} />
      </div>
    </div>
  );
}

export default App;
