import React, {useState} from 'react';
import axios from "axios";
import {
    ListItem,
    Typography,
    Grid, Collapse
} from "@material-ui/core";
import AppButton from "../../components/app-button";
import WeighingRecord from './weighing-record';

function ProductPack(props) {

    const {index, packagings} = props;
    const [productPack, setProductPack] = useState(props.productPack);
    const [isWeighing, setIsWeighing] = useState(false);

    const handleStartWeighing = () => {
        axios.post(`/api/start-weighing`, productPack).then(response => {
            setProductPack(response.data.product_pack);
        }).then(function() {
            setIsWeighing(true);
        });
    };

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
                                  size="small"
                                  onClick={handleStartWeighing}
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
                        {packagingKeyword + ' ' + packagings[productPack.packaging_id]}
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
        </ListItem>
        <Collapse in={isWeighing}>
            <WeighingRecord
                packagings={packagings}
                suggestedPackagingId={productPack.packaging_id}
            />
        </Collapse>
    </React.Fragment>
    )
}

export default ProductPack;