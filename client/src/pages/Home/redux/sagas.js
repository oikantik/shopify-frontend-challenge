import { takeLatest, put, call } from "redux-saga/effects";
import { search } from "./middlewares";
import * as types from "./constants";

function* searchSaga(action) {
  try {
    const payload = yield call(search, action.payload);
    yield put({
      type: types.SEARCH_SUCCESSFUL,
      payload,
    });
  } catch (error) {
    yield put({
      type: types.SEARCH_FAILURE,
      payload: error.message,
    });
  }
}

function* nominateSaga(action) {
  yield put({
    type: types.NOMINATE_RESULT_SUCCESSFUL,
    payload: action.payload,
  });
}

export function* watchSearchSaga() {
  yield takeLatest(types.SEARCH_TERM_CHANGE, searchSaga);
}

export function* watchNominateSaga() {
  yield takeLatest(types.NOMINATE_RESULT, nominateSaga);
}
