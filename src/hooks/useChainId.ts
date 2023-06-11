import { useNetwork } from 'wagmi';
import { customChains } from '../chains';

export const useChainId = () => {
  const { chain, chains } = useNetwork();
  const chainId = chain?.id || chains[0]?.id || customChains.zkSync.id;
  return chainId;
};
