import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function AppTable(props) {
  const {
    headers, rows, className, size,
  } = props;

  return (
    <Table className={className} size={size}>
      <TableHead>
        <TableRow>
          {headers.map((header) => (
            <TableCell key={header.id} align={header.align}>
              {header.name}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.id}
            className={row.getRowClassName ? row.getRowClassName(row) : undefined}
          >
            {headers.map((header) => (
              <TableCell
                key={header.id}
                align={header.align}
                colSpan={typeof header.colSpan === 'function' ? header.colSpan(row, header) : header.colSpan}
                className={typeof header.className === 'function' ? header.className(row, header) : header.className}
              >
                {header.render ? header.render(row, header) : row[header.id]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

AppTable.defaultProps = {
  headers: [],
  rows: [],
  className: undefined,
  size: undefined,
};

AppTable.propTypes = {
  headers: PropTypes.array,
  rows: PropTypes.array,
  className: PropTypes.string,
  size: PropTypes.string,
};

export default AppTable;
