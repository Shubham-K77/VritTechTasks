//Imports
import { createSlice } from "@reduxjs/toolkit";
import { postData } from "@/types";
//Type
type PostsState = {
  posts: postData[];
};
//Initial State
const initialState: PostsState = {
  posts: [],
};
//PostSlice
const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
});
//Export
export const { setPosts } = postSlice.actions;
export default postSlice.reducer;
