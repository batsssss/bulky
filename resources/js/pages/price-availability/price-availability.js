import React from 'react';
import cn from 'clsx';
import {
  Paper,
  Grid,
  Container,
  FormControlLabel,
  Checkbox,
  Typography,
  Radio,
  RadioGroup,
} from '@material-ui/core';
import PageTitle from '../../components/page-title';
import AppTable from '../../components/app-table';
import AppButton from '../../components/app-button';
import rows from './rows';
import headers from './headers';
import useStyles from './use-styles';

function PriceAvailability() {
  const classes = useStyles();

  return (
    <Container className={classes.rootContainer}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <PageTitle title="Short Name:" subtitle="Long Name" />
          </Paper>
        </Grid>

        <Grid item xs={6} className={classes.gridItemDiagram}>
          <Paper className={cn(classes.paper, classes.diagramPaper)}>
            <Typography component="p" align="center" className={classes.diagramText}>
                  Diagram
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper}>

            <Grid container spacing={2}>

              <Grid item xs={10}>
                <Typography component="h1" variant="h6" align="right">
                  PRICING AND AVAILABILITY
                </Typography>
              </Grid>

              <Grid item xs={10} className={classes.gridItemRadios}>
                <RadioGroup defaultValue="CAD" className={classes.radioGroup}>
                  <FormControlLabel
                    control={<Radio />}
                    value="USD"
                    label="USD"
                  />
                  <FormControlLabel
                    control={<Radio />}
                    value="CAD"
                    label="CAD"
                    className={classes.lastRadio}
                  />

                </RadioGroup>
              </Grid>

              <Grid item xs={12}>
                <AppTable
                  size="small"
                  rows={rows}
                  headers={headers}
                  className={classes.table}
                />
              </Grid>

              <Grid item xs={8} className={classes.gridItemCheckbox}>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Request Single Lot"
                />
              </Grid>

              <Grid item xs={4}>
                <AppButton
                  variant="contained"
                  color="primary"
                  className={classes.addButton}
                >
                  Add
                </AppButton>
              </Grid>

            </Grid>

          </Paper>
        </Grid>

      </Grid>
    </Container>
  );
}

export default PriceAvailability;
