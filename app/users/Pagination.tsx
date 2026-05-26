import styles from "./users.module.css";

export default function Pagination() {
  return (
    <div className={styles.paginationWrapper}>
      <button className={styles.pageButton}>Prev</button>
      
      {/* Example of active vs inactive pages */}
      <button className={styles.activePageButton}>1</button>
      <button className={styles.pageButton}>2</button>
      <button className={styles.pageButton}>3</button>
      
      <button className={styles.pageButton}>Next</button>
    </div>
  );
}