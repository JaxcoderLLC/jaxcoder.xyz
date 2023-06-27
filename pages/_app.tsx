import { Web3OnboardProvider } from "@web3-onboard/react";
import { AppProps } from "next/app";
import "../styles/index.css";
import web3Onboard from "../web3-onboard";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3OnboardProvider web3Onboard={web3Onboard}>
      <Component {...pageProps} />
    </Web3OnboardProvider>
  );
}
