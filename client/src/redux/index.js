import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import rootSaga from "./sagas";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const store = {
  ...createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  ),
  runSaga: sagaMiddleware.run(rootSaga),
};

export default store;
