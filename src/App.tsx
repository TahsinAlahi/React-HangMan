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
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1.5rem",
        width: "50%",
        maxWidth: "800px",
        height: "100vh",
        margin: "0 auto",
        padding: "1rem",
      }}
    >
      <div
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
        }}
      >
        Win or Lose
      </div>
      <HangmanDrawing />
      <HangmanWord />
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
