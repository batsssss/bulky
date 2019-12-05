/*c
const subRows = {
  1: [
    createSubData(1, 5324, 'November 1st, 2019', '50g', '', '2940823', 'Completed'),
    createSubData(2, 5399, 'November 2nd, 2019', '25g', '', '2940823', 'Not Completed'),
  ],
  2: [
    createSubData(1, 5324, 'November 1st, 2019', '50g', '', '2940825', 'Completed'),
    createSubData(2, 5399, 'November 2nd, 2019', '50g', '', '', 'Not Completed'),
    createSubData(3, 5400, 'November 3rd, 2019', '50g', '', '', 'Not Completed'),
  ],
};


const rows = [
  createData(1, 2738492, 'AL501 2-Aminoethy 6-deoxy-a', 'A34', '500g', '75g', '2', '5', 'Weigh'),
  createData(11, 2738492, 'AL501 2-Aminoethy 6-deoxy-a', 'A34', '500g', '75g', '2', '5', 'Weigh', subRows[1]),
  createData(2, 2738493, 'AL502 3-Aminoethy 6-deoxy-a', 'A35', '500g', '150g', '3', '8', 'Weigh'),
  createData(22, 2738493, 'AL502 3-Aminoethy 6-deoxy-a', 'A35', '500g', '150g', '3', '8', 'Weigh', subRows[2]),
];
*/
function createData(
  id, number, description, location, currentWeight, totalWeight, orders, batch, weigh, subTable,
) {
  return {
    id, number, description, location, currentWeight, totalWeight, orders, batch, weigh, subTable,
  };
}


function createSubData(
  id, number, scheduledDate, orderedWeight, actualWeight, tracking, status,
) {
  return {
    id, number, scheduledDate, orderedWeight, actualWeight, tracking, status,
  };
}


export default rows;