import Nomination from "./Nomination";
import { connect } from "react-redux";
import { get } from "./redux/actions";

const mapDispatchToProps = (dispatch) => {
  return {
    handleGetNominatedMovies: (id) => {
      dispatch(get(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    searchResults: state.searchResult.results,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nomination);
