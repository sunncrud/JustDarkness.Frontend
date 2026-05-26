import SignUpHeader from "./SignUpHeader";
import SignUpForm from "./SignUpForm";
import SignUpFooter from "./SignUpFooter";
import styles from "./sign-up.module.css";

export default function SignUpPage() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.card}>
        <SignUpHeader />
        <SignUpForm />
        <SignUpFooter />
      </div>
    </div>
  );
}