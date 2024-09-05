'use client';

import useAllFlags from '@/shared/hooks/useAllFlags';
import React from 'react';
import { CountriesItem } from './countries-item';
import { cn } from '@/shared/utils/cn';
import { useSelector } from 'react-redux';
import { RootState } from '@/shared/redux/store';

interface Props {
  className?: string;
}

export const Countries: React.FC<Props> = ({ className }) => {
  const data = useAllFlags();
  const { refetch } = useAllFlags();
  const { searchValue } = useSelector((state: RootState) => state.search);

  React.useEffect(() => {
    refetch();
  }, [searchValue]);

  console.log(data);
  if (!data) {
    return 'Loading...';
  }
  return (
    <div className={cn('flex flex-wrap justify-between gap-4', className)}>
      {data.map((item: any) => (
        <CountriesItem key={item.cca2} {...item} />
      ))}
    </div>
  );
};
