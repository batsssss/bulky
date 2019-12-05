const rows = [
  createData(1, '5 mg', '$165.00', '4 ship on Nov 4', 0),
  createData(2, '10 mg', '$260.00', '2 ship on Nov 4', 0),
];

function createData(id, size, price, availability, quantity) {
  return {
    id, size, price, availability, quantity,
  };
}

export default rows;
