import { useConnectWallet } from "@web3-onboard/react";
import { ethers } from "ethers";
import Link from "next/link";

const Navbar = () => {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();

  let ethersProvdier: ethers.providers.Web3Provider | undefined;

  if (wallet) {
    ethersProvdier = new ethers.providers.Web3Provider(wallet.provider);
  }

  return (
    <div className="flex flex-col md:flex-row items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        <Link href="/">{"<jaxcoder />"}</Link>
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Let&apos;s chat about web3 technology{" "}
      </h4>
      <button
        className="flex px-8 py-3 mt-6 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
      >
        <Link href="/attestation">Attestations</Link>
      </button>
      <button
        className="flex px-8 py-3 mt-6 border border-transparent text-base font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700"
        disabled={connecting}
        onClick={() => {
          wallet ? disconnect(wallet) : connect();
        }}
      >
        {connecting ? "Connecting" : wallet ? "Disconnect" : "Connect"}
      </button>
    </div>
  );
};

export default Navbar;
