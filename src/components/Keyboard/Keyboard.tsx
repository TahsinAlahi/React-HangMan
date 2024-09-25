import styles from "./Keyboard.module.css";

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type KeyboardProps = {
  onAddGuessedLetters: (letter: string) => void;
};

function Keyboard({ onAddGuessedLetters }: KeyboardProps) {
  return (
    <div className={styles.keyboardContainer}>
      {KEYS.map((key, index) => (
        <button
          className={`${styles.key} `}
          key={index}
          onClick={() => onAddGuessedLetters(key)}
        >
          {key}
        </button>
      ))}
    </div>
  );
}

export default Keyboard;
