import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  userData: null,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.userData = action.payload;
    },
  },
});

export const { loginSuccess } = userSlice.actions;
export default userSlice.reducer;
