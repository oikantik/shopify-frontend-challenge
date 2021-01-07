import { combineReducers } from "redux";
import searchResult from "../pages/Home/redux/reducers";
import nominatedMovies from "../pages/Nomination/redux/reducers";
export default combineReducers({ searchResult, nominatedMovies });
