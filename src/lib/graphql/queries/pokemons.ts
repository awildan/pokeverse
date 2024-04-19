import { gql } from "@apollo/client";

export const GET_POKEMONS = gql`
  query pokemons(
    $limit: Int
    $offset: Int
    $name: String = ""
    $idType: Int_comparison_exp = {}
  ) {
    pokemon_v2_pokemon(
      limit: $limit
      offset: $offset
      where: {
        name: { _ilike: $name }
        _or: { pokemon_v2_pokemontypes: { pokemon_v2_type: { id: $idType } } }
      }
    ) {
      id
      name
      order
      pokemon_v2_pokemontypes {
        id
        pokemon_v2_type {
          id
          name
        }
      }
      pokemon_v2_pokemonsprites {
        image_dream_world: sprites(path: "other.dream_world.front_default")
        image_artwork: sprites(path: "other.official-artwork.front_default")
      }
    }
  }
`;

/*

  pokemon_v2_pokemonmoves_aggregate {
    aggregate {
      count
    }
  }
  pokemon_v2_pokemonmoves {
    id
    pokemon_v2_move {
      id
      name
    }
  }
  pokemon_v2_evolutionchain {
    id
    pokemon_v2_pokemonspecies {
      id
      name
      evolution_chain_id
      evolves_from_species_id
      pokemon_v2_pokemons(limit: 1) {
        id
        name
        pokemon_v2_pokemonsprites {
          sprites(path: "other.dream_world.front_default")
          id
        }
      }
    }
  }
  
*/

export const GET_POKEMON_DETAIL = gql`
  query pokemon($name: String) {
    pokemon_v2_pokemon(where: { name: { _eq: $name } }) {
      id
      name
      order
      base_experience
      height
      weight
      pokemon_v2_pokemontypes {
        id
        pokemon_v2_type {
          id
          name
        }
      }
      pokemon_v2_pokemonsprites {
        image_dream_world: sprites(path: "other.dream_world.front_default")
        image_artwork: sprites(path: "other.official-artwork.front_default")
      }

      pokemon_v2_pokemonabilities {
        id
        pokemon_v2_ability {
          id
          name
        }
      }
      pokemon_v2_pokemonspecy {
        base_happiness
        capture_rate
        id
        name
        evolves_from_species_id
        pokemon_v2_pokemonhabitat {
          id
          name
        }

        pokemon_v2_pokemonspeciesdescriptions {
          id
          description
        }
      }
      pokemon_v2_pokemonstats {
        id
        base_stat
        pokemon_v2_stat {
          id
          name
        }
      }
    }
  }
`;

export const GET_EVOLUTION_POKEMON = gql`
  query pokemon_evolutionchain($id: Int) {
    pokemon_v2_evolutionchain(
      where: { pokemon_v2_pokemonspecies: { id: { _eq: $id } } }
    ) {
      id
      pokemon_v2_pokemonspecies(
        order_by: { evolves_from_species_id: asc_nulls_first }
      ) {
        id
        name
        evolution_chain_id
        evolves_from_species_id
        pokemon_v2_pokemons(limit: 1) {
          id
          name
          pokemon_v2_pokemonsprites {
            image_dream_world: sprites(path: "other.dream_world.front_default")
            image_artwork: sprites(path: "other.official-artwork.front_default")

            id
          }
          pokemon_v2_pokemontypes {
            id
            pokemon_v2_type {
              id
              name
            }
          }
        }
      }
    }
  }
`;
