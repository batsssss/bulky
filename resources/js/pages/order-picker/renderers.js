import React from 'react';
import AppButton from '../../components/app-button';
import SubTable from './sub-table/index';
import { isSubTable } from './utils';

const renderers = {
  id(row) {
    if ((isSubTable(row))) {
      return null;
    }
    return '-';
  },
  number(row) {
    if ((isSubTable(row))) {
      return null;
    }
    return '';
  },
  description(row) {
    if ((isSubTable(row))) {
      return <SubTable rows={row.subTable} />;
    }
    return row.catalogue_num+ ' ' +row.product_name || '';
  },
  location(row) {
    if ((isSubTable(row))) {
      return null;
    }
    return 'Freezer 1' || '';
  },
  currentWeight(row) {
    if ((isSubTable(row))) {
      return null;
    }
    return row.productLot.remaining + 'mg' || '';
  },
  totalWeight(row) {
    if ((isSubTable(row))) {
      return null;
    }
    return 'N/A';
  },
  orders(row) {
    if ((isSubTable(row))) {
      return null;
    }
    return '2';
  },
  batch(row) {
    if ((isSubTable(row))) {
      return null;
    }
    return row.productLot.lot_number || '';
  },
  weigh(row) {
    if ((isSubTable(row))) {
      return null;
    }
    return (
      <AppButton
        variant="contained"
        color="primary"
        size="small"
        href={'/weighing-form/' + row.product.id}
      >
        Start
      </AppButton>
    );
  },
};

export default renderers;
