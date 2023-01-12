declare module API {
  type NamedAPIResource = {
    name: string;
    url: string;
  };

  type NamedAPIResourceList = {
    count: number;
    next: string;
    previous: string;
    results: NamedAPIResource[];
  };

  type PokemonType = {
    slot: number;
    type: NamedAPIResource;
  };

  interface Pokemon {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: list;
    types: PokemonType;
  }
}
