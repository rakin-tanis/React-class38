import { useQuery } from '@tanstack/react-query'
import { getCategories } from '../services/getCategories' 

export const useCategories = () =>
  useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
    keepPreviousData: true,
  });