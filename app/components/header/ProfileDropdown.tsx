"use client";

import Link from "next/link";
import styles from "./header.module.css";

export default function ProfileDropdown() {
  return (
    <Link href="/auth" className={styles.loginButton}>
        Log in 
    </Link>
  );
}