import { createConfig, http } from "wagmi";
import { base, baseSepolia } from "wagmi/chains";

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}

export const config = createConfig({
  chains: [base, baseSepolia],
  transports: {
    [baseSepolia.id]: http(),
    [base.id]: http(),
  },
});
