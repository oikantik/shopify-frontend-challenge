import * as types from "./constants";

const initialState = {
  searchTerm: "",
  loading: false,
  success: true,
  results: [],
  totalResults: 0,
  nominate: {
    loading: false,
    result: [],
    error: "",
  },
  error: "",
};

const searchResult = (state = initialState, action) => {
  switch (action.type) {
    case types.SEARCH_TERM_CHANGE:
      return {
        ...state,
        searchTerm: action.payload,
        loading: true,
        success: false,
        results: [],
        totalResults: 0,
        error: "",
      };

    case types.SEARCH_SUCCESSFUL:
      return {
        ...state,
        loading: false,
        success: true,
        results: action.payload.Search,
        totalResults: action.payload.totalResults,
        error: "",
      };

    case types.SEARCH_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    case types.NOMINATE_RESULT:
      return {
        ...state,
        nominate: {
          loading: true,
          result: [...state.nominate.result],
          error: "",
        },
      };

    case types.NOMINATE_RESULT_SUCCESSFUL:
      return {
        ...state,
        nominate: {
          loading: false,
          result: [...state.nominate.result].concat(action.payload),
          error: "",
        },
      };
    default:
      return state;
  }
};
export default searchResult;
