import styles from "./HangmanWord.module.css";

type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  isRevealed?: boolean;
};

function HangmanWord({
  guessedLetters,
  wordToGuess,
  isRevealed = false,
}: HangmanWordProps) {
  return (
    <div className={styles.wordsContainer}>
      {wordToGuess.split("").map((letter, index) => (
        <span className={styles.letter} key={index}>
          <span
            style={{
              visibility:
                guessedLetters.includes(letter) || isRevealed
                  ? "visible"
                  : "hidden",
              color: !guessedLetters.includes(letter) ? "red" : "",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}

export default HangmanWord;
