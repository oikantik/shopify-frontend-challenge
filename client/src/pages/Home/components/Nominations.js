import { Button, Paper, Typography } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import Proptypes from "prop-types";

function Nominations({ success, loading, result }) {
  const nominations = result.map((item) => {
    return (
      <li key={item.imdbID} className='nominated-movies-items__item'>
        {item.Title} ({item.Year}){" "}
        <Button
          variant='outlined'
          color='secondary'
          className='nominated-movies-items__button'>
          Remove
        </Button>
      </li>
    );
  });
  return (
    <Paper variant='outlined' className='nominated-movies'>
      <Typography variant='subtitle2' gutterBottom>
        Nominations
      </Typography>
      {result.length === 0 && (
        <Typography variant='body2' gutterBottom>
          Please nominate your favorite movie
        </Typography>
      )}
      {result.length > 0 && (
        <ul className='nominated-movies-items'>{nominations}</ul>
      )}
    </Paper>
  );
}

Nominations.propType = {
  success: Proptypes.bool.isRequired,
  loading: Proptypes.bool.isRequired,
  result: Proptypes.array.isRequired,
};
const mapStateToProps = (state) => {
  return {
    loading: state.searchResult.nominate.loading,
    success: state.searchResult.nominate.success,
    result: state.searchResult.nominate.result,
  };
};
export default connect(mapStateToProps)(Nominations);
