import * as types from "./constants";

const initialState = {
  searchTerm: localStorage.getItem("searchTerm") || "",
  loading: false,
  success: false,
  results: JSON.parse(localStorage.getItem("results")) || [],
  totalResults: 0,
  nominate: {
    loading: false,
    success: false,
    result: JSON.parse(localStorage.getItem("nominatedMovies")) || [],
    error: "",
  },
  savedNomination: {
    loading: false,
    success: false,
    error: "",
    savedId: JSON.parse(localStorage.getItem("savedId")) || "",
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

    case types.SEARCH_SUCCESSFUL: {
      localStorage.setItem("searchTerm", state.searchTerm);
      localStorage.setItem("results", JSON.stringify(action.payload.Search));
      return {
        ...state,
        loading: false,
        success: true,
        results: action.payload.Search,
        totalResults: action.payload.totalResults,
        error: "",
      };
    }

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
          success: false,
          result: [...state.nominate.result],
          error: "",
        },
      };

    case types.NOMINATE_RESULT_SUCCESSFUL: {
      localStorage.setItem(
        "nominatedMovies",
        JSON.stringify([...state.nominate.result].concat(action.payload))
      );

      return {
        ...state,
        nominate: {
          loading: false,
          success: true,
          result: [...state.nominate.result].concat(action.payload),
          error: "",
        },
      };
    }

    case types.SAVE_NOMINATION:
      return {
        ...state,
        savedNomination: {
          ...state.savedNomination,
          loading: true,
          success: false,
          error: "",
        },
      };

    case types.SAVE_NOMINATION_SUCCESSFUL: {
      localStorage.setItem("savedId", JSON.stringify(action.payload._id));
      return {
        ...state,
        savedNomination: {
          loading: false,
          success: true,
          error: "",
          savedId: action.payload._id,
        },
      };
    }

    case types.SAVE_NOMINATION_FAILURE: {
      return {
        ...state,
        savedNomination: {
          ...state.savedNomination,
          loading: false,
          success: false,
          error: "Something went wrong",
        },
      };
    }

    case types.REMOVE_NOMINATION:
      return {
        ...state,
        nominate: {
          loading: true,
          success: false,
          result: [...state.nominate.result],
          error: "",
        },
      };

    case types.REMOVE_NOMINATION_SUCCESSFUL: {
      const oldResult = [...state.nominate.result].filter((item) => {
        return item.imdbID !== action.payload.imdbID;
      });
      return {
        ...state,
        nominate: {
          loading: false,
          result: oldResult,
          error: "",
          success: true,
        },
      };
    }
    default:
      return state;
  }
};
export default searchResult;
