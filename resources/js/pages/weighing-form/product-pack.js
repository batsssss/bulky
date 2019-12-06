import React, {useState} from 'react';
import {
    ListItem,
    Typography,
    Grid
} from "@material-ui/core";
import AppButton from "../../components/app-button";
import Moment from "react-moment";

function ProductPack(props) {

    const {productPack, index, packagings, handleStartWeighing} = props;

    let filledAmount, filledDate, actionButton = null;
    let status, packagingKeyword;

    if (productPack.hasOwnProperty('weighing_records')) {
        packagingKeyword = 'in';
        filledDate = <Moment format="MMM D/YY \at HH:mm">
            {productPack.weighing_records[0].created_at}
        </Moment>;

        if (productPack.is_ready) {
            status = "Filled";
            filledAmount = productPack.net + "mg";
        } else {
            status = "Partial Fill";
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
                                  size="small"
                                  onClick={() => handleStartWeighing(productPack)}
        >
            Start
        </AppButton>;
    }

    return (
        <React.Fragment>
        <ListItem>
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
                    <Typography align="center">
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
                        {packagingKeyword + ' ' + packagings[productPack.packaging_id]}
                    </Typography>
                </Grid>
                <Grid item xs={2}>
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
        </ListItem>
    </React.Fragment>
    )
}

export default ProductPack;