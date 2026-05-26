import styles from "./profile.module.css";

export default function ProfileHeader({ username }: { username: string }) {
  return (
    <div className={styles.headerCard}>
      <div className={styles.avatarWrapper}>
        <img 
          src={`https://minotar.net/helm/${username}/150.png`} 
          alt={`${username}'s avatar`}
          className={styles.avatarImage}
        />
      </div>

      <div className={styles.userInfoWrapper}>
        <div className={styles.nameRow}>
          <h1 className={styles.userName}>{username}</h1>
          <span className={styles.userLevel}>lvl 46</span>
        </div>
        
        <hr className={styles.divider} />
        
        <div className={styles.infoText}>
          <p>MC: {username}</p>
          <p>DC: @{username.toLowerCase()}</p>
        </div>
      </div>
    </div>
  );
}