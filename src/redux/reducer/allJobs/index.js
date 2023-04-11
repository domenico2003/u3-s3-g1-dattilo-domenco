import {
  SET_ALL_JOBS,
  SET_COMPANY,
  SET_ISLOADING_OFF,
  SET_ISLOADING_ON,
} from "../../actionCreator";

const initialState = {
  jobs: { content: [] },
  company: { content: [] },
  isLoading: { content: false },
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
    case SET_ISLOADING_ON:
      console.log("sono in " + SET_COMPANY);
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          content: true,
        },
      };
    case SET_ISLOADING_OFF:
      console.log("sono in " + SET_COMPANY);
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          content: false,
        },
      };

    default:
      console.log("sono in default");
      return state;
  }
};

export default AllJobsReducer;
