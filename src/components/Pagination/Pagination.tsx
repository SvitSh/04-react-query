import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.css";

interface PaginationProps {
  pageCount: number;
  currentPage: number;
  onPageChange: (selected: number) => void;
}

const Pagination = ({
  pageCount,
  currentPage,
  onPageChange,
}: PaginationProps) => {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="→"
      onPageChange={(event) => onPageChange(event.selected + 1)}
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      pageCount={pageCount}
      previousLabel="←"
      renderOnZeroPageCount={null}
      containerClassName={styles.pagination}
      pageClassName={styles.page}
      previousClassName={styles.page}
      nextClassName={styles.page}
      breakClassName={styles.page}
      activeClassName={styles.active}
      disabledClassName={styles.disabled}
      forcePage={currentPage - 1}
    />
  );
};

export default Pagination;
