import Link from "next/link";
import styles from "./users.module.css";

export default function UserCard({ username }: { username: string }) {
  return (
    <Link href={`/user/${username}`} className={styles.userCard}>
      <div className={styles.avatarWrapper}>
        <img 
          src={`https://minotar.net/helm/${username}/150.png`} 
          alt={`${username}'s avatar`}
          className={styles.avatarImage}
        />
      </div>
      <h3 className={styles.userName}>{username}</h3>
    </Link>
  );
}