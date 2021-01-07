import * as types from "./constants";

export const get = (payload) => {
  console.log(payload);
  return {
    type: types.GET_NOMINATED_MOVIES,
    payload: payload,
  };
};
