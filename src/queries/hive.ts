import { processBTRequest } from '../utils/graphql';

export const getHiveByMemberId = (id: string): Promise<any> => {
  const query = `
    {
      hives(where: {members_contains: ["${id}"] }) {
        id,
        cid, 
        members,
        honeyFee,
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
  return processBTRequest(query);
};

export const getHiveByAddress = (address: string): Promise<any> => {
  const query = `
    {
      hives(where: {address: "${address}" }) {
        id,
        cid, 
        members,
        honeyFee,
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
  return processBTRequest(query);
};

export const getHiveById = (id: string): Promise<any> => {
  const query = `
    {
      hives(where: {id: "${id}" }) {
        id,
        cid, 
        members,
        honeyFee,
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
  return processBTRequest(query);
};
