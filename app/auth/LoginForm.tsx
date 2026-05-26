import Link from "next/link";
import styles from "./auth.module.css";

export default function LoginForm() {
  return (
    <form className={styles.form}>
      
      <div className={styles.inputGroup}>
        <label htmlFor="username" className={styles.label}>
          Username or Email
        </label>
        <input 
          id="username"
          type="text" 
          placeholder="Enter your username" 
          className={styles.input} 
        />
      </div>

      <div className={styles.inputGroup}>
        <div className={styles.labelRow}>
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <Link href="/auth/forgot-password" className={styles.forgotPassword}>
            Forgot password?
          </Link>
        </div>
        <input 
          id="password"
          type="password" 
          placeholder="••••••••" 
          className={styles.input} 
        />
      </div>

      <button type="submit" className={styles.submitButton}>
        Log in
      </button>

    </form>
  );
}