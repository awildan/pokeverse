"use client";

import { NetworkStatus, useQuery } from "@apollo/client";
import React, { useContext, useEffect, useState } from "react";
import { IPokemon } from "~/interfaces/pokemon";
import { GET_POKEMONS } from "~/lib/graphql/queries/pokemons";
import Link from "next/link";
import { SimpleCard, SkeletonGroup } from "~/components/pokemons/card";
import { FilterContex } from "~/lib/contex/filter-wrapper";
import { PER_PAGE } from "~/lib/constant";

const Pokemons = () => {
  const { filter, setFilter, setLoading } = useContext(FilterContex);
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [isStopScroll, setIsStopScroll] = useState<boolean>(false);

  const {
    loading: loadData,
    error,
    data,
    networkStatus,
  } = useQuery(GET_POKEMONS, {
    variables: {
      ...filter,
      name: `%${filter.name}%`,
    },
    notifyOnNetworkStatusChange: true,
  });

  const handleScroll = () => {
    const element = document.documentElement;
    if (
      window.innerHeight + element.scrollTop >= element.offsetHeight - 1 &&
      !loadData &&
      !isStopScroll
    ) {
      setFilter((prev) => ({
        ...prev,
        limit: PER_PAGE,
        offset: prev.offset + filter.limit,
      }));
    }
  };

  useEffect(() => {
    if (data !== undefined && data.pokemon_v2_pokemon.length < PER_PAGE) {
      setIsStopScroll(true);
    }

    if (data !== undefined && filter.offset === 0) {
      setPokemons(data.pokemon_v2_pokemon);
    } else if (data !== undefined && filter.offset > 0) {
      setPokemons((prev) => [...prev, ...data.pokemon_v2_pokemon]);
    }
  }, [data, filter.offset]);

  useEffect(() => {
    if (networkStatus === NetworkStatus.loading) {
      setLoading(networkStatus === NetworkStatus.loading);
    } else {
      setLoading(false);
    }
  }, [networkStatus, setLoading]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  if (loadData && filter.offset === 0) return <SkeletonGroup />;
  if (error) return `Error! ${error.message}`;

  return (
    <>
      {pokemons.map((data: IPokemon) => (
        <Link key={data.id} href={`/pokemon/${data.name}`}>
          <SimpleCard key={data.id} data={data} />
        </Link>
      ))}
      {loadData && filter.offset !== 0 && <SkeletonGroup />}
    </>
  );
};

export default Pokemons;
