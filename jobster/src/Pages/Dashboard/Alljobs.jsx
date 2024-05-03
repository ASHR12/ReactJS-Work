import React from "react";
import { SearchForm, JobCard, Pagination } from "../../Components";
import { useSelector } from "react-redux";

const Alljobs = () => {
  const { jobs, page, totalJobs, numOfPages } = useSelector(
    (state) => state.jobState.allJobs
  );
  const { isLoading } = useSelector((state) => state.jobState);
  return (
    <>
      <SearchForm />

      <div className="jobs-number">
        {totalJobs} job{jobs.length > 1 && "s"} found
      </div>

      <div className="jobs">
        {jobs.map((job) => {
          return <JobCard key={job._id} {...job} />;
        })}
      </div>
      {numOfPages > 1 && <Pagination />}
    </>
  );
};

export default Alljobs;
