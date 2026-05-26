import styles from "./users.module.css";

export default function SearchBar() {
  return (
    <div className={styles.searchWrapper}>
      <input 
        type="text" 
        placeholder="Search users..." 
        className={styles.searchInput} 
      />
    </div>
  );
}