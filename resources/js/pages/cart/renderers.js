import React from 'react';
import {
  IconButton,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';

const renderers = {
  number(row, header) {
    if (row.id === 2 || row.id === 3) {
      return null;
    }
    return row[header.id];
  },
  description(row, header) {
    if (row.id === 2 || row.id === 3) {
      return null;
    }
    return row[header.id];
  },
  pack(row, header) {
    if (row.id === 3) {
      return null;
    }
    return row[header.id];
  },
  price(row, header) {
    if (row.id === 3) {
      return null;
    }
    return row[header.id];
  },
  qty(row, header) {
    if (row.id === 3) {
      return null;
    }
    return row[header.id];
  },
  actions(row) {
    if (row.id === 3) {
      return null;
    }
    return (
      <>
        <IconButton size="small">
          <Close fontSize="small" />
        </IconButton>
      </>
    );
  },
};

export default renderers;
