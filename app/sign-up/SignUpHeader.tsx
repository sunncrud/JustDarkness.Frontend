import styles from "./sign-up.module.css";

export default function SignUpHeader() {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Create an account</h1>
      <p className={styles.subtitle}>Join JustDarkness and start your journey</p>
    </div>
  );
}