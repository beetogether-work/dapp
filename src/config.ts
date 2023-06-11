import { ethers } from 'ethers';
import { IToken, NetworkEnum } from './types';

export type Config = {
  networkId: NetworkEnum;
  subgraphUrl: string;
  BTSubgraphUrl: string;
  escrowConfig: { [key: string]: any };
  contracts: { [key: string]: `0x${string}` };
  tokens: { [key: string]: IToken };
};

export const maxDecimals = {
  ETH: 2,
};

export const FEE_RATE_DIVIDER = 10_000;

const mumbai: Config = {
  networkId: NetworkEnum.MUMBAI,
  subgraphUrl: 'https://api.thegraph.com/subgraphs/name/talentlayer/talent-layer-mumbai',
  BTSubgraphUrl: 'https://api.thegraph.com/subgraphs/name/mattiapomelli/beetogether-mumbai',
  contracts: {
    hiveFactory: '0xc7BfFb0c1142a03C03E4110e625910996b978054',
    talentLayerId: '0x3F87289e6Ec2D05C32d8A74CCfb30773fF549306',
    serviceRegistry: '0x27ED516dC1df64b4c1517A64aa2Bb72a434a5A6D',
    talentLayerReview: '0x050F59E1871d3B7ca97e6fb9DCE64b3818b14B18',
    talentLayerEscrow: '0x4bE920eC3e8552292B2147480111063E0dc36872',
    talentLayerPlatformId: '0xEFD8dbC421380Ee04BAdB69216a0FD97F64CbFD4',
  },
  escrowConfig: {
    adminFee: '0',
    adminWallet: '0xC01FcDfDE3B2ABA1eab76731493C617FfAED2F10',
    timeoutPayment: 3600 * 24 * 7,
  },
  tokens: {
    [ethers.constants.AddressZero]: {
      address: ethers.constants.AddressZero,
      symbol: 'MATIC',
      name: 'Matic',
      decimals: 18,
    },
    '0xe6b8a5CF854791412c1f6EFC7CAf629f5Df1c747': {
      address: '0xe6b8a5CF854791412c1f6EFC7CAf629f5Df1c747',
      symbol: 'USDC',
      name: 'USDC Stablecoin',
      decimals: 6,
    },
  },
};

const local: Config = {
  networkId: NetworkEnum.LOCAL,
  subgraphUrl: 'http://localhost:8020/',
  BTSubgraphUrl: 'https://api.thegraph.com/subgraphs/name/mattiapomelli/beetogether-mumbai',
  contracts: {
    hiveFactory: '0xeecFd8a85fbB9BbA5Dac2022C824e1c42C5d9634',
    talentLayerId: '0x2475F87a2A73548b2E49351018E7f6a53D3d35A4',
    serviceRegistry: '0x3dE39C61d4281716c458ffdb3150aa9aF4fb752a',
    talentLayerReview: '0xa3A183D6f70217362050040Ef365923a0c1989e8',
    talentLayerEscrow: '0x91327C01CB952a95addDa72FcA59E4151fE42Cb3',
    talentLayerPlatformId: '0xF39e4249b6dCcca8Ec7455E524C9685d1332fCD1',
  },
  escrowConfig: {
    timeoutPayment: 3600 * 24 * 7,
  },
  tokens: {
    [ethers.constants.AddressZero]: {
      address: ethers.constants.AddressZero,
      symbol: 'ETH',
      name: 'ETH',
      decimals: 18,
    },
    '0xfF695df29837B571c4DAE01B5711500f6306E93f': {
      address: '0xfF695df29837B571c4DAE01B5711500f6306E93f',
      symbol: 'ERC20',
      name: 'Simple ERC20',
      decimals: 18,
    },
  },
};

const zkSync: Config = {
  networkId: NetworkEnum.ZKSYNC,
  subgraphUrl: 'https://api.thegraph.com/subgraphs/name/mattiapomelli/talentlayer-zksynctestnet',
  BTSubgraphUrl: 'https://api.thegraph.com/subgraphs/name/mattiapomelli/beetogether-zksync',
  contracts: {
    hiveFactory: '0x98Ef8e54ec2fe89FCdA42d2cbC7F091508Aff5D4',
    talentLayerId: '0x02c8615A5EbcF78ad9CDe35c14AFAB0f683bB10B',
    serviceRegistry: '0x9B4a84dd61Bf00a89521545C3EEB11de3aaf775C',
    talentLayerReview: '0xd3c5Eb477b73B79434463dE8b7A769605B2b8Cec',
    talentLayerEscrow: '0x34d8cCf63fD034ED0ec3B5cdCC34Cf93748760b2',
    talentLayerPlatformId: '0x26924caD212D324CF23607095D0343E75E51D18B',
  },
  escrowConfig: {
    adminFee: '0',
    adminWallet: '0x8d960334c2EF30f425b395C1506Ef7c5783789F3',
    timeoutPayment: 3600 * 24 * 7,
  },
  tokens: {
    [ethers.constants.AddressZero]: {
      address: ethers.constants.AddressZero,
      symbol: 'ETH',
      name: 'Ethereum',
      decimals: 18,
    },
  },
};

const mantle: Config = {
  networkId: NetworkEnum.MANTLE,
  subgraphUrl: 'https://graph.testnet.mantle.xyz/subgraphs/name/talentlayer',
  BTSubgraphUrl: 'https://graph.testnet.mantle.xyz/subgraphs/name/beetogether',
  contracts: {
    hiveFactory: '0x5FC6c2fE038a79Bb5A5300dEa61162FFd3EaA276',
    talentLayerId: '0xF6b4d81a77e41f7Ee4dc3FCA56E171567862DEB2',
    serviceRegistry: '0x7C171329aA4edCEF43de5E378c1E93C110C756A7',
    talentLayerReview: '0x79186f85c7d937d2b52ce64136b176abbd651a39',
    talentLayerEscrow: '0x6444ac8760c5647d3f94d691990FcBA734434A66',
    talentLayerPlatformId: '0xc83A9E89C2E61d251a9429203b99f0497CEfE5Ec',
  },
  escrowConfig: {
    adminFee: '0',
    adminWallet: '0x8d960334c2EF30f425b395C1506Ef7c5783789F3',
    timeoutPayment: 3600 * 24 * 7,
  },
  tokens: {
    [ethers.constants.AddressZero]: {
      address: ethers.constants.AddressZero,
      symbol: 'BIT',
      name: 'Bit',
      decimals: 18,
    },
  },
};

const scroll: Config = {
  networkId: NetworkEnum.SCROLL,
  subgraphUrl: '', // not supported for Scroll
  BTSubgraphUrl: '', // not supported for Scroll
  contracts: {
    hiveFactory: '0x5FC6c2fE038a79Bb5A5300dEa61162FFd3EaA276',
    talentLayerId: '0x86FC1Ce8122973E0990227b6Cb6e6eB1276A60E8',
    serviceRegistry: '0xc83A9E89C2E61d251a9429203b99f0497CEfE5Ec',
    talentLayerReview: '0x7C171329aA4edCEF43de5E378c1E93C110C756A7',
    talentLayerEscrow: '0x6444ac8760c5647d3f94d691990FcBA734434A66',
    talentLayerPlatformId: '0xC965483E19407D296971a815A8e59F8c51B7d923',
  },
  escrowConfig: {
    adminFee: '0',
    adminWallet: '0x8d960334c2EF30f425b395C1506Ef7c5783789F3',
    timeoutPayment: 3600 * 24 * 7,
  },
  tokens: {
    [ethers.constants.AddressZero]: {
      address: ethers.constants.AddressZero,
      symbol: 'ETH',
      name: 'Ethereum',
      decimals: 18,
    },
  },
};

const chains: { [networkId in NetworkEnum]: Config } = {
  [NetworkEnum.LOCAL]: local,
  [NetworkEnum.MUMBAI]: mumbai,
  [NetworkEnum.ZKSYNC]: zkSync,
  [NetworkEnum.MANTLE]: mantle,
  [NetworkEnum.SCROLL]: scroll,
};

export const getConfig = (networkId: NetworkEnum) => chains[networkId];
