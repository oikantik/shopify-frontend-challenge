import { Container, Typography, Grid } from "@material-ui/core";
import React from "react";
import Nominations from "./components/Nominations";
import Results from "./components/Results";
import Search from "./components/Search";
import "./Home.scss";
import Proptypes from "prop-types";

function Home({ handleChange, handleNominate }) {
  return (
    <Container className='homepage' maxWidth='md'>
      <Typography variant='h5' gutterBottom>
        The Shoppies
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Search handleChange={handleChange} />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Results handleNominate={handleNominate} />
        </Grid>
        <Grid item xs={6}>
          <Nominations />
        </Grid>
      </Grid>
    </Container>
  );
}

Home.propTypes = {
  handleChange: Proptypes.func.isRequired,
  handleNominate: Proptypes.func.isRequired,
};

export default Home;
