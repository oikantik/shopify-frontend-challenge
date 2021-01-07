import {
  Button,
  CircularProgress,
  Paper,
  Typography,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";
import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import Proptypes from "prop-types";

function Results({
  handleNominate,
  searchTerm,
  loading,
  success,
  results,
  error,
  nominationCount,
  nominationResult,
}) {
  const [open, setOpen] = useState(false);

  const handleDialogToggle = () => {
    setOpen(!open);
  };

  const resultsContainer = results.map((result) => {
    return (
      <li key={result.imdbID} className='search-result-items__item'>
        <a
          href={"https://www.imdb.com/title/" + result.imdbID}
          rel='noreferrer'
          target='_blank'
          className='search-result-items__item-link'>
          {result.Title} ({result.Year})
        </a>{" "}
        <Button
          variant='outlined'
          className='search-result-items__button'
          onClick={() => {
            nominationCount < 5 ? handleNominate(result) : handleDialogToggle();
          }}
          disabled={(() => {
            const findIndex = nominationResult.find(
              (item) => result.imdbID === item.imdbID
            );
            return findIndex ? true : false;
          })()}>
          Nominate
        </Button>
      </li>
    );
  });
  return (
    <Fragment>
      <Paper variant='outlined' className='search-result'>
        <Typography variant='subtitle2' gutterBottom>
          Results for "{searchTerm}"
        </Typography>
        {searchTerm === "" && (
          <Typography variant='body2' gutterBottom>
            Please enter a movie name to see the result
          </Typography>
        )}
        {loading && <CircularProgress />}
        {!loading && !success && (
          <Typography variant='body2' gutterBottom>
            {error}
          </Typography>
        )}
        {results.length > 0 && (
          <ul className='search-result-items'>{resultsContainer}</ul>
        )}
      </Paper>
      <Dialog
        open={open}
        onClose={handleDialogToggle}
        aria-labelledby='responsive-dialog-title'>
        <DialogContent>
          <DialogContentText>
            You have already chosen 5 nominations. Please remove one or more to
            perform this action.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogToggle} color='primary' autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}

Results.propType = {
  handleNominate: Proptypes.func.isRequired,
  searchTerm: Proptypes.string.isRequired,
  loading: Proptypes.bool.isRequired,
  success: Proptypes.bool.isRequired,
  results: Proptypes.array.isRequired,
  nominationCount: Proptypes.number.isRequired,
  nominationResult: Proptypes.array.isRequired,
  error: Proptypes.string.isRequired,
};
const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchResult.searchTerm,
    loading: state.searchResult.loading,
    success: state.searchResult.success,
    results: state.searchResult.results,
    error: state.searchResult.error,
    nominationCount: state.searchResult.nominate.result.length,
    nominationResult: state.searchResult.nominate.result,
  };
};
export default connect(mapStateToProps)(Results);
