import {
  CircularProgress,
  Paper,
  Typography,
  Collapse,
  IconButton,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Proptypes from "prop-types";
import { Close as CloseIcon } from "@material-ui/icons";
import { Alert } from "@material-ui/lab";

function Nominations({ success, loading, result }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    result.length === 5 && setOpen(true);
  }, [result, setOpen]);

  const nominations =
    result &&
    result.map((item) => {
      return (
        <li className='nominated-movies-items__item' key={item.imdbID}>
          <a
            href={"https://www.imdb.com/title/" + item.imdbID}
            rel='noreferrer'
            target='_blank'
            className='nominated-movies-items__item-link'>
            {item.Title} ({item.Year}){" "}
          </a>
        </li>
      );
    });
  return (
    <Paper variant='outlined' className='nominated-movies'>
      {loading && <CircularProgress />}
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label='close'
              color='inherit'
              size='small'
              onClick={() => {
                setOpen(false);
              }}>
              <CloseIcon fontSize='inherit' />
            </IconButton>
          }>
          Here are the {result.length} nominated movies, go back to nominate the
          movies you like!
        </Alert>
      </Collapse>
      {!loading && result.length === 0 && (
        <Typography variant='body2' gutterBottom>
          Sorry, no nominated movies found, go back and nominate some!
        </Typography>
      )}
      {!loading && result.length > 0 && (
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
    loading: state.nominatedMovies.loading,
    success: state.nominatedMovies.success,
    result: state.nominatedMovies.results,
  };
};
export default connect(mapStateToProps)(Nominations);
