// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace BeetogetherTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
  Int8: any;
};

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type Hive = {
  id: Scalars['ID'];
  address: Scalars['Bytes'];
  owner: Scalars['BigInt'];
  honeyFee: Scalars['Int'];
  members: Array<Scalars['BigInt']>;
  cid?: Maybe<Scalars['String']>;
  description?: Maybe<HiveDescription>;
  proposalRequests?: Maybe<Array<ProposalRequest>>;
};


export type HiveproposalRequestsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProposalRequest_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ProposalRequest_filter>;
};

export type HiveDescription = {
  id: Scalars['ID'];
  offeredServices?: Maybe<Scalars['String']>;
  manifesto?: Maybe<Scalars['String']>;
};

export type HiveDescription_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  offeredServices?: InputMaybe<Scalars['String']>;
  offeredServices_not?: InputMaybe<Scalars['String']>;
  offeredServices_gt?: InputMaybe<Scalars['String']>;
  offeredServices_lt?: InputMaybe<Scalars['String']>;
  offeredServices_gte?: InputMaybe<Scalars['String']>;
  offeredServices_lte?: InputMaybe<Scalars['String']>;
  offeredServices_in?: InputMaybe<Array<Scalars['String']>>;
  offeredServices_not_in?: InputMaybe<Array<Scalars['String']>>;
  offeredServices_contains?: InputMaybe<Scalars['String']>;
  offeredServices_contains_nocase?: InputMaybe<Scalars['String']>;
  offeredServices_not_contains?: InputMaybe<Scalars['String']>;
  offeredServices_not_contains_nocase?: InputMaybe<Scalars['String']>;
  offeredServices_starts_with?: InputMaybe<Scalars['String']>;
  offeredServices_starts_with_nocase?: InputMaybe<Scalars['String']>;
  offeredServices_not_starts_with?: InputMaybe<Scalars['String']>;
  offeredServices_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  offeredServices_ends_with?: InputMaybe<Scalars['String']>;
  offeredServices_ends_with_nocase?: InputMaybe<Scalars['String']>;
  offeredServices_not_ends_with?: InputMaybe<Scalars['String']>;
  offeredServices_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  manifesto?: InputMaybe<Scalars['String']>;
  manifesto_not?: InputMaybe<Scalars['String']>;
  manifesto_gt?: InputMaybe<Scalars['String']>;
  manifesto_lt?: InputMaybe<Scalars['String']>;
  manifesto_gte?: InputMaybe<Scalars['String']>;
  manifesto_lte?: InputMaybe<Scalars['String']>;
  manifesto_in?: InputMaybe<Array<Scalars['String']>>;
  manifesto_not_in?: InputMaybe<Array<Scalars['String']>>;
  manifesto_contains?: InputMaybe<Scalars['String']>;
  manifesto_contains_nocase?: InputMaybe<Scalars['String']>;
  manifesto_not_contains?: InputMaybe<Scalars['String']>;
  manifesto_not_contains_nocase?: InputMaybe<Scalars['String']>;
  manifesto_starts_with?: InputMaybe<Scalars['String']>;
  manifesto_starts_with_nocase?: InputMaybe<Scalars['String']>;
  manifesto_not_starts_with?: InputMaybe<Scalars['String']>;
  manifesto_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  manifesto_ends_with?: InputMaybe<Scalars['String']>;
  manifesto_ends_with_nocase?: InputMaybe<Scalars['String']>;
  manifesto_not_ends_with?: InputMaybe<Scalars['String']>;
  manifesto_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<HiveDescription_filter>>>;
  or?: InputMaybe<Array<InputMaybe<HiveDescription_filter>>>;
};

export type HiveDescription_orderBy =
  | 'id'
  | 'offeredServices'
  | 'manifesto';

export type Hive_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  address?: InputMaybe<Scalars['Bytes']>;
  address_not?: InputMaybe<Scalars['Bytes']>;
  address_gt?: InputMaybe<Scalars['Bytes']>;
  address_lt?: InputMaybe<Scalars['Bytes']>;
  address_gte?: InputMaybe<Scalars['Bytes']>;
  address_lte?: InputMaybe<Scalars['Bytes']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']>>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  address_contains?: InputMaybe<Scalars['Bytes']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']>;
  owner?: InputMaybe<Scalars['BigInt']>;
  owner_not?: InputMaybe<Scalars['BigInt']>;
  owner_gt?: InputMaybe<Scalars['BigInt']>;
  owner_lt?: InputMaybe<Scalars['BigInt']>;
  owner_gte?: InputMaybe<Scalars['BigInt']>;
  owner_lte?: InputMaybe<Scalars['BigInt']>;
  owner_in?: InputMaybe<Array<Scalars['BigInt']>>;
  owner_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  honeyFee?: InputMaybe<Scalars['Int']>;
  honeyFee_not?: InputMaybe<Scalars['Int']>;
  honeyFee_gt?: InputMaybe<Scalars['Int']>;
  honeyFee_lt?: InputMaybe<Scalars['Int']>;
  honeyFee_gte?: InputMaybe<Scalars['Int']>;
  honeyFee_lte?: InputMaybe<Scalars['Int']>;
  honeyFee_in?: InputMaybe<Array<Scalars['Int']>>;
  honeyFee_not_in?: InputMaybe<Array<Scalars['Int']>>;
  members?: InputMaybe<Array<Scalars['BigInt']>>;
  members_not?: InputMaybe<Array<Scalars['BigInt']>>;
  members_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  members_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  members_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  members_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  cid?: InputMaybe<Scalars['String']>;
  cid_not?: InputMaybe<Scalars['String']>;
  cid_gt?: InputMaybe<Scalars['String']>;
  cid_lt?: InputMaybe<Scalars['String']>;
  cid_gte?: InputMaybe<Scalars['String']>;
  cid_lte?: InputMaybe<Scalars['String']>;
  cid_in?: InputMaybe<Array<Scalars['String']>>;
  cid_not_in?: InputMaybe<Array<Scalars['String']>>;
  cid_contains?: InputMaybe<Scalars['String']>;
  cid_contains_nocase?: InputMaybe<Scalars['String']>;
  cid_not_contains?: InputMaybe<Scalars['String']>;
  cid_not_contains_nocase?: InputMaybe<Scalars['String']>;
  cid_starts_with?: InputMaybe<Scalars['String']>;
  cid_starts_with_nocase?: InputMaybe<Scalars['String']>;
  cid_not_starts_with?: InputMaybe<Scalars['String']>;
  cid_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  cid_ends_with?: InputMaybe<Scalars['String']>;
  cid_ends_with_nocase?: InputMaybe<Scalars['String']>;
  cid_not_ends_with?: InputMaybe<Scalars['String']>;
  cid_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  description_not?: InputMaybe<Scalars['String']>;
  description_gt?: InputMaybe<Scalars['String']>;
  description_lt?: InputMaybe<Scalars['String']>;
  description_gte?: InputMaybe<Scalars['String']>;
  description_lte?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<Scalars['String']>>;
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_contains_nocase?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']>;
  description_starts_with?: InputMaybe<Scalars['String']>;
  description_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  description_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description_ends_with?: InputMaybe<Scalars['String']>;
  description_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  description_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description_?: InputMaybe<HiveDescription_filter>;
  proposalRequests_?: InputMaybe<ProposalRequest_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Hive_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Hive_filter>>>;
};

export type Hive_orderBy =
  | 'id'
  | 'address'
  | 'owner'
  | 'honeyFee'
  | 'members'
  | 'cid'
  | 'description'
  | 'description__id'
  | 'description__offeredServices'
  | 'description__manifesto'
  | 'proposalRequests';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type ProposalRequest = {
  id: Scalars['ID'];
  createdAt: Scalars['BigInt'];
  updatedAt: Scalars['BigInt'];
  ownerId: Scalars['BigInt'];
  sharedAmount: Scalars['BigInt'];
  status: ProposalRequestStatus;
  members: Array<Scalars['BigInt']>;
  shares: Array<Scalars['Int']>;
  serviceId: Scalars['BigInt'];
  rateToken?: Maybe<Scalars['String']>;
  rateAmount?: Maybe<Scalars['BigInt']>;
  cid?: Maybe<Scalars['String']>;
  platformId?: Maybe<Scalars['BigInt']>;
  description?: Maybe<ProposalRequestDescription>;
  expirationDate?: Maybe<Scalars['BigInt']>;
  hive: Hive;
};

export type ProposalRequestDescription = {
  id: Scalars['ID'];
  proposal: ProposalRequest;
  startDate?: Maybe<Scalars['BigInt']>;
  about?: Maybe<Scalars['String']>;
  expectedHours?: Maybe<Scalars['BigInt']>;
  video_url?: Maybe<Scalars['String']>;
};

export type ProposalRequestDescription_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  proposal?: InputMaybe<Scalars['String']>;
  proposal_not?: InputMaybe<Scalars['String']>;
  proposal_gt?: InputMaybe<Scalars['String']>;
  proposal_lt?: InputMaybe<Scalars['String']>;
  proposal_gte?: InputMaybe<Scalars['String']>;
  proposal_lte?: InputMaybe<Scalars['String']>;
  proposal_in?: InputMaybe<Array<Scalars['String']>>;
  proposal_not_in?: InputMaybe<Array<Scalars['String']>>;
  proposal_contains?: InputMaybe<Scalars['String']>;
  proposal_contains_nocase?: InputMaybe<Scalars['String']>;
  proposal_not_contains?: InputMaybe<Scalars['String']>;
  proposal_not_contains_nocase?: InputMaybe<Scalars['String']>;
  proposal_starts_with?: InputMaybe<Scalars['String']>;
  proposal_starts_with_nocase?: InputMaybe<Scalars['String']>;
  proposal_not_starts_with?: InputMaybe<Scalars['String']>;
  proposal_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  proposal_ends_with?: InputMaybe<Scalars['String']>;
  proposal_ends_with_nocase?: InputMaybe<Scalars['String']>;
  proposal_not_ends_with?: InputMaybe<Scalars['String']>;
  proposal_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  proposal_?: InputMaybe<ProposalRequest_filter>;
  startDate?: InputMaybe<Scalars['BigInt']>;
  startDate_not?: InputMaybe<Scalars['BigInt']>;
  startDate_gt?: InputMaybe<Scalars['BigInt']>;
  startDate_lt?: InputMaybe<Scalars['BigInt']>;
  startDate_gte?: InputMaybe<Scalars['BigInt']>;
  startDate_lte?: InputMaybe<Scalars['BigInt']>;
  startDate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startDate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  about?: InputMaybe<Scalars['String']>;
  about_not?: InputMaybe<Scalars['String']>;
  about_gt?: InputMaybe<Scalars['String']>;
  about_lt?: InputMaybe<Scalars['String']>;
  about_gte?: InputMaybe<Scalars['String']>;
  about_lte?: InputMaybe<Scalars['String']>;
  about_in?: InputMaybe<Array<Scalars['String']>>;
  about_not_in?: InputMaybe<Array<Scalars['String']>>;
  about_contains?: InputMaybe<Scalars['String']>;
  about_contains_nocase?: InputMaybe<Scalars['String']>;
  about_not_contains?: InputMaybe<Scalars['String']>;
  about_not_contains_nocase?: InputMaybe<Scalars['String']>;
  about_starts_with?: InputMaybe<Scalars['String']>;
  about_starts_with_nocase?: InputMaybe<Scalars['String']>;
  about_not_starts_with?: InputMaybe<Scalars['String']>;
  about_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  about_ends_with?: InputMaybe<Scalars['String']>;
  about_ends_with_nocase?: InputMaybe<Scalars['String']>;
  about_not_ends_with?: InputMaybe<Scalars['String']>;
  about_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  expectedHours?: InputMaybe<Scalars['BigInt']>;
  expectedHours_not?: InputMaybe<Scalars['BigInt']>;
  expectedHours_gt?: InputMaybe<Scalars['BigInt']>;
  expectedHours_lt?: InputMaybe<Scalars['BigInt']>;
  expectedHours_gte?: InputMaybe<Scalars['BigInt']>;
  expectedHours_lte?: InputMaybe<Scalars['BigInt']>;
  expectedHours_in?: InputMaybe<Array<Scalars['BigInt']>>;
  expectedHours_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  video_url?: InputMaybe<Scalars['String']>;
  video_url_not?: InputMaybe<Scalars['String']>;
  video_url_gt?: InputMaybe<Scalars['String']>;
  video_url_lt?: InputMaybe<Scalars['String']>;
  video_url_gte?: InputMaybe<Scalars['String']>;
  video_url_lte?: InputMaybe<Scalars['String']>;
  video_url_in?: InputMaybe<Array<Scalars['String']>>;
  video_url_not_in?: InputMaybe<Array<Scalars['String']>>;
  video_url_contains?: InputMaybe<Scalars['String']>;
  video_url_contains_nocase?: InputMaybe<Scalars['String']>;
  video_url_not_contains?: InputMaybe<Scalars['String']>;
  video_url_not_contains_nocase?: InputMaybe<Scalars['String']>;
  video_url_starts_with?: InputMaybe<Scalars['String']>;
  video_url_starts_with_nocase?: InputMaybe<Scalars['String']>;
  video_url_not_starts_with?: InputMaybe<Scalars['String']>;
  video_url_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  video_url_ends_with?: InputMaybe<Scalars['String']>;
  video_url_ends_with_nocase?: InputMaybe<Scalars['String']>;
  video_url_not_ends_with?: InputMaybe<Scalars['String']>;
  video_url_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ProposalRequestDescription_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ProposalRequestDescription_filter>>>;
};

export type ProposalRequestDescription_orderBy =
  | 'id'
  | 'proposal'
  | 'proposal__id'
  | 'proposal__createdAt'
  | 'proposal__updatedAt'
  | 'proposal__ownerId'
  | 'proposal__sharedAmount'
  | 'proposal__status'
  | 'proposal__serviceId'
  | 'proposal__rateToken'
  | 'proposal__rateAmount'
  | 'proposal__cid'
  | 'proposal__platformId'
  | 'proposal__expirationDate'
  | 'startDate'
  | 'about'
  | 'expectedHours'
  | 'video_url';

export type ProposalRequestStatus =
  | 'Pending'
  | 'Executed';

export type ProposalRequest_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_not?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  ownerId?: InputMaybe<Scalars['BigInt']>;
  ownerId_not?: InputMaybe<Scalars['BigInt']>;
  ownerId_gt?: InputMaybe<Scalars['BigInt']>;
  ownerId_lt?: InputMaybe<Scalars['BigInt']>;
  ownerId_gte?: InputMaybe<Scalars['BigInt']>;
  ownerId_lte?: InputMaybe<Scalars['BigInt']>;
  ownerId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  ownerId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sharedAmount?: InputMaybe<Scalars['BigInt']>;
  sharedAmount_not?: InputMaybe<Scalars['BigInt']>;
  sharedAmount_gt?: InputMaybe<Scalars['BigInt']>;
  sharedAmount_lt?: InputMaybe<Scalars['BigInt']>;
  sharedAmount_gte?: InputMaybe<Scalars['BigInt']>;
  sharedAmount_lte?: InputMaybe<Scalars['BigInt']>;
  sharedAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sharedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  status?: InputMaybe<ProposalRequestStatus>;
  status_not?: InputMaybe<ProposalRequestStatus>;
  status_in?: InputMaybe<Array<ProposalRequestStatus>>;
  status_not_in?: InputMaybe<Array<ProposalRequestStatus>>;
  members?: InputMaybe<Array<Scalars['BigInt']>>;
  members_not?: InputMaybe<Array<Scalars['BigInt']>>;
  members_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  members_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  members_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  members_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  shares?: InputMaybe<Array<Scalars['Int']>>;
  shares_not?: InputMaybe<Array<Scalars['Int']>>;
  shares_contains?: InputMaybe<Array<Scalars['Int']>>;
  shares_contains_nocase?: InputMaybe<Array<Scalars['Int']>>;
  shares_not_contains?: InputMaybe<Array<Scalars['Int']>>;
  shares_not_contains_nocase?: InputMaybe<Array<Scalars['Int']>>;
  serviceId?: InputMaybe<Scalars['BigInt']>;
  serviceId_not?: InputMaybe<Scalars['BigInt']>;
  serviceId_gt?: InputMaybe<Scalars['BigInt']>;
  serviceId_lt?: InputMaybe<Scalars['BigInt']>;
  serviceId_gte?: InputMaybe<Scalars['BigInt']>;
  serviceId_lte?: InputMaybe<Scalars['BigInt']>;
  serviceId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  serviceId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rateToken?: InputMaybe<Scalars['String']>;
  rateToken_not?: InputMaybe<Scalars['String']>;
  rateToken_gt?: InputMaybe<Scalars['String']>;
  rateToken_lt?: InputMaybe<Scalars['String']>;
  rateToken_gte?: InputMaybe<Scalars['String']>;
  rateToken_lte?: InputMaybe<Scalars['String']>;
  rateToken_in?: InputMaybe<Array<Scalars['String']>>;
  rateToken_not_in?: InputMaybe<Array<Scalars['String']>>;
  rateToken_contains?: InputMaybe<Scalars['String']>;
  rateToken_contains_nocase?: InputMaybe<Scalars['String']>;
  rateToken_not_contains?: InputMaybe<Scalars['String']>;
  rateToken_not_contains_nocase?: InputMaybe<Scalars['String']>;
  rateToken_starts_with?: InputMaybe<Scalars['String']>;
  rateToken_starts_with_nocase?: InputMaybe<Scalars['String']>;
  rateToken_not_starts_with?: InputMaybe<Scalars['String']>;
  rateToken_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  rateToken_ends_with?: InputMaybe<Scalars['String']>;
  rateToken_ends_with_nocase?: InputMaybe<Scalars['String']>;
  rateToken_not_ends_with?: InputMaybe<Scalars['String']>;
  rateToken_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  rateAmount?: InputMaybe<Scalars['BigInt']>;
  rateAmount_not?: InputMaybe<Scalars['BigInt']>;
  rateAmount_gt?: InputMaybe<Scalars['BigInt']>;
  rateAmount_lt?: InputMaybe<Scalars['BigInt']>;
  rateAmount_gte?: InputMaybe<Scalars['BigInt']>;
  rateAmount_lte?: InputMaybe<Scalars['BigInt']>;
  rateAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rateAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cid?: InputMaybe<Scalars['String']>;
  cid_not?: InputMaybe<Scalars['String']>;
  cid_gt?: InputMaybe<Scalars['String']>;
  cid_lt?: InputMaybe<Scalars['String']>;
  cid_gte?: InputMaybe<Scalars['String']>;
  cid_lte?: InputMaybe<Scalars['String']>;
  cid_in?: InputMaybe<Array<Scalars['String']>>;
  cid_not_in?: InputMaybe<Array<Scalars['String']>>;
  cid_contains?: InputMaybe<Scalars['String']>;
  cid_contains_nocase?: InputMaybe<Scalars['String']>;
  cid_not_contains?: InputMaybe<Scalars['String']>;
  cid_not_contains_nocase?: InputMaybe<Scalars['String']>;
  cid_starts_with?: InputMaybe<Scalars['String']>;
  cid_starts_with_nocase?: InputMaybe<Scalars['String']>;
  cid_not_starts_with?: InputMaybe<Scalars['String']>;
  cid_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  cid_ends_with?: InputMaybe<Scalars['String']>;
  cid_ends_with_nocase?: InputMaybe<Scalars['String']>;
  cid_not_ends_with?: InputMaybe<Scalars['String']>;
  cid_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  platformId?: InputMaybe<Scalars['BigInt']>;
  platformId_not?: InputMaybe<Scalars['BigInt']>;
  platformId_gt?: InputMaybe<Scalars['BigInt']>;
  platformId_lt?: InputMaybe<Scalars['BigInt']>;
  platformId_gte?: InputMaybe<Scalars['BigInt']>;
  platformId_lte?: InputMaybe<Scalars['BigInt']>;
  platformId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  platformId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  description?: InputMaybe<Scalars['String']>;
  description_not?: InputMaybe<Scalars['String']>;
  description_gt?: InputMaybe<Scalars['String']>;
  description_lt?: InputMaybe<Scalars['String']>;
  description_gte?: InputMaybe<Scalars['String']>;
  description_lte?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<Scalars['String']>>;
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_contains_nocase?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']>;
  description_starts_with?: InputMaybe<Scalars['String']>;
  description_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  description_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description_ends_with?: InputMaybe<Scalars['String']>;
  description_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  description_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description_?: InputMaybe<ProposalRequestDescription_filter>;
  expirationDate?: InputMaybe<Scalars['BigInt']>;
  expirationDate_not?: InputMaybe<Scalars['BigInt']>;
  expirationDate_gt?: InputMaybe<Scalars['BigInt']>;
  expirationDate_lt?: InputMaybe<Scalars['BigInt']>;
  expirationDate_gte?: InputMaybe<Scalars['BigInt']>;
  expirationDate_lte?: InputMaybe<Scalars['BigInt']>;
  expirationDate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  expirationDate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  hive?: InputMaybe<Scalars['String']>;
  hive_not?: InputMaybe<Scalars['String']>;
  hive_gt?: InputMaybe<Scalars['String']>;
  hive_lt?: InputMaybe<Scalars['String']>;
  hive_gte?: InputMaybe<Scalars['String']>;
  hive_lte?: InputMaybe<Scalars['String']>;
  hive_in?: InputMaybe<Array<Scalars['String']>>;
  hive_not_in?: InputMaybe<Array<Scalars['String']>>;
  hive_contains?: InputMaybe<Scalars['String']>;
  hive_contains_nocase?: InputMaybe<Scalars['String']>;
  hive_not_contains?: InputMaybe<Scalars['String']>;
  hive_not_contains_nocase?: InputMaybe<Scalars['String']>;
  hive_starts_with?: InputMaybe<Scalars['String']>;
  hive_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hive_not_starts_with?: InputMaybe<Scalars['String']>;
  hive_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hive_ends_with?: InputMaybe<Scalars['String']>;
  hive_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hive_not_ends_with?: InputMaybe<Scalars['String']>;
  hive_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hive_?: InputMaybe<Hive_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ProposalRequest_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ProposalRequest_filter>>>;
};

export type ProposalRequest_orderBy =
  | 'id'
  | 'createdAt'
  | 'updatedAt'
  | 'ownerId'
  | 'sharedAmount'
  | 'status'
  | 'members'
  | 'shares'
  | 'serviceId'
  | 'rateToken'
  | 'rateAmount'
  | 'cid'
  | 'platformId'
  | 'description'
  | 'description__id'
  | 'description__startDate'
  | 'description__about'
  | 'description__expectedHours'
  | 'description__video_url'
  | 'expirationDate'
  | 'hive'
  | 'hive__id'
  | 'hive__address'
  | 'hive__owner'
  | 'hive__honeyFee'
  | 'hive__cid';

export type Query = {
  hive?: Maybe<Hive>;
  hives: Array<Hive>;
  hiveDescription?: Maybe<HiveDescription>;
  hiveDescriptions: Array<HiveDescription>;
  proposalRequest?: Maybe<ProposalRequest>;
  proposalRequests: Array<ProposalRequest>;
  proposalRequestDescription?: Maybe<ProposalRequestDescription>;
  proposalRequestDescriptions: Array<ProposalRequestDescription>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QueryhiveArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryhivesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Hive_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Hive_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryhiveDescriptionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryhiveDescriptionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<HiveDescription_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<HiveDescription_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryproposalRequestArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryproposalRequestsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProposalRequest_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ProposalRequest_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryproposalRequestDescriptionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryproposalRequestDescriptionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProposalRequestDescription_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ProposalRequestDescription_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Subscription = {
  hive?: Maybe<Hive>;
  hives: Array<Hive>;
  hiveDescription?: Maybe<HiveDescription>;
  hiveDescriptions: Array<HiveDescription>;
  proposalRequest?: Maybe<ProposalRequest>;
  proposalRequests: Array<ProposalRequest>;
  proposalRequestDescription?: Maybe<ProposalRequestDescription>;
  proposalRequestDescriptions: Array<ProposalRequestDescription>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptionhiveArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionhivesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Hive_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Hive_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionhiveDescriptionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionhiveDescriptionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<HiveDescription_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<HiveDescription_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionproposalRequestArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionproposalRequestsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProposalRequest_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ProposalRequest_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionproposalRequestDescriptionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionproposalRequestDescriptionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProposalRequestDescription_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ProposalRequestDescription_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

  export type QuerySdk = {
      /** null **/
  hive: InContextSdkMethod<Query['hive'], QueryhiveArgs, MeshContext>,
  /** null **/
  hives: InContextSdkMethod<Query['hives'], QueryhivesArgs, MeshContext>,
  /** null **/
  hiveDescription: InContextSdkMethod<Query['hiveDescription'], QueryhiveDescriptionArgs, MeshContext>,
  /** null **/
  hiveDescriptions: InContextSdkMethod<Query['hiveDescriptions'], QueryhiveDescriptionsArgs, MeshContext>,
  /** null **/
  proposalRequest: InContextSdkMethod<Query['proposalRequest'], QueryproposalRequestArgs, MeshContext>,
  /** null **/
  proposalRequests: InContextSdkMethod<Query['proposalRequests'], QueryproposalRequestsArgs, MeshContext>,
  /** null **/
  proposalRequestDescription: InContextSdkMethod<Query['proposalRequestDescription'], QueryproposalRequestDescriptionArgs, MeshContext>,
  /** null **/
  proposalRequestDescriptions: InContextSdkMethod<Query['proposalRequestDescriptions'], QueryproposalRequestDescriptionsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Query['_meta'], Query_metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  hive: InContextSdkMethod<Subscription['hive'], SubscriptionhiveArgs, MeshContext>,
  /** null **/
  hives: InContextSdkMethod<Subscription['hives'], SubscriptionhivesArgs, MeshContext>,
  /** null **/
  hiveDescription: InContextSdkMethod<Subscription['hiveDescription'], SubscriptionhiveDescriptionArgs, MeshContext>,
  /** null **/
  hiveDescriptions: InContextSdkMethod<Subscription['hiveDescriptions'], SubscriptionhiveDescriptionsArgs, MeshContext>,
  /** null **/
  proposalRequest: InContextSdkMethod<Subscription['proposalRequest'], SubscriptionproposalRequestArgs, MeshContext>,
  /** null **/
  proposalRequests: InContextSdkMethod<Subscription['proposalRequests'], SubscriptionproposalRequestsArgs, MeshContext>,
  /** null **/
  proposalRequestDescription: InContextSdkMethod<Subscription['proposalRequestDescription'], SubscriptionproposalRequestDescriptionArgs, MeshContext>,
  /** null **/
  proposalRequestDescriptions: InContextSdkMethod<Subscription['proposalRequestDescriptions'], SubscriptionproposalRequestDescriptionsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Subscription['_meta'], Subscription_metaArgs, MeshContext>
  };

  export type Context = {
      ["beetogether"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
