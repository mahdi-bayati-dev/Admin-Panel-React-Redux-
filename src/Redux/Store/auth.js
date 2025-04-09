import { createSlice } from "@reduxjs/toolkit";

// وضعیت اولیه
const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isAuthenticated: !!localStorage.getItem("user"),
};

// ساخت slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logoutUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

// اکسپورت اکشن‌ها و ریدوسر
export const { loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
