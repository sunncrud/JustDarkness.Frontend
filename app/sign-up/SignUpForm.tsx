import styles from "./sign-up.module.css";

export default function SignUpForm() {
  return (
    <form className={styles.form}>
      <div className={styles.inputGroup}>
        <label htmlFor="username" className={styles.label}>Username</label>
        <input id="username" type="text" placeholder="Choose a username" className={styles.input} />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="email" className={styles.label}>Email</label>
        <input id="email" type="email" placeholder="name@example.com" className={styles.input} />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="password" className={styles.label}>Password</label>
        <input id="password" type="password" placeholder="Create a password" className={styles.input} />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="confirm-password" className={styles.label}>Confirm Password</label>
        <input id="confirm-password" type="password" placeholder="Repeat your password" className={styles.input} />
      </div>

      <button type="submit" className={styles.submitButton}>
        Create Account
      </button>
    </form>
  );
}