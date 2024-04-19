"use client";

import { useQuery } from "@apollo/client";
import React, { useContext, useEffect, useState } from "react";
import { IPokemon } from "~/interfaces/pokemon";
import { GET_POKEMONS } from "~/lib/graphql/queries/pokemons";
import Link from "next/link";
import { SimpleCard, SkeletonGroup } from "~/components/pokemons/card";
import { FilterContex } from "~/lib/contex/filter-wrapper";
import { PER_PAGE } from "~/lib/constant";

const Pokemons = () => {
  const { filter, setFilter } = useContext(FilterContex);
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);

  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: filter,
    notifyOnNetworkStatusChange: true,
  });

  const handleScroll = () => {
    const element = document.documentElement;
    if (
      window.innerHeight + element.scrollTop === element.offsetHeight &&
      !loading
    ) {
      setFilter((prev) => ({
        ...prev,
        limit: PER_PAGE,
        offset: prev.offset + filter.limit,
      }));
    }
  };

  useEffect(() => {
    if (data !== undefined) {
      setPokemons((prev) => [...prev, ...data.pokemon_v2_pokemon]);
    }
  }, [data]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  if (loading && filter.offset === 0) return <SkeletonGroup />;
  if (error) return `Error! ${error.message}`;

  return (
    <>
      {pokemons.map((data: IPokemon) => (
        <Link key={data.id} href={`/pokemon/${data.name}`}>
          <SimpleCard key={data.id} data={data} />
        </Link>
      ))}
      {loading && filter.offset !== 0 && <SkeletonGroup />}
    </>
  );
};

export default Pokemons;
