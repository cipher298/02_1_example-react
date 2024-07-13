import styles from "../Heading/Heading.module.css";
import clsx from "clsx";

function Heading() {
  return (
    <h1
      className={clsx(styles.heading, {
        [styles.active]: true,
      })}
    >
      CSS module
    </h1>
  );
}

export default Heading;
