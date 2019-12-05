import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import {
  Paper,
  Grid,
  Container, CircularProgress,
} from '@material-ui/core';
import PageTitle from '../../components/page-title';
import TextFieldsTop from './textfields-top';
import TextFieldsBottom from './textfields-bottom';
import OrderItem from './order-item';
import useStyles from './use-styles';

function WeighingForm() {
  const classes = useStyles();

  let { containerId } = useParams();

  const [
    container, setContainer
  ] = React.useState([]);

  const [
    session, setSession
  ] = React.useState([]);

  const [
    packagings, setPackagings
  ] = React.useState([]);

  useEffect(() => {
    axios.get(`/api/weighing-form/${containerId}`).then(response => {
      setContainer(response.data.container);
      setSession(response.data.container.weighing_sessions[0]);
      setPackagings(response.data.packagings);
    });
  }, []);

  if (container.length === 0
      || session.length === 0
      || packagings.length === 0) {
    return <Container className={classes.rootContainer}>
      <CircularProgress />
    </Container>
  }

  return (
    <Container className={classes.rootContainer}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <PageTitle title={"Weighing Session: " + session.id} />
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper}>

            <TextFieldsTop
                container={container}
                session={session} />

            {container.product_lot.order_items.map((orderItem) =>
                <OrderItem key={"orderItem" + orderItem.id}
                           orderItem={orderItem}
                           packagings={packagings}
                />
            )}
            <TextFieldsBottom />
          </Paper>
        </Grid>

      </Grid>
    </Container>
  );
}

export default WeighingForm;