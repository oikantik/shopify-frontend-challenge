import { takeLatest, put, call } from "redux-saga/effects";
import { search, save } from "./middlewares";
import * as types from "./constants";
import { toast } from "react-toastify";

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

  yield call(toast.dark, `${action.payload.Title} is nominated successfully`);
}

function* saveSaga(action) {
  try {
    const payload = yield call(save, action.payload);
    yield put({
      type: types.SAVE_NOMINATION_SUCCESSFUL,
      payload,
    });
    console.log(payload);
    yield call(toast.dark, `Your nominations are saved successfully`);
  } catch (error) {
    yield put({
      type: types.SAVE_NOMINATION_FAILURE,
      payload: error.message,
    });
    yield call(
      toast.error,
      `Your nominations were not saved, please try again`
    );
  }
}

function* removeSaga(action) {
  yield put({
    type: types.REMOVE_NOMINATION_SUCCESSFUL,
    payload: action.payload,
  });

  yield call(
    toast.error,
    `${action.payload.Title} is removed from nomination successfully`
  );
}

export function* watchSearchSaga() {
  yield takeLatest(types.SEARCH_TERM_CHANGE, searchSaga);
}

export function* watchNominateSaga() {
  yield takeLatest(types.NOMINATE_RESULT, nominateSaga);
}

export function* watchSaveSaga() {
  yield takeLatest(types.SAVE_NOMINATION, saveSaga);
}

export function* watchRemoveSaga() {
  yield takeLatest(types.REMOVE_NOMINATION, removeSaga);
}
