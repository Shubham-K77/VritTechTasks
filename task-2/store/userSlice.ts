//Imports
import { createSlice } from "@reduxjs/toolkit";
import { userData } from "@/types";
//Initial State
type UsersState = {
  users: userData[];
};
const initialState: UsersState = {
  users: [],
};
//UserSlice
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});
//Export
export const {setUsers} = userSlice.actions;
export default userSlice.reducer;
