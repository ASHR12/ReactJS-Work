import { useDispatch, useSelector } from "react-redux";
import { setSearchParams } from "../features/job/jobSlice";

const Pagination = () => {
  const dispatch = useDispatch();
  const { numOfPages, totalJobs } = useSelector(
    (state) => state.jobState.allJobs
  );
  const { page } = useSelector((state) => state.jobState.searchParams);

  const setPage = (pageNum) => {
    dispatch(setSearchParams({ page: pageNum }));
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= numOfPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => setPage(i)}
          className={page === i ? "active" : ""}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  if (totalJobs <= 1) return null; // Don't render pagination for single page

  return (
    <div className="pagination">
      {page > 1 && <button onClick={() => setPage(page - 1)}>Prev</button>}
      {renderPageNumbers()}
      {page < numOfPages && (
        <button onClick={() => setPage(page + 1)}>Next</button>
      )}
    </div>
  );
};

export default Pagination;
