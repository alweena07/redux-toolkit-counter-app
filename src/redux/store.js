import { configureStore } from "@reduxjs/toolkit";
import sliceReducer from "./reducer";

export default configureStore({
  reducer: {
    counter: sliceReducer,
  },
});
