import Link from "next/link";
import styles from "./auth.module.css";

export default function AuthFooter() {
  return (
    <div className={styles.footer}>
      Don&apos;t have an account? 
      <Link href="/sign-up" className={styles.footerLink}>
        Sign up
      </Link>
    </div>
  );
}