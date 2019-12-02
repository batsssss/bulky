function createData(
  id, number, description, location, currentWeight, totalWeight, orders, batch, weigh,
) {
  return {
    id, number, description, location, currentWeight, totalWeight, orders, batch, weigh,
  };
}

export function makeRows(lots) {
  let rows = [];

  lots.forEach(function(lot) {
    rows.push(createData(
        lot.id,
        '',
        lot.product.catalogue_num + ' ' + lot.product.product_name,
        'lot-id: ' + lot.id,
        lot.remaining + 'mg',
        '75g',
        '2',
        lot.lot_number,
        lot.product_lot_containers[0].id
    ));
    rows.push(createData(
        lot.id + '.sub',
        lot.id
    ));

    lot.order_items.forEach(function (item) {
    });
  });

  return rows;
}