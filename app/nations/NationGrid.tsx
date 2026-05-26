import NationCard from "./NationCard";
import styles from "./nations.module.css";

export default function NationGrid({ nations }: { nations: string[] }) {
  if (nations.length === 0) {
    return <div className="text-gray-500 text-center py-12 col-span-full">No nations found.</div>;
  }

  return (
    <div className={styles.nationsGrid}>
      {nations.map((name) => (
        <NationCard key={name} name={name} />
      ))}
    </div>
  );
}