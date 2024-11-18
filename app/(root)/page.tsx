import {
  Container,
  Countries,
  Filters,
  Header,
} from "@/shared/components/shared";
import { PickedCountry } from "@/shared/components/shared/picked-country";
import { ResetFilters } from "@/shared/components/shared/reset-filters";

export default function Home() {
  return (
    <Container className="grid grid-cols-3 xl:grid-cols-5 items-center gap-3 py-3 relative">
      <div className="col-span-5 xl:col-span-4 p-4 lg:p-0">
        <Header />
        <Filters />
        <ResetFilters />
        <Countries />
      </div>
      <div className="col-span-1 w-full h-full relative">
        <PickedCountry />
      </div>
    </Container>
  );
}
