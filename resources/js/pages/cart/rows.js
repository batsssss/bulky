const rows = [
  createData(1, 1, ' AL5012-Aminoethy 6-deoxy-a', '10 mg', '$260.00', '2', '2 on Nov 11', '$520.00'),
  createData(2, 2, '', '25 mg', '$525.00', '1', '1 on Dec 2', ' $525.00'),
  createData(3, 3, '', '', '', '', 'SUBTOTAL (USD)', ' $1,045.00', getRowClassName),
];

function createData(
  id, number, description, pack, price, qty, availability, subtotal, getRowClass,
) {
  return {
    id, number, description, pack, price, qty, availability, subtotal, getRowClassName: getRowClass,
  };
}

function getRowClassName() {
  return 'subtotalRow';
}

export default rows;
