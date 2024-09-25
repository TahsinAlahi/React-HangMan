import styles from "./HangmanWord.module.css";

const word = "test";
const triedLetters = ["t", "s", "c"];

function HangmanWord() {
  return (
    <div className={styles.wordsContainer}>
      {word.split("").map((letter) => (
        <span className={styles.letter}>
          <span
            style={{
              visibility: triedLetters.includes(letter) ? "visible" : "hidden",
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
