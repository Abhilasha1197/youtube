import { createSlice } from "@reduxjs/toolkit";

const sideBarSlice = createSlice({
  name: "sideBar",
  initialState: {
    isOpenSideBar: true,
  },
  reducers: {
    toggleSideBar: (state) => {
      state.isOpenSideBar = !state.isOpenSideBar;
    },
  },
});

export const { toggleSideBar } = sideBarSlice.actions;
export default sideBarSlice.reducer;
