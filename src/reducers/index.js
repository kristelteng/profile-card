import {
  SET_LOADING_INDICATOR,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  SET_CURRENT_PAGE,
  SET_BG_COLOR,
} from "../actions";

const initialBgColor = localStorage.getItem("bgColor") || "#ffffff";

const initialState = {
  users: [],
  currentPage: 1,
  usersPerPage: 4,
  bgColor: initialBgColor,
  loading: false,
  error: null,
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_LOADING_INDICATOR:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_USERS_SUCCESS:
        return {
          ...state,
          users: action.payload,
          loading: false,
        };
      case FETCH_USERS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case SET_CURRENT_PAGE:
        return {
          ...state,
          currentPage: action.payload,
        };
      case SET_BG_COLOR:
        return {
          ...state,
          bgColor: action.payload,
        };
      default:
        return state;
    }
}

export default rootReducer;