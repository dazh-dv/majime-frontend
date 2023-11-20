/* eslint-disable @next/next/no-img-element */
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import styles from "./index.module.css";

export default function CardGroup1({ className }: { className?: string }) {
  if (className) className = " " + className;
  else className = "";

  return (
    <div className={styles.item + className}>
      <div className={styles.cover_group}>
        <img
          src="https://i.ibb.co/6tj3bkc/b9002310cbf9aa7f781e8d55996da839.jpg"
          alt="group cover"
        />
      </div>
      <h3 className={styles.name_group}>Tirano Scan</h3>
      <div className={styles.type_projects}>
        <img
          src="https://i.ibb.co/xDLgsDq/corea-icon-manga-2.jpg"
          alt="Manhwa Icon"
        />
        <span>Manhwa</span>
      </div>
      <button className={styles.view_group}>
        <span>Ver Grupo</span>
        <ChevronRightIcon />
      </button>
    </div>
  );
}
