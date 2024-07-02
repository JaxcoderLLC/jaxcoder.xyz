"use client";

import { config } from "@/services/wagmi";
// import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { WagmiProvider } from "wagmi";
import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

const Providers = (props: { children: JSX.Element[] | JSX.Element }) => {
  const router = useRouter();

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <NextUIProvider navigate={router.push}>{props.children}</NextUIProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default Providers;
