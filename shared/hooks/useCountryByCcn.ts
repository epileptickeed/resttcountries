import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useQuery } from "@tanstack/react-query";
import getCountryByCcn from "../utils/getCountryByCcn";

export default function useCountryByCcn() {
  const { pickedCountry } = useSelector((state: RootState) => state.country);
  const data = useQuery({
    queryKey: ["countrybyccn"],
    queryFn: () => getCountryByCcn(pickedCountry),
    enabled: !!pickedCountry,
  });
  return data;
}
