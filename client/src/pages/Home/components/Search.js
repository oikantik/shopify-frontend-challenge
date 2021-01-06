import {
  CircularProgress,
  FormControl,
  FormHelperText,
  Input,
  InputAdornment,
  Paper,
  Typography,
} from "@material-ui/core";
import { Search as SearchIcon } from "@material-ui/icons";
import React from "react";
import { connect } from "react-redux";
import Proptypes from "prop-types";

function Search({ loading, handleChange, searchTerm }) {
  return (
    <Paper variant='outlined' elevation={1}>
      <form autoComplete='off' className='search-form'>
        <FormControl className='search-form__input-container'>
          <Typography
            variant='body2'
            gutterBottom
            className='search-form__label'>
            Movie Title
          </Typography>
          <Input
            variant='outlined'
            fullWidth
            disableUnderline
            id='my-input'
            aria-describedby='my-helper-text'
            className='search-form__input'
            onChange={handleChange}
            value={searchTerm}
            startAdornment={
              <InputAdornment position='start'>
                {loading ? (
                  <CircularProgress className='search-form__circle' />
                ) : (
                  <SearchIcon className='search-form__search-icon' />
                )}
              </InputAdornment>
            }
          />
          <FormHelperText id='my-helper-text'>
            Please enter a title of the movie e.g. Shawshank Redemption
          </FormHelperText>
        </FormControl>
      </form>
    </Paper>
  );
}

Search.propType = {
  handleChange: Proptypes.func.isRequired,
  searchTerm: Proptypes.string.isRequired,
  loading: Proptypes.bool.isRequired,
};
const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchResult.searchTerm,
    loading: state.searchResult.loading,
  };
};
export default connect(mapStateToProps)(Search);
