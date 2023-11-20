import Card2 from "@components/cards/card-serie-2";
import styles from "./page.module.css";
interface typeSearchParams {
  gender: string[];
  type: string;
  status: string;
  hentai: string;
}

export default function SeriesPage({
  searchParams,
}: {
  searchParams: typeSearchParams;
}) {
  return (
    <div className={styles.container_filter}>
      {Array.from({ length: 9 }).map((x, i) => (
        <Card2 key={i} className={styles.card_item} />
      ))}
    </div>
  );
}
