import React, { useState, useEffect } from 'react';
import cn from 'clsx';
import {
  Paper,
  Grid,
  Container,
} from '@material-ui/core';
import PageTitle from '../../components/page-title';
import AppTable from '../../components/app-table';
import useStyles from './use-styles';
import headers from './headers';
import { groupRowsByKey } from './utils';
import { getOrderItems, getProductLots, getProducts } from './api';

function OrderPicker() {
  const classes = useStyles();
  const groupByKey = 'product_lot_id';
  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    getAllData(setOrderItems);
  }, []);

  const groupedRows = groupRowsByKey(orderItems, groupByKey);
  const filteredRows = removeRowsWithoutProdLotId(groupedRows);
  console.log('TCL: OrderPicker -> groupedRows', groupedRows);

  return (
    <Container className={classes.rootContainer}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <PageTitle title="Order Picker" />
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <AppTable
                  size="small"
                  rows={filteredRows}
                  headers={headers}
                  className={cn('parentTable', classes.table)}
                />
              </Grid>

            </Grid>

          </Paper>
        </Grid>

      </Grid>
    </Container>
  );
}

function removeRowsWithoutProdLotId(rows) {
  return rows.filter(({ product_lot_id }) => product_lot_id);
}

function getAllData(callback) {
  const parallelRequest = [getOrderItems(), getProductLots(), getProducts()];

  Promise
    .all(parallelRequest)
    .then(([orderItemsResponse, productLotsResponse, productsResponse]) => {
      const orderItemsWithProductLot = orderItemsResponse.map((eachItem) => {
        const productLot = productLotsResponse
          .find(({ id }) => id === eachItem.product_lot_id) || {};

        return { ...eachItem, productLot };
      });

      const orderItemsWithProductLotAndProduct = orderItemsWithProductLot.map((eachItem) => {
        const product = productsResponse
          .find(({ product_lot_id }) => product_lot_id === eachItem.product_lot_id) || {};

        return { ...eachItem, product };
      });

      callback(orderItemsWithProductLotAndProduct);
    });
}

export default OrderPicker;