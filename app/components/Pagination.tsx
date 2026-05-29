"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import styles from "./components.module.css";

export default function Pagination({ currentPage, totalPages }: { currentPage: number, totalPages: number }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const changePage = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className={styles.paginationWrapper}>
      <button 
        className={styles.pageButton} 
        disabled={currentPage <= 1}
        onClick={() => changePage(currentPage - 1)}
      >
        Prev
      </button>
      
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button 
          key={page}
          className={page === currentPage ? styles.activePageButton : styles.pageButton}
          onClick={() => changePage(page)}
        >
          {page}
        </button>
      ))}
      
      <button 
        className={styles.pageButton}
        disabled={currentPage >= totalPages}
        onClick={() => changePage(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
}