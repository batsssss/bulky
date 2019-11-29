import renderers from './renderers';
import classNames from './classnames';

const headers = [
  {
    id: 'id',
    align: 'right',
    render: renderers.id,
    className: 'dashCell',
  },
  {
    id: 'number',
    name: 'Container #',
    align: 'left',
    render: renderers.number,
  },
  {
    id: 'description',
    name: 'DESCRIPTION',
    align: 'left',
    render: renderers.description,
    colSpan: (row) => (`${row.id}`.includes('sub') ? 7 : 1),
    className: classNames.description,
  },
  {
    id: 'location',
    name: 'Location',
    align: 'right',
    render: renderers.location,
    className: classNames.location,
  },
  {
    id: 'currentWeight',
    name: 'Current Weight',
    align: 'right',
    render: renderers.currentWeight,
    className: classNames.currentWeight,
  },
  {
    id: 'totalWeight',
    name: 'Total Weight',
    align: 'right',
    render: renderers.totalWeight,
    className: classNames.totalWeight,
  },
  {
    id: 'orders',
    name: 'Orders',
    align: 'right',
    render: renderers.orders,
    className: classNames.orders,
  },
  {
    id: 'batch',
    name: 'Batch #',
    align: 'right',
    render: renderers.batch,
    className: classNames.batch,
  },
  {
    id: 'weigh',
    name: 'Weigh',
    align: 'right',
    render: renderers.weigh,
    className: classNames.weigh,
  },
];

export default headers;
