import Card2 from "@components/cards/card-serie-2";
import styles from "./index.module.css";
import HeaderSec from "@components/header-sec";

export default function UpdatesSec() {
  return (
    <>
      <div className="mt-5">
        <HeaderSec className="my-4" title="Actualizaciones" to="/updates" />
        <div className={styles.container_updates}>
          {Array.from({ length: 9 }).map((x, i) => (
            <Card2 key={i} />
          ))}
        </div>
      </div>
    </>
  );
}
