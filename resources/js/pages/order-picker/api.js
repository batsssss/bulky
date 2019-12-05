import axios from 'axios';

export const getOrderItems = () => axios.get('/api/order-item').then(({ data }) => data);
export const getProductLots = () => axios.get('/api/product-lots').then(({ data }) => data);
export const getProducts = () => axios.get('/api/product-lot-container').then(({ data }) => data);