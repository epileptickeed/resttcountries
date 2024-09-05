'use client';

import useAllFlags from '@/shared/hooks/useAllFlags';

export default function CountryPage(name: any) {
  const data = useAllFlags();
  const countryName = name.params.name;
  //   console.log(name.params.name);
  const country = data?.filter((item: any) => item.name.common === countryName);

  return (
    <main>
      {country?.map((item: any) => (
        <div key={item.cca2}>{item.name.common}</div>
      ))}
    </main>
  );
}
