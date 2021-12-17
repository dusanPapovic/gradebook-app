import { createSlice } from "@reduxjs/toolkit";
import { logout } from "../auth";

const middlewareActions = {
  getGradebooks() {},
  getGradebook() {},
  createGradebook() {},
  createStudent() {},
  createComment() {},
  deleteComment() {},
  deleteGradebook() {},
  deleteStudent() {},
  getMyGradebook() {},
};
const initialState = {
  page: {
      data: [],
      current_page: 0,
      last_page: 0,
    },
    selectedGradebook: null,
}
const gradebooksSlice = createSlice({
  name: "gradebooks",
  initialState: initialState,
  extraReducers: builder => {
    builder.addCase(logout.type, () => ({...initialState}))
  },
  reducers: {
    setGradebooks(state, action) {
      state.page = action.payload;
    },
    addGradebooks(state, action) {
      action.payload.data = [ ...state.page.data, ...action.payload.data]
      state.page = action.payload;
    },
    setGradebook(state, action) {
      state.selectedGradebook = action.payload;
    },
    addComment(state, action) {
      state.selectedGradebook.comments_of_gradebook.push(action.payload);
    },
    throwComment(state, action) {
      state.selectedGradebook.comments_of_gradebook=state.selectedGradebook.comments_of_gradebook.filter((comment) => comment.id !== action.payload);
    console.log( state.selectedGradebook.comments_of_gradebook);
    },
    ...middlewareActions,
  },
});

export default gradebooksSlice.reducer;

export const { getGradebooks,setGradebooks,addGradebooks,getGradebook, setGradebook,createGradebook,createStudent,createComment,addComment,deleteComment,throwComment,deleteGradebook,deleteStudent,getMyGradebook} = gradebooksSlice.actions;