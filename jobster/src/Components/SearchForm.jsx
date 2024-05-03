import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../features/job/jobActions";
import { setSearchParams, resetSearchParams } from "../features/job/jobSlice";
import { useEffect, useState } from "react";
import Wrapper from "../assets/wrappers/DashboardFormPage";

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Set debouncedValue to value (passed in) after the specified delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Return a cleanup function that will be called every time useEffect is re-called.
    // The cleanup function uses clearTimeout to cancel the timeout if value or delay changes.
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]); // Only re-call effect if value or delay changes

  return debouncedValue;
};

const SearchForm = () => {
  const dispatch = useDispatch();
  const searchParams = useSelector((state) => state.jobState.searchParams);
  // Custom hook to debounce the searchParams value
  const debouncedSearchParams = useDebounce(searchParams, 1000);
  useEffect(() => {
    dispatch(fetchJobs(searchParams));
  }, [dispatch, searchParams]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setSearchParams({ ...searchParams, [name]: value }));
  };

  useEffect(() => {
    if (debouncedSearchParams.search.trim()) {
      dispatch(fetchJobs(debouncedSearchParams));
    }
  }, [dispatch, debouncedSearchParams]); // Dependency array includes searchParams to re-run the effect when it changes

  const handleClear = () => {
    dispatch(resetSearchParams());
  };
  return (
    <Wrapper>
      <form className="form">
        <h3>Search Form</h3>
        <div className="form-center">
          <div>
            <label className="form-label">
              Search:
              <input
                type="text"
                name="search"
                className="form-input"
                value={searchParams.search}
                onChange={handleChange}
                placeholder="Search..."
              />
            </label>
          </div>
          <div>
            <label className="form-label">
              Status:
              <select
                name="status"
                className="form-input"
                value={searchParams.status}
                onChange={handleChange}
              >
                <option value="all">All</option>
                <option value="pending">Pending</option>
                <option value="interview">Interview</option>
                <option value="declined">Declined</option>
              </select>
            </label>
          </div>
          <div>
            <label className="form-label">
              Type:
              <select
                name="type"
                className="form-input"
                value={searchParams.type}
                onChange={handleChange}
              >
                <option value="all">All</option>
                <option value="full-time">Full-time</option>
                <option value="part-time">Part-time</option>
                <option value="remote">Remote</option>
                <option value="internship">Internship</option>
              </select>
            </label>
          </div>
          <div>
            <label className="form-label">
              Sort:
              <select
                name="sort"
                className="form-input"
                value={searchParams.sort}
                onChange={handleChange}
              >
                <option value="latest">Latest</option>
                <option value="oldest">Oldest</option>
              </select>
            </label>
          </div>
          <div className="btn-container">
            <button className="btn btn-block btn-danger" onClick={handleClear}>
              Clear Filters
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default SearchForm;
