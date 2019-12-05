
import React from 'react';
import ProductPack from './product-pack';
import {Typography} from "@material-ui/core";

function OrderItem(props) {
    const {orderItem} = props;
    return (
        <div>
          <Typography align="left">
            Order {orderItem.order.order_num}
            - {orderItem.size}mg
            x {orderItem.quantity}
            = {orderItem.size * orderItem.quantity}mg
          </Typography>
            {orderItem.product_packs.map((productPack, index) =>
                <div key={"orderItem" + orderItem.id + "productPack" + index}>
                  <ProductPack
                      productPack={productPack}
                      index={index} />
                </div>
            )}
        </div>
    )
}

export default OrderItem;