import { useCallback, useEffect, useState } from "react";
import words from "./wordList.json";
import HangmanDrawing from "./components/HangmanDrawing/HangmanDrawing";
import HangmanWord from "./components/HangmanWord/HangmanWord";
import Keyboard from "./components/Keyboard/Keyboard";

function getWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord);

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const wrongGuessedLetters: string[] = guessedLetters.filter(
    (guessedLetter) => !wordToGuess.includes(guessedLetter)
  );

  const correctGuessedLetters: string[] = guessedLetters.filter(
    (guessedLetter) => wordToGuess.includes(guessedLetter)
  );

  const isLoser = wrongGuessedLetters.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const handleAddGuessedLetters = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter)) return;
      setGuessedLetters((letters: string[]) => [...letters, letter]);
    },
    [guessedLetters]
  );

  useEffect(() => {
    function handleEvent(e: KeyboardEvent) {
      if (e.key !== "Enter") return;

      e.preventDefault();
      setGuessedLetters([]);
      setWordToGuess(getWord());
    }

    document.addEventListener("keydown", handleEvent);

    return () => {
      document.removeEventListener("keydown", handleEvent);
    };
  }, []);

  return (
    <div className="container">
      <div
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
        }}
      >
        {isLoser ? "You Lost! Try again!" : ""}
        {isWinner ? "You Won! Try again by refreshing." : ""}
      </div>
      <HangmanDrawing numberOfWrongGuess={wrongGuessedLetters.length} />
      <HangmanWord
        isRevealed={isLoser}
        guessedLetters={guessedLetters}
        wordToGuess={wordToGuess}
      />
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard
          disabled={isWinner || isLoser}
          onAddGuessedLetters={handleAddGuessedLetters}
          wrongGuessedLetters={wrongGuessedLetters}
          correctGuessedLetters={correctGuessedLetters}
        />
      </div>
    </div>
  );
}

export default App;
