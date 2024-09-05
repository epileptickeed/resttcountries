import { useQuery } from '@tanstack/react-query';
import getAllFlags from '../utils/getAllFlags';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

export default function useAllFlags() {
  const { searchValue } = useSelector((state: RootState) => state.search);
  const { data } = useQuery({
    queryKey: ['posts-2'],
    queryFn: () => getAllFlags(searchValue),
  });
  return data;
}
