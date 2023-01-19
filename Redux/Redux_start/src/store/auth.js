import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { isAuthenticated: false };

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
// reducers라고 되어있지만 우리가 호출하는건 createSlice가 만드는 Slice의 method니까
// 호출할때는 authSlice.reducer가 된다.
