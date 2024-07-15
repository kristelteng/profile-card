export const SET_LOADING_INDICATOR = "SET_LOADING_INDICATOR";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const SET_BG_COLOR = "SET_BG_COLOR";

// action creators
export const setLoadingIndicator = () => ({
  type: SET_LOADING_INDICATOR,
});

export const fetchUsersSuccess = (users) => ({
    type: FETCH_USERS_SUCCESS,
    payload: users
});

export const fetchUsersFailure = (error) => ({
    type: FETCH_USERS_FAILURE,
    payload: error
});

export const setCurrentPage = (page) => ({
    type: SET_CURRENT_PAGE,
    payload: page
});

export const setBgColor = (color) => ({
    type: SET_BG_COLOR,
    payload: color
});

export const fetchUsers = (page = 1, results = 4) => async (dispatch) => {
    dispatch(setLoadingIndicator()); 

    try {
      const response = await fetch(
        `https://randomuser.me/api/?page=${page}&results=${results}`
      );

      const data = await response.json();
    
      if (data.results) {
        dispatch(fetchUsersSuccess(data.results));
      }
    } catch (error) {
        dispatch(fetchUsersFailure(error.message));
    }
};