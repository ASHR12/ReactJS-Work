// src/components/PaginationOrdersPage.js
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { fetchOrders } from "../features/order/orderThunks";

const PaginationOrdersPage = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const { meta } = useSelector((state) => state.orderState);
  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  const handlePageChange = (newPageNumber) => {
    dispatch(fetchOrders(newPageNumber));
    setSearchParams({ page: newPageNumber });
  };

  if (!meta || !meta.pagination) {
    return null;
  }

  const { pageCount } = meta.pagination;

  // Calculate page numbers to show
  const firstPage = Math.max(1, currentPage - 2);
  const lastPage = Math.min(pageCount, currentPage + 2);
  const visiblePages = Array.from(
    { length: lastPage - firstPage + 1 },
    (_, i) => firstPage + i
  );

  if (pageCount < 2) {
    return null;
  }

  return (
    <div className="mt-5 flex justify-end">
      <button
        className="join-item btn"
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        Prev
      </button>
      {currentPage > 3 && (
        <>
          <button className="join-item btn" onClick={() => handlePageChange(1)}>
            1
          </button>
          {currentPage > 4 && (
            <span className="join-item btn btn-disabled">...</span>
          )}
        </>
      )}
      {visiblePages.map((number) => (
        <button
          key={number}
          onClick={() => handlePageChange(number)}
          className={`join-item btn ${
            number === currentPage ? "btn-active" : ""
          }`}
        >
          {number}
        </button>
      ))}
      {currentPage < pageCount - 3 && (
        <>
          {currentPage < pageCount - 3 && (
            <span className="join-item btn btn-disabled">...</span>
          )}
          <button
            className="join-item btn"
            onClick={() => handlePageChange(pageCount)}
          >
            {pageCount}
          </button>
        </>
      )}
      <button
        className="join-item btn"
        disabled={currentPage === pageCount}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default PaginationOrdersPage;
