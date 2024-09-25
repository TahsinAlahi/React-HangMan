import styles from "./HangmanDrawing.module.css";

const HEAD = <div className={styles.head} />;
const BODY = <div className={styles.body} />;
const RIGHT_ARM = <div className={styles.rightArm} />;
const LEFT_ARM = <div className={styles.leftArm} />;
const RIGHT_LEG = <div className={styles.rightLeg} />;
const LEFT_LEG = <div className={styles.leftLeg} />;

function HangmanDrawing() {
  return (
    <div className={styles.drawingContainer}>
      {/* hang stand */}
      <div className={styles.rope} />
      <div className={styles.handle} />
      <div className={styles.bar} />
      <div className={styles.stand} />
    </div>
  );
}

export default HangmanDrawing;
