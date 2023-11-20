import HeaderSec from "@components/header-sec";
import styles from "./index.module.css";
import CardGroup1 from "@components/cards/card-group-1";

export default function GroupsSec() {
  return (
    <div>
      <HeaderSec className="mx-md-5 mt-5" title="Grupos" to="/groups" />
      <div className={styles.container_groups}>
        {Array.from({ length: 4 }).map((x, i) => (
          <CardGroup1 key={i} className={styles.item_group} />
        ))}
      </div>
    </div>
  );
}
