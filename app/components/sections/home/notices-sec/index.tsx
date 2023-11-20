import styles from "./index.module.css";

export default function NoticeSec() {
  return (
    <div className="my-5">
      <div className={styles.head_notice}>
        <h2>Avisos</h2>
        <a href="#">Ver mas</a>
      </div>
      {Array.from({ length: 3 }).map((x, i) => (
        <div key={i} className={styles.notice_item}>
          <div className={styles.notice_img}>
            <img src="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/f068d1181482777.Y3JvcCwzNDU5LDI3MDYsMjE0LDA.png" />
          </div>
          <div className={styles.notice_content}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus accusantium laborum quis sit quod error dignissimos
              accusamus ducimus eaque ut nesciunt nisi reiciendis vitae, sed
              veniam obcaecati maxime ipsum. Ea. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Necessitatibus accusantium laborum
              quis sit quod error dignissimos accusamus ducimus eaque ut
              nesciunt nisi reiciendis vitae, sed veniam obcaecati maxime ipsum.
              Ea. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus accusantium laborum quis sit quod error dignissimos
              accusamus ducimus eaque ut nesciunt nisi reiciendis vitae, sed
              veniam obcaecati maxime ipsum. Ea.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
