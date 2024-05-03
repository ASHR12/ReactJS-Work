import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/Job";
import { useDispatch, useSelector } from "react-redux";
import { JobInfo } from "../Components";
import moment from "moment";
import { startEditingJob } from "../features/job/jobSlice";
import { toast } from "react-toastify";
import { deleteJob, fetchJobs } from "../features/job/jobActions";
const JobCard = ({
  _id,
  position,
  company,
  jobLocation,
  jobType,
  createdAt,
  status,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allJobs = useSelector((state) => state.jobState.allJobs.jobs); // Assuming jobs are stored here
  const jobDetails = allJobs.find((job) => job._id === _id);
  const handleDelete = (jobId) => {
    // Confirm before deleting
    if (window.confirm("Are you sure you want to delete this job?")) {
      dispatch(deleteJob(jobId))
        .unwrap()
        .then(() => {
          toast.success(`Job Deleted successfully`);
          dispatch(fetchJobs());
        })
        .catch((error) => {
          // console.log("error", error);
          const message = error || "Failed to delete Job."; // Fallback message if the path is not found
          toast.error("Job Deletion failed: " + message);
        });
    }
  };
  const handleEdit = () => {
    dispatch(startEditingJob({ job: jobDetails }));
    navigate("/add-job");
  };
  const dateString = createdAt;
  const formattedDate = moment(dateString).format("MMM Do, YYYY");
  return (
    <Wrapper>
      <header>
        <div className="main-icon">{company.charAt(0)}</div>
        <div className="info">
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
          <JobInfo icon={<FaCalendarAlt />} text={formattedDate} />
          <JobInfo icon={<FaBriefcase />} text={jobType} />
          <div className={`status ${status}`}>{status}</div>
        </div>
        <footer>
          <div className="actions">
            <Link to="/add-job" className="btn edit-btn" onClick={handleEdit}>
              Edit
            </Link>
            <button
              type="button"
              className="btn delete-btn"
              onClick={() => handleDelete(_id)}
            >
              Delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

export default JobCard;
