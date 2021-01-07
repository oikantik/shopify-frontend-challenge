import { Container, Typography, Grid } from "@material-ui/core";
import { Link, useParams, withRouter } from "react-router-dom";
import React, { useEffect } from "react";
import Nominations from "./components/Nominations";
import "./Nomination.scss";
import Proptypes from "prop-types";
import { ArrowBack as ArrowBackIcon } from "@material-ui/icons";
// import { Save as SaveIcon, Link as CopyIcon } from "@material-ui/icons";

function Nomination({ handleGetNominatedMovies }) {
  const { id } = useParams();
  useEffect(() => {
    handleGetNominatedMovies(id);
  }, [handleGetNominatedMovies, id]);
  console.log(id);
  return (
    <Container className='nominated-movies-page' maxWidth='md'>
      <div className='nominated-movies-page__top'>
        <Link to='/' className='nominated-movies-page__link'>
          <ArrowBackIcon />
        </Link>{" "}
        <Typography variant='h5' gutterBottom>
          Nominated Movies
        </Typography>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {/*<Slide direction='down' in={true} mountOnEnter unmountOnExit> */}
          <Nominations />
          {/* </Slide> */}
        </Grid>
      </Grid>
    </Container>
  );
}

Nomination.propTypes = {
  handleGetNominatedMovies: Proptypes.func.isRequired,
};

export default withRouter(Nomination);
