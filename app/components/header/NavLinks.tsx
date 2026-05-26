import Link from "next/link";
import styles from "./header.module.css";

export default function NavLinks() {
  return (
    <nav className={styles.navLinks}>
      <Link href="/seasons" className={styles.navLinkItem}>
        Seasons
      </Link>
      <Link href="/nations" className={styles.navLinkItem}>
        Nations
      </Link>
      <Link href="/leaderboards" className={styles.navLinkItem}>
        Leaderboards
      </Link>
      <Link href="/users" className={styles.navLinkItem}>
        Users
      </Link>
      <Link href="/how-to-join" className={styles.navLinkItem}>
        How to join
      </Link>
    </nav>
  );
}