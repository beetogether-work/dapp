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
  fuji: {
    id: 43_113,
    name: 'Fuji',
    network: 'fuji',
    nativeCurrency: {
      decimals: 18,
      name: 'Avalanche',
      symbol: 'AVAX',
    },
    rpcUrls: {
      default: 'https://api.avax-test.network/ext/C/rpc',
    },
    blockExplorers: {
      default: { name: 'testnet.snowTrace', url: 'https://testnet.snowtrace.io/' },
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
