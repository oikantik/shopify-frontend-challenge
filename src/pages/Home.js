import {
  Container,
  Typography,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  InputAdornment,
  Grid,
  Paper,
  IconButton,
} from "@material-ui/core";
import { Search as SearchIcon } from "@material-ui/icons";
import React from "react";
import "./Home.scss";

function Home() {
  return (
    <Container className='homepage' maxWidth='md'>
      <Typography variant='h5' gutterBottom>
        The Shoppies
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper variant='outlined'>
            {" "}
            <form autoComplete='off' className='search-form'>
              <FormControl className='search-form__input-container'>
                <InputLabel htmlFor='input-with-icon-adornment'>
                  Movie Title
                </InputLabel>
                <Input
                  variant='outlined'
                  fullWidth
                  disableUnderline
                  id='my-input'
                  aria-describedby='my-helper-text'
                  className='search-form__input'
                  startAdornment={
                    <InputAdornment position='start'>
                      <IconButton type='submit' aria-label='search'>
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  }
                />
                <FormHelperText id='my-helper-text'>
                  Please enter a title of the movie e.g. Shawshank Redemption
                </FormHelperText>
              </FormControl>
            </form>
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper variant='outlined' className='search-result'>
            <Typography variant='subtitle2' gutterBottom>
              Results for "{"ram"}"
            </Typography>
            <ul>
              <li>Rambo (1991) Nominate</li>
            </ul>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper variant='outlined' className='nominated-movies'>
            <Typography variant='subtitle2' gutterBottom>
              Nominations
            </Typography>
            <ul>
              <li>Rambo (1991) Remove</li>
            </ul>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
