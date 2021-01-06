import Home from "./Home";
import { connect } from "react-redux";
import { search, nominate } from "./redux/actions";

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (e) => {
      e.preventDefault();
      dispatch(search(e.target.value));
    },
    handleNominate: (payload) => {
      dispatch(nominate(payload));
    },
  };
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
