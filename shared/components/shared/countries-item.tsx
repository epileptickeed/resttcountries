/* eslint-disable @next/next/no-img-element */
import { cn } from "@/shared/utils/cn";
import React from "react";
import { Button, Title } from "../ui";
import Link from "next/link";

interface Props {
  className?: string;
  cca2: string;
  flags: Flags;
  name: Names;
}

export const CountriesItem: React.FC<Props> = ({
  className,
  cca2,
  flags,
  name,
}) => {
  return (
    <div
      className={cn(
        "border bg-red h-[400px] max-w-[350px] rounded-2xl overflow-hidden flex flex-col justify-between",
        className
      )}
      key={cca2}
    >
      <div className="p-2 flex items-center gap-2">
        <img
          className="w-[50px] h-[50px] rounded-full"
          src={flags.svg}
          alt={name.common}
        />
        <div>
          <Title text={name.common} className="w-full" size="sm" />
        </div>
      </div>
      <img className="h-[250px] w-[350px]" src={flags.png} alt={name.common} />
      <Link
        href={`/country/${name.common}`}
        className="text-center m-2 border rounded-xl transition-all hover:bg-[#999]"
      >
        <Button className="">Перейти</Button>
      </Link>
    </div>
  );
};
