import { fork } from "redux-saga/effects";
import { watchSearchSaga, watchNominateSaga } from "../pages/Home/redux/sagas";
export default function* rootSaga() {
  yield fork(watchSearchSaga);
  yield fork(watchNominateSaga);
}
