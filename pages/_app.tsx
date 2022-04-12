import "../styles/globals.css";
import type { AppProps } from "next/app";
/**
 * @return {JSX.Element}
 */
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
