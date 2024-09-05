'use client';

import React from 'react';
import { cn } from '@/shared/utils/cn';
import { Search } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/shared/redux/store';
import { setSearchValue } from '@/shared/redux/slices/searchSlice';
import { useDebounce } from 'react-use';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  const { searchValue } = useSelector((state: RootState) => state.search);
  const dispatch = useDispatch();

  return (
    <div className={cn('relative', className)}>
      <Search className="text-[#9995] absolute top-1/2 translate-y-[-50%] left-2" />
      <input
        type="text"
        placeholder="Germany"
        className="border w-full p-3 rounded-xl pl-9"
        value={searchValue}
        onChange={(e) => dispatch(setSearchValue(e.target.value))}
      />
    </div>
  );
};
