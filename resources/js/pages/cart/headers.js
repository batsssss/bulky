import renderers from './renderers';

const headers = [
  {
    id: 'number',
    name: '#',
    align: 'right',
    render: renderers.number,
  },
  {
    id: 'description',
    name: 'DESCRIPTION',
    align: 'left',
    render: renderers.description,
  },
  {
    id: 'pack',
    name: 'PACK',
    align: 'right',
    render: renderers.pack,
  },
  {
    id: 'price',
    name: 'PRICE',
    align: 'right',
  },
  {
    id: 'qty',
    name: 'QTY',
    align: 'right',
  },
  {
    id: 'availability',
    name: 'AVAILABILITY',
    align: 'right',
  },
  {
    id: 'subtotal',
    name: 'SUBTOTAL',
    align: 'right',
  },
  {
    id: 'actions',
    name: '',
    align: 'right',
    render: renderers.actions,
  },
];

export default headers;
