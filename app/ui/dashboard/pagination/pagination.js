"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import styles from "./pagination.module.css";
import { useEffect, useState } from "react";

const Pagination = ({ count }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const [pageLimit, setPageLimit] = useState(false);

  const ITEM_PER_PAGE = 2;
  const page = searchParams.get("page") || 1;

  useEffect(() => {
    if (ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE > count) {
      setPageLimit(true);
    }
  }, [page]);
  useEffect(() => {
    console.log("page limit increased: ", pageLimit);
  }, [pageLimit]);

  const params = new URLSearchParams(searchParams);

  const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count;

  const handleChangePage = (type) => {
    const currentPage = parseInt(page);
    const newPage =
      type === "prev" ? (pageLimit ? 1 : currentPage - 1) : currentPage + 1;

    params.set("page", newPage);
    replace(`${pathname}?${params}`);
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={!hasPrev}
        onClick={() => handleChangePage("prev")}
      >
        Previous
      </button>
      <button
        className={styles.button}
        disabled={!hasNext}
        onClick={() => handleChangePage("next")}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
