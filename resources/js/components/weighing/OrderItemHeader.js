import React, { Component } from 'react';

class OrderItemHeader extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <tr>
                <th>
                    &nbsp;
                </th>
                <th>
                    Order
                </th>
                <th>
                    Scheduled Date
                </th>
                <th>
                    Amount
                </th>
            </tr>
        );
    }
}

export default OrderItemHeader;