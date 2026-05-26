import Link from "next/link";
import styles from "./nations.module.css";

export default function NationCard({ name }: { name: string }) {
  return (
    <Link href={`/nation/${name}`} className={styles.nationCard}>
      {/* Mini flag preview placeholder */}
      <div className={styles.flagWrapper}>
        <span>No flag</span>
      </div>
      <h3 className={styles.nationName}>{name}</h3>
    </Link>
  );
}