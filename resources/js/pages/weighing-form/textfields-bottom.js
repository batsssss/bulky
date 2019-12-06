import React from 'react';
import cn from 'clsx';
import {
  Grid,
  TextField,
  Typography,
  InputAdornment,
} from '@material-ui/core';
import AppButton from '../../components/app-button';
import useStyles from './use-styles';

function TextFieldsBottom() {
  const classes = useStyles();
  return (
      <React.Fragment>
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

          <Grid item xs={6} className={classes.gridItem}>
            <Typography component="div" align="left">
              Notes
            </Typography>

            <TextField
                multiline
                fullWidth
                rows="2"
                variant="filled"
                margin="dense"
                className={classes.textarea}
            />
          </Grid>

          <Grid item xs={12} className={cn(classes.gridItem, classes.gridItemButton)}>
            <AppButton
                variant="contained"
                color="primary"
                className={classes.doneButton}
            >
              Done
            </AppButton>
          </Grid>
        </Grid>
      </React.Fragment>
  );
}

export default TextFieldsBottom;
