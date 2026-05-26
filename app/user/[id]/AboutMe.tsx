import styles from "./profile.module.css";

export default function AboutMe() {
  return (
    <div className={styles.standardCard}>
      <h2 className={styles.sectionTitle}>About me</h2>
      <p className={styles.aboutText}>
        hello and something very nice text right here hello hello justdarkness promotion yes yes and i need some more text right here
      </p>
    </div>
  );
}