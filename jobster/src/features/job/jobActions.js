import { createAsyncThunk } from "@reduxjs/toolkit";
import { makeApiRequest } from "../../utils/apiUtils"; // Ensure this is the correct path to your utility
import { resetCurrentJob, setCurrentJob } from "./jobSlice"; // Import relevant actions for managing state

// Fetch all jobs
export const fetchJobs = createAsyncThunk(
  "job/fetchJobs",
  async (_, thunkAPI) => {
    const searchParams = thunkAPI.getState().jobState.searchParams;
    const token = thunkAPI.getState().userState.user.token;
    console.log("token", token);
    const params = new URLSearchParams(searchParams).toString();
    const result = await makeApiRequest(`/jobs?${params}`, "get", null, token);
    console.log("result in fetch jobs thunk", result);
    if (result.error) {
      console.log("error in fetch jobs thunk", result.error);
      thunkAPI.dispatch(resetCurrentJob());
      return thunkAPI.rejectWithValue(result.error);
    } else {
      console.log("calling this");
      return result;
    }
  }
);

export const showStats = createAsyncThunk(
  "job/showStats",
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().userState.user.token;
    const result = await makeApiRequest(`/jobs/stats`, "get", null, token);
    console.log("result in fetch jobs thunk", result);
    if (result.error) {
      console.log("error in shows status thunk", result.error);
      return thunkAPI.rejectWithValue(result.error);
    } else {
      return result;
    }
  }
);

// Create a new job
export const createJob = createAsyncThunk(
  "job/createJob",
  async (jobData, thunkAPI) => {
    const token = thunkAPI.getState().userState.user.token;
    const result = await makeApiRequest("/jobs", "post", jobData, token);
    console.log("result from create job", result);
    if (result.error) {
      thunkAPI.dispatch(resetCurrentJob());
      return thunkAPI.rejectWithValue(result.error);
    } else {
      thunkAPI.dispatch(setCurrentJob(result));
      return result;
    }
  }
);

// Update an existing job
export const updateJob = createAsyncThunk(
  "job/updateJob",
  async ({ jobId, jobData }, thunkAPI) => {
    const token = thunkAPI.getState().userState.user.token;
    const result = await makeApiRequest(
      `/jobs/${jobId}`,
      "patch",
      jobData,
      token
    );
    if (result.error) {
      console.log("error value for update job");
      thunkAPI.dispatch(resetCurrentJob());
      return thunkAPI.rejectWithValue(result.error);
    } else {
      console.log("set current job value after update job");
      thunkAPI.dispatch(setCurrentJob(result));
      return result;
    }
  }
);

export const deleteJob = createAsyncThunk(
  "job/deleteJob",
  async (jobId, thunkAPI) => {
    const token = thunkAPI.getState().userState.user.token;
    const result = await makeApiRequest(
      `/jobs/${jobId}`,
      "delete",
      null,
      token
    );
    if (result.error) {
      thunkAPI.dispatch(resetCurrentJob());
      return thunkAPI.rejectWithValue(result.error);
    } else {
      // Assuming you want to update the jobs list after deletion
      // Fetching all jobs again might be necessary, or you can manually filter out the deleted job:
      thunkAPI.dispatch(fetchJobs()); // Optionally refetch all jobs or handle this differently
      return jobId; // Returning the ID of the deleted job might be useful for further actions
    }
  }
);
