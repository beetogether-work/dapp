import { utils } from 'zksync-web3';
import { NetworkEnum } from '../types';

import { providers, Contract, ethers } from 'ethers';

/**
 * Returns the overrides to pass to a transaction, based on whether the paymaster can be used or not
 * @param chainId id of the chain
 * @param provider provider
 * @param contract contract
 * @param methodName name of the method
 * @param params params to pass to the method
 * @param paymasterAddress address of the paymaster
 */
export const getTxOverrides = async (
  chainId: number,
  provider: providers.BaseProvider,
  contract: Contract,
  methodName: string,
  params: unknown[],
  paymasterAddress: string,
) => {
  // Check if chain is zkSync (paymaster is not available on other chains)
  if (chainId === NetworkEnum.ZKSYNC) {
    // Get paymaster params
    const paymasterParams = utils.getPaymasterParams(paymasterAddress, {
      type: 'General',
      innerInput: new Uint8Array(),
    });

    // Estimate gas fees to be paid
    const gasPrice = await provider.getGasPrice();
    const gasLimit = await contract.estimateGas[methodName](...params, {
      customData: {
        gasPerPubdata: utils.DEFAULT_GAS_PER_PUBDATA_LIMIT,
        paymasterParams,
      },
    });
    const gasFees = gasPrice.mul(gasLimit);

    // Check if paymaster has enough balance to cover fees
    const paymasterBalance = await provider.getBalance(paymasterAddress);

    console.log('Gas fees: ', ethers.utils.formatEther(gasFees));
    console.log('Balance: ', ethers.utils.formatEther(paymasterBalance));

    if (paymasterBalance.gt(gasFees)) {
      return {
        // paymaster info
        customData: {
          paymasterParams,
          gasPerPubdata: utils.DEFAULT_GAS_PER_PUBDATA_LIMIT,
        },
      };
    }
  }

  return {};
};
