import React from 'react';
import cn from 'clsx';
import {
  Grid,
  TextField,
  Typography,
  InputAdornment,
} from '@material-ui/core';
import useStyles from './use-styles';

function TextFieldsTop() {
  const classes = useStyles();
  return (
    <Grid container spacing={6}>
      <Grid item xs={3} className={classes.gridItem}>
        <Typography component="div" align="left">
                  Target Amount
        </Typography>

        <TextField
          defaultValue={5}
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
                  Should Weigh
        </Typography>

        <TextField
          defaultValue={5.1}
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
                  Reserve Lot
        </Typography>

        <TextField
          defaultValue="ERG52502 - 87.3"
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
                  Container to use
        </Typography>

        <TextField
          defaultValue="100005E"
          variant="filled"
          margin="dense"
          className={classes.textfield}
          InputProps={{
            endAdornment: <InputAdornment position="end">mg</InputAdornment>,
          }}
        />
      </Grid>

      <Grid item xs={3} className={classes.gridItem} />
      <Grid item xs={3} className={classes.gridItem} />
      <Grid item xs={3} className={cn(classes.gridItem, classes.gridItemMinPadding)}>
        <TextField
          defaultValue="100005E"
          variant="filled"
          margin="dense"
          className={classes.textfield}
          InputProps={{
            endAdornment: <InputAdornment position="end">mg</InputAdornment>,
          }}
        />
      </Grid>

    </Grid>
  );
}

export default TextFieldsTop;
