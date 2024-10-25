import ReactPaginate from "react-paginate";
import css from "./PaginatedMovies.module.css";

export const PaginatedMovies = ({ totalPages, onChangePage, query }) => {
  const qyery = query;
  const handlePageClick = (event) => {
    const currentPage = event.selected + 1;
    if (query === "") {
      onChangePage(currentPage);
      return;
    }
    onChangePage(currentPage, qyery);
    console.log(currentPage, "currentPage");
  };

  const pageCount = totalPages;

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=">"
      onPageChange={handlePageClick}
      pageRangeDisplayed={1}
      marginPagesDisplayed={1}
      pageCount={pageCount}
      previousLabel="<"
      renderOnZeroPageCount={null}
      containerClassName={css.pagination}
      activeClassName={css.active}
    />
  );
};
