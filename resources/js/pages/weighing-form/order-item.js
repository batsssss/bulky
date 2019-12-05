
import React from 'react';
import ProductPack from './product-pack';
import {List, ListSubheader, Typography} from "@material-ui/core";

function OrderItem(props) {
    const {orderItem, packagings} = props;
    return (
        <React.Fragment>
          <List subheader={
            <ListSubheader disableSticky={true}>
              <Typography align="left">
                Order {orderItem.order.order_num}
                - {orderItem.size}mg
                x {orderItem.quantity}
                = {orderItem.size * orderItem.quantity}mg
              </Typography>
            </ListSubheader>
          }>
            {orderItem.product_packs.map((productPack, index) =>
                <ProductPack
                    key={"orderItem" + orderItem.id + "productPack" + index}
                    productPack={productPack}
                    index={index}
                    packagings={packagings}
                />
            )}
          </List>
        </React.Fragment>
    )
}

export default OrderItem;