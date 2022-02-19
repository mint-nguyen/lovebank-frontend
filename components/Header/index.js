import styles from "./header.module.css";

export default function Header() {
  return (
    <div style={{ width: "900px", height: "56px", backgroundColor: "#ffe5ec" }}>
      <img className={styles.img} src="../../logo.png" />
      <p className={styles.p}>Love Bank</p>
    </div>
  );
}
