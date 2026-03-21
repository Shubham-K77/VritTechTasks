//Imports:
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import postReducer from "./postSlice";
//Config
const store = configureStore({
  reducer: {
    users: userReducer,
    posts: postReducer,
  },
});
//Export
export default store;
