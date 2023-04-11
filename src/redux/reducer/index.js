const initialState = {
  favouritesCompanys: {
    content: [],
  },
  favouritesJobs: {
    content: [],
  },
};

const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FAVOURITES_JOBS":
      console.log("sono in SET_FAVOURITES_JOBS");
      return {
        ...state,
        favouritesJobs: {
          ...state.favouritesJobs,
          content: [...state.favouritesJobs.content, action.payload],
        },
      };
    case "REMOVE_FAVOURITES_JOBS":
      console.log("sono in REMOVE_FAVOURITES_JOBS");
      return {
        ...state,
        favouritesJobs: {
          ...state.favouritesJobs,
          content: state.favouritesJobs.content.filter(
            (_, i) => i !== action.payload
          ),
        },
      };

    default:
      console.log("sono in default");
      return state;
  }
};

export default MainReducer;
