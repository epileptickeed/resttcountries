"use client";
import React from "react";
import Menu from "./menu";
import { cn } from "@/shared/utils/cn";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "bg-white rounded-lg my-4 text-[24px] px-2 flex items-center justify-between w-full",
        className
      )}
    >
      <Menu />
    </div>
  );
};
