import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { performLogin, performRegister, updateUser } from "./userActions";
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  deleteUserFromLocalStorage,
} from "../../utils/";
const initialState = {
  user: getUserFromLocalStorage(),
  isLoading: false,
  error: null,
  isSidebarOpen: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      state.error = null;
      state.isLoading = false;
      state.isSidebarOpen = false;
      deleteUserFromLocalStorage();
      toast.success("Logged Out Successfully");
    },
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(performLogin.pending, (state) => {
        // console.log("inside-login-pending");
        state.isLoading = true;
        state.error = null;
      })
      .addCase(performLogin.fulfilled, (state, action) => {
        // console.log("inside-login-fullfilled");
        state.isLoading = false;
        console.log("action", action);
        console.log("user", action.payload.user);
        const userData = {
          token: action.payload.user.token,
          name: action.payload.user.name,
          email: action.payload.user.email,
          location: action.payload.user.location,
          lastName: action.payload.user.lastName,
        };
        state.user = userData;
        addUserToLocalStorage(userData);
        state.error = null;
      })
      .addCase(performLogin.rejected, (state, action) => {
        // console.log("inside-login-rejected");
        state.isLoading = false;
        state.error = action.payload;
        toast.error(`Login failed: ${action.payload}`);
      })
      .addCase(performRegister.pending, (state) => {
        // console.log("inside-register-pending");
        state.isLoading = true;
        state.error = null;
      })
      .addCase(performRegister.fulfilled, (state, action) => {
        // console.log("inside-register-fulfilled");
        state.isLoading = false;
        const userData = {
          token: action.payload.user.token,
          name: action.payload.user.name,
          email: action.payload.user.email,
          location: action.payload.user.location,
          lastName: action.payload.user.lastName,
        };
        state.user = userData;
        addUserToLocalStorage(userData);
        state.error = null;
      })
      .addCase(performRegister.rejected, (state, action) => {
        // console.log("inside-register-rejected");
        state.isLoading = false;
        state.error = action.payload;
      });
    builder
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isLoading = false;

        const userData = {
          token: action.payload.user.token,
          name: action.payload.user.name,
          email: action.payload.user.email,
          location: action.payload.user.location,
          lastName: action.payload.user.lastName,
        };
        state.user = userData; // Update user data
        addUserToLocalStorage(userData); // Update local storage
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { logoutUser, toggleSidebar } = userSlice.actions;

export default userSlice.reducer;
