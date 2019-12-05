const renderers = {
    number(row) {
      return row.order_id || '';
    },
    scheduledDate(row) {
      return row.scheduled_date || '';
    },
    orderedWeight(row) {
      return row.size || '';
    },
    actualWeight() {
      return '100g';
    },
    tracking() {
      return 'N/A';
    },
    status() {
      return 'N/A';
    },
  };
  
  export default renderers;