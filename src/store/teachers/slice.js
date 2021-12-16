import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
  getTeachers() {},
  getTeacher() {},
};

const teachersSlice = createSlice({
  name: "teachers",
  initialState: {
    allTeachers: [],
  },
  selectedTeacher: null,
  reducers: {
    setTeachers(state, action) {
      state.allTeachers = action.payload;
    },
    setTeacher(state, action) {
      state.selectedTeacher = action.payload;
    },
    ...middlewareActions,
  },
});

export default teachersSlice.reducer;

export const { getTeachers,setTeachers,getTeacher, setTeacher } = teachersSlice.actions;