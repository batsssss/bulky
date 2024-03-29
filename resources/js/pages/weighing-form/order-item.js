import React from 'react';
import ProductPack from './product-pack';
import {List, ListSubheader, Typography} from "@material-ui/core";

function OrderItem(props) {
    const {orderItem, packagings, handleStartWeighing} = props;
    return (
        <React.Fragment>
          <List subheader={
            <ListSubheader disableSticky={true}>
              <Typography align="left">
                <strong>
                Order {orderItem.order.order_num}
                - {orderItem.size}mg
                x {orderItem.quantity}
                = {orderItem.size * orderItem.quantity}mg
                </strong>
              </Typography>
            </ListSubheader>
          }>
            {orderItem.product_packs.map((productPack, index) =>
                <ProductPack
                    key={"orderItem" + orderItem.id + "productPack" + index}
                    productPack={productPack}
                    index={index}
                    packagings={packagings}
                    handleStartWeighing={handleStartWeighing}
                />
            )}
          </List>
        </React.Fragment>
    )
}

export default OrderItem;