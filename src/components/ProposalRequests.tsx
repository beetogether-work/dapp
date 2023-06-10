import { ethers } from 'ethers';
import { useContext, useEffect, useState } from 'react';
import { useProvider, useSigner } from 'wagmi';
import {
  ProposalRequest,
  ProposalRequestsQueryDocument,
  ProposalRequestsQueryQuery,
  execute,
} from '../../.graphclient';
import BeeTogetherContext from '../context/beeTogether';
import HiveABI from '../contracts/ABI/Hive.json';
import { useChainId } from '../hooks/useChainId';
import { createMultiStepsTransactionToast } from '../utils/toast';
import Loading from './Loading';

function ProposalRequests() {
  const { user, hive } = useContext(BeeTogetherContext);
  const chainId = useChainId();
  const { data: signer } = useSigner({
    chainId,
  });
  const provider = useProvider({ chainId });
  const [proposalRequests, setProposalRequests] = useState<ProposalRequest[]>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await execute(ProposalRequestsQueryDocument, {
        hiveId: hive.id,
      });
      const data: ProposalRequestsQueryQuery = result?.data;
      setProposalRequests(data.proposalRequests as ProposalRequest[]);
      setLoading(false);
    };
    fetchData();
  }, [hive.id]);

  const voteAndExecute = async (proposalRequestsId: string) => {
    if (!signer) {
      return;
    }
    const hiveContract = new ethers.Contract(hive.address, HiveABI.abi, signer);
    const tx = await hiveContract.executeProposalRequest(proposalRequestsId);
    await createMultiStepsTransactionToast(
      {
        pending: 'Executing your proposalRequest...',
        success: 'Congrats! Your proposalRequest has been added',
        error: 'An error occurred while creating your proposalRequest',
      },
      provider,
      tx,
      'proposalRequest',
    );
  };

  if (loading) {
    return (
      <div className='flex flex-col justify-between gap-6 mt-6'>
        <div>
          <h3 className='font-heading text-lg font-semibold leading-tight text-gray-100 mb-1'>
            <span>Proposals</span>
          </h3>
        </div>
        {loading && <Loading />}
      </div>
    );
  }

  return (
    <div className='flex flex-col justify-between gap-6 mt-6'>
      <div>
        <h3 className='font-heading text-lg font-semibold leading-tight text-gray-100 mb-1'>
          <span>Proposals</span>
        </h3>
      </div>
      {proposalRequests && proposalRequests?.length > 0 ? (
        <>
          <div className='flex gap-2 sm:justify-end'>
            <button
              type='button'
              className='inline-flex items-center justify-center text-sm h-8 px-3 py-2 space-x-1 border transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed text-white bg-redpraha border-white hover:enabled:bg-gray-50 active:enabled:bg-gray-700/70 active:enabled:bg-gray-100 rounded-xl'>
              All
            </button>
            <button
              type='button'
              className='inline-flex items-center justify-center text-sm h-8 px-3 py-2 space-x-1 border transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed text-white bg-gray-700 border-gray-700 hover:enabled:bg-gray-50 active:enabled:bg-gray-700/70 active:enabled:bg-gray-100 rounded-xl'>
              To vote
            </button>
            <button
              type='button'
              className='inline-flex items-center justify-center text-sm h-8 px-3 py-2 space-x-1 border transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed text-white bg-gray-700 border-gray-700 hover:enabled:bg-gray-50 active:enabled:bg-gray-700/70 active:enabled:bg-gray-100 rounded-xl'>
              In progress
            </button>
          </div>
          <div className='w-full'>
            <div className='flex flex-col'>
              <div className='border-gray-700 overflow-x-auto border rounded-md'>
                <div className='inline-block min-w-full align-middle'>
                  <div className='overflow-hidden'>
                    <table className='divide-gray-700 min-w-full table-fixed divide-y'>
                      <thead>
                        <tr>
                          <th className='text-gray-400 text-left font-sans font-semibold tracking-wider text-xs uppercase border-gray-700 last:border-e-none bg-gray-800 border-r px-4 py-5'>
                            Gig
                          </th>
                          <th className='text-gray-400 text-left font-sans font-semibold tracking-wider text-xs uppercase border-gray-700 last:border-e-none bg-gray-800 border-r px-4 py-5'>
                            {' '}
                            Innitiator{' '}
                          </th>
                          <th className='text-gray-400 text-left font-sans font-semibold tracking-wider text-xs uppercase border-gray-700 last:border-e-none bg-gray-800 border-r px-4 py-5'>
                            Status
                          </th>
                          <th className='text-gray-400 text-left font-sans font-semibold tracking-wider text-xs uppercase border-gray-700 last:border-e-none bg-gray-800 border-r px-4 py-5'>
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody className='divide-gray-700 bg-gray-800 divide-y'>
                        {/**/}
                        {proposalRequests &&
                          proposalRequests.map(proposalRequest => (
                            <tr className='hover:bg-gray-900 transition-colors duration-300'>
                              <td className='font-alt whitespace-nowrap text-sm text-white p-4'>
                                <a href='' className='underline'>
                                  {proposalRequest.serviceId}
                                </a>
                              </td>
                              <td className='font-alt whitespace-nowrap text-sm text-white p-4'>
                                <div className='flex items-center'>
                                  <div className='relative inline-flex shrink-0 items-center justify-center outline-none h-10 w-10 rounded-full bg-indigo-500/20 text-indigo-500 mr-[6px]'>
                                    <div className='flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full '>
                                      <img
                                        src={`/images/default-avatar-3.jpeg`}
                                        className='max-h-full max-w-full object-cover shadow-sm border-transparent h-10 w-10'
                                      />
                                      {/**/}
                                      {/**/}
                                    </div>
                                    {/**/}
                                    {/**/}
                                  </div>
                                  <div className='ms-3 leading-none'>
                                    <h4 className='font-sans text-sm font-medium'>Miranda L.</h4>
                                    <p className='text-gray-400 font-sans text-xs'>
                                      Software Engineer
                                    </p>
                                  </div>
                                </div>
                              </td>

                              <td className='font-alt whitespace-nowrap text-sm text-white p-4 capitalize'>
                                <span className='inline-block px-3 font-sans transition-shadow duration-300 py-1 text-[0.65rem] rounded-full bg-info-100 text-info-500 border-info-500 border bg-transparent font-medium'>
                                  {proposalRequest.status}
                                </span>
                              </td>
                              <td className='font-alt whitespace-nowrap text-sm text-white p-4'>
                                {proposalRequest.ownerId != user?.id && (
                                  <button
                                    onClick={() => voteAndExecute(proposalRequest.id)}
                                    type='button'
                                    className='relative font-sans font-normal text-sm inline-flex items-center justify-center leading-5 no-underline h-8 px-3 py-2 space-x-1 border nui-focus transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed hover:enabled:shadow-none text-white bg-gray-700 border-gray-600 hover:enabled:bg-gray-600  active:enabled:bg-gray-700/70 rounded-md'>
                                    Vote and execute
                                  </button>
                                )}
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p className='text-gray-400'>No proposal requests yet</p>
      )}
    </div>
  );
}

export default ProposalRequests;
