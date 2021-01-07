import { fork } from "redux-saga/effects";
import {
  watchSearchSaga,
  watchNominateSaga,
  watchRemoveSaga,
  watchSaveSaga,
} from "../pages/Home/redux/sagas";
import { watchGetNominatedMoviesSaga } from "../pages/Nomination/redux/sagas";
export default function* rootSaga() {
  yield fork(watchSearchSaga);
  yield fork(watchNominateSaga);
  yield fork(watchRemoveSaga);
  yield fork(watchSaveSaga);
  yield fork(watchGetNominatedMoviesSaga);
}
