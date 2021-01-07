import { takeLatest, put, call } from "redux-saga/effects";
import { get } from "./middlewares";
import * as types from "./constants";

function* getNominatedMoviesSaga(action) {
  try {
    const payload = yield call(get, action.payload);
    yield put({
      type: types.GET_NOMINATED_MOVIES_SUCCESSFUL,
      payload,
    });
  } catch (error) {
    yield put({
      type: types.GET_NOMINATED_MOVIES_FAILURE,
      payload: error.message,
    });
  }
}

export function* watchGetNominatedMoviesSaga() {
  yield takeLatest(types.GET_NOMINATED_MOVIES, getNominatedMoviesSaga);
}
