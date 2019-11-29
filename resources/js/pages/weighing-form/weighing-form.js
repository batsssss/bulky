import React from 'react';
import {
  Paper,
  Grid,
  Container,
} from '@material-ui/core';
import PageTitle from '../../components/page-title';
import TextFieldsTop from './textfields-top';
import ListItems from './list-items';
import TextFieldsBottom from './textfields-bottom';
import useStyles from './use-styles';

function WeighingForm() {
  const classes = useStyles();

  return (
    <Container className={classes.rootContainer}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <PageTitle title="WEIGHING SESSION: 000214" />
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <TextFieldsTop />
            <ListItems />
            <TextFieldsBottom />
          </Paper>
        </Grid>

      </Grid>
    </Container>
  );
}

export default WeighingForm;
