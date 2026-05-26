import styles from "./profile.module.css";

export default function Roles() {
  const roles = [
    "Little sprite", 
    "Medium sprite", 
    "Artist", 
    "Something else", 
    "Member", 
    "announcements"
  ];

  return (
    <div className={styles.standardCard}>
      <h2 className={styles.sectionTitle}>Roles</h2>
      <div className={styles.rolesFlex}>
        {roles.map((role) => (
          <div key={role} className={styles.rolePill}>
            <div className={styles.roleCircle}></div>
            {role}
          </div>
        ))}
      </div>
    </div>
  );
}