import { ChartData } from "chart.js";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  IPokemon,
  IPokemonDetail,
  IResPokemonStats,
} from "~/interfaces/pokemon";
import { IStats } from "~/interfaces/stats";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const mapStats = (
  data: IResPokemonStats[]
): {
  labels: string[];
  value: number[];
} => {
  return {
    labels: data.map((stat) => stat.pokemon_v2_stat.name),
    value: data.map((stat) => stat.base_stat),
  };
};

const toCapitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const mappingStats = (
  data: IResPokemonStats[],
  pokemon: string
): ChartData<"radar", number[], string> => {
  return {
    labels: mapStats(data).labels,
    datasets: [
      {
        label: `${toCapitalize(pokemon)} Stats`,
        data: mapStats(data).value,
        backgroundColor: "rgba(249,115,22, 0.2)",
        borderColor: "rgba(249,115,22, 1)",
        borderWidth: 1,
      },
    ],
  };
};

type TEvolutionChain =
  IPokemonDetail["pokemon_v2_pokemonspecy"]["pokemon_v2_evolutionchain"];

export const mappingEvolution = (
  data: TEvolutionChain,
  idPokemon: number
): IPokemon[] => {
  const pokemonSpecies = data.pokemon_v2_pokemonspecies || [];
  const indexSpecies = pokemonSpecies.findIndex(({ id }) => id === idPokemon);
  const evolutions = pokemonSpecies.slice(indexSpecies + 1);

  const pokemons = evolutions.map(
    ({ pokemon_v2_pokemons }) => pokemon_v2_pokemons[0]
  );

  return pokemons;
};

