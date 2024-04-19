"use client";

import { useQuery } from "@apollo/client";
import React from "react";
import { IPokemon } from "~/interfaces/pokemon";
import { GET_POKEMONS } from "~/lib/graphql/queries/pokemons";
import Link from "next/link";
import { SimpleCard, SkeletonGroup } from "~/components/pokemons/card";

const Pokemons = () => {
  const arrCard = new Array(4).fill("");

  const gqlVariables = {
    limit: 40,
    offset: 0,
  };

  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: gqlVariables,
  });

  if (loading) return <SkeletonGroup />;
  if (error) return `Error! ${error.message}`;

  const pokemons: IPokemon[] = data?.pokemon_v2_pokemon || [];

  return pokemons.map((data: IPokemon) => (
    <Link key={data.id} href={`/pokemon/${data.name}`}>
      <SimpleCard key={data.id} data={data} />
    </Link>
  ));
};

export default Pokemons;
