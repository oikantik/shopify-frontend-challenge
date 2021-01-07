import * as types from "./constants";

export const search = (payload) => {
  return {
    type: types.SEARCH_TERM_CHANGE,
    payload,
  };
};

export const nominate = (payload) => {
  return {
    type: types.NOMINATE_RESULT,
    payload,
  };
};

export const remove = (payload) => {
  return {
    type: types.REMOVE_NOMINATION,
    payload,
  };
};

export const save = (payload) => {
  return {
    type: types.SAVE_NOMINATION,
    payload,
  };
};
