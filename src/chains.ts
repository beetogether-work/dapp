import { chain } from 'wagmi';

export const customChains = {
  ...chain,
  zkSync: {
    id: 280,
    name: 'zkSync Era Testnet',
    network: 'zkSync',
    nativeCurrency: {
      decimals: 18,
      name: 'Ethereum',
      symbol: 'ETH',
    },
    rpcUrls: {
      default: 'https://testnet.era.zksync.dev',
    },
    blockExplorers: {
      default: { name: 'explorer', url: 'https://goerli.explorer.zksync.io/' },
    },
    testnet: false,
  },
  mantle: {
    id: 5001,
    name: 'Mantle',
    network: 'mantle-testnet',
    nativeCurrency: {
      decimals: 18,
      name: 'Bit',
      symbol: 'BIT',
    },
    rpcUrls: {
      default: 'https://rpc.testnet.mantle.xyz',
    },
    blockExplorers: {
      default: { name: 'explorer', url: 'https://explorer.testnet.mantle.xyz/' },
    },
    testnet: false,
  },
  local: {
    id: 1337,
    name: 'localhost',
    network: 'localhost',
    nativeCurrency: {
      decimals: 18,
      name: 'Ethereum',
      symbol: 'ETH',
    },
    rpcUrls: {
      default: 'https://api.avax-test.network/ext/C/rpc',
    },
    blockExplorers: {
      default: { name: 'testnet.snowTrace', url: 'https://testnet.snowtrace.io/' },
    },
    testnet: false,
  },
};
