import styles from "./nation.module.css";

export default function NationFlag() {
  return (
    <div className={styles.standardCard}>
      <h2 className={styles.sectionTitle}>Flag</h2>
      <div className={styles.flagWrapper}>
        <span className={styles.flagPlaceholder}>No flag set</span>
      </div>
    </div>
  );
}