import { SET_ALL_JOBS, SET_COMPANY } from "../../actionCreator";

const initialState = {
  jobs: { content: [] },
  company: { content: [] },
};

const AllJobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_JOBS:
      console.log("sono in " + SET_ALL_JOBS);
      return {
        ...state,
        jobs: {
          ...state.jobs,
          content: action.payload,
        },
      };
    case SET_COMPANY:
      console.log("sono in " + SET_COMPANY);
      return {
        ...state,
        company: {
          ...state.company,
          content: action.payload,
        },
      };

    default:
      console.log("sono in default");
      return state;
  }
};

export default AllJobsReducer;
