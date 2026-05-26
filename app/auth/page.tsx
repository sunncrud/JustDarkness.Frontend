import DiscordButton from "./DiscordButton";
import LoginForm from "./LoginForm";
import AuthFooter from "./AuthFooter";
import styles from "./auth.module.css";

export default function AuthPage() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.authCard}>
        
        {/* Card Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>Welcome back</h1>
          <p className={styles.subtitle}>Log in to access your JustDarkness account</p>
        </div>

        {/* Discord Login */}
        <DiscordButton />

        {/* The "OR" Divider */}
        <div className={styles.dividerRow}>
          <div className={styles.dividerLine}></div>
          <span className={styles.dividerText}>or continue with</span>
          <div className={styles.dividerLine}></div>
        </div>

        {/* Standard Login */}
        <LoginForm />

        {/* Sign Up Link */}
        <AuthFooter />

      </div>
    </div>
  );
}