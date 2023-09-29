import { createSlice } from "@reduxjs/toolkit";
import { getUserPosts } from "./builderFunctions";

const initialState = {
  userPosts: [],
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builders) => {
    builders.addCase(getUserPosts.fulfilled, (state, action) => {
      state.userPosts = action.payload;
    });
  },
});

export default postSlice;
