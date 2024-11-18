"use client";

import React from "react";
import { cn } from "@/shared/utils/cn";
import { Search } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/shared/redux/store";
import { setSearchValue } from "@/shared/redux/slices/searchSlice";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  const { searchValue } = useSelector((state: RootState) => state.search);
  const dispatch = useDispatch();

  return (
    <div className={cn("relative shadow-sm rounded-xl", className)}>
      <button className="absolute top-1/2 right-3 translate-y-[-50%] bg-[#ff504d] w-[36px] h-[36px] rounded-lg shadow-red-400 shadow-lg">
        <Search
          size={24}
          className="text-white absolute top-1/2 translate-y-[-50%] left-[7px]"
        />
      </button>
      <input
        type="text"
        placeholder="Search your country"
        className="border w-full p-4 rounded-xl"
        value={searchValue}
        onChange={(e) => dispatch(setSearchValue(e.target.value))}
      />
    </div>
  );
};
