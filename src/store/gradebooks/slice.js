import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
  getGradebooks() {},
   getGradebook() {},
   createGradebook() {},
   createStudent() {},
    createComment() {},
};

const gradebooksSlice = createSlice({
  name: "gradebooks",
  initialState: {
    page: {
      data: [],
      current_page: 0,
      last_page: 0,
    },
    selectedGradebook: null,
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
    ...middlewareActions,
  },
});

export default gradebooksSlice.reducer;

export const { getGradebooks,setGradebooks,addGradebooks,getGradebook, setGradebook,createGradebook,createStudent,createComment,addComment} = gradebooksSlice.actions;