"use client";

import { Container } from "@/shared/components/shared";
import { Title } from "@/shared/components/ui";
import useAllFlags from "@/shared/hooks/useAllFlags";

export default function CountryPage(name: any) {
  const { data, isLoading, isError } = useAllFlags();
  //   console.log(name.params.name);
  if (isError) {
    return "An error occured";
  }
  if (isLoading) {
    return "Loading...";
  }
  const countryName = name.params.name;
  const country = data?.filter((item: any) => item.name.common === countryName);
  console.log(country);
  if (country.length === 0) {
    return "No country found";
  }

  return (
    <Container className="w-full h-full flex items-center mt-12">
      {country.map((item: any) => (
        <div
          key={item.cca2}
          className="flex items-center justify-between gap-8"
        >
          <img src={item.flags.png} alt={item.flags.alt} />
          <div className="flex flex-col gap-4">
            <Title text={item.name.official} size="md" />
            <div>
              <Title text="Описание" size="sm" />
              <p>{item.flags.alt}</p>
            </div>
            <div>
              <p>Region - {item.region}</p>
              <p>Capital - {item.capital}</p>
            </div>
          </div>
        </div>
      ))}
    </Container>
  );
}
