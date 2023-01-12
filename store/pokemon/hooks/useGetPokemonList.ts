import { useInfiniteQuery } from "react-query";
import getPokemonList from "../apis";

const useGetPokemonList = () => {
  return useInfiniteQuery(
    "pokemonList", // data의 이름
    getPokemonList, // fetch callback, 위 data를 불러올 함수
    {
      getNextPageParam: (lastPage) => {
        const { next } = lastPage;
        if (!next) return false;

        return Number(new URL(next).searchParams.get("offset"));
      },
    }
  );
};

export default useGetPokemonList;
