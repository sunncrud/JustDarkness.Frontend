import styles from "./profile.module.css";

export default function OverviewStats() {
  return (
    <div className={styles.standardCard}>
      <h2 className={styles.sectionTitle}>Overview</h2>
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statValue}>461</div>
          <div className={styles.statLabel}>Hours played</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statValue}>56</div>
          <div className={styles.statLabel}>Days streak</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statValue}>124</div>
          <div className={styles.statLabel}>Days in total</div>
        </div>
      </div>
    </div>
  );
}