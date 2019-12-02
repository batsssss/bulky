import React from 'react';
import WeighingRecord from './weighing-record';

function OrderItem(props) {
    const {orderItem} = props;
    return (
        <div>
            Order {orderItem.order.order_num}
            - {orderItem.size}mg
            x {orderItem.quantity}
            = {orderItem.size * orderItem.quantity}mg
            {orderItem.product_packs.map((productPack, index) =>
                <WeighingRecord key={"orderItem" + orderItem.id + "productPack" + index}
                             productPack={productPack}
                             index={index} />
            )}
        </div>
    )
}

export default OrderItem;