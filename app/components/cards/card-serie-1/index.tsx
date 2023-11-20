/* eslint-disable @next/next/no-img-element */
import { EyeIcon, StarIcon } from "@heroicons/react/20/solid";
import styles from "./index.module.css";

export default function Card1({ className }: { className?: string }) {
  if (className) className = " " + className;
  else className = "";

  return (
    <article className={styles.item + className}>
      <a href="#" className={styles.cover_container}>
        <img src="https://i.ibb.co/DLfvNYD/cover-2.jpg" alt="Serie cover" />
        <div className={styles.type_serie}>
          <img
            src="https://i.ibb.co/xDLgsDq/corea-icon-manga-2.jpg"
            alt="Manhwa Icon"
          />
          <span>Manhwa</span>
        </div>
      </a>
      <div className={styles.second_info}>
        <div className={styles.rate_info}>
          <div className="d-flex align-items-center ">
            <StarIcon className={styles.star_active} />
            <StarIcon className={styles.star_active} />
            <StarIcon className={styles.star_active} />
            <StarIcon className={styles.star_active} />
            <StarIcon className={styles.star_inactive} />
          </div>
          <span>4.5</span>
        </div>
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
