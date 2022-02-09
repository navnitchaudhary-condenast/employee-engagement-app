import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: localStorage.getItem("accessToken") ?? "",
  user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {},
  isAuthenticated: localStorage.getItem("accessToken") ? true : false
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    storeTokenAndUserProfile: (state, { payload }) => {
      state.accessToken = payload.accessToken;
      state.user = payload.user;
      state.isAuthenticated = true;
    }
  }
});

export const {
  storeTokenAndUserProfile,
} = userSlice.actions;

// A selector
export const userSelector = state => state.user;

// The reducer
export default userSlice.reducer;

