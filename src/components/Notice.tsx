import React from "react";

import styles from "./notice.module.css";
import Button from "./Button";

export interface NoticeProps {
  /**
   * Title for the notice
   */
  title: string;
  /**
   * Text for the notice
   */
  text?: string;
  /**
   * Level of intensity
   */
  level: "neutral" | "warning" | "error";
  /**
   * Text of the close button
   */
  buttonText?: string;
  /**
   * Close callback function
   */
  onClose?: () => void;
}

const Notice: React.FC<NoticeProps> = ({
  title,
  text,
  level = "neutral",
  buttonText = "Close",
  onClose = () => {},
}) => {
  return (
    <div className={`${styles.component} ${styles[level]}`}>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        {text && <p className={styles.text}>{text}</p>}
      </div>
      <Button text={buttonText} onClick={onClose} />
    </div>
  );
};

export default Notice;
