import { combineReducers, configureStore } from "@reduxjs/toolkit";

import FavouriteReducer from "../reducer/favourites";
import AllJobsReducer from "../reducer/allJobs";

const allReducer = combineReducers({
  favouritesJobs: FavouriteReducer,
  allJobs: AllJobsReducer,
});

const store = configureStore({
  reducer: allReducer,
});

export default store;
