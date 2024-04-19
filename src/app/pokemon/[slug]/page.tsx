import React, { Suspense } from "react";
import {
  DetailCard,
  SkeletonCard,
  SkeletonGroup,
} from "~/components/pokemons/card";
import Evolution from "~/components/pokemons/evolution";
import StatsChart from "~/components/pokemons/stats/chart";
import { getClient } from "~/lib/graphql/apollo-client";
import { GET_POKEMON_DETAIL } from "~/lib/graphql/queries/pokemons";
import { mappingStats } from "~/lib/utils";

const Page = async ({ params }: { params: { slug: string } }) => {
  const client = getClient();

  const { data, loading, error } = await client.query({
    query: GET_POKEMON_DETAIL,
    variables: {
      name: params.slug,
    },
  });

  if (loading)
    return (
      <div className="container">
        <SkeletonCard />
      </div>
    );
  if (error) return `Error! ${error.message}`;

  const mappedStats = mappingStats(
    data?.pokemon_v2_pokemon[0]?.pokemon_v2_pokemonstats,
    data?.pokemon_v2_pokemon[0]?.name
  );

  return (
    <main className="container">
      <section className="flex w-full flex-wrap gap-4 md:gap-0 justify-center items-center">
        <DetailCard
          data={data?.pokemon_v2_pokemon[0]}
          className="w-full md:w-3/5 h-auto xl:min-h-[500px]"
        />
        <div className="w-full md:w-2/5">
          <Suspense fallback={<SkeletonCard />}>
            <StatsChart data={mappedStats} />
          </Suspense>
        </div>
      </section>
      <section className="flex flex-col gap-4 w-full my-8">
        <h3 className="text-2xl font-bold">Evolutions</h3>
        <div className="grid w-full gap-2 grid-cols-auto-fill-200">
          <Suspense fallback={<SkeletonGroup itemCount={2} />}>
            <Evolution
              id={data?.pokemon_v2_pokemon[0]?.id}
              name={data?.pokemon_v2_pokemon[0]?.name}
            />
          </Suspense>
        </div>
      </section>
    </main>
  );
};

export default Page;
