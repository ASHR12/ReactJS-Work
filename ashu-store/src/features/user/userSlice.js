import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const themes = {
  light: "fantasy",
  dark: "night",
};

const getThemeFromLocalStorage = () => {
  const themeValue = localStorage.getItem("theme") || themes.light;
  document.documentElement.setAttribute("data-theme", themeValue);
  return themeValue;
};

const initialState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,

  theme: getThemeFromLocalStorage(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      console.log("action", action);
      console.log("users", action.payload.user);
      state.user = action.payload.user; // Update user data with payload
      const userData = {
        jwt: action.payload.jwt,
        id: action.payload.user.id,
        username: action.payload.user.username,
        email: action.payload.user.email,
        provider: action.payload.user.provider,
        confirmed: action.payload.user.confirmed,
        blocked: action.payload.user.blocked,
        createdAt: action.payload.user.createdAt,
        updatedAt: action.payload.user.updatedAt,
      };
      state.user = userData;
      localStorage.setItem("user", JSON.stringify(userData)); // Persist user data
    },
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem("user");
      toast.success("Logged Out Successfully");
    },
    toggleTheme: (state) => {
      //   console.log("toggle theme");
      state.theme = state.theme === themes.light ? themes.dark : themes.light;
      document.documentElement.setAttribute("data-theme", state.theme);
      localStorage.setItem("theme", state.theme);
    },
  },
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;

export default userSlice.reducer;
