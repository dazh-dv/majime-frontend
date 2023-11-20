import styles from "./index.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section>
        <div className={styles.head_sec_footer}>Esta web</div>
        <p className={styles.content_sec_footer}>
          Fue Hecho Por Dazh a Base De Conocimiento Propio Para La Persona Y
          Dueña De Inari<span>Manga</span>
        </p>
      </section>
      <section>
        <div className={styles.head_sec_footer}>Sobre Nosotros</div>
        <p className={styles.content_sec_footer}>
          2023 NettoGeek, Diseño hecho Selever y Programado Por Dazh
        </p>
      </section>
      <section>
        <div className={styles.head_sec_footer}>Nuestras Redes</div>
        <p className={styles.links_newtworks}>
          <a href="#">Facebook</a>
          <a href="#">Discord</a>
        </p>
      </section>
    </footer>
  );
}
