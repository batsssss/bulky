import React from 'react';
import AppButton from '../../components/app-button';
import SubTable from './sub-table/index';

const subRows = {
  3: [
    createSubData(1, 5324, 'November 1st, 2019', '50g', '', '2940823', 'Completed'),
    createSubData(2, 5399, 'November 2nd, 2019', '25g', '', '2940823', 'Not Completed'),
  ],
  5: [
    createSubData(1, 5324, 'November 1st, 2019', '50g', '', '2940825', 'Completed'),
    createSubData(2, 5399, 'November 2nd, 2019', '50g', '', '', 'Not Completed'),
    createSubData(3, 5400, 'November 3rd, 2019', '50g', '', '', 'Not Completed'),
  ],
};

function createSubData(
  id, number, scheduledDate, orderedWeight, actualWeight, tracking, status,
) {
  return {
    id, number, scheduledDate, orderedWeight, actualWeight, tracking, status,
  };
}

const renderers = {
  id(row) {
    if (`${row.id}`.includes('sub')) {
      return null;
    }
    return '-';
  },
  number(row, header) {
    if (`${row.id}`.includes('sub')) {
      return null;
    }
    return row[header.id];
  },
  description(row, header) {
    if (`${row.id}`.includes('sub')) {
      return <SubTable rows={subRows[row.number]} />;
    }
    return row[header.id];
  },
  location(row, header) {
    if (`${row.id}`.includes('sub')) {
      return null;
    }
    return row[header.id];
  },
  weigh(row) {
    if (`${row.id}`.includes('sub')) {
      return null;
    }
    return (
      <AppButton
        variant="contained"
        color="primary"
        size="small"
        href={'/weighing-form/' + row.weigh}
      >
        Start
      </AppButton>
    );
  },
};

export default renderers;
