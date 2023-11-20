/* eslint-disable @next/next/no-img-element */
import { EyeIcon } from "@heroicons/react/24/solid";
import styles from "./index.module.css";
import { StarIcon } from "@heroicons/react/24/outline";

export default function Card2({ className }: { className?: string }) {
  if (className) className = " " + className;
  else className = "";

  return (
    <article className={styles.item + className}>
      <div className={styles.container_one}>
        <div className={styles.cover}>
          <img src="https://i.ibb.co/WGbTHw2/Rectangle-25.png" alt="cover" />
        </div>
        <div className={styles.info}>
          <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit</h3>
          <div>
            <div className={styles.extra_info}>
              <span>Estado :</span> Activo
            </div>
            <div className={styles.extra_info}>
              <span>Grupo :</span> Tirano Scan
            </div>
            <div className={styles.extra_info}>
              <span>Generos :</span> Venganza, Reencarnación
            </div>
          </div>
        </div>
      </div>
      <div className={styles.chapters_container}>
        {Array.from({ length: 2 }).map((x, i) => (
          <div key={i} className={styles.chapter_item}>
            <div className={styles.chapter_title}>
              <EyeIcon />
              <span>Capitulo {i + 1}</span>
            </div>
            <time dateTime="16/11/2023">Hace 1 hora</time>
          </div>
        ))}
      </div>
      <div className={styles.common_info}>
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
    </article>
  );
}
