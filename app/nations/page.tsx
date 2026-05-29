import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import GenericGrid from "../components/GenericGrid"; 
import NationCard from "./NationCard"; 
import styles from "./nations.module.css";
import { processPageData } from "../lib/pagination"; 

const ALL_NATIONS = ["Snow Society", "Desert Outpost", "Oceania"];

export default async function NationsPage({ searchParams }: { searchParams: Promise<{ q?: string; page?: string }> }) {
  const { paginatedItems, totalPages, currentPage } = await processPageData(ALL_NATIONS, searchParams);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.headerContainer}>
        <h1 className={styles.pageTitle}>Nations</h1>
        <SearchBar placeholder="Search nations..." />
      </div>

      <GenericGrid 
        items={paginatedItems} 
        emptyMessage="No nations found."
        gridClassName={styles.nationsGrid}
        renderItem={(nationName) => <NationCard key={nationName} name={nationName} />} 
      />

      {totalPages > 1 && <Pagination currentPage={currentPage} totalPages={totalPages} />}
    </div>
  );
}