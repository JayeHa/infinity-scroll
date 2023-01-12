import axios from "axios";
import { OFFSET } from "../../constants";

const getPokemonList = async ({ pageParam = 0 }) => {
  const { data } = await axios.get<API.NamedAPIResourceList>(
    "https://pokeapi.co/api/v2/pokemon",
    {
      params: {
        limit: OFFSET,
        offset: pageParam,
      },
    }
  );

  return data;
};

export default getPokemonList;
