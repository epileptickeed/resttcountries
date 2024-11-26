"use client";

import useCountryByCcn from "@/shared/hooks/useCountryByCcn";
import { RootState } from "@/shared/redux/store";
import { cn } from "@/shared/utils/cn";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Title } from "../ui";
import { Fetching } from "./fetching";
import { addThousandSeparators } from "../../hooks/addThousandSeparators";
import { X } from "lucide-react";
import { setIsInfoVisible } from "@/shared/redux/slices/pickedCountrySlice";

interface Props {
  className?: string;
}

export const PickedCountry: React.FC<Props> = ({ className }) => {
  const { data, isError, isLoading, refetch, fetchStatus } = useCountryByCcn();
  const { pickedCountry, isInfoVisible } = useSelector(
    (state: RootState) => state.country
  );
  const dispatch = useDispatch();
  const country = data?.data;

  React.useEffect(() => {
    refetch();
  }, [pickedCountry, refetch]);

  if (isError) return `Something went wrong`;
  if (isLoading) return `Loading...`;

  return (
    <div
      className={cn(
        isInfoVisible
          ? "fixed top-0 left-0 bg-white h-full w-full"
          : "xl:block hidden fixed w-[276px] h-full border bg-white rounded-xl shadow-md",
        className
      )}
    >
      {fetchStatus === "fetching" ? (
        <Fetching />
      ) : (
        country?.map((item: any) => (
          <div key={item.ccn3} className="">
            <Title
              text={item.name.common}
              size="md"
              className="xl:text-center"
            />
            <img
              className="max-w-full"
              src={item.flags.svg}
              alt={`${item.name.common} flag`}
            />
            <X
              onClick={() => dispatch(setIsInfoVisible(false))}
              className="absolute right-0 top-0 xl:hidden"
              size={36}
            />
            <h2 className="text-center pt-4">Capital</h2>
            <p className="text-center">{item.capital}</p>
            <h2 className="text-center pt-4">Continent</h2>
            <p className="text-center">{item.continents}</p>
            <h2 className="text-center pt-4">Region</h2>
            <p className="text-center">{item.subregion}</p>
            <h2 className="text-center pt-4">Population</h2>
            <p className="text-center">
              {" "}
              {addThousandSeparators(item.population)}{" "}
            </p>
            <h2 className="text-center pt-4">Area</h2>
            <p className="text-center">
              {" "}
              {addThousandSeparators(item.area)} м²
            </p>
          </div>
        ))
      )}
    </div>
  );
};
