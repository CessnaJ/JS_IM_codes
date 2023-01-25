import { createSlice } from "@reduxjs/toolkit";
// createAsyncThunk
// import axios from "axios";

// const myServerURL = 'myserverURL'
// const asyncCodePost = createAsyncThunk(
//     'userSlice/asyncCodePost',
//     async () => {
//         const res = await axios.post(myServerURL, {
//             code:
//         })
//     }
// )

const userSlice = createSlice({
  name: "userSlice",
  initialState: { accessToken: "", refreshToken: "", accessCode: "" },
  reducers: {
    up: (state, action) => {
      state.value = state.value + action.payload;
    },
  },
  extraReducers: {},
});

export default userSlice;
