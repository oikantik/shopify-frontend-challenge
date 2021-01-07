import * as types from "./constants";

const initialState = {
  loading: false,
  success: false,
  results: [],
  error: "",
};

const nominatedMovies = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_NOMINATED_MOVIES:
      return {
        ...state,
        loading: true,
        success: false,
        results: [],
        error: "",
      };

    case types.GET_NOMINATED_MOVIES_SUCCESSFUL: {
      console.log(action.payload);
      return {
        ...state,
        loading: false,
        success: true,
        results: action.payload.nominations,
        error: "",
      };
    }

    case types.GET_NOMINATED_MOVIES_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default nominatedMovies;
