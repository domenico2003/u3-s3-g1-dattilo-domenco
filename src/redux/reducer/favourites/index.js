import {
  REMOVE_FAVOURITES_JOBS,
  SET_FAVOURITES_JOBS,
} from "../../actionCreator";

const initialState = {
  content: [],
};

const FavouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FAVOURITES_JOBS:
      console.log("sono in SET_FAVOURITES_JOBS");
      return {
        ...state,

        content: [...state.content, action.payload],
      };
    case REMOVE_FAVOURITES_JOBS:
      console.log("sono in REMOVE_FAVOURITES_JOBS");
      return {
        ...state,

        content: state.content.filter((_, i) => i !== action.payload),
      };

    default:
      console.log("sono in default");
      return state;
  }
};

export default FavouriteReducer;
