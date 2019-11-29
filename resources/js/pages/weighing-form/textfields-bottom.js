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
    <Grid container spacing={6}>
      <Grid item xs={3} className={classes.gridItem}>
        <Typography component="div" align="left">
                  Removed
        </Typography>

        <TextField
          defaultValue={5.3}
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
          defaultValue={0.1}
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
                  Comments
        </Typography>

        <TextField
          multiline
          fullWidth
          rows="4"
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
  );
}

export default TextFieldsBottom;
