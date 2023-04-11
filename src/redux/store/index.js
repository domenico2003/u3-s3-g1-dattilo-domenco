import { configureStore } from "@reduxjs/toolkit";
import MainReducer from "../reducer";

const store = configureStore({
  reducer: MainReducer,
});

export default store;
