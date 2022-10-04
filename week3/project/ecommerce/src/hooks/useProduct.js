import { useQuery } from '@tanstack/react-query'
import { getProduct } from '../services/getProduct';

export const useProduct = ({ id }) =>
  useQuery({
    queryKey: ["product", id],
    queryFn: () => getProduct(id),
    keepPreviousData: true,
  });
