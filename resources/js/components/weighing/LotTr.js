import React, { Component } from 'react';

class LotTr extends Component {
    constructor() {
        super();
    }

    render() {
        const {lot} = this.props;
        return (
            <tr key={lot.id + 'lot'}>
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