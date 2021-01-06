import { Button, CircularProgress, Paper, Typography } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import Proptypes from "prop-types";

function Results({
  handleNominate,
  searchTerm,
  loading,
  success,
  results,
  error,
}) {
  const resultsContainer = results.map((result) => {
    return (
      <li key={result.imdbID} className='search-result-items__item'>
        {result.Title} ({result.Year}){" "}
        <Button
          variant='outlined'
          className='search-result-items__button'
          onClick={() => {
            handleNominate(result);
          }}>
          Nominate
        </Button>
      </li>
    );
  });
  return (
    <Paper variant='outlined' className='search-result'>
      <Typography variant='subtitle2' gutterBottom>
        Results for "{searchTerm}"
      </Typography>
      {loading && <CircularProgress />}
      {!loading && !success && (
        <Typography variant='body2' gutterBottom>
          {error}
        </Typography>
      )}
      {!loading && success && (
        <ul className='search-result-items'>{resultsContainer}</ul>
      )}
    </Paper>
  );
}

Results.propType = {
  handleNominate: Proptypes.func.isRequired,
  searchTerm: Proptypes.string.isRequired,
  loading: Proptypes.bool.isRequired,
  success: Proptypes.bool.isRequired,
  results: Proptypes.array.isRequired,
  error: Proptypes.string.isRequired,
};
const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchResult.searchTerm,
    loading: state.searchResult.loading,
    success: state.searchResult.success,
    results: state.searchResult.results,
    error: state.searchResult.error,
  };
};
export default connect(mapStateToProps)(Results);
