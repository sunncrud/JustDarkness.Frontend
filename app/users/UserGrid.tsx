import UserCard from "./UserCard";
import styles from "./users.module.css";

export default function UserGrid() {
  // Placeholder data - eventually you will fetch this from your database
  const dummyUsers = [
    "SunCrud", "Notch", "Jeb_", "Technoblade", 
    "Dream", "Philza", "Grian", "MumboJumbo"
  ];

  return (
    <div className={styles.usersGrid}>
      {dummyUsers.map((username) => (
        <UserCard key={username} username={username} />
      ))}
    </div>
  );
}