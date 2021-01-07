import Home from "./Home";
import { connect } from "react-redux";
import { search, nominate, remove, save } from "./redux/actions";

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (e) => {
      e.preventDefault();
      dispatch(search(e.target.value));
    },
    handleNominate: (payload) => {
      dispatch(nominate(payload));
    },
    handleRemove: (payload) => {
      dispatch(remove(payload));
    },
    handleSave: (payload) => {
      dispatch(save(payload));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    searchResults: state.searchResult.results,
    nominationCount: state.searchResult.nominate.result.length,
    nominations: state.searchResult.nominate.result,
    savedId: state.searchResult.savedNomination.savedId,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
