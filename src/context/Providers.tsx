"use client";

import { persister, queryClient } from "@/services/queryClient";
import { config } from "@/services/wagmi";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { WagmiProvider } from "wagmi";

const Providers = (props: { children: JSX.Element[] | JSX.Element }) => {
  return (
    <WagmiProvider config={config}>
      <PersistQueryClientProvider
        client={queryClient}
        persistOptions={{ persister }}
      >
        {props.children}
      </PersistQueryClientProvider>
    </WagmiProvider>
  );
};

export default Providers;
