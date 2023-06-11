import { chain } from 'wagmi';

export const customChains = {
  ...chain,
  polygonMumbai: {
    ...chain.polygonMumbai,
    rpcUrls: {
      default: 'https://rpc.mumbai.polygon.gateway.fm/',
    },
  },
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
    testnet: true,
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
    testnet: true,
  },
  scroll: {
    id: 534353,
    name: 'Scroll',
    network: 'scroll',
    nativeCurrency: {
      decimals: 18,
      name: 'Ethereum',
      symbol: 'ETH',
    },
    rpcUrls: {
      default: 'https://alpha-rpc.scroll.io/l2',
    },
    blockExplorers: {
      default: { name: 'explorer', url: 'https://blockscout.scroll.io/' },
    },
    testnet: true,
  },
  base: {
    id: 84531,
    name: 'Base',
    network: 'base',
    nativeCurrency: {
      decimals: 18,
      name: 'Ethereum',
      symbol: 'ETH',
    },
    rpcUrls: {
      default: 'https://goerli.base.org',
    },
    blockExplorers: {
      default: { name: 'explorer', url: 'https://goerli.basescan.org' },
    },
    testnet: true,
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
    testnet: true,
  },
};
