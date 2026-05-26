import Link from "next/link";
import styles from "./header.module.css";

export default function Logo() {
  return (
    <Link href="/" className={styles.logoText}>
      JustDarkness
    </Link>
  );
}