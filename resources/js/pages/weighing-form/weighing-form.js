import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import {
  Paper,
  Grid,
  Container, CircularProgress
} from '@material-ui/core';
import PageTitle from '../../components/page-title';
import TextFieldsTop from './textfields-top';
import TextFieldsBottom from './textfields-bottom';
import OrderItem from './order-item';
import WeighingRecord from './weighing-record';
import useStyles from './use-styles';

export const FormContext = React.createContext();

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
    weighingRecord, setWeighingRecord
  ] = React.useState([]);

  const [
    suggestedPackagingId, setSuggestedPackagingId
  ] = React.useState(1);

  const [
    packagings, setPackagings
  ] = React.useState([]);

  const [
      isWeighing, setIsWeighing
  ] = React.useState(false);

  useEffect(() => {
    axios.get(`/api/weighing-form/${containerId}`).then(response => {
      setContainer(response.data.container);
      setSession(response.data.container.weighing_sessions[0]);
      setPackagings(response.data.packagings);
    });
  }, []);

  const handleStartWeighing = (productPack) => {
    if (weighingRecord.length === 0) {
      productPack['weighing_session_id'] = session.id;
      axios.post(`/api/start-weighing`, productPack).then(response => {
        setWeighingRecord(response.data.weighing_record);
        setSuggestedPackagingId(response.data.product_pack.packaging_id);
        setIsWeighing(true);
      });
    }
  };

  const handleSaveWeighingRecord = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    let name;
    let data = {};
    for (name of form.keys()) {
      data[name] = form.get(name);
    }
    data['id'] = weighingRecord.id;
    axios.post(`/api/update-weighing-record`, data).then(response => {
      setWeighingRecord(response.data.weighing_record);
      setIsWeighing(false);
    })
  };

  if (container.length === 0
      || session.length === 0
      || packagings.length === 0) {
    return <Container className={classes.rootContainer}>
      <CircularProgress />
    </Container>
  }

  let formMiddle;
  if (isWeighing) {
    formMiddle = <WeighingRecord
        weighingRecord={weighingRecord}
        packagings={packagings}
        suggestedPackagingId={suggestedPackagingId}
        handleSaveWeighingRecord={handleSaveWeighingRecord}
    />
  } else {
    formMiddle = container.product_lot.order_items.map((orderItem) =>
        <OrderItem key={"orderItem" + orderItem.id}
                   orderItem={orderItem}
                   packagings={packagings}
                   handleStartWeighing={handleStartWeighing}
        />
    );
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

            <FormContext.Provider value={[session, setSession]}>
              <TextFieldsTop
                  container={container}
              />
            </FormContext.Provider>

            {formMiddle}

            <FormContext.Provider value={[session, setSession]}>
              <TextFieldsBottom />
            </FormContext.Provider>

          </Paper>
        </Grid>

      </Grid>
    </Container>
  );
}

export default WeighingForm;