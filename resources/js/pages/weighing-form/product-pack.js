import React from 'react';
import {ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Typography,
    Grid
} from "@material-ui/core";
import AppButton from "../../components/app-button";
import WeighingRecord from './weighing-record';

function ProductPack(props) {
    const {productPack, index} = props;

    let filledAmount, filledDate, actionButton = null;
    let status, packagingKeyword;

    if (productPack.hasOwnProperty('weighing_records')) {
        packagingKeyword = 'in';
        filledDate = productPack.weighing_records[0].created_at.toString();

        if (productPack.is_ready) {
            status = "Filled";
            filledAmount = productPack.net + "mg";
        } else {
            status = "Partial";
            filledAmount = productPack.net + "mg";
            actionButton = <AppButton variant="contained"
                                      color="primary"
                                      size="small">
                Resume
            </AppButton>;
        }
    } else {
        status = "Not Filled";
        packagingKeyword = 'use';
        actionButton = <AppButton variant="contained"
                                  color="primary"
                                  size="small">
            Start
        </AppButton>;
    }

    return (
        <ExpansionPanel>
            <ExpansionPanelSummary>
                <Grid container spacing={1}>
                    <Grid item xs={1}>
                        <Typography align="right">
                            {index + 1}.
                        </Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <Typography align="right">
                            {productPack.size}mg
                        </Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <Typography align="left">
                            {status}
                        </Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <Typography align="right">
                            {filledAmount}
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography align="left">
                            {packagingKeyword + ' ' + productPack.packaging.name}
                        </Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <Typography align="left">
                            {filledDate}
                        </Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <Typography align="left">
                            {actionButton}
                        </Typography>
                    </Grid>
                </Grid>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <WeighingRecord/>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    )
}

export default ProductPack;