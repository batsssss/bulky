import React from 'react';
import cn from 'clsx';
import {
    Grid,
    TextField,
    Typography,
    InputAdornment, ListItemSecondaryAction,
} from '@material-ui/core';
import Moment from 'react-moment';
import useStyles from './use-styles';

function TextFieldsTop({container, session}) {
  const classes = useStyles();

  return (
      <div>
    <Grid container spacing={6}>
        <Grid item xs={3} className={classes.gridItem}>
            <Typography component="div" align="left">
                { "Started on: " }
                <Moment format="MMM D, YYYY \at HH:mm">
                    {session.start_datetime}
                </Moment>
            </Typography>
        </Grid>
        <Grid item xs={3} className={classes.gridItem}>
            <Typography component="div" align="left">
                { container.product_lot.product.catalogue_num
                + ", "
                + container.product_lot.product.product_name }
                <br />
                Expected Appearance: { container.product_lot.product.appearance }
            </Typography>
        </Grid>
        <Grid item xs={6} className={classes.gridItem}>
            <Typography component="div" align="left">
                { container.product_lot.lot_number
                + ", Container #"
                + container.container_num
                + " (" + container.packaging.name + ")" }
                <br />
                Remaining: { container.remaining } mg
            </Typography>
        </Grid>

    </Grid>
          <Grid item xs={2} className={classes.gridItem}>
              <TextField
                  defaultValue={0.0000}
                  variant="filled"
                  margin="dense"
                  className={cn(classes.textfield, classes.textfieldWhite)}
                  InputProps={{
                      endAdornment: <InputAdornment position="end">g</InputAdornment>,
                  }}
              />
          </Grid>
      </div>
  );
}

export default TextFieldsTop;
