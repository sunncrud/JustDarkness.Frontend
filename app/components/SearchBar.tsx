"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import styles from "./components.module.css"

export default function SearchBar({ placeholder = "Search..." }: { placeholder?: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1"); 

    if (term) {
      params.set("q", term);
    } else {
      params.delete("q");
    }
    
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className={styles.searchWrapper}>
      <input 
        type="text" 
        placeholder={placeholder} 
        className={styles.searchInput}
        defaultValue={searchParams.get("q")?.toString()}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}