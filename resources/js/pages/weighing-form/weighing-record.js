import React from 'react';
import {
  Grid, InputAdornment, NativeSelect, TextField,
  Typography, Divider
} from "@material-ui/core";
import useStyles from './use-styles';
import AppButton from "../../components/app-button";

function WeighingRecord(props) {
  const classes = useStyles();

  const {weighingRecord, packagings,
    suggestedPackagingId, handleSaveWeighingRecord
  } = props;

  return (
      <form onSubmit={(event) => handleSaveWeighingRecord(event)}>
        <Typography>
          Weighing: {weighingRecord.target}mg
        </Typography>
        <Grid container spacing={3}>
          <Grid item sm={12} md={6}>
            <Typography align="left">
              Suggested Packaging:
            </Typography>
          </Grid>
          <Grid item sm={12} md={6}>
            <NativeSelect
                value={suggestedPackagingId}
                name="packaging_id"
                id="weighing_record_packaging_id"
                variant="filled"
                margin="dense"
                className={classes.textfield}
            >
              {Object.keys(packagings).map(function(key) {
                return <option key={key} value={key}>
                  {packagings[key]}
                </option>;
              })}
            </NativeSelect>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item sm={12} md={6}>
            <Typography align="left">
              Tare the scale.
              <br />
              Weigh empty container.
            </Typography>
          </Grid>
          <Grid item sm={12} md={6}>
            <TextField
                placeholder={"0.0"}
                defaultValue={weighingRecord.tare}
                name="tare"
                id="weighing_record_tare"
                variant="filled"
                margin="dense"
                className={classes.textfield}
                InputProps={{
                  endAdornment: <InputAdornment position="end">mg</InputAdornment>,
                }}
            />
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item sm={12} md={6}>
            <Typography align="left">
              Tare the scale.
              <br />
              Add product and weigh.
            </Typography>
          </Grid>
          <Grid item sm={12} md={6}>
            <TextField
                placeholder={"0.0"}
                name="net"
                id="weighing_record_net"
                variant="filled"
                margin="dense"
                className={classes.textfield}
                InputProps={{
                  endAdornment: <InputAdornment position="end">mg</InputAdornment>,
                }}
            />
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item sm={12} md={6}>
            <Typography align="left">
              Tare the scale.
              <br />
              Weigh filled container.
            </Typography>
          </Grid>
          <Grid item sm={12} md={6}>
            <TextField
                placeholder={"0.0"}
                name="gross"
                id="weighing_record_gross"
                variant="filled"
                margin="dense"
                className={classes.textfield}
                InputProps={{
                  endAdornment: <InputAdornment position="end">mg</InputAdornment>,
                }}
            />
          </Grid>
        </Grid>

        <Divider variant="middle"/>

        <Grid container spacing={3}>
          <Grid item sm={12} md={4}>
            <Typography align="left">
              Notes
            </Typography>
          </Grid>
          <Grid item sm={12} md={4}>
            <TextField
                name="notes"
                id="weighing_record_notes"
                variant="filled"
                margin="dense"
                className={classes.textfield}
            />
          </Grid>
          <Grid item sm={12} md={4}>
            <AppButton variant="contained"
                       color="primary"
                       size="small"
                       type="submit"
            >
              Save
            </AppButton>
          </Grid>
        </Grid>

      </form>
  );
}

export default WeighingRecord;