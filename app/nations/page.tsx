import SearchBar from "../components/SearchBar";
import NationGrid from "./NationGrid";
import Pagination from "./Pagination";
import styles from "./nations.module.css";

const ALL_NATIONS = [
  "Snow Society", "Desert Outpost", "Oceania", "Nether Empire",
  "Mushroom Kingdom", "Jungle Tribe", "Swamp Alliance", "Badlands Clan",
  "Tundra Collective", "End Vanguard", "Sky Citadel", "Deep Dark Order"
];

const ITEMS_PER_PAGE = 8;

export default async function NationsPage({ searchParams }: { searchParams: Promise<{ q?: string; page?: string }> }) {
  const resolvedParams = await searchParams;
  const query = resolvedParams.q || "";
  const currentPage = Number(resolvedParams.page) || 1;

  const filteredNations = ALL_NATIONS.filter(nation => 
    nation.toLowerCase().includes(query.toLowerCase())
  );

  const totalPages = Math.ceil(filteredNations.length / ITEMS_PER_PAGE);
  const paginatedNations = filteredNations.slice(
    (currentPage - 1) * ITEMS_PER_PAGE, 
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className={styles.pageContainer}>
      <div className={styles.headerContainer}>
        <h1 className={styles.pageTitle}>Nations</h1>
        <SearchBar />
      </div>

      <NationGrid nations={paginatedNations} />

      {totalPages > 1 && (
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      )}
    </div>
  );
}