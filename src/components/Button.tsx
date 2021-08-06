import React from "react";

import styles from "./button.module.css";

export interface ButtonProps {
  /**
   * Text for the button
   */
  text: string;
  /**
   * Click handler
   */
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  text = "Read more",
  onClick = () => {},
}) => {
  return (
    <button onClick={onClick} className={styles.component}>
      {text}
    </button>
  );
};

export default Button;
