import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
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
import axios from "axios";

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
      setSession(response.data.session);
      setPackagings(response.data.packagings);
    });
  });

  return (
    <Container className={classes.rootContainer}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <PageTitle title={"Weighing Session: " + container.id} />
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
