import React from "react";
import { SkeletonCard } from "~/components/pokemons/card";

const SkeletonGroup = ({ itemCount = 3 }: { itemCount?: number }) => {
  const arrCard = new Array(itemCount).fill("");

  return arrCard.map((_, i) => <SkeletonCard key={i} />);
};

export default SkeletonGroup;
