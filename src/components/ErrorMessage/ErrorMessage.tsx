import type { ReactNode } from "react";

import styles from "./ErrorMessage.module.css";

interface ErrorMessageProps {
  children: ReactNode;
}

const ErrorMessage = ({ children }: ErrorMessageProps) => {
  return <p className={styles.error}>{children}</p>;
};

export default ErrorMessage;
