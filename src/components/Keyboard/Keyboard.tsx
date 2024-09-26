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
  correctGuessedLetters: string[];
  wrongGuessedLetters: string[];
  onAddGuessedLetters: (letter: string) => void;
  disabled: boolean;
};

function Keyboard({
  correctGuessedLetters,
  wrongGuessedLetters,
  onAddGuessedLetters,
  disabled,
}: KeyboardProps) {
  return (
    <div className={styles.keyboardContainer}>
      {KEYS.map((key, index) => {
        const isDisabled =
          correctGuessedLetters.includes(key) ||
          wrongGuessedLetters.includes(key) ||
          disabled;

        const activeOrInactive = correctGuessedLetters.includes(key)
          ? styles.active
          : wrongGuessedLetters.includes(key)
          ? styles.inactive
          : "";

        return (
          <button
            disabled={isDisabled}
            className={`${styles.key}  ${activeOrInactive} `}
            key={index}
            onClick={() => onAddGuessedLetters(key)}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}

export default Keyboard;
