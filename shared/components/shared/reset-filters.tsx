"use client";

import { setPickedContinent } from "@/shared/redux/slices/filterSlice";
import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "../ui";

interface Props {
  className?: string;
}

export const ResetFilters: React.FC<Props> = () => {
  const dispatch = useDispatch();
  return (
    <Button
      className="text-[24px] border bg-white"
      onClick={() => dispatch(setPickedContinent(""))}
    >
      Reset
    </Button>
  );
};
