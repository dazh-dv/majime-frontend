import { ChevronRightIcon } from "@heroicons/react/20/solid";
import styles from "./index.module.css";

interface headerSecType {
  title: string;
  to?: string;
  className?: string;
}

export default function HeaderSec({ title, to, className }: headerSecType) {
  if (className) className = " " + className;
  else className = "";

  return (
    <div className={styles.head_sec + className}>
      <h2>{title}</h2>
      {to && (
        <a href={to}>
          <span>ver mas</span>
          <ChevronRightIcon />
        </a>
      )}
    </div>
  );
}
