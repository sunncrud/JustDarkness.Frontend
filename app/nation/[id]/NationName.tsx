import styles from "./nation.module.css";

export default function NationName({ name }: { name: string }) {
  return (
    <div className={styles.standardCard}>
      <h1 className={styles.nationName}>{name}</h1>
    </div>
  );
}