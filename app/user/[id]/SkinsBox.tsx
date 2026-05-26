import styles from "./profile.module.css";

export default function SkinsBox() {
  return (
    <div className={styles.standardCard}>
      <h2 className={styles.sectionTitle}>Skins</h2>
      <div className={styles.skinsFlex}>
        <div className={styles.skinPlaceholder}></div>
        <div className={styles.skinPlaceholder}></div>
        <div className={styles.skinPlaceholder}></div>
      </div>
    </div>
  );
}