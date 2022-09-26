import { request } from './fetcher.js';

export const getProducts = (category) => {

  const url = category ? `/products/category/${category}` : `products`;

  return request(url);

}

