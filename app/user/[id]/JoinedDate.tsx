import styles from "./profile.module.css";

export default function JoinedDate() {
  return (
    <div className={styles.standardCard}>
      <h2 className={styles.sectionTitle}>Joined</h2>
      <p className={styles.joinedText}>March 14, 2026</p>
    </div>
  );
}