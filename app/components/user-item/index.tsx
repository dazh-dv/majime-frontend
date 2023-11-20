import styles from "./index.module.css";

const default_img = "https://avatars.githubusercontent.com/u/97165289";
const default_name = "Anonimo";
const default_rol = "Visitante AR";

export default function UserItem() {
  return (
    <div className="d-flex gap-2">
      <span className={styles.user_item_img}>
        <img src={default_img} alt={default_name} data-loaded="true" />
      </span>
      <div className={styles.user_item_info}>
        <span className={styles.name}>{default_name}</span>
        <span className={styles.rol}>{default_rol}</span>
      </div>
    </div>
  );
}
