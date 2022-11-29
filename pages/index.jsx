import axios from "axios";
import { useInfiniteQuery } from "react-query";

const OFFSET = 30;

const getPokemonList = ({ pageParam = 0 }) =>
  axios
    .get("https://pokeapi.co/api/v2/pokemon", {
      params: {
        limit: OFFSET,
        offset: pageParam
      }
    })
    .then(res => res?.data);

const Index = () => {
  const {
    data, // 💡 data.pages를 갖고 있는 배열
    error, // error 객체
    fetchNextPage, // 💡 다음 페이지를 불러오는 함수
    hasNextPage, // 다음 페이지가 있는지 여부, Boolean
    isFetching, // 첫 페이지 fetching 여부, Boolean, 잘 안쓰인다
    isFetchingNextPage, // 추가 페이지 fetching 여부, Boolean
    status // 💡 loading, error, success 중 하나의 상태, string
  } = useInfiniteQuery(
    "pokemonList", // data의 이름
    getPokemonList, // fetch callback, 위 data를 불러올 함수
    {
      getNextPageParam: lastPage => {
        const { next } = lastPage; // PoKeApi는 마지막 데이터가 없으면 next를 null로 준다
        if (!next) return false;

        // next 값에서 URL주소를 주고 있기 때문에 필요한 offset만 빼와서
        // getPokemonList 함수에 pageParam으로 넘겨주자.
        // console.log(new URL(next).searchParams.get("offset"));
        return Number(new URL(next).searchParams.get("offset"));
      }
    }
  );

  return (
    <div>
      {status === "loading" && <p>불러오는 중</p>}
      {status === "error" && <p>{error.message}</p>}

      {status === "success" &&
        data.pages.map((group, index) => (
          <div key={index}>
            {group.results.map(pokemon => (
              <p key={pokemon.name}>{pokemon.name}</p>
            ))}
          </div>
        ))}
      <button onClick={() => fetchNextPage()}>더 불러오기</button>
      {isFetchingNextPage && <p>계속 불러오는 중</p>}
    </div>
  );
};

export default Index;
