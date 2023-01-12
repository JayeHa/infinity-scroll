import { Fragment, useRef } from "react";
import PokemonCard from "../components/PokemonCard";
import { useMoveToSavedScroll, useObserver } from "../hooks";
import { useGetPokemonList } from "../store/pokemon/hooks";

const Index = () => {
  useMoveToSavedScroll();

  // 바닥 ref를 위한 useRef 선언
  const bottom = useRef(null);

  const {
    data, // 💡 data.pages를 갖고 있는 배열
    error, // error 객체
    fetchNextPage, // 💡 다음 페이지를 불러오는 함수
    hasNextPage, // 다음 페이지가 있는지 여부, Boolean
    isFetching, // 첫 페이지 fetching 여부, Boolean, 잘 안쓰인다
    isFetchingNextPage, // 추가 페이지 fetching 여부, Boolean
    status // 💡 loading, error, success 중 하나의 상태, string
  } = useGetPokemonList();

  // useObserver로 넘겨줄 callback, entry로 넘어오는 HTMLElement가
  // isIntersecting이라면 무한 스크롤을 위한 fetchNextPage가 실행될 것이다.
  const onIntersect = ([entry]) => entry.isIntersecting && fetchNextPage();

  // useObserver로 bottom ref와 onIntersect를 넘겨 주자.
  useObserver({
    target: bottom,
    onIntersect
  });

  return (
    <div>
      {status === "loading" && <p>불러오는 중</p>}
      {status === "error" && <p>{error.message}</p>}

      {status === "success" &&
        data.pages.map((group, index) => (
          <div key={index}>
            {group.results.map(pokemon => (
              <Fragment key={pokemon.name}>
                <PokemonCard url={pokemon.url} name={pokemon.name} />
              </Fragment>
            ))}
          </div>
        ))}

      <div ref={bottom} />

      {isFetchingNextPage && <p>계속 불러오는 중</p>}
    </div>
  );
};

export default Index;
