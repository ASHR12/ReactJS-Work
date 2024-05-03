// features/user/userActions.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import { makeApiRequest } from "../../utils/apiUtils";
import { logoutUser } from "./userSlice";

export const performLogin = createAsyncThunk(
  "user/performLogin",
  async ({ loginDetails }, thunkAPI) => {
    const result = await makeApiRequest("/auth/login", "post", loginDetails);
    if (result.error) {
      return thunkAPI.rejectWithValue(result.error);
    }
    return result;
  }
);

export const performRegister = createAsyncThunk(
  "user/performRegister",
  async ({ registerDetails }, thunkAPI) => {
    const result = await makeApiRequest(
      "/auth/register",
      "post",
      registerDetails
    );
    if (result.error) {
      return thunkAPI.rejectWithValue(result.error);
    }
    return result;
  }
);

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (userData, thunkAPI) => {
    const token = thunkAPI.getState().userState.user.token; // Assuming token is stored correctly
    const result = await makeApiRequest(
      "/auth/updateUser",
      "patch",
      userData,
      token
    );
    if (result.error) {
      if (result.isUnauthorized) {
        thunkAPI.dispatch(logoutUser());
      }
      return thunkAPI.rejectWithValue(result.error);
    }
    return result;
  }
);
