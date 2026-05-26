import styles from "./profile.module.css";

export default function Achievements() {
  // Creating an array of 8 empty items to map over for the grid placeholders
  const achievements = Array.from({ length: 8 });

  return (
    <div className={styles.standardCard}>
      <h2 className={styles.sectionTitle}>Achievements</h2>
      <div className={styles.achievementsGrid}>
        {achievements.map((_, index) => (
          <div key={index} className={styles.achievementBox}>
            {/* You can drop icons or images in here later! */}
            <span className="text-gray-400 dark:text-gray-600">?</span>
          </div>
        ))}
      </div>
    </div>
  );
}