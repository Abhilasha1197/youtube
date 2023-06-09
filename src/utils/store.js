import { configureStore } from "@reduxjs/toolkit";
import sideBarSlice from "./sideBarSlice";
import searchSlice from "./searchSlice";
const store = configureStore({
  reducer: {
    slice: sideBarSlice,
    search: searchSlice
  },
});

export default store;
