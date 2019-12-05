import React from 'react';
import cn from 'clsx';
import {
  Grid,
  TextField,
  Typography,
  InputAdornment, Paper
} from '@material-ui/core';
import Moment from 'react-moment';
import useStyles from './use-styles';

function TextFieldsTop({container, session}) {
  const classes = useStyles();

  return (
      <Paper className={classes.paper}>
    <Grid container spacing={6}>
        <Grid item xs={12} className={classes.gridItem}>
            <Typography component="div" align="left">
                { "Started on: " }
                <Moment format="MMM D, YYYY \at HH:mm">
                    {session.start_datetime}
                </Moment>
            </Typography>
        </Grid>
        <Grid item sm={12} md={4} className={classes.gridItem}>
            <Typography component="div" align="left">
                Product:{' '}
                <strong>{ container.product_lot.product.catalogue_num}</strong>,
                {container.product_lot.product.product_name }
                <br />
                Expected Appearance: { container.product_lot.product.appearance }
            </Typography>
        </Grid>
        <Grid item sm={12} md={8} className={classes.gridItem}>
            <Typography component="div" align="left">
                Batch:{' '}
                <strong>{ container.product_lot.lot_number}</strong>,
                Container #
                { container.container_num }{' '}
                ({ container.packaging.name })
                <br />
                Remaining: { container.remaining } mg
            </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3} justify="flex-start" >
        <Grid item className={classes.gridItem}>
          <Typography component="div" align="left">
            Tare the scale.
            <br />
            Weigh the product container.
          </Typography>
        </Grid>
        <Grid item className={classes.gridItem}>
            <TextField
                placeholder={"0.0000"}
                name="weighing_session.gross_before"
                id="weighing_session_gross_before"
                variant="filled"
                margin="dense"
                className={cn(classes.textfield, classes.textfieldWhite)}
                InputProps={{
                    endAdornment: <InputAdornment position="end">g</InputAdornment>,
                }}
            />
        </Grid>
    </Grid>
      </Paper>
  );
}

export default TextFieldsTop;