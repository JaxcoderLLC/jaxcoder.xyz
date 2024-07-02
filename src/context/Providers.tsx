"use client";

import { persister, queryClient } from "@/services/queryClient";
import { config } from "@/services/wagmi";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { WagmiProvider } from "wagmi";
import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const Providers = (props: { children: JSX.Element[] | JSX.Element }) => {
  const router = useRouter();

  return (
    <WagmiProvider config={config}>
      <NextUIProvider navigate={router.push}>
        <PersistQueryClientProvider
          client={queryClient}
          persistOptions={{ persister }}
        >
          {props.children}
        </PersistQueryClientProvider>
      </NextUIProvider>
    </WagmiProvider>
  );
};

export default Providers;
