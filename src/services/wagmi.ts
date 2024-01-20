import { createConfig, http } from "wagmi";
import {
  arbitrum,
  arbitrumNova,
  arbitrumSepolia,
  optimism,
  optimismSepolia,
  sepolia,
} from "wagmi/chains";

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}

export const config = createConfig({
  chains: [sepolia, optimism, optimismSepolia],
  transports: {
    [optimismSepolia.id]: http(),
    [optimism.id]: http(),
    [sepolia.id]: http(),
    [arbitrumSepolia.id]: http(),
    [arbitrumNova.id]: http(),
    [arbitrum.id]: http(),
  },
});
