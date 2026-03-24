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
    createPost: (state, action) => {
      const postInfo: postData = action.payload.postInfo;
      state.posts.push(postInfo);
    },
  },
});
//Export
export const { setPosts, createPost } = postSlice.actions;
export default postSlice.reducer;
