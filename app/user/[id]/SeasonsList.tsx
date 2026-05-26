import styles from "./profile.module.css";

export default function SeasonsList() {
  const seasons = ["s0", "s1", "s2", "s2.5", "s3", "s3.5", "s4", "s4.5", "s5", "s5.5 special"];

  return (
    <div className={styles.standardCard}>
      <h2 className={styles.sectionTitle}>Seasons</h2>
      <div className={styles.seasonsFlex}>
        {seasons.map((season) => (
          <div key={season} className={styles.seasonBadge}>
            {season}
          </div>
        ))}
      </div>
    </div>
  );
}