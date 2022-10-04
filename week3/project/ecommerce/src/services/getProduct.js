import { request } from './fetcher.js';

export const getProduct = (id) => {

  const url = `/products/${id}`;

  return request(url);

}

