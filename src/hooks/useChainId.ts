import { useNetwork } from 'wagmi';

export const useChainId = () => {
  const { chain, chains } = useNetwork();
  const chainId = chain?.id || chains[0]?.id;
  return chainId;
};
