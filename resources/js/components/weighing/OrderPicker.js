import axios from 'axios';
import React, { Component } from 'react';

import LotTr from './LotTr';
import OrderItemHeader from './OrderItemHeader';
import OrderItems from './OrderItems';

class OrderPicker extends Component {
    constructor () {
        super();
        this.state = {
            lotsToWeigh: []
        }
    }

    componentDidMount() {
        axios.get('/api/order-picker').then(response => {
            this.setState({
                lotsToWeigh: response.data
            });
        });
    }

    render() {
        const { lotsToWeigh } = this.state;
        return (
            <table>
                <thead>
                <tr>
                    <th>
                        Catalogue
                    </th>
                    <th>
                        Description
                    </th>
                    <th>
                        Lot Number
                    </th>
                    <th>
                        Containers
                    </th>
                </tr>
                </thead>
                { lotsToWeigh.map((lot, key) => (
                    <tbody key={key}>
                        <LotTr lot={lot} />
                        <OrderItemHeader />
                        <OrderItems items={lot.order_items} />
                    </tbody>
                ))}
            </table>
        )
    }
}

export default OrderPicker;