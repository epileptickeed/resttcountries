import { cn } from "@/shared/utils/cn";
import { LoaderCircle } from "lucide-react";
import React from "react";

interface Props {
  className?: string;
}

export const Fetching: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "absolute w-[45px] top-1/2 left-1/2 translate-x-[-16px]",
        className
      )}
    >
      <LoaderCircle size={36} className="animate-spin" />
    </div>
  );
};
