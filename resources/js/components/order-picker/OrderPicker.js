import axios from 'axios';
import React, { Component } from 'react';

import PageHeader from '../layout/PageHeader';
import TableMainHeader from './TableMainHeader';
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

        const tableHeaders = [
            {
                name: '',
                align: 'Right'
            },
            {
                name: 'Catalogue',
                align: 'Left'
            },
            {
                name: 'Description',
                align: 'Left'
            },
            {
                name: 'Containers',
                align: 'Left'
            },
            {
                name: 'Weigh',
                align: 'Right'
            }
        ];

        return (
            <div className={'MuiContainer-root jss590 MuiContainer-maxWidthLg'}>
                <PageHeader h1={'Order Picker'}/>

                <div className={'MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12'}>
                    <div className={'MuiPaper-root MuiPaper-elevation1 jss962 MuiPaper-rounded'}>
                        <div className={'MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2'}>
                            <div className={'MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12'}>
                                <table className={'MuiTable-root parentTable jss963'}>

                                    <thead className={'MuiTableHead-root'}>
                                        <tr className={'MuiTableRow-root MuiTableRow-head'}>
                                            { tableHeaders.map((th, key) => (
                                                <TableMainHeader key={key} settings={th}/>
                                            ))}
                                        </tr>
                                    </thead>

                                    { lotsToWeigh.map((lot, key) => (
                                        <tbody key={key} className={'MuiTableBody-root'}>
                                        <LotTr lot={lot} />
                                        <OrderItemHeader />
                                        <OrderItems items={lot.order_items} />
                                        </tbody>
                                    ))}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OrderPicker;