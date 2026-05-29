import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import GenericGrid from "../components/GenericGrid"; 
import UserCard from "./UserCard"; 
import styles from "./users.module.css";
import { processPageData } from "../lib/pagination"; 

const ALL_USERS = ["Alice", "Bob", "Charlie", "David","Alice", "Bob", "Charlie"];

export default async function UsersPage({ searchParams }: { searchParams: Promise<{ q?: string; page?: string }> }) {
  const { paginatedItems, totalPages, currentPage } = await processPageData(ALL_USERS, searchParams);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.headerContainer}>
        <h1 className={styles.pageTitle}>Users</h1>
        <SearchBar placeholder="Search users..." />
      </div>
      
      <GenericGrid 
        items={paginatedItems} 
        emptyMessage="No users found."
        gridClassName={styles.usersGrid}
        renderItem={(username, index) => <UserCard key={`${username}-${index}`} username={username} />}
      />

      {totalPages > 1 && <Pagination currentPage={currentPage} totalPages={totalPages} />}
    </div>
  );
}