import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createJob, updateJob } from "../../features/job/jobActions"; // Import actions for creating and updating jobs
import { resetCurrentJob } from "../../features/job/jobSlice"; // Import reset action for resetting the job
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { toast } from "react-toastify";
const AddJob = () => {
  const dispatch = useDispatch();
  const { currentJob, isLoading } = useSelector((state) => state.jobState);
  const { location } = useSelector((state) => state.userState.user);
  const [formData, setFormData] = useState({
    position: currentJob.position || "",
    company: currentJob.company || "",
    jobLocation: currentJob.jobLocation || location,
    status: currentJob.status || "pending",
    jobType: currentJob.jobType || "full-time",
  });

  // Synchronize form data with the Redux state
  useEffect(() => {
    if (currentJob.isEditing) {
      setFormData({
        position: currentJob.position,
        company: currentJob.company,
        jobLocation: currentJob.jobLocation,
        status: currentJob.status,
        jobType: currentJob.jobType,
      });
    }
  }, [currentJob]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentJob.isEditing) {
      dispatch(updateJob({ jobId: currentJob.editJobId, jobData: formData }))
        .unwrap()
        .then(() => {
          toast.success(`Job Updated successfully`);
        })
        .catch((error) => {
          // console.log("error", error);
          const message = error || "Failed to update Job."; // Fallback message if the path is not found
          toast.error("Failed to update Job: " + message);
        });
    } else {
      dispatch(createJob(formData))
        .unwrap()
        .then(() => {
          toast.success(`Job created successfully`);
        })
        .catch((error) => {
          // console.log("error", error);
          const message = error || "Failed to create job ."; // Fallback message if the path is not found
          toast.error("Failed to create Job: " + message);
        });
    }
  };

  const handleClear = () => {
    dispatch(resetCurrentJob());
    setFormData({
      position: "",
      company: "",
      jobLocation: "",
      status: "pending",
      jobType: "full-time",
    });
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>{currentJob.isEditing ? "Edit Job" : "Add Job"}</h3>
        <div className="form-center">
          <div>
            <label className="form-label">
              Position:
              <input
                type="text"
                name="position"
                className="form-input"
                value={formData.position}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label className="form-label">
              Company:
              <input
                type="text"
                name="company"
                className="form-input"
                value={formData.company}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label className="form-label">
              Job Location:
              <input
                type="text"
                name="jobLocation"
                className="form-input"
                value={formData.jobLocation}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label className="form-label">
              Status:
              <select
                name="status"
                className="form-input"
                value={formData.status}
                onChange={handleChange}
              >
                {currentJob.statusOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div>
            <label className="form-label">
              Job Type:
              <select
                name="jobType"
                className="form-input"
                value={formData.jobType}
                onChange={handleChange}
              >
                {currentJob.jobTypeOptions.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="btn-container">
            <button
              type="button"
              onClick={handleClear}
              disabled={isLoading}
              className="btn btn-block clear-btn"
            >
              Clear
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="btn btn-block submit-btn"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddJob;
