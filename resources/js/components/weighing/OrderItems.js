import React, { Component } from 'react';

class OrderItems extends Component {
    constructor() {
        super();
    }

    render() {
        const {items} = this.props;
        return (
            items.map((item, key) => (
                <tr key={key}>
                    <td>
                    </td>
                    <td>
                        {item.order.order_num}
                    </td>
                    <td>
                        {item.scheduled_date}
                    </td>
                    <td>
                        {parseInt(item.reserved)}
                    </td>
                </tr>

            ))
        )
    }
}
export default OrderItems;