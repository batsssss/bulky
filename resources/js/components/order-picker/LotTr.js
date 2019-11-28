import React, { Component } from 'react';

class LotTr extends Component {
    constructor() {
        super();
    }

    render() {
        const {lot} = this.props;
        return (
            <tr key={lot.id + 'lot'} className={'MuiTableRow-root'}>
                <td className={'MuiTableCell-root MuiTableCell-body ' +
                'MuiTableCell-alignRight MuiTableCell-sizeSmall dashCell'}>
                    -
                </td>
                <td>
                    {lot.product.catalogue_num}
                </td>
                <td>
                    {lot.product.product_name}
                </td>
                <td>
                    {lot.lot_number}
                </td>
                <td>

                </td>
            </tr>
        )
    }
}
export default LotTr;