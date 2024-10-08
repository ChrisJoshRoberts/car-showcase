import { CarCard, CustomFilter, SearchBar, ShowMore   } from "@/components";
import Hero from "@/components/Hero";
import { fetchCars } from "@/utils";
import Image from "next/image";
import { fuels, yearsOfProduction} from "@/constants";

interface SearchParams {
  manufacturer?: string;
  model?: string;
  year?: number;
  fuel?: string;
  limit?: number;
}

interface HomeProps {
  searchParams: SearchParams;
}

export default async function Home({ searchParams }) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || '',
    model: searchParams.model || '',
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || '',
    limit: searchParams.limit || 10,
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">
            Car catalogue
          </h1>
          <p>Explore the cars you might like:</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title='Fuel' options={fuels}/>
            <CustomFilter title='year' options={yearsOfProduction}/>
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard key={car} car={car} />
              ))}
            </div>
            <ShowMore
              pageNumber={(searchParams.limit  || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Opps! no results</h2>
          </div>
        )}

      </div>
    </main>
  );
}
