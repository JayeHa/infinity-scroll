import { useEffect } from "react";
import useLocalStorage from "use-local-storage";

const useMoveToSavedScroll = () => {
  // scrollY를 useLocalStorage로 세팅한다.
  const [scrollY] = useLocalStorage("poke_list_scroll", 0);

  useEffect(() => {
    // 기본값이 "0"이기 때문에 스크롤 값이 저장됐을 때에만 window를 스크롤시킨다.
    if (scrollY !== 0) window.scrollTo(0, Number(scrollY));
  }, [scrollY]);
};

export default useMoveToSavedScroll;
