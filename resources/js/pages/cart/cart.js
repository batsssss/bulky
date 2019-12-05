import React from 'react';
import {
  Paper,
  Grid,
  Container,
} from '@material-ui/core';
import PageTitle from '../../components/page-title';
import AppTable from '../../components/app-table';
import AppButton from '../../components/app-button';
import useStyles from './use-styles';
import rows from './rows';
import headers from './headers';

function Cart() {
  const classes = useStyles();

  return (
    <Container className={classes.rootContainer}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <PageTitle title="YOUR CART" />
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <AppTable
                  size="small"
                  rows={rows}
                  headers={headers}
                  className={classes.table}
                />
              </Grid>

              <Grid item xs={12} className={classes.gridItemOrderButton}>
                <AppButton
                  variant="contained"
                  color="primary"
                  className={classes.orderButton}
                >
                  Order
                </AppButton>
              </Grid>

            </Grid>

          </Paper>
        </Grid>

      </Grid>
    </Container>
  );
}

export default Cart;
