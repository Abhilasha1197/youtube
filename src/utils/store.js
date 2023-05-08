import {configureStore} from "@reduxjs/toolkit";
import sideBarSlice from "./sideBarSlice";
const store = configureStore({
      reducer :{
        slice: sideBarSlice ,
      }
})

export default store;
