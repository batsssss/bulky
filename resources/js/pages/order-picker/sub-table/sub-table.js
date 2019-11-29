import React from 'react';
import PropTypes from 'prop-types';
import AppTable from '../../../components/app-table';
import headers from './headers';
import useStyles from './use-styles';

function SubTable(props) {
  const classes = useStyles();
  const { rows } = props;

  return (
    <AppTable
      size="small"
      rows={rows}
      headers={headers}
      className={classes.table}
    />
  );
}

SubTable.defaultProps = {
  rows: [],
};

SubTable.propTypes = {
  rows: PropTypes.array,
};

export default SubTable;
