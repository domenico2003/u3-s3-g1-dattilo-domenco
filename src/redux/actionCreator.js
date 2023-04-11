export const SET_FAVOURITES_JOBS = "SET_FAVOURITES_JOBS";
export const REMOVE_FAVOURITES_JOBS = "REMOVE_FAVOURITES_JOBS";
export const SET_ALL_JOBS = "SET_ALL_JOBS";
export const SET_COMPANY = "SET_COMPANY";
export const SET_ISLOADING_ON = "SET_ISLOADING_ON";
export const SET_ISLOADING_OFF = "SET_ISLOADING_OFF";

export const removeFavouriteJobCreator = (index) => ({
  type: REMOVE_FAVOURITES_JOBS,
  payload: index,
});
export const setFavouriteJobCreator = (data) => ({
  type: SET_FAVOURITES_JOBS,
  payload: data,
});
export const setAllJobs = (data) => ({
  type: SET_ALL_JOBS,
  payload: data,
});

export const setLoadingOn = () => ({
  type: SET_ISLOADING_ON,
});
export const setLoadingOff = () => ({
  type: SET_ISLOADING_OFF,
});

export const setCompaniCreator = (data) => ({
  type: SET_COMPANY,
  payload: data,
});

export const fetchJobs = (query) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://strive-benchmark.herokuapp.com/api/jobs?search=" +
          query +
          "&limit=20"
      );
      if (response.ok) {
        const { data } = await response.json();
        dispatch(setAllJobs(data));
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    } finally {
      console.log("finally");
      dispatch(setLoadingOff());
    }
  };
};

export const fetchCompany = (params) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://strive-benchmark.herokuapp.com/api/jobs?company=" + params
      );
      if (response.ok) {
        const { data } = await response.json();
        dispatch(setCompaniCreator(data));
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    } finally {
      console.log("finally");
      dispatch(setLoadingOff());
    }
  };
};
