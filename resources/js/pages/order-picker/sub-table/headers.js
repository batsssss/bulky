import renderers from './renderers';

const headers = [
  {
    id: 'number',
    name: 'Order',
    align: 'center',
    render: renderers.number,
  },
  {
    id: 'scheduledDate',
    name: 'Scheduled Date',
    align: 'left',
    render: renderers.scheduledDate,
  },
  {
    id: 'orderedWeight',
    name: 'Ordered Weight',
    align: 'right',
    render: renderers.orderedWeight,
  },
  {
    id: 'quantity',
    name: 'Quantity',
    align: 'right',
    render: renderers.quantity,
  },
  {
    id: 'totalWeight',
    name: 'Total Weight',
    align: 'right',
    render: renderers.totalWeight,
  },
  {
    id: 'status',
    name: 'Status',
    align: 'right',
    render: renderers.status,
  },
];

export default headers;
