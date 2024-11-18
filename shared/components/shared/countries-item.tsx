/* eslint-disable @next/next/no-img-element */
import { cn } from "@/shared/utils/cn";
import React from "react";
import { Title } from "../ui";
import {
  setIsInfoVisible,
  setPickedCountry,
} from "@/shared/redux/slices/pickedCountrySlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/shared/redux/store";

type Continent =
  | "Europe"
  | "North America"
  | "Asia"
  | "Antarctica"
  | "Africa"
  | "Oceania"
  | "South America";

interface Props {
  className?: string;
  cca2: string;
  flags: Flags;
  name: Names;
  ccn3: number;
  continents: Continent[];
}

export const CountriesItem: React.FC<Props> = ({
  className,
  cca2,
  ccn3,
  flags,
  name,
  continents,
}) => {
  const conts = {
    Europe: "#88C273",
    "North America": "#D4BDAC",
    Asia: "#C0C78C",
    Antarctica: "#608BC1",
    Africa: "#FFEEA9",
    Oceania: "#C6E7FF",
    "South America": "#FFF1DB",
  };

  const { isInfoVisible } = useSelector((state: RootState) => state.country);
  const continentColor = conts[continents[0]] || "#f3f3f3";
  const dispatch = useDispatch();

  const screenWidth: number = window.screen.width;

  const handleCountryClick = (ccn3: number) => {
    dispatch(setPickedCountry(ccn3));
    if (screenWidth <= 1280) {
      dispatch(setIsInfoVisible(!isInfoVisible));
    }
  };

  return (
    // <Link href={`/country/${name.common}`} className="">
    <div
      className={cn(
        "group cursor-pointer transition bg-red h-[250px] w-[350px] rounded-2xl overflow-hidden flex flex-col justify-between relative",
        className
      )}
      key={cca2}
      onClick={() => handleCountryClick(ccn3)}
    >
      <div className="p-2 transition flex items-center justify-center gap-2">
        <img
          className="transition group-hover:scale-110 w-[70px] h-[50px]"
          src={flags.svg}
          alt={name.common}
        />
      </div>

      <div className="group-hover:border-2 h-[250px] border rounded-2xl relative w-full flex items-center justify-center shadow flex-col gap-2 bg-white">
        <Title
          text={name.common}
          size="sm"
          className="font-bold text-center p-3"
        />
        <h5
          style={{ backgroundColor: continentColor }}
          className="px-3 py-1 rounded-lg"
        >
          {continents[0]}
        </h5>
      </div>
    </div>
    // </Link>
  );
};
