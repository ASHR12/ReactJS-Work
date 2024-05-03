import { createSlice } from "@reduxjs/toolkit";
import {
  fetchJobs,
  createJob,
  updateJob,
  deleteJob,
  showStats,
} from "./jobActions"; // Assuming these are defined

const initialState = {
  currentJob: {
    position: "",
    company: "",
    jobLocation: "", // Will be set based on the user's location during creation/editing
    jobType: "full-time",
    jobTypeOptions: ["full-time", "part-time", "remote", "internship"],
    statusOptions: ["interview", "declined", "pending"],
    status: "pending",
    isEditing: false,
    editJobId: "",
  },
  allJobs: {
    jobs: [],
    totalJobs: 0,
    numOfPages: 0,
    page: 1,
  },
  status: {
    defaultStats: {},
    monthlyApplications: [],
  },
  searchParams: {
    search: "",
    status: "all",
    type: "all",
    sort: "latest",
    page: 1,
  },
  isLoading: false,
  error: null,
};

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    setSearchParams: (state, action) => {
      state.searchParams = { ...state.searchParams, ...action.payload };
    },
    resetSearchParams: (state) => {
      state.searchParams = initialState.searchParams;
    },
    startEditingJob: (state, action) => {
      console.log("action in editing job", action.payload);
      state.currentJob = {
        ...state.currentJob, // keep existing fields intact
        position: action.payload.job.position,
        company: action.payload.job.company,
        jobLocation: action.payload.job.jobLocation,
        jobType: action.payload.job.jobType,
        status: action.payload.job.status,
        isEditing: true,
        editJobId: action.payload.job._id,
      };
    },
    setCurrentJob: (state, action) => {
      console.log("actions", action);
      // Extract jobData from action.payload assuming jobData is directly the payload
      const { position, company, jobLocation, jobType, status } =
        action.payload.job;

      // Only update fields provided in jobData, keep others as they are
      state.currentJob = {
        ...state.currentJob, // Spread the existing currentJob to retain other fields
        position, // Update position, or keep existing if undefined
        company, // Update company, or keep existing if undefined
        jobLocation, // Update jobLocation, or keep existing if undefined
        jobType, // Update jobType, or keep existing if undefined
        status, // Update status, or keep existing if undefined
      };
    },
    resetCurrentJob: (state, action) => {
      if (action.payload) {
        state.currentJob = action.payload; // Update currentJob with new data if provided
      } else {
        state.currentJob = initialState.currentJob; // Reset to initial state if no payload
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.fulfilled, (state, action) => {
        console.log(action.payload);
        state.allJobs = action.payload;
        state.isLoading = false;
      })
      .addCase(createJob.fulfilled, (state, action) => {
        // state.allJobs.jobs.push(action.payload);
        state.isLoading = false;
      })
      .addCase(updateJob.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(deleteJob.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(fetchJobs.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(createJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(createJob.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateJob.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteJob.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(showStats.fulfilled, (state, action) => {
        state.status.defaultStats = action.payload.defaultStats;
        state.status.monthlyApplications = action.payload.monthlyApplications;
      })
      .addCase(showStats.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(showStats.rejected, (state, action) => {
        // Handle the error, possibly reset the state or set an error message
        state.status.defaultStats = {};
        state.status.monthlyApplications = [];
      });
  },
});

export const {
  startEditingJob,
  resetCurrentJob,
  setCurrentJob,
  setSearchParams,
  resetSearchParams,
} = jobSlice.actions;

export default jobSlice.reducer;
