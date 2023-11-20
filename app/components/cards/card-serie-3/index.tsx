/* eslint-disable @next/next/no-img-element */
import { EyeIcon } from "@heroicons/react/20/solid";
import styles from "./index.module.css";

export default function Card3({ className }: { className?: string }) {
  if (className) className = " " + className;
  else className = "";

  return (
    <article className={styles.item + className}>
      <div className={styles.cover}>
        <img src="https://i.ibb.co/DLfvNYD/cover-2.jpg" alt="Serie cover" />
        <div className={styles.publisher}>
          <img
            src="https://i.ibb.co/xDLgsDq/corea-icon-manga-2.jpg"
            alt="Manhwa Icon"
          />
          <span>Manhwa</span>
        </div>
        <div className={styles.text_new_serie}>Nuevo Estreno</div>
      </div>
      <div className={styles.common_info}>
        <span>Cada Miercoles</span>
        <div className={styles.type_serie}>
          <img
            src="https://i.ibb.co/xDLgsDq/corea-icon-manga-2.jpg"
            alt="Manhwa Icon"
          />
          <span>Manhwa</span>
        </div>
      </div>
      <div className={styles.details_serie}>
        <a href="#" className={styles.title_serie}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </a>
        <div className={styles.container_extra_info}>
          <span className={styles.info_extra}>
            Géneros: Romance, shoujo, Fantasía, Beencarnación, Comedia, Tragedia
          </span>
          <span className={styles.info_extra}>Grupo: Tiranos Scan</span>
        </div>
        <button className={styles.view_serie}>
          <EyeIcon />
          <span>Ver proyecto</span>
          <span></span>
        </button>
      </div>
    </article>
  );
}
