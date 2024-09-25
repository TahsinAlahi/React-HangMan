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

function Keyboard() {
  return (
    <div className={styles.keyboardContainer}>
      {KEYS.map((key, index) => (
        <button className={`${styles.key} `} key={index}>
          {key}
        </button>
      ))}
    </div>
  );
}

export default Keyboard;
