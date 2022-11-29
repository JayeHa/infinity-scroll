import type { AppProps } from "next/app";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "../styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  // useState lazy init을 사용해 QueryClient 인스턴스를 생성해
  // QueryClientProvider의 client 값으로 전달해준다
  const [queryClient] = useState(() => new QueryClient());

  return (
    // QueryClientProvider 로 인해 모든 페이지, 컴포넌트에서
    // queryClient 에 접근이 가능해진다.
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
