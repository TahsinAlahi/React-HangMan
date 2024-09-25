import { useCallback, useState } from "react";
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

  const correctGuessedLetters: string[] = guessedLetters.filter(
    (guessedLetter) => wordToGuess.includes(guessedLetter)
  );

  const handleAddGuessedLetters = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter)) return;
      setGuessedLetters((letters: string[]) => [...letters, letter]);
    },
    [guessedLetters]
  );

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
      <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard
          onAddGuessedLetters={handleAddGuessedLetters}
          wrongGuessedLetters={wrongGuessedLetters}
          correctGuessedLetters={correctGuessedLetters}
        />
      </div>
    </div>
  );
}

export default App;
