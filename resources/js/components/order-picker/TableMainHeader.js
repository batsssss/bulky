import React from 'react';

const TableMainHeader = props => (
    <th className={'MuiTableCell-root MuiTableCell-head ' +
    'MuiTableCell-align' + props.settings.align + ' MuiTableCell-sizeSmall'} scope={'col'}>
        {props.settings.name}
    </th>
);

export default TableMainHeader;