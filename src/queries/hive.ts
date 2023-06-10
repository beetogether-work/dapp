import { processBTRequest } from '../utils/graphql';

export const getHiveByMemberId = (chainId: number, id: string): Promise<any> => {
  const query = `
    {
      hives(where: {members_contains: ["${id}"] }) {
        id,
        cid, 
        members,
        owner,
        description{
          id
          manifesto
          offeredServices
        }
        address
      }
    }
    `;
  return processBTRequest(chainId, query);
};

export const getHiveByAddress = (chainId: number, address: string): Promise<any> => {
  const query = `
    {
      hives(where: {address: "${address}" }) {
        id,
        cid, 
        members,
        owner,
        description{
          id
          manifesto
          offeredServices
        }
        address
      }
    }
    `;
  return processBTRequest(chainId, query);
};

export const getHiveById = (chainId: number, id: string): Promise<any> => {
  const query = `
    {
      hives(where: {id: "${id}" }) {
        id,
        cid, 
        members,
        owner,
        description{
          id
          manifesto
          offeredServices
        }
        address
      }
    }
    `;
  return processBTRequest(chainId, query);
};
