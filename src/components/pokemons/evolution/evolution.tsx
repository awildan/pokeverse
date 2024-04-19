"use client";

import { useQuery } from "@apollo/client";
import React from "react";
import { IPokemon } from "~/interfaces/pokemon";
import { GET_EVOLUTION_POKEMON } from "~/lib/graphql/queries/pokemons";
import Link from "next/link";
import {
  EmptyCard,
  SimpleCard,
  SkeletonGroup,
} from "~/components/pokemons/card";
import { mappingEvolution } from "~/lib/utils";
import { CardContent } from "~/components/ui/card";
import { Button } from "~/components/ui/button";

const Evolution = ({ id, name }: { id: number; name: string }) => {
  const { loading, error, data } = useQuery(GET_EVOLUTION_POKEMON, {
    skip: !id,
    variables: {
      id: id,
    },
  });

  if (loading) return <SkeletonGroup itemCount={2} />;
  if (error) return `Error! ${error.message}`;

  const pokemons: IPokemon[] = mappingEvolution(
    data?.pokemon_v2_evolutionchain[0],
    id
  );

  return pokemons.length > 0 ? (
    pokemons.map((data: IPokemon) => (
      <Link key={data.id} href={`/pokemon/${data.name}`}>
        <SimpleCard key={data.id} data={data} />
      </Link>
    ))
  ) : (
    <EmptyCard className="w-64 h-64">
      <CardContent className="flex flex-col items-center gap-6 pt-6 px-0">
        <p className="text-center font-medium px-6">
          No more evolution for{" "}
          <span className="font-bold text-primary capitalize">{name}</span>{" "}
          browse other
        </p>
        <Link href="/" className="w-full">
          <Button variant="link" size="lg" className="text-lg w-full">
            Pokémon
          </Button>
        </Link>
      </CardContent>
    </EmptyCard>
  );
};

export default Evolution;
