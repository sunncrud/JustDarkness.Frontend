import Link from "next/link";
import styles from "./sign-up.module.css";

export default function SignUpFooter() {
  return (
    <div className={styles.footer}>
      Already have an account? 
      <Link href="/auth" className={styles.footerLink}>
        Log in
      </Link>
    </div>
  );
}