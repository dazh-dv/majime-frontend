import styles from "./index.module.css";
import Card3 from "@components/cards/card-serie-3";
import HeaderSec from "@components/header-sec";

export default function NewsSeries() {
  return (
    <div>
      <HeaderSec
        className="mt-5 mb-3"
        title="Nuevos Estrenos"
        to="/news-series"
      />
      <div className={styles.container_news_series}>
        {Array.from({ length: 3 }).map((x, i) => (
          <Card3 key={i} className={styles.item_trending} />
        ))}
      </div>
    </div>
  );
}
