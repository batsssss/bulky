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
    id: 'actualWeight',
    name: 'Actual Weight',
    align: 'right',
    render: renderers.actualWeight,
  },
  {
    id: 'tracking',
    name: 'Tracking#',
    align: 'right',
    render: renderers.tracking,
  },
  {
    id: 'status',
    name: 'Status',
    align: 'right',
    render: renderers.status,
  },
];

export default headers;
