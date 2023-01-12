import axios from "axios";
import { OFFSET } from "../../constants";

const getPokemonList = async ({ pageParam = 0 }) =>
  axios
    .get("https://pokeapi.co/api/v2/pokemon", {
      params: {
        limit: OFFSET,
        offset: pageParam,
      },
    })
    .then((res) => res?.data);

export default getPokemonList;
