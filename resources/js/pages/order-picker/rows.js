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
        lot.lot_number,
        lot.product.catalogue_num + ' ' + lot.product.product_name,
        'lot-id: ' + lot.id,
        '500g',
        '75g',
        '2',
        '5',
        'Weigh'
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