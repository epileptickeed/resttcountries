import { cn } from "@/shared/utils/cn";
import React from "react";
import { Button } from "../ui";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface Props {
  className?: string;
}

export const NotFound: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center h-[100vh] flex-col",
        className
      )}
    >
      <p className="text-[3rem]">No Country Found😢</p>
      <Button className=" border">
        <Link
          href={"/"}
          className="text-[2rem] flex items-center justify-center gap-2"
        >
          <ArrowLeft />
          <p>Back</p>
        </Link>
      </Button>
    </div>
  );
};
