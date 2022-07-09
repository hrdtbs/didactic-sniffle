import type { AppProps } from "next/app";
import createCache from "@emotion/cache";
import "ress";
import "./style.css";
import { CacheProvider } from "@emotion/react";

const cache = createCache({ key: "next" });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={cache}>
      <Component {...pageProps} />
    </CacheProvider>
  );
}

export default MyApp;
