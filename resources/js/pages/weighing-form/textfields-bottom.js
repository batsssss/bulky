import React, {useContext} from 'react';
import {Redirect} from 'react-router-dom';
import cn from 'clsx';
import {
  Grid,
  TextField,
  Typography,
  InputAdornment,
    Paper
} from '@material-ui/core';
import {Rating} from '@material-ui/lab';
import AppButton from '../../components/app-button';
import useStyles from './use-styles';
import {FormContext} from "./weighing-form";
import axios from "axios";

function TextFieldsBottom() {

  const classes = useStyles();
  const [session, setSession] = useContext(FormContext);

  const [
    redirect, setRedirect
  ] = React.useState(false);

  const handleGrossAfterBlur = (event) => {
    let newSession = {...session};
    newSession.gross_after = event.target.value;
    setSession(newSession);
  };

  const handleNotesBlur = (event) => {
    let newSession = {...session};
    newSession.notes = event.target.value;
    setSession(newSession);
  };

  const handleRatingBlur = (event) => {
    let newSession = {...session};
    newSession.rating = parseInt(event.target.value);
    setSession(newSession);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`/api/update-weighing-session`, session).then(response => {
      setRedirect(true);
    });
  };

  return (

      <React.Fragment>
        {redirect ? <Redirect to='/order-picker' /> : null}

        <Paper className={classes.paper}>
        <Grid container spacing={6}>
          <Grid item xs={3} className={classes.gridItem}>
            <Typography component="div" align="left">
              Tare the scale.
              <br />
              Weight the product container.
            </Typography>
          </Grid>
          <Grid item className={classes.gridItem}>
            <TextField
                name={"weighing_session.gross_after"}
                id={"weighing_session_gross_after"}
                placeholder={"0.0"}
                variant="filled"
                margin="dense"
                className={classes.textfield}
                InputProps={{
                  endAdornment: <InputAdornment position="end">mg</InputAdornment>,
                }}
                onBlur={(event) => handleGrossAfterBlur(event)}
            />
          </Grid>
        </Grid>
        <Grid container spacing={6}>
          <Grid item xs={3} className={classes.gridItem}>
            <Typography component="div" align="left">
              Removed
            </Typography>

            <TextField
                name={"weighing_session.removed"}
                id={"weighing_session_removed"}
                placeholder={"0.0"}
                variant="filled"
                margin="dense"
                className={classes.textfield}
                InputProps={{
                  endAdornment: <InputAdornment position="end">mg</InputAdornment>,
                }}
            />
          </Grid>

          <Grid item xs={3} className={classes.gridItem}>
            <Typography component="div" align="left">
              Spillage
            </Typography>

            <TextField
                name={"weighing_session.spilled"}
                id={"weighing_session_spilled"}
                placeholder={"0.0"}
                variant="filled"
                margin="dense"
                className={classes.textfield}
                InputProps={{
                  endAdornment: <InputAdornment position="end">mg</InputAdornment>,
                }}
            />
          </Grid>

          <Grid item xs={4} className={classes.gridItem}>
            <Typography component="div" align="left">
              Notes
            </Typography>

            <TextField
                multiline
                fullWidth
                name="weighing_session.notes"
                value={session.notes}
                rows="1"
                variant="filled"
                margin="dense"
                className={classes.textarea}
                onBlur={(event) => handleNotesBlur(event)}
            />
          </Grid>

          <Grid item xs={2} className={classes.gridItem}>
            <Typography component="div" align="left">
              Ease of Weighing
            </Typography>

            <Rating
                name="weighing_session.rating"
                value={session.rating}
                onChange={(event) => handleRatingBlur(event)}
            />
          </Grid>

          <Grid item xs={8} className={cn(classes.gridItem, classes.gridItemButton)}>
            <Typography component="div" align="right">
              Finish and return container to: Freezer 1
            </Typography>
          </Grid>
          <Grid item xs={4} className={cn(classes.gridItem, classes.gridItemButton)}>
            <Typography component="div" align="left">
              <AppButton
                  variant="contained"
                  color="primary"
                  className={classes.doneButton}
                  type="submit"
                  onClick={(event) => handleSubmit(event)}
              >
                Finish
              </AppButton>
            </Typography>
          </Grid>
        </Grid>
        </Paper>
      </React.Fragment>
  );
}

export default TextFieldsBottom;
