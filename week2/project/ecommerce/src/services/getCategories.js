import { request } from "./fetcher.js";

export const getCategories = () => {
  const url = "/products/categories";

  return request(url);
};
