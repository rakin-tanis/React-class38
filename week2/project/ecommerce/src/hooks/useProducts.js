import { useQuery } from '@tanstack/react-query'
import { getProducts } from '../services/getProducts';

export const useProducts = ({ category }) =>
  useQuery({
    queryKey: ["products", category],
    queryFn: () => getProducts(category),
    keepPreviousData: true,
  });