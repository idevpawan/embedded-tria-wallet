import { configureStore } from "@reduxjs/toolkit";
import { globalSlice } from "./GlobalState";

export default configureStore({
    reducer: {
      state: globalSlice.reducer,
    },
  });
  