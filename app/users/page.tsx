import SearchBar from "./SearchBar";
import UserGrid from "./UserGrid";
import Pagination from "./Pagination";
import styles from "./users.module.css";

export default function UsersPage() {
  return (
    <div className={styles.pageContainer}>
      
      {/* Header & Search */}
      <div className={styles.headerContainer}>
        <h1 className={styles.pageTitle}>Users</h1>
        <SearchBar />
      </div>

      {/* Main Grid */}
      <UserGrid />

      {/* Footer Navigation */}
      <Pagination />
      
    </div>
  );
}