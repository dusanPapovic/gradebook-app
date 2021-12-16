import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
  getGradebooks() {},
};

const gradebooksSlice = createSlice({
  name: "gradebooks",
  initialState: {
    page: {
      data: [],
      current_page: 0,
      last_page: 0,
    },
  },
  reducers: {
    setGradebooks(state, action) {
      state.page = action.payload;
    },
    addGradebooks(state, action) {
      action.payload.data = [ ...state.page.data, ...action.payload.data]
      state.page = action.payload;
    },
    ...middlewareActions,
  },
});

export default gradebooksSlice.reducer;

export const { getGradebooks,setGradebooks,addGradebooks } = gradebooksSlice.actions;