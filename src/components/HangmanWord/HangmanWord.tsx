import styles from "./HangmanWord.module.css";

const word = "test";
const triedLetters = ["t", "s", "c"];

function HangmanWord() {
  return (
    <div className={styles.wordsContainer}>
      {word.split("").map((letter, index) => (
        <span className={styles.letter} key={index}>
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
