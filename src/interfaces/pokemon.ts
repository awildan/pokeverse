export interface IPokemon {
  id: string;
  name: string;
  pokemon_v2_pokemontypes: IPokemonType[];
  pokemon_v2_pokemonsprites: IPokemonSprites[];
}

export interface IPType {
  id: number;
  name: string;
}

export interface IPokemonType {
  id: number;
  pokemon_v2_type: IPType;
}

export interface IPokemonSprites {
  image_dream_world: string;
  image_artwork: string;
}

export interface IResPokemonStats {
  id: number;
  base_stat: number;
  pokemon_v2_stat: IPType;
}

export interface IPokemonDetail extends IPokemon {
  base_experience: number;
  height: number;
  weight: number;
  pokemon_v2_pokemonabilities: {
    id: number;
    pokemon_v2_ability: IPType;
  }[];
  pokemon_v2_pokemonstats: {
    id: number;
    base_stat: number;
    pokemon_v2_stat: IPType;
  }[];
  pokemon_v2_pokemonspecy: {
    id: number;
    evolves_from_species_id: number;
    base_happiness: number;
    capture_rate: number;
    pokemon_v2_pokemonhabitat: IPType;
    pokemon_v2_evolutionchain: {
      id: number;
      pokemon_v2_pokemonspecies: {
        evolves_from_species_id: number;
        id: number;
        evolution_chain_id: number;
        name: string;
        pokemon_v2_pokemons: IPokemon[];
      }[];
    };
  };
}
