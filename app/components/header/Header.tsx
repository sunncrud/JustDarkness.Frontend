import Logo from "./Logo";
import NavLinks from "./NavLinks";
import ProfileDropdown from "./ProfileDropdown";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.headerContainer}>
        <Logo />
        <NavLinks/>
        <ProfileDropdown/>
      </div>
    </header>
  );
}