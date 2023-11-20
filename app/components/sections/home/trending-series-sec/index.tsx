import styles from "./index.module.css";
import Card1 from "@components/cards/card-serie-1";
import HeaderSec from "@components/header-sec";

export default function TrendringSeriesSec() {
  return (
    <div className="mt-5">
      <HeaderSec className="my-4" title="Tendencia de Hoy" to="/trending" />
      <div className={styles.container_trending}>
        {Array.from({ length: 4 }).map((x, i) => (
          <Card1 key={i} className={styles.item_trending} />
        ))}
      </div>
    </div>
  );
}
