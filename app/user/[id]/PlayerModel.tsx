import styles from "./profile.module.css";

export default function PlayerModel({ username }: { username: string }) {
  return (
    <div className={styles.modelCard}>
      <img 
        src={`https://minotar.net/armor/body/${username}/250.png`} 
        alt={`${username}'s character model`}
        className={styles.modelImage}
      />
    </div>
  );
}