import FilterWrapper from "~/lib/contex/filter-wrapper";
import Pokemons from "~/components/pokemons";
import Filter from "~/components/filter";
export default async function Home() {
  return (
    <main className="container flex flex-col items-center gap-4">
      <FilterWrapper>
        <Filter />
        {/* content wrapper */}
        <div className="grid w-full gap-5 grid-cols-auto-fill-200 mt-5">
          <Pokemons />
        </div>
      </FilterWrapper>
    </main>
  );
}

