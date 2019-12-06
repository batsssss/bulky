const renderers = {
    number(row) {
      return row.order_id || '';
    },
    scheduledDate(row) {
      return row.scheduled_date || '';
    },
    orderedWeight(row) {
      return row.size + 'mg' || '';
    },
    quantity(row) {
      return row.quantity || '';
    },
    totalWeight(row) {
      return (row.size * row.quantity) + 'mg' || '';
    },
    status() {
      return 'N/A';
    },
  };
  
  export default renderers;