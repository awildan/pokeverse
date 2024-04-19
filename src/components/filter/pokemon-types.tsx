"use client";

import { useQuery } from "@apollo/client";
import React, { useContext } from "react";
import { Badge } from "~/components/ui/badge";
import { FilterContex } from "~/lib/contex/filter-wrapper";
import { GET_POKEMON_TYPES } from "~/lib/graphql/queries/pokemons";
import { Skeleton } from "~/components/ui/skeleton";
import { IPType } from "~/interfaces/pokemon";
import { PER_PAGE } from "~/lib/constant";

const PokemonTypes = ({ className }: { className?: string }) => {
  const { filter, setFilter } = useContext(FilterContex);
  const arrCard = new Array(4).fill("");

  const { loading, error, data } = useQuery(GET_POKEMON_TYPES, {
    variables: {
      ...filter,
      name: `%${filter.name}%`,
    },
    notifyOnNetworkStatusChange: true,
  });

  const pokemonTypes: IPType[] = data?.pokemon_v2_type || [];

  const handleClickBadge = (id: number) => {
    if (id === filter.idType?._eq) {
      setFilter((prev) => ({
        ...prev,
        limit: PER_PAGE,
        offset: 0,
        idType: undefined,
      }));
    } else {
      setFilter((prev) => ({
        ...prev,
        limit: PER_PAGE,
        offset: 0,
        idType: {
          _eq: id,
        },
      }));
    }
  };

  if (loading)
    return (
      <div className="flex gap-2">
        {arrCard.map((_, i) => (
          <Skeleton key={i} className="h-4 w-10" />
        ))}
      </div>
    );

  return pokemonTypes.map((type) => (
    <Badge
      key={type.id}
      variant={filter.idType?._eq === type.id ? "default" : "secondary"}
      className="capitalize cursor-pointer hover:bg-primary/50 align-middle"
      onClick={() => handleClickBadge(type.id)}
    >
      {type.name}
    </Badge>
  ));
};

export default PokemonTypes;
