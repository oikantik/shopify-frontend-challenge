import {
  Container,
  Typography,
  Grid,
  AppBar,
  Toolbar,
  Slide,
  Button,
} from "@material-ui/core";
import React from "react";
import Nominations from "./components/Nominations";
import Results from "./components/Results";
import Search from "./components/Search";
import "./Home.scss";
import Proptypes from "prop-types";
import { toast, ToastContainer } from "react-toastify";
import { CopyToClipboard } from "react-copy-to-clipboard";
// import { Save as SaveIcon, Link as CopyIcon } from "@material-ui/icons";

function Home({
  handleChange,
  handleNominate,
  handleRemove,
  searchResults,
  nominationCount,
  handleSave,
  nominations,
  savedId,
}) {
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
        <Grid item xs={12} sm={6}>
          <Results handleNominate={handleNominate} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Nominations handleRemove={handleRemove} />
        </Grid>
      </Grid>
      <ToastContainer
        position='bottom-left'
        autoClose={2000}
        newestOnTop
        hideProgressBar={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      {searchResults.length > 0 && (
        <AppBar>
          <Toolbar>
            <Slide
              direction='down'
              in={searchResults.length > 0}
              mountOnEnter
              unmountOnExit>
              <Typography variant='body2'>
                Nominate 5 movies to save and share!
              </Typography>
            </Slide>
            <div className='navbar__grow'></div>

            <Slide
              direction='down'
              in={nominationCount >= 5}
              mountOnEnter
              unmountOnExit>
              <Button
                variant='contained'
                size='small'
                color='primary'
                disableElevation
                onClick={() =>
                  savedId === ""
                    ? handleSave({ nominations })
                    : handleSave({ id: savedId, nominations })
                }>
                Save
              </Button>
            </Slide>
            <Slide
              direction='down'
              in={savedId !== ""}
              mountOnEnter
              unmountOnExit>
              <CopyToClipboard
                text={window.location.href + savedId}
                onCopy={() => {
                  toast.dark("Copied successfully!");
                }}>
                <Button
                  variant='contained'
                  size='small'
                  color='primary'
                  disableElevation>
                  Copy
                </Button>
              </CopyToClipboard>
            </Slide>
          </Toolbar>
        </AppBar>
      )}
    </Container>
  );
}

Home.propTypes = {
  handleChange: Proptypes.func.isRequired,
  handleNominate: Proptypes.func.isRequired,
  searchResults: Proptypes.array.isRequired,
  handleRemove: Proptypes.func.isRequired,
  nominationCount: Proptypes.number.isRequired,
  handleSave: Proptypes.func.isRequired,
  nominations: Proptypes.array.isRequired,
  savedId: Proptypes.string.isRequired,
};

export default Home;
