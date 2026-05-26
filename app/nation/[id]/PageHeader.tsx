import styles from "./nation.module.css";

export default function PageHeader() {
  return (
    <div className={styles.headerWrapper}>
      <h1 className={styles.headerText}>Season 3 nation</h1>
    </div>
  );
}