import React from 'react';
import cn from 'clsx';
import {
  Paper,
  Grid,
  Container,
} from '@material-ui/core';
import PageTitle from '../../components/page-title';
import AppTable from '../../components/app-table';
import useStyles from './use-styles';
import rows from './rows';
import headers from './headers';

function OrderPicker() {
  const classes = useStyles();

  return (
    <Container className={classes.rootContainer}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <PageTitle title="Order Picker" />
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
                  className={cn('parentTable', classes.table)}
                />
              </Grid>

            </Grid>

          </Paper>
        </Grid>

      </Grid>
    </Container>
  );
}

export default OrderPicker;
