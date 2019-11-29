const rows = [
  createData(1, 2738492, 'AL501 2-Aminoethy 6-deoxy-a', 'A34', '500g', '75g', '2', '5', 'Weigh'),
  createData('1.1.sub', 1),
  createData(2, 2738493, 'AL502 3-Aminoethy 6-deoxy-a', 'A35', '500g', '150g', '3', '8', 'Weigh'),
  createData('2.1.sub', 2),
];

function createData(
  id, number, description, location, currentWeight, totalWeight, orders, batch, weigh,
) {
  return {
    id, number, description, location, currentWeight, totalWeight, orders, batch, weigh,
  };
}

export default rows;
