import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    email: null,
  },
};

export const userSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    login: (state, action) => {
      state.value.email = action.payload.email;
    },
    logout: (state) => {
      state.value.email = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
