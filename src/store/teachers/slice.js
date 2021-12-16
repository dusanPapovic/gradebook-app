import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
  getTeachers() {},
};

const teachersSlice = createSlice({
  name: "teachers",
  initialState: {
    allTeachers: [],
  },
  reducers: {
    setTeachers(state, action) {
      state.allTeachers = action.payload;
    },
    ...middlewareActions,
  },
});

export default teachersSlice.reducer;

export const { getTeachers,setTeachers } = teachersSlice.actions;