import React from "react";
import styles from "./HangmanDrawing.module.css";

const HEAD = <div className={styles.head} />;
const BODY = <div className={styles.body} />;
const RIGHT_ARM = <div className={styles.rightArm} />;
const LEFT_ARM = <div className={styles.leftArm} />;
const RIGHT_LEG = <div className={styles.rightLeg} />;
const LEFT_LEG = <div className={styles.leftLeg} />;

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberOfWrongGuess: number;
};

function HangmanDrawing({ numberOfWrongGuess }: HangmanDrawingProps) {
  return (
    <div className={styles.drawingContainer}>
      {/* it works perfectly with only BODY_PARTS.slice(0, 5) but react yells for key*/}
      {BODY_PARTS.slice(0, numberOfWrongGuess).map((part, index) => (
        // react fragment shorthand <></> doesn't take key value
        <React.Fragment key={index}>{part}</React.Fragment>
      ))}

      {/* hang stand */}
      <div className={styles.rope} />
      <div className={styles.handle} />
      <div className={styles.bar} />
      <div className={styles.stand} />
    </div>
  );
}

export default HangmanDrawing;
