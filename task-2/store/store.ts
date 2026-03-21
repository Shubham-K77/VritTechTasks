//Imports:
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
//Config
const store = configureStore({
  reducer: {
    users: userReducer,
  },
});
//Export
export default store;
