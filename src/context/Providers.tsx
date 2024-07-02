"use client";

import { queryClient } from "@/services/queryClient";
import { config } from "@/services/wagmi";
// import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { WagmiProvider } from "wagmi";
import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { QueryClientProvider } from "@tanstack/react-query";

const Providers = (props: { children: JSX.Element[] | JSX.Element }) => {
  const router = useRouter();

  return (
    <WagmiProvider config={config}>
      <NextUIProvider navigate={router.push}>
        <QueryClientProvider client={queryClient}>
          {props.children}
        </QueryClientProvider>
      </NextUIProvider>
    </WagmiProvider>
  );
};

export default Providers;
