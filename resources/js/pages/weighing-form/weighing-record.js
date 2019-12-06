import React from 'react';
import {
  Grid, InputAdornment, NativeSelect, TextField,
  Typography
} from "@material-ui/core";
import cn from "clsx";
import useStyles from './use-styles';

function WeighingRecord(props) {
  const classes = useStyles();

  const {weighingRecord, packagings, suggestedPackagingId} = props;

  return (
      <div>
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
                name="weighing_record.packaging_id"
                id="weighing_record_packaging_id"
                variant="filled"
                margin="dense"
                className={cn(classes.textfield, classes.textfieldWhite)}
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
                placeholder={"0.0000"}
                name="weighing_record.tare"
                id="weighing_record_tare"
                variant="filled"
                margin="dense"
                className={cn(classes.textfield, classes.textfieldWhite)}
                InputProps={{
                  endAdornment: <InputAdornment position="end">g</InputAdornment>,
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
                placeholder={"0.0000"}
                name="weighing_record.net"
                id="weighing_record_net"
                variant="filled"
                margin="dense"
                className={cn(classes.textfield, classes.textfieldWhite)}
                InputProps={{
                  endAdornment: <InputAdornment position="end">g</InputAdornment>,
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
                placeholder={"0.0000"}
                name="weighing_record.gross"
                id="weighing_record_gross"
                variant="filled"
                margin="dense"
                className={cn(classes.textfield, classes.textfieldWhite)}
                InputProps={{
                  endAdornment: <InputAdornment position="end">g</InputAdornment>,
                }}
            />
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item sm={12} md={6}>
            <Typography align="left">
              Notes
            </Typography>
          </Grid>
          <Grid item sm={12} md={6}>
            <TextField
                placeholder={"0.0000"}
                name="weighing_record.notes"
                id="weighing_record_notes"
                variant="filled"
                margin="dense"
                className={cn(classes.textfield, classes.textfieldWhite)}
                InputProps={{
                  endAdornment: <InputAdornment position="end">g</InputAdornment>,
                }}
            />
          </Grid>
        </Grid>

      </div>
  );
}

export default WeighingRecord;