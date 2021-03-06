import {
  Button,
  CircularProgress,
  Paper,
  Typography,
  Collapse,
  IconButton,
} from "@material-ui/core";
import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import Proptypes from "prop-types";
import { Close as CloseIcon } from "@material-ui/icons";
import { Alert } from "@material-ui/lab";

function Nominations({ success, loading, result, handleRemove }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    result.length === 5 && setOpen(true);
  }, [result, setOpen]);
  const nominations = result.map((item) => {
    return (
      <li className='nominated-movies-items__item' key={item.imdbID}>
        <Fragment>
          {item.Title} ({item.Year}){" "}
          <Button
            variant='outlined'
            color='secondary'
            className='nominated-movies-items__button'
            onClick={() => handleRemove(item)}>
            Remove
          </Button>
        </Fragment>
      </li>
    );
  });
  return (
    <Paper variant='outlined' className='nominated-movies'>
      <Typography variant='subtitle2' gutterBottom>
        Nominations
      </Typography>
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
          You have chosen {result.length} nominations, congratulations, you can
          now save it and share the link!
        </Alert>
      </Collapse>
      {!loading && result.length === 0 && (
        <Typography variant='body2' gutterBottom>
          Please nominate your favorite movie
        </Typography>
      )}
      {result.length > 0 && (
        <ul className='nominated-movies-items'>{nominations}</ul>
      )}
      {loading && <CircularProgress />}
    </Paper>
  );
}

Nominations.propType = {
  handleRemove: Proptypes.func.isRequired,
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
