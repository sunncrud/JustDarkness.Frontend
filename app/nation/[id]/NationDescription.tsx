import styles from "./nation.module.css";

export default function NationDescription() {
  return (
    <div className={styles.standardCard}>
      <h2 className={styles.sectionTitle}>Description</h2>
      <p className={styles.descriptionText}>
        here will be text and information about some specific season like the idea of the season and other interesting features and details
      </p>
    </div>
  );
}