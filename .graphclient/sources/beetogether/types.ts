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

export type Evidence = {
  id: Scalars['ID'];
  transaction: Transaction;
  createdAt: Scalars['BigInt'];
  party: User;
  uri: Scalars['String'];
};

export type Evidence_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transaction?: InputMaybe<Scalars['String']>;
  transaction_not?: InputMaybe<Scalars['String']>;
  transaction_gt?: InputMaybe<Scalars['String']>;
  transaction_lt?: InputMaybe<Scalars['String']>;
  transaction_gte?: InputMaybe<Scalars['String']>;
  transaction_lte?: InputMaybe<Scalars['String']>;
  transaction_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_contains?: InputMaybe<Scalars['String']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_contains?: InputMaybe<Scalars['String']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_starts_with?: InputMaybe<Scalars['String']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_ends_with?: InputMaybe<Scalars['String']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_?: InputMaybe<Transaction_filter>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  party?: InputMaybe<Scalars['String']>;
  party_not?: InputMaybe<Scalars['String']>;
  party_gt?: InputMaybe<Scalars['String']>;
  party_lt?: InputMaybe<Scalars['String']>;
  party_gte?: InputMaybe<Scalars['String']>;
  party_lte?: InputMaybe<Scalars['String']>;
  party_in?: InputMaybe<Array<Scalars['String']>>;
  party_not_in?: InputMaybe<Array<Scalars['String']>>;
  party_contains?: InputMaybe<Scalars['String']>;
  party_contains_nocase?: InputMaybe<Scalars['String']>;
  party_not_contains?: InputMaybe<Scalars['String']>;
  party_not_contains_nocase?: InputMaybe<Scalars['String']>;
  party_starts_with?: InputMaybe<Scalars['String']>;
  party_starts_with_nocase?: InputMaybe<Scalars['String']>;
  party_not_starts_with?: InputMaybe<Scalars['String']>;
  party_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  party_ends_with?: InputMaybe<Scalars['String']>;
  party_ends_with_nocase?: InputMaybe<Scalars['String']>;
  party_not_ends_with?: InputMaybe<Scalars['String']>;
  party_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  party_?: InputMaybe<User_filter>;
  uri?: InputMaybe<Scalars['String']>;
  uri_not?: InputMaybe<Scalars['String']>;
  uri_gt?: InputMaybe<Scalars['String']>;
  uri_lt?: InputMaybe<Scalars['String']>;
  uri_gte?: InputMaybe<Scalars['String']>;
  uri_lte?: InputMaybe<Scalars['String']>;
  uri_in?: InputMaybe<Array<Scalars['String']>>;
  uri_not_in?: InputMaybe<Array<Scalars['String']>>;
  uri_contains?: InputMaybe<Scalars['String']>;
  uri_contains_nocase?: InputMaybe<Scalars['String']>;
  uri_not_contains?: InputMaybe<Scalars['String']>;
  uri_not_contains_nocase?: InputMaybe<Scalars['String']>;
  uri_starts_with?: InputMaybe<Scalars['String']>;
  uri_starts_with_nocase?: InputMaybe<Scalars['String']>;
  uri_not_starts_with?: InputMaybe<Scalars['String']>;
  uri_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  uri_ends_with?: InputMaybe<Scalars['String']>;
  uri_ends_with_nocase?: InputMaybe<Scalars['String']>;
  uri_not_ends_with?: InputMaybe<Scalars['String']>;
  uri_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Evidence_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Evidence_filter>>>;
};

export type Evidence_orderBy =
  | 'id'
  | 'transaction'
  | 'transaction__id'
  | 'transaction__amount'
  | 'transaction__protocolEscrowFeeRate'
  | 'transaction__originServiceFeeRate'
  | 'transaction__originValidatedProposalFeeRate'
  | 'transaction__disputeId'
  | 'transaction__senderFee'
  | 'transaction__receiverFee'
  | 'transaction__lastInteraction'
  | 'transaction__status'
  | 'transaction__arbitrator'
  | 'transaction__arbitratorExtraData'
  | 'transaction__arbitrationFeeTimeout'
  | 'transaction__ruling'
  | 'transaction__metaEvidenceUri'
  | 'createdAt'
  | 'party'
  | 'party__id'
  | 'party__index'
  | 'party__handle'
  | 'party__createdAt'
  | 'party__updatedAt'
  | 'party__numReviews'
  | 'party__address'
  | 'party__rating'
  | 'party__cid'
  | 'uri';

export type FeeClaim = {
  id: Scalars['ID'];
  createdAt?: Maybe<Scalars['BigInt']>;
  platform?: Maybe<Platform>;
  token?: Maybe<Token>;
  amount: Scalars['BigInt'];
  transactionHash?: Maybe<Scalars['String']>;
};

export type FeeClaim_filter = {
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
  platform?: InputMaybe<Scalars['String']>;
  platform_not?: InputMaybe<Scalars['String']>;
  platform_gt?: InputMaybe<Scalars['String']>;
  platform_lt?: InputMaybe<Scalars['String']>;
  platform_gte?: InputMaybe<Scalars['String']>;
  platform_lte?: InputMaybe<Scalars['String']>;
  platform_in?: InputMaybe<Array<Scalars['String']>>;
  platform_not_in?: InputMaybe<Array<Scalars['String']>>;
  platform_contains?: InputMaybe<Scalars['String']>;
  platform_contains_nocase?: InputMaybe<Scalars['String']>;
  platform_not_contains?: InputMaybe<Scalars['String']>;
  platform_not_contains_nocase?: InputMaybe<Scalars['String']>;
  platform_starts_with?: InputMaybe<Scalars['String']>;
  platform_starts_with_nocase?: InputMaybe<Scalars['String']>;
  platform_not_starts_with?: InputMaybe<Scalars['String']>;
  platform_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  platform_ends_with?: InputMaybe<Scalars['String']>;
  platform_ends_with_nocase?: InputMaybe<Scalars['String']>;
  platform_not_ends_with?: InputMaybe<Scalars['String']>;
  platform_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  platform_?: InputMaybe<Platform_filter>;
  token?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<Token_filter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['String']>;
  transactionHash_not?: InputMaybe<Scalars['String']>;
  transactionHash_gt?: InputMaybe<Scalars['String']>;
  transactionHash_lt?: InputMaybe<Scalars['String']>;
  transactionHash_gte?: InputMaybe<Scalars['String']>;
  transactionHash_lte?: InputMaybe<Scalars['String']>;
  transactionHash_in?: InputMaybe<Array<Scalars['String']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  transactionHash_contains?: InputMaybe<Scalars['String']>;
  transactionHash_contains_nocase?: InputMaybe<Scalars['String']>;
  transactionHash_not_contains?: InputMaybe<Scalars['String']>;
  transactionHash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transactionHash_starts_with?: InputMaybe<Scalars['String']>;
  transactionHash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transactionHash_not_starts_with?: InputMaybe<Scalars['String']>;
  transactionHash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transactionHash_ends_with?: InputMaybe<Scalars['String']>;
  transactionHash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transactionHash_not_ends_with?: InputMaybe<Scalars['String']>;
  transactionHash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<FeeClaim_filter>>>;
  or?: InputMaybe<Array<InputMaybe<FeeClaim_filter>>>;
};

export type FeeClaim_orderBy =
  | 'id'
  | 'createdAt'
  | 'platform'
  | 'platform__id'
  | 'platform__address'
  | 'platform__name'
  | 'platform__createdAt'
  | 'platform__updatedAt'
  | 'platform__originServiceFeeRate'
  | 'platform__originValidatedProposalFeeRate'
  | 'platform__servicePostingFee'
  | 'platform__proposalPostingFee'
  | 'platform__arbitrator'
  | 'platform__arbitratorExtraData'
  | 'platform__arbitrationFeeTimeout'
  | 'platform__cid'
  | 'platform__signer'
  | 'token'
  | 'token__id'
  | 'token__address'
  | 'token__symbol'
  | 'token__name'
  | 'token__decimals'
  | 'token__allowed'
  | 'token__minimumTransactionAmount'
  | 'amount'
  | 'transactionHash';

export type FeePayment = {
  id: Scalars['ID'];
  createdAt?: Maybe<Scalars['BigInt']>;
  platform?: Maybe<Platform>;
  service?: Maybe<Service>;
  type: FeeType;
  token?: Maybe<Token>;
  amount?: Maybe<Scalars['BigInt']>;
};

export type FeePayment_filter = {
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
  platform?: InputMaybe<Scalars['String']>;
  platform_not?: InputMaybe<Scalars['String']>;
  platform_gt?: InputMaybe<Scalars['String']>;
  platform_lt?: InputMaybe<Scalars['String']>;
  platform_gte?: InputMaybe<Scalars['String']>;
  platform_lte?: InputMaybe<Scalars['String']>;
  platform_in?: InputMaybe<Array<Scalars['String']>>;
  platform_not_in?: InputMaybe<Array<Scalars['String']>>;
  platform_contains?: InputMaybe<Scalars['String']>;
  platform_contains_nocase?: InputMaybe<Scalars['String']>;
  platform_not_contains?: InputMaybe<Scalars['String']>;
  platform_not_contains_nocase?: InputMaybe<Scalars['String']>;
  platform_starts_with?: InputMaybe<Scalars['String']>;
  platform_starts_with_nocase?: InputMaybe<Scalars['String']>;
  platform_not_starts_with?: InputMaybe<Scalars['String']>;
  platform_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  platform_ends_with?: InputMaybe<Scalars['String']>;
  platform_ends_with_nocase?: InputMaybe<Scalars['String']>;
  platform_not_ends_with?: InputMaybe<Scalars['String']>;
  platform_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  platform_?: InputMaybe<Platform_filter>;
  service?: InputMaybe<Scalars['String']>;
  service_not?: InputMaybe<Scalars['String']>;
  service_gt?: InputMaybe<Scalars['String']>;
  service_lt?: InputMaybe<Scalars['String']>;
  service_gte?: InputMaybe<Scalars['String']>;
  service_lte?: InputMaybe<Scalars['String']>;
  service_in?: InputMaybe<Array<Scalars['String']>>;
  service_not_in?: InputMaybe<Array<Scalars['String']>>;
  service_contains?: InputMaybe<Scalars['String']>;
  service_contains_nocase?: InputMaybe<Scalars['String']>;
  service_not_contains?: InputMaybe<Scalars['String']>;
  service_not_contains_nocase?: InputMaybe<Scalars['String']>;
  service_starts_with?: InputMaybe<Scalars['String']>;
  service_starts_with_nocase?: InputMaybe<Scalars['String']>;
  service_not_starts_with?: InputMaybe<Scalars['String']>;
  service_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  service_ends_with?: InputMaybe<Scalars['String']>;
  service_ends_with_nocase?: InputMaybe<Scalars['String']>;
  service_not_ends_with?: InputMaybe<Scalars['String']>;
  service_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  service_?: InputMaybe<Service_filter>;
  type?: InputMaybe<FeeType>;
  type_not?: InputMaybe<FeeType>;
  type_in?: InputMaybe<Array<FeeType>>;
  type_not_in?: InputMaybe<Array<FeeType>>;
  token?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<Token_filter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<FeePayment_filter>>>;
  or?: InputMaybe<Array<InputMaybe<FeePayment_filter>>>;
};

export type FeePayment_orderBy =
  | 'id'
  | 'createdAt'
  | 'platform'
  | 'platform__id'
  | 'platform__address'
  | 'platform__name'
  | 'platform__createdAt'
  | 'platform__updatedAt'
  | 'platform__originServiceFeeRate'
  | 'platform__originValidatedProposalFeeRate'
  | 'platform__servicePostingFee'
  | 'platform__proposalPostingFee'
  | 'platform__arbitrator'
  | 'platform__arbitratorExtraData'
  | 'platform__arbitrationFeeTimeout'
  | 'platform__cid'
  | 'platform__signer'
  | 'service'
  | 'service__id'
  | 'service__createdAt'
  | 'service__updatedAt'
  | 'service__status'
  | 'service__cid'
  | 'type'
  | 'token'
  | 'token__id'
  | 'token__address'
  | 'token__symbol'
  | 'token__name'
  | 'token__decimals'
  | 'token__allowed'
  | 'token__minimumTransactionAmount'
  | 'amount';

export type FeeType =
  | 'Platform'
  | 'OriginPlatform';

export type Keyword = {
  id: Scalars['ID'];
};

export type Keyword_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Keyword_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Keyword_filter>>>;
};

export type Keyword_orderBy =
  | 'id';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type Payment = {
  id: Scalars['ID'];
  createdAt?: Maybe<Scalars['BigInt']>;
  service: Service;
  amount: Scalars['BigInt'];
  rateToken: Token;
  paymentType?: Maybe<Scalars['String']>;
  transactionHash?: Maybe<Scalars['String']>;
  transaction: Transaction;
};

export type PaymentType =
  | 'Release'
  | 'Reimburse';

export type Payment_filter = {
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
  service?: InputMaybe<Scalars['String']>;
  service_not?: InputMaybe<Scalars['String']>;
  service_gt?: InputMaybe<Scalars['String']>;
  service_lt?: InputMaybe<Scalars['String']>;
  service_gte?: InputMaybe<Scalars['String']>;
  service_lte?: InputMaybe<Scalars['String']>;
  service_in?: InputMaybe<Array<Scalars['String']>>;
  service_not_in?: InputMaybe<Array<Scalars['String']>>;
  service_contains?: InputMaybe<Scalars['String']>;
  service_contains_nocase?: InputMaybe<Scalars['String']>;
  service_not_contains?: InputMaybe<Scalars['String']>;
  service_not_contains_nocase?: InputMaybe<Scalars['String']>;
  service_starts_with?: InputMaybe<Scalars['String']>;
  service_starts_with_nocase?: InputMaybe<Scalars['String']>;
  service_not_starts_with?: InputMaybe<Scalars['String']>;
  service_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  service_ends_with?: InputMaybe<Scalars['String']>;
  service_ends_with_nocase?: InputMaybe<Scalars['String']>;
  service_not_ends_with?: InputMaybe<Scalars['String']>;
  service_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  service_?: InputMaybe<Service_filter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
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
  rateToken_?: InputMaybe<Token_filter>;
  paymentType?: InputMaybe<Scalars['String']>;
  paymentType_not?: InputMaybe<Scalars['String']>;
  paymentType_gt?: InputMaybe<Scalars['String']>;
  paymentType_lt?: InputMaybe<Scalars['String']>;
  paymentType_gte?: InputMaybe<Scalars['String']>;
  paymentType_lte?: InputMaybe<Scalars['String']>;
  paymentType_in?: InputMaybe<Array<Scalars['String']>>;
  paymentType_not_in?: InputMaybe<Array<Scalars['String']>>;
  paymentType_contains?: InputMaybe<Scalars['String']>;
  paymentType_contains_nocase?: InputMaybe<Scalars['String']>;
  paymentType_not_contains?: InputMaybe<Scalars['String']>;
  paymentType_not_contains_nocase?: InputMaybe<Scalars['String']>;
  paymentType_starts_with?: InputMaybe<Scalars['String']>;
  paymentType_starts_with_nocase?: InputMaybe<Scalars['String']>;
  paymentType_not_starts_with?: InputMaybe<Scalars['String']>;
  paymentType_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  paymentType_ends_with?: InputMaybe<Scalars['String']>;
  paymentType_ends_with_nocase?: InputMaybe<Scalars['String']>;
  paymentType_not_ends_with?: InputMaybe<Scalars['String']>;
  paymentType_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transactionHash?: InputMaybe<Scalars['String']>;
  transactionHash_not?: InputMaybe<Scalars['String']>;
  transactionHash_gt?: InputMaybe<Scalars['String']>;
  transactionHash_lt?: InputMaybe<Scalars['String']>;
  transactionHash_gte?: InputMaybe<Scalars['String']>;
  transactionHash_lte?: InputMaybe<Scalars['String']>;
  transactionHash_in?: InputMaybe<Array<Scalars['String']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  transactionHash_contains?: InputMaybe<Scalars['String']>;
  transactionHash_contains_nocase?: InputMaybe<Scalars['String']>;
  transactionHash_not_contains?: InputMaybe<Scalars['String']>;
  transactionHash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transactionHash_starts_with?: InputMaybe<Scalars['String']>;
  transactionHash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transactionHash_not_starts_with?: InputMaybe<Scalars['String']>;
  transactionHash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transactionHash_ends_with?: InputMaybe<Scalars['String']>;
  transactionHash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transactionHash_not_ends_with?: InputMaybe<Scalars['String']>;
  transactionHash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction?: InputMaybe<Scalars['String']>;
  transaction_not?: InputMaybe<Scalars['String']>;
  transaction_gt?: InputMaybe<Scalars['String']>;
  transaction_lt?: InputMaybe<Scalars['String']>;
  transaction_gte?: InputMaybe<Scalars['String']>;
  transaction_lte?: InputMaybe<Scalars['String']>;
  transaction_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_contains?: InputMaybe<Scalars['String']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_contains?: InputMaybe<Scalars['String']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_starts_with?: InputMaybe<Scalars['String']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_ends_with?: InputMaybe<Scalars['String']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_?: InputMaybe<Transaction_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Payment_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Payment_filter>>>;
};

export type Payment_orderBy =
  | 'id'
  | 'createdAt'
  | 'service'
  | 'service__id'
  | 'service__createdAt'
  | 'service__updatedAt'
  | 'service__status'
  | 'service__cid'
  | 'amount'
  | 'rateToken'
  | 'rateToken__id'
  | 'rateToken__address'
  | 'rateToken__symbol'
  | 'rateToken__name'
  | 'rateToken__decimals'
  | 'rateToken__allowed'
  | 'rateToken__minimumTransactionAmount'
  | 'paymentType'
  | 'transactionHash'
  | 'transaction'
  | 'transaction__id'
  | 'transaction__amount'
  | 'transaction__protocolEscrowFeeRate'
  | 'transaction__originServiceFeeRate'
  | 'transaction__originValidatedProposalFeeRate'
  | 'transaction__disputeId'
  | 'transaction__senderFee'
  | 'transaction__receiverFee'
  | 'transaction__lastInteraction'
  | 'transaction__status'
  | 'transaction__arbitrator'
  | 'transaction__arbitratorExtraData'
  | 'transaction__arbitrationFeeTimeout'
  | 'transaction__ruling'
  | 'transaction__metaEvidenceUri';

export type Platform = {
  id: Scalars['ID'];
  address: Scalars['Bytes'];
  name: Scalars['String'];
  createdAt: Scalars['BigInt'];
  updatedAt: Scalars['BigInt'];
  feePayments?: Maybe<Array<FeePayment>>;
  totalPlatformGains?: Maybe<Array<PlatformGain>>;
  feeClaims?: Maybe<Array<FeeClaim>>;
  originServiceFeeRate: Scalars['Int'];
  originValidatedProposalFeeRate: Scalars['Int'];
  servicePostingFee: Scalars['BigInt'];
  proposalPostingFee: Scalars['BigInt'];
  arbitrator: Scalars['Bytes'];
  arbitratorExtraData: Scalars['Bytes'];
  arbitrationFeeTimeout: Scalars['BigInt'];
  cid?: Maybe<Scalars['String']>;
  description?: Maybe<PlatformDescription>;
  signer: Scalars['Bytes'];
};


export type PlatformfeePaymentsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FeePayment_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FeePayment_filter>;
};


export type PlatformtotalPlatformGainsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PlatformGain_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PlatformGain_filter>;
};


export type PlatformfeeClaimsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FeeClaim_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FeeClaim_filter>;
};

export type PlatformDescription = {
  id: Scalars['ID'];
  about?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  platform: Platform;
  video_url?: Maybe<Scalars['String']>;
  image_url?: Maybe<Scalars['String']>;
};

export type PlatformDescription_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
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
  website?: InputMaybe<Scalars['String']>;
  website_not?: InputMaybe<Scalars['String']>;
  website_gt?: InputMaybe<Scalars['String']>;
  website_lt?: InputMaybe<Scalars['String']>;
  website_gte?: InputMaybe<Scalars['String']>;
  website_lte?: InputMaybe<Scalars['String']>;
  website_in?: InputMaybe<Array<Scalars['String']>>;
  website_not_in?: InputMaybe<Array<Scalars['String']>>;
  website_contains?: InputMaybe<Scalars['String']>;
  website_contains_nocase?: InputMaybe<Scalars['String']>;
  website_not_contains?: InputMaybe<Scalars['String']>;
  website_not_contains_nocase?: InputMaybe<Scalars['String']>;
  website_starts_with?: InputMaybe<Scalars['String']>;
  website_starts_with_nocase?: InputMaybe<Scalars['String']>;
  website_not_starts_with?: InputMaybe<Scalars['String']>;
  website_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  website_ends_with?: InputMaybe<Scalars['String']>;
  website_ends_with_nocase?: InputMaybe<Scalars['String']>;
  website_not_ends_with?: InputMaybe<Scalars['String']>;
  website_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  platform?: InputMaybe<Scalars['String']>;
  platform_not?: InputMaybe<Scalars['String']>;
  platform_gt?: InputMaybe<Scalars['String']>;
  platform_lt?: InputMaybe<Scalars['String']>;
  platform_gte?: InputMaybe<Scalars['String']>;
  platform_lte?: InputMaybe<Scalars['String']>;
  platform_in?: InputMaybe<Array<Scalars['String']>>;
  platform_not_in?: InputMaybe<Array<Scalars['String']>>;
  platform_contains?: InputMaybe<Scalars['String']>;
  platform_contains_nocase?: InputMaybe<Scalars['String']>;
  platform_not_contains?: InputMaybe<Scalars['String']>;
  platform_not_contains_nocase?: InputMaybe<Scalars['String']>;
  platform_starts_with?: InputMaybe<Scalars['String']>;
  platform_starts_with_nocase?: InputMaybe<Scalars['String']>;
  platform_not_starts_with?: InputMaybe<Scalars['String']>;
  platform_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  platform_ends_with?: InputMaybe<Scalars['String']>;
  platform_ends_with_nocase?: InputMaybe<Scalars['String']>;
  platform_not_ends_with?: InputMaybe<Scalars['String']>;
  platform_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  platform_?: InputMaybe<Platform_filter>;
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
  image_url?: InputMaybe<Scalars['String']>;
  image_url_not?: InputMaybe<Scalars['String']>;
  image_url_gt?: InputMaybe<Scalars['String']>;
  image_url_lt?: InputMaybe<Scalars['String']>;
  image_url_gte?: InputMaybe<Scalars['String']>;
  image_url_lte?: InputMaybe<Scalars['String']>;
  image_url_in?: InputMaybe<Array<Scalars['String']>>;
  image_url_not_in?: InputMaybe<Array<Scalars['String']>>;
  image_url_contains?: InputMaybe<Scalars['String']>;
  image_url_contains_nocase?: InputMaybe<Scalars['String']>;
  image_url_not_contains?: InputMaybe<Scalars['String']>;
  image_url_not_contains_nocase?: InputMaybe<Scalars['String']>;
  image_url_starts_with?: InputMaybe<Scalars['String']>;
  image_url_starts_with_nocase?: InputMaybe<Scalars['String']>;
  image_url_not_starts_with?: InputMaybe<Scalars['String']>;
  image_url_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  image_url_ends_with?: InputMaybe<Scalars['String']>;
  image_url_ends_with_nocase?: InputMaybe<Scalars['String']>;
  image_url_not_ends_with?: InputMaybe<Scalars['String']>;
  image_url_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PlatformDescription_filter>>>;
  or?: InputMaybe<Array<InputMaybe<PlatformDescription_filter>>>;
};

export type PlatformDescription_orderBy =
  | 'id'
  | 'about'
  | 'website'
  | 'platform'
  | 'platform__id'
  | 'platform__address'
  | 'platform__name'
  | 'platform__createdAt'
  | 'platform__updatedAt'
  | 'platform__originServiceFeeRate'
  | 'platform__originValidatedProposalFeeRate'
  | 'platform__servicePostingFee'
  | 'platform__proposalPostingFee'
  | 'platform__arbitrator'
  | 'platform__arbitratorExtraData'
  | 'platform__arbitrationFeeTimeout'
  | 'platform__cid'
  | 'platform__signer'
  | 'video_url'
  | 'image_url';

export type PlatformGain = {
  id: Scalars['ID'];
  platform?: Maybe<Platform>;
  token?: Maybe<Token>;
  totalOriginPlatformFeeGain: Scalars['BigInt'];
  totalPlatformFeeGain: Scalars['BigInt'];
};

export type PlatformGain_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  platform?: InputMaybe<Scalars['String']>;
  platform_not?: InputMaybe<Scalars['String']>;
  platform_gt?: InputMaybe<Scalars['String']>;
  platform_lt?: InputMaybe<Scalars['String']>;
  platform_gte?: InputMaybe<Scalars['String']>;
  platform_lte?: InputMaybe<Scalars['String']>;
  platform_in?: InputMaybe<Array<Scalars['String']>>;
  platform_not_in?: InputMaybe<Array<Scalars['String']>>;
  platform_contains?: InputMaybe<Scalars['String']>;
  platform_contains_nocase?: InputMaybe<Scalars['String']>;
  platform_not_contains?: InputMaybe<Scalars['String']>;
  platform_not_contains_nocase?: InputMaybe<Scalars['String']>;
  platform_starts_with?: InputMaybe<Scalars['String']>;
  platform_starts_with_nocase?: InputMaybe<Scalars['String']>;
  platform_not_starts_with?: InputMaybe<Scalars['String']>;
  platform_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  platform_ends_with?: InputMaybe<Scalars['String']>;
  platform_ends_with_nocase?: InputMaybe<Scalars['String']>;
  platform_not_ends_with?: InputMaybe<Scalars['String']>;
  platform_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  platform_?: InputMaybe<Platform_filter>;
  token?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<Token_filter>;
  totalOriginPlatformFeeGain?: InputMaybe<Scalars['BigInt']>;
  totalOriginPlatformFeeGain_not?: InputMaybe<Scalars['BigInt']>;
  totalOriginPlatformFeeGain_gt?: InputMaybe<Scalars['BigInt']>;
  totalOriginPlatformFeeGain_lt?: InputMaybe<Scalars['BigInt']>;
  totalOriginPlatformFeeGain_gte?: InputMaybe<Scalars['BigInt']>;
  totalOriginPlatformFeeGain_lte?: InputMaybe<Scalars['BigInt']>;
  totalOriginPlatformFeeGain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalOriginPlatformFeeGain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalPlatformFeeGain?: InputMaybe<Scalars['BigInt']>;
  totalPlatformFeeGain_not?: InputMaybe<Scalars['BigInt']>;
  totalPlatformFeeGain_gt?: InputMaybe<Scalars['BigInt']>;
  totalPlatformFeeGain_lt?: InputMaybe<Scalars['BigInt']>;
  totalPlatformFeeGain_gte?: InputMaybe<Scalars['BigInt']>;
  totalPlatformFeeGain_lte?: InputMaybe<Scalars['BigInt']>;
  totalPlatformFeeGain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalPlatformFeeGain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PlatformGain_filter>>>;
  or?: InputMaybe<Array<InputMaybe<PlatformGain_filter>>>;
};

export type PlatformGain_orderBy =
  | 'id'
  | 'platform'
  | 'platform__id'
  | 'platform__address'
  | 'platform__name'
  | 'platform__createdAt'
  | 'platform__updatedAt'
  | 'platform__originServiceFeeRate'
  | 'platform__originValidatedProposalFeeRate'
  | 'platform__servicePostingFee'
  | 'platform__proposalPostingFee'
  | 'platform__arbitrator'
  | 'platform__arbitratorExtraData'
  | 'platform__arbitrationFeeTimeout'
  | 'platform__cid'
  | 'platform__signer'
  | 'token'
  | 'token__id'
  | 'token__address'
  | 'token__symbol'
  | 'token__name'
  | 'token__decimals'
  | 'token__allowed'
  | 'token__minimumTransactionAmount'
  | 'totalOriginPlatformFeeGain'
  | 'totalPlatformFeeGain';

export type Platform_filter = {
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
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
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
  feePayments_?: InputMaybe<FeePayment_filter>;
  totalPlatformGains_?: InputMaybe<PlatformGain_filter>;
  feeClaims_?: InputMaybe<FeeClaim_filter>;
  originServiceFeeRate?: InputMaybe<Scalars['Int']>;
  originServiceFeeRate_not?: InputMaybe<Scalars['Int']>;
  originServiceFeeRate_gt?: InputMaybe<Scalars['Int']>;
  originServiceFeeRate_lt?: InputMaybe<Scalars['Int']>;
  originServiceFeeRate_gte?: InputMaybe<Scalars['Int']>;
  originServiceFeeRate_lte?: InputMaybe<Scalars['Int']>;
  originServiceFeeRate_in?: InputMaybe<Array<Scalars['Int']>>;
  originServiceFeeRate_not_in?: InputMaybe<Array<Scalars['Int']>>;
  originValidatedProposalFeeRate?: InputMaybe<Scalars['Int']>;
  originValidatedProposalFeeRate_not?: InputMaybe<Scalars['Int']>;
  originValidatedProposalFeeRate_gt?: InputMaybe<Scalars['Int']>;
  originValidatedProposalFeeRate_lt?: InputMaybe<Scalars['Int']>;
  originValidatedProposalFeeRate_gte?: InputMaybe<Scalars['Int']>;
  originValidatedProposalFeeRate_lte?: InputMaybe<Scalars['Int']>;
  originValidatedProposalFeeRate_in?: InputMaybe<Array<Scalars['Int']>>;
  originValidatedProposalFeeRate_not_in?: InputMaybe<Array<Scalars['Int']>>;
  servicePostingFee?: InputMaybe<Scalars['BigInt']>;
  servicePostingFee_not?: InputMaybe<Scalars['BigInt']>;
  servicePostingFee_gt?: InputMaybe<Scalars['BigInt']>;
  servicePostingFee_lt?: InputMaybe<Scalars['BigInt']>;
  servicePostingFee_gte?: InputMaybe<Scalars['BigInt']>;
  servicePostingFee_lte?: InputMaybe<Scalars['BigInt']>;
  servicePostingFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  servicePostingFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  proposalPostingFee?: InputMaybe<Scalars['BigInt']>;
  proposalPostingFee_not?: InputMaybe<Scalars['BigInt']>;
  proposalPostingFee_gt?: InputMaybe<Scalars['BigInt']>;
  proposalPostingFee_lt?: InputMaybe<Scalars['BigInt']>;
  proposalPostingFee_gte?: InputMaybe<Scalars['BigInt']>;
  proposalPostingFee_lte?: InputMaybe<Scalars['BigInt']>;
  proposalPostingFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  proposalPostingFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  arbitrator?: InputMaybe<Scalars['Bytes']>;
  arbitrator_not?: InputMaybe<Scalars['Bytes']>;
  arbitrator_gt?: InputMaybe<Scalars['Bytes']>;
  arbitrator_lt?: InputMaybe<Scalars['Bytes']>;
  arbitrator_gte?: InputMaybe<Scalars['Bytes']>;
  arbitrator_lte?: InputMaybe<Scalars['Bytes']>;
  arbitrator_in?: InputMaybe<Array<Scalars['Bytes']>>;
  arbitrator_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  arbitrator_contains?: InputMaybe<Scalars['Bytes']>;
  arbitrator_not_contains?: InputMaybe<Scalars['Bytes']>;
  arbitratorExtraData?: InputMaybe<Scalars['Bytes']>;
  arbitratorExtraData_not?: InputMaybe<Scalars['Bytes']>;
  arbitratorExtraData_gt?: InputMaybe<Scalars['Bytes']>;
  arbitratorExtraData_lt?: InputMaybe<Scalars['Bytes']>;
  arbitratorExtraData_gte?: InputMaybe<Scalars['Bytes']>;
  arbitratorExtraData_lte?: InputMaybe<Scalars['Bytes']>;
  arbitratorExtraData_in?: InputMaybe<Array<Scalars['Bytes']>>;
  arbitratorExtraData_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  arbitratorExtraData_contains?: InputMaybe<Scalars['Bytes']>;
  arbitratorExtraData_not_contains?: InputMaybe<Scalars['Bytes']>;
  arbitrationFeeTimeout?: InputMaybe<Scalars['BigInt']>;
  arbitrationFeeTimeout_not?: InputMaybe<Scalars['BigInt']>;
  arbitrationFeeTimeout_gt?: InputMaybe<Scalars['BigInt']>;
  arbitrationFeeTimeout_lt?: InputMaybe<Scalars['BigInt']>;
  arbitrationFeeTimeout_gte?: InputMaybe<Scalars['BigInt']>;
  arbitrationFeeTimeout_lte?: InputMaybe<Scalars['BigInt']>;
  arbitrationFeeTimeout_in?: InputMaybe<Array<Scalars['BigInt']>>;
  arbitrationFeeTimeout_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
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
  description_?: InputMaybe<PlatformDescription_filter>;
  signer?: InputMaybe<Scalars['Bytes']>;
  signer_not?: InputMaybe<Scalars['Bytes']>;
  signer_gt?: InputMaybe<Scalars['Bytes']>;
  signer_lt?: InputMaybe<Scalars['Bytes']>;
  signer_gte?: InputMaybe<Scalars['Bytes']>;
  signer_lte?: InputMaybe<Scalars['Bytes']>;
  signer_in?: InputMaybe<Array<Scalars['Bytes']>>;
  signer_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  signer_contains?: InputMaybe<Scalars['Bytes']>;
  signer_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Platform_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Platform_filter>>>;
};

export type Platform_orderBy =
  | 'id'
  | 'address'
  | 'name'
  | 'createdAt'
  | 'updatedAt'
  | 'feePayments'
  | 'totalPlatformGains'
  | 'feeClaims'
  | 'originServiceFeeRate'
  | 'originValidatedProposalFeeRate'
  | 'servicePostingFee'
  | 'proposalPostingFee'
  | 'arbitrator'
  | 'arbitratorExtraData'
  | 'arbitrationFeeTimeout'
  | 'cid'
  | 'description'
  | 'description__id'
  | 'description__about'
  | 'description__website'
  | 'description__video_url'
  | 'description__image_url'
  | 'signer';

export type Proposal = {
  id: Scalars['ID'];
  service: Service;
  createdAt: Scalars['BigInt'];
  updatedAt: Scalars['BigInt'];
  status: ProposalStatus;
  seller?: Maybe<User>;
  rateToken: Token;
  rateAmount?: Maybe<Scalars['BigInt']>;
  cid?: Maybe<Scalars['String']>;
  platform?: Maybe<Platform>;
  description?: Maybe<ProposalDescription>;
  expirationDate?: Maybe<Scalars['BigInt']>;
};

export type ProposalDescription = {
  id: Scalars['ID'];
  proposal: Proposal;
  startDate?: Maybe<Scalars['BigInt']>;
  about?: Maybe<Scalars['String']>;
  expectedHours?: Maybe<Scalars['BigInt']>;
  video_url?: Maybe<Scalars['String']>;
};

export type ProposalDescription_filter = {
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
  proposal_?: InputMaybe<Proposal_filter>;
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
  and?: InputMaybe<Array<InputMaybe<ProposalDescription_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ProposalDescription_filter>>>;
};

export type ProposalDescription_orderBy =
  | 'id'
  | 'proposal'
  | 'proposal__id'
  | 'proposal__createdAt'
  | 'proposal__updatedAt'
  | 'proposal__status'
  | 'proposal__rateAmount'
  | 'proposal__cid'
  | 'proposal__expirationDate'
  | 'startDate'
  | 'about'
  | 'expectedHours'
  | 'video_url';

export type ProposalStatus =
  | 'Pending'
  | 'Validated'
  | 'Rejected';

export type Proposal_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  service?: InputMaybe<Scalars['String']>;
  service_not?: InputMaybe<Scalars['String']>;
  service_gt?: InputMaybe<Scalars['String']>;
  service_lt?: InputMaybe<Scalars['String']>;
  service_gte?: InputMaybe<Scalars['String']>;
  service_lte?: InputMaybe<Scalars['String']>;
  service_in?: InputMaybe<Array<Scalars['String']>>;
  service_not_in?: InputMaybe<Array<Scalars['String']>>;
  service_contains?: InputMaybe<Scalars['String']>;
  service_contains_nocase?: InputMaybe<Scalars['String']>;
  service_not_contains?: InputMaybe<Scalars['String']>;
  service_not_contains_nocase?: InputMaybe<Scalars['String']>;
  service_starts_with?: InputMaybe<Scalars['String']>;
  service_starts_with_nocase?: InputMaybe<Scalars['String']>;
  service_not_starts_with?: InputMaybe<Scalars['String']>;
  service_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  service_ends_with?: InputMaybe<Scalars['String']>;
  service_ends_with_nocase?: InputMaybe<Scalars['String']>;
  service_not_ends_with?: InputMaybe<Scalars['String']>;
  service_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  service_?: InputMaybe<Service_filter>;
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
  status?: InputMaybe<ProposalStatus>;
  status_not?: InputMaybe<ProposalStatus>;
  status_in?: InputMaybe<Array<ProposalStatus>>;
  status_not_in?: InputMaybe<Array<ProposalStatus>>;
  seller?: InputMaybe<Scalars['String']>;
  seller_not?: InputMaybe<Scalars['String']>;
  seller_gt?: InputMaybe<Scalars['String']>;
  seller_lt?: InputMaybe<Scalars['String']>;
  seller_gte?: InputMaybe<Scalars['String']>;
  seller_lte?: InputMaybe<Scalars['String']>;
  seller_in?: InputMaybe<Array<Scalars['String']>>;
  seller_not_in?: InputMaybe<Array<Scalars['String']>>;
  seller_contains?: InputMaybe<Scalars['String']>;
  seller_contains_nocase?: InputMaybe<Scalars['String']>;
  seller_not_contains?: InputMaybe<Scalars['String']>;
  seller_not_contains_nocase?: InputMaybe<Scalars['String']>;
  seller_starts_with?: InputMaybe<Scalars['String']>;
  seller_starts_with_nocase?: InputMaybe<Scalars['String']>;
  seller_not_starts_with?: InputMaybe<Scalars['String']>;
  seller_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  seller_ends_with?: InputMaybe<Scalars['String']>;
  seller_ends_with_nocase?: InputMaybe<Scalars['String']>;
  seller_not_ends_with?: InputMaybe<Scalars['String']>;
  seller_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  seller_?: InputMaybe<User_filter>;
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
  rateToken_?: InputMaybe<Token_filter>;
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
  platform?: InputMaybe<Scalars['String']>;
  platform_not?: InputMaybe<Scalars['String']>;
  platform_gt?: InputMaybe<Scalars['String']>;
  platform_lt?: InputMaybe<Scalars['String']>;
  platform_gte?: InputMaybe<Scalars['String']>;
  platform_lte?: InputMaybe<Scalars['String']>;
  platform_in?: InputMaybe<Array<Scalars['String']>>;
  platform_not_in?: InputMaybe<Array<Scalars['String']>>;
  platform_contains?: InputMaybe<Scalars['String']>;
  platform_contains_nocase?: InputMaybe<Scalars['String']>;
  platform_not_contains?: InputMaybe<Scalars['String']>;
  platform_not_contains_nocase?: InputMaybe<Scalars['String']>;
  platform_starts_with?: InputMaybe<Scalars['String']>;
  platform_starts_with_nocase?: InputMaybe<Scalars['String']>;
  platform_not_starts_with?: InputMaybe<Scalars['String']>;
  platform_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  platform_ends_with?: InputMaybe<Scalars['String']>;
  platform_ends_with_nocase?: InputMaybe<Scalars['String']>;
  platform_not_ends_with?: InputMaybe<Scalars['String']>;
  platform_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  platform_?: InputMaybe<Platform_filter>;
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
  description_?: InputMaybe<ProposalDescription_filter>;
  expirationDate?: InputMaybe<Scalars['BigInt']>;
  expirationDate_not?: InputMaybe<Scalars['BigInt']>;
  expirationDate_gt?: InputMaybe<Scalars['BigInt']>;
  expirationDate_lt?: InputMaybe<Scalars['BigInt']>;
  expirationDate_gte?: InputMaybe<Scalars['BigInt']>;
  expirationDate_lte?: InputMaybe<Scalars['BigInt']>;
  expirationDate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  expirationDate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Proposal_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Proposal_filter>>>;
};

export type Proposal_orderBy =
  | 'id'
  | 'service'
  | 'service__id'
  | 'service__createdAt'
  | 'service__updatedAt'
  | 'service__status'
  | 'service__cid'
  | 'createdAt'
  | 'updatedAt'
  | 'status'
  | 'seller'
  | 'seller__id'
  | 'seller__index'
  | 'seller__handle'
  | 'seller__createdAt'
  | 'seller__updatedAt'
  | 'seller__numReviews'
  | 'seller__address'
  | 'seller__rating'
  | 'seller__cid'
  | 'rateToken'
  | 'rateToken__id'
  | 'rateToken__address'
  | 'rateToken__symbol'
  | 'rateToken__name'
  | 'rateToken__decimals'
  | 'rateToken__allowed'
  | 'rateToken__minimumTransactionAmount'
  | 'rateAmount'
  | 'cid'
  | 'platform'
  | 'platform__id'
  | 'platform__address'
  | 'platform__name'
  | 'platform__createdAt'
  | 'platform__updatedAt'
  | 'platform__originServiceFeeRate'
  | 'platform__originValidatedProposalFeeRate'
  | 'platform__servicePostingFee'
  | 'platform__proposalPostingFee'
  | 'platform__arbitrator'
  | 'platform__arbitratorExtraData'
  | 'platform__arbitrationFeeTimeout'
  | 'platform__cid'
  | 'platform__signer'
  | 'description'
  | 'description__id'
  | 'description__startDate'
  | 'description__about'
  | 'description__expectedHours'
  | 'description__video_url'
  | 'expirationDate';

export type Protocol = {
  id: Scalars['ID'];
  userMintFee: Scalars['BigInt'];
  platformMintFee: Scalars['BigInt'];
  protocolEscrowFeeRate: Scalars['Int'];
  totalMintFees: Scalars['BigInt'];
  minArbitrationFeeTimeout: Scalars['BigInt'];
  shortHandlesMaxPrice: Scalars['BigInt'];
  minServiceCompletionPercentage: Scalars['BigInt'];
};

export type Protocol_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  userMintFee?: InputMaybe<Scalars['BigInt']>;
  userMintFee_not?: InputMaybe<Scalars['BigInt']>;
  userMintFee_gt?: InputMaybe<Scalars['BigInt']>;
  userMintFee_lt?: InputMaybe<Scalars['BigInt']>;
  userMintFee_gte?: InputMaybe<Scalars['BigInt']>;
  userMintFee_lte?: InputMaybe<Scalars['BigInt']>;
  userMintFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  userMintFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  platformMintFee?: InputMaybe<Scalars['BigInt']>;
  platformMintFee_not?: InputMaybe<Scalars['BigInt']>;
  platformMintFee_gt?: InputMaybe<Scalars['BigInt']>;
  platformMintFee_lt?: InputMaybe<Scalars['BigInt']>;
  platformMintFee_gte?: InputMaybe<Scalars['BigInt']>;
  platformMintFee_lte?: InputMaybe<Scalars['BigInt']>;
  platformMintFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  platformMintFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  protocolEscrowFeeRate?: InputMaybe<Scalars['Int']>;
  protocolEscrowFeeRate_not?: InputMaybe<Scalars['Int']>;
  protocolEscrowFeeRate_gt?: InputMaybe<Scalars['Int']>;
  protocolEscrowFeeRate_lt?: InputMaybe<Scalars['Int']>;
  protocolEscrowFeeRate_gte?: InputMaybe<Scalars['Int']>;
  protocolEscrowFeeRate_lte?: InputMaybe<Scalars['Int']>;
  protocolEscrowFeeRate_in?: InputMaybe<Array<Scalars['Int']>>;
  protocolEscrowFeeRate_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalMintFees?: InputMaybe<Scalars['BigInt']>;
  totalMintFees_not?: InputMaybe<Scalars['BigInt']>;
  totalMintFees_gt?: InputMaybe<Scalars['BigInt']>;
  totalMintFees_lt?: InputMaybe<Scalars['BigInt']>;
  totalMintFees_gte?: InputMaybe<Scalars['BigInt']>;
  totalMintFees_lte?: InputMaybe<Scalars['BigInt']>;
  totalMintFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalMintFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  minArbitrationFeeTimeout?: InputMaybe<Scalars['BigInt']>;
  minArbitrationFeeTimeout_not?: InputMaybe<Scalars['BigInt']>;
  minArbitrationFeeTimeout_gt?: InputMaybe<Scalars['BigInt']>;
  minArbitrationFeeTimeout_lt?: InputMaybe<Scalars['BigInt']>;
  minArbitrationFeeTimeout_gte?: InputMaybe<Scalars['BigInt']>;
  minArbitrationFeeTimeout_lte?: InputMaybe<Scalars['BigInt']>;
  minArbitrationFeeTimeout_in?: InputMaybe<Array<Scalars['BigInt']>>;
  minArbitrationFeeTimeout_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  shortHandlesMaxPrice?: InputMaybe<Scalars['BigInt']>;
  shortHandlesMaxPrice_not?: InputMaybe<Scalars['BigInt']>;
  shortHandlesMaxPrice_gt?: InputMaybe<Scalars['BigInt']>;
  shortHandlesMaxPrice_lt?: InputMaybe<Scalars['BigInt']>;
  shortHandlesMaxPrice_gte?: InputMaybe<Scalars['BigInt']>;
  shortHandlesMaxPrice_lte?: InputMaybe<Scalars['BigInt']>;
  shortHandlesMaxPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  shortHandlesMaxPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  minServiceCompletionPercentage?: InputMaybe<Scalars['BigInt']>;
  minServiceCompletionPercentage_not?: InputMaybe<Scalars['BigInt']>;
  minServiceCompletionPercentage_gt?: InputMaybe<Scalars['BigInt']>;
  minServiceCompletionPercentage_lt?: InputMaybe<Scalars['BigInt']>;
  minServiceCompletionPercentage_gte?: InputMaybe<Scalars['BigInt']>;
  minServiceCompletionPercentage_lte?: InputMaybe<Scalars['BigInt']>;
  minServiceCompletionPercentage_in?: InputMaybe<Array<Scalars['BigInt']>>;
  minServiceCompletionPercentage_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Protocol_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Protocol_filter>>>;
};

export type Protocol_orderBy =
  | 'id'
  | 'userMintFee'
  | 'platformMintFee'
  | 'protocolEscrowFeeRate'
  | 'totalMintFees'
  | 'minArbitrationFeeTimeout'
  | 'shortHandlesMaxPrice'
  | 'minServiceCompletionPercentage';

export type Query = {
  service?: Maybe<Service>;
  services: Array<Service>;
  serviceDescription?: Maybe<ServiceDescription>;
  serviceDescriptions: Array<ServiceDescription>;
  keyword?: Maybe<Keyword>;
  keywords: Array<Keyword>;
  review?: Maybe<Review>;
  reviews: Array<Review>;
  reviewDescription?: Maybe<ReviewDescription>;
  reviewDescriptions: Array<ReviewDescription>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
  user?: Maybe<User>;
  users: Array<User>;
  userStats: Array<UserStats>;
  userDescription?: Maybe<UserDescription>;
  userDescriptions: Array<UserDescription>;
  proposal?: Maybe<Proposal>;
  proposals: Array<Proposal>;
  proposalDescription?: Maybe<ProposalDescription>;
  proposalDescriptions: Array<ProposalDescription>;
  payment?: Maybe<Payment>;
  payments: Array<Payment>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  evidence?: Maybe<Evidence>;
  evidences: Array<Evidence>;
  platform?: Maybe<Platform>;
  platforms: Array<Platform>;
  platformDescription?: Maybe<PlatformDescription>;
  platformDescriptions: Array<PlatformDescription>;
  feePayment?: Maybe<FeePayment>;
  feePayments: Array<FeePayment>;
  feeClaim?: Maybe<FeeClaim>;
  feeClaims: Array<FeeClaim>;
  platformGain?: Maybe<PlatformGain>;
  platformGains: Array<PlatformGain>;
  userGain?: Maybe<UserGain>;
  userGains: Array<UserGain>;
  protocol?: Maybe<Protocol>;
  protocols: Array<Protocol>;
  serviceDescriptionSearchRank: Array<ServiceDescription>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QueryserviceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryservicesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Service_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Service_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryserviceDescriptionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryserviceDescriptionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ServiceDescription_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ServiceDescription_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerykeywordArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerykeywordsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Keyword_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Keyword_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryreviewArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryreviewsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Review_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Review_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryreviewDescriptionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryreviewDescriptionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReviewDescription_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ReviewDescription_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuserArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryusersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<User_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<User_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuserStatsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserStats_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UserStats_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuserDescriptionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuserDescriptionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserDescription_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UserDescription_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryproposalArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryproposalsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Proposal_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Proposal_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryproposalDescriptionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryproposalDescriptionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProposalDescription_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ProposalDescription_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypaymentArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypaymentsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Payment_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Payment_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transaction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryevidenceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryevidencesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Evidence_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Evidence_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryplatformArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryplatformsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Platform_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Platform_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryplatformDescriptionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryplatformDescriptionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PlatformDescription_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PlatformDescription_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfeePaymentArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfeePaymentsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FeePayment_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FeePayment_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfeeClaimArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfeeClaimsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FeeClaim_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FeeClaim_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryplatformGainArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryplatformGainsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PlatformGain_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PlatformGain_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuserGainArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuserGainsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserGain_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UserGain_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryprotocolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryprotocolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Protocol_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Protocol_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryserviceDescriptionSearchRankArgs = {
  text: Scalars['String'];
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  block?: InputMaybe<Block_height>;
  where?: InputMaybe<ServiceDescription_filter>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Review = {
  id: Scalars['ID'];
  service: Service;
  createdAt: Scalars['BigInt'];
  to: User;
  rating?: Maybe<Scalars['BigInt']>;
  cid?: Maybe<Scalars['String']>;
  description?: Maybe<ReviewDescription>;
};

export type ReviewDescription = {
  id: Scalars['ID'];
  content?: Maybe<Scalars['String']>;
  review?: Maybe<Review>;
};

export type ReviewDescription_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  content?: InputMaybe<Scalars['String']>;
  content_not?: InputMaybe<Scalars['String']>;
  content_gt?: InputMaybe<Scalars['String']>;
  content_lt?: InputMaybe<Scalars['String']>;
  content_gte?: InputMaybe<Scalars['String']>;
  content_lte?: InputMaybe<Scalars['String']>;
  content_in?: InputMaybe<Array<Scalars['String']>>;
  content_not_in?: InputMaybe<Array<Scalars['String']>>;
  content_contains?: InputMaybe<Scalars['String']>;
  content_contains_nocase?: InputMaybe<Scalars['String']>;
  content_not_contains?: InputMaybe<Scalars['String']>;
  content_not_contains_nocase?: InputMaybe<Scalars['String']>;
  content_starts_with?: InputMaybe<Scalars['String']>;
  content_starts_with_nocase?: InputMaybe<Scalars['String']>;
  content_not_starts_with?: InputMaybe<Scalars['String']>;
  content_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  content_ends_with?: InputMaybe<Scalars['String']>;
  content_ends_with_nocase?: InputMaybe<Scalars['String']>;
  content_not_ends_with?: InputMaybe<Scalars['String']>;
  content_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  review?: InputMaybe<Scalars['String']>;
  review_not?: InputMaybe<Scalars['String']>;
  review_gt?: InputMaybe<Scalars['String']>;
  review_lt?: InputMaybe<Scalars['String']>;
  review_gte?: InputMaybe<Scalars['String']>;
  review_lte?: InputMaybe<Scalars['String']>;
  review_in?: InputMaybe<Array<Scalars['String']>>;
  review_not_in?: InputMaybe<Array<Scalars['String']>>;
  review_contains?: InputMaybe<Scalars['String']>;
  review_contains_nocase?: InputMaybe<Scalars['String']>;
  review_not_contains?: InputMaybe<Scalars['String']>;
  review_not_contains_nocase?: InputMaybe<Scalars['String']>;
  review_starts_with?: InputMaybe<Scalars['String']>;
  review_starts_with_nocase?: InputMaybe<Scalars['String']>;
  review_not_starts_with?: InputMaybe<Scalars['String']>;
  review_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  review_ends_with?: InputMaybe<Scalars['String']>;
  review_ends_with_nocase?: InputMaybe<Scalars['String']>;
  review_not_ends_with?: InputMaybe<Scalars['String']>;
  review_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  review_?: InputMaybe<Review_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ReviewDescription_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ReviewDescription_filter>>>;
};

export type ReviewDescription_orderBy =
  | 'id'
  | 'content'
  | 'review'
  | 'review__id'
  | 'review__createdAt'
  | 'review__rating'
  | 'review__cid';

export type Review_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  service?: InputMaybe<Scalars['String']>;
  service_not?: InputMaybe<Scalars['String']>;
  service_gt?: InputMaybe<Scalars['String']>;
  service_lt?: InputMaybe<Scalars['String']>;
  service_gte?: InputMaybe<Scalars['String']>;
  service_lte?: InputMaybe<Scalars['String']>;
  service_in?: InputMaybe<Array<Scalars['String']>>;
  service_not_in?: InputMaybe<Array<Scalars['String']>>;
  service_contains?: InputMaybe<Scalars['String']>;
  service_contains_nocase?: InputMaybe<Scalars['String']>;
  service_not_contains?: InputMaybe<Scalars['String']>;
  service_not_contains_nocase?: InputMaybe<Scalars['String']>;
  service_starts_with?: InputMaybe<Scalars['String']>;
  service_starts_with_nocase?: InputMaybe<Scalars['String']>;
  service_not_starts_with?: InputMaybe<Scalars['String']>;
  service_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  service_ends_with?: InputMaybe<Scalars['String']>;
  service_ends_with_nocase?: InputMaybe<Scalars['String']>;
  service_not_ends_with?: InputMaybe<Scalars['String']>;
  service_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  service_?: InputMaybe<Service_filter>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  to?: InputMaybe<Scalars['String']>;
  to_not?: InputMaybe<Scalars['String']>;
  to_gt?: InputMaybe<Scalars['String']>;
  to_lt?: InputMaybe<Scalars['String']>;
  to_gte?: InputMaybe<Scalars['String']>;
  to_lte?: InputMaybe<Scalars['String']>;
  to_in?: InputMaybe<Array<Scalars['String']>>;
  to_not_in?: InputMaybe<Array<Scalars['String']>>;
  to_contains?: InputMaybe<Scalars['String']>;
  to_contains_nocase?: InputMaybe<Scalars['String']>;
  to_not_contains?: InputMaybe<Scalars['String']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']>;
  to_starts_with?: InputMaybe<Scalars['String']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_starts_with?: InputMaybe<Scalars['String']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_ends_with?: InputMaybe<Scalars['String']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_ends_with?: InputMaybe<Scalars['String']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_?: InputMaybe<User_filter>;
  rating?: InputMaybe<Scalars['BigInt']>;
  rating_not?: InputMaybe<Scalars['BigInt']>;
  rating_gt?: InputMaybe<Scalars['BigInt']>;
  rating_lt?: InputMaybe<Scalars['BigInt']>;
  rating_gte?: InputMaybe<Scalars['BigInt']>;
  rating_lte?: InputMaybe<Scalars['BigInt']>;
  rating_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rating_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
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
  description_?: InputMaybe<ReviewDescription_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Review_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Review_filter>>>;
};

export type Review_orderBy =
  | 'id'
  | 'service'
  | 'service__id'
  | 'service__createdAt'
  | 'service__updatedAt'
  | 'service__status'
  | 'service__cid'
  | 'createdAt'
  | 'to'
  | 'to__id'
  | 'to__index'
  | 'to__handle'
  | 'to__createdAt'
  | 'to__updatedAt'
  | 'to__numReviews'
  | 'to__address'
  | 'to__rating'
  | 'to__cid'
  | 'rating'
  | 'cid'
  | 'description'
  | 'description__id'
  | 'description__content';

export type Service = {
  id: Scalars['ID'];
  createdAt: Scalars['BigInt'];
  updatedAt: Scalars['BigInt'];
  status: ServiceStatus;
  buyer?: Maybe<User>;
  seller?: Maybe<User>;
  transaction?: Maybe<Transaction>;
  proposals?: Maybe<Array<Proposal>>;
  platform?: Maybe<Platform>;
  cid?: Maybe<Scalars['String']>;
  description?: Maybe<ServiceDescription>;
};


export type ServiceproposalsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Proposal_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Proposal_filter>;
};

export type ServiceDescription = {
  id: Scalars['ID'];
  service: Service;
  title?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['BigInt']>;
  expectedEndDate?: Maybe<Scalars['BigInt']>;
  keywords?: Maybe<Array<Keyword>>;
  keywords_raw?: Maybe<Scalars['String']>;
  rateToken?: Maybe<Scalars['String']>;
  rateAmount?: Maybe<Scalars['String']>;
  video_url?: Maybe<Scalars['String']>;
};


export type ServiceDescriptionkeywordsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Keyword_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Keyword_filter>;
};

export type ServiceDescription_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  service?: InputMaybe<Scalars['String']>;
  service_not?: InputMaybe<Scalars['String']>;
  service_gt?: InputMaybe<Scalars['String']>;
  service_lt?: InputMaybe<Scalars['String']>;
  service_gte?: InputMaybe<Scalars['String']>;
  service_lte?: InputMaybe<Scalars['String']>;
  service_in?: InputMaybe<Array<Scalars['String']>>;
  service_not_in?: InputMaybe<Array<Scalars['String']>>;
  service_contains?: InputMaybe<Scalars['String']>;
  service_contains_nocase?: InputMaybe<Scalars['String']>;
  service_not_contains?: InputMaybe<Scalars['String']>;
  service_not_contains_nocase?: InputMaybe<Scalars['String']>;
  service_starts_with?: InputMaybe<Scalars['String']>;
  service_starts_with_nocase?: InputMaybe<Scalars['String']>;
  service_not_starts_with?: InputMaybe<Scalars['String']>;
  service_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  service_ends_with?: InputMaybe<Scalars['String']>;
  service_ends_with_nocase?: InputMaybe<Scalars['String']>;
  service_not_ends_with?: InputMaybe<Scalars['String']>;
  service_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  service_?: InputMaybe<Service_filter>;
  title?: InputMaybe<Scalars['String']>;
  title_not?: InputMaybe<Scalars['String']>;
  title_gt?: InputMaybe<Scalars['String']>;
  title_lt?: InputMaybe<Scalars['String']>;
  title_gte?: InputMaybe<Scalars['String']>;
  title_lte?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<Scalars['String']>>;
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_contains_nocase?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_contains_nocase?: InputMaybe<Scalars['String']>;
  title_starts_with?: InputMaybe<Scalars['String']>;
  title_starts_with_nocase?: InputMaybe<Scalars['String']>;
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  title_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  title_ends_with?: InputMaybe<Scalars['String']>;
  title_ends_with_nocase?: InputMaybe<Scalars['String']>;
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  title_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
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
  startDate?: InputMaybe<Scalars['BigInt']>;
  startDate_not?: InputMaybe<Scalars['BigInt']>;
  startDate_gt?: InputMaybe<Scalars['BigInt']>;
  startDate_lt?: InputMaybe<Scalars['BigInt']>;
  startDate_gte?: InputMaybe<Scalars['BigInt']>;
  startDate_lte?: InputMaybe<Scalars['BigInt']>;
  startDate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startDate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  expectedEndDate?: InputMaybe<Scalars['BigInt']>;
  expectedEndDate_not?: InputMaybe<Scalars['BigInt']>;
  expectedEndDate_gt?: InputMaybe<Scalars['BigInt']>;
  expectedEndDate_lt?: InputMaybe<Scalars['BigInt']>;
  expectedEndDate_gte?: InputMaybe<Scalars['BigInt']>;
  expectedEndDate_lte?: InputMaybe<Scalars['BigInt']>;
  expectedEndDate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  expectedEndDate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  keywords?: InputMaybe<Array<Scalars['String']>>;
  keywords_not?: InputMaybe<Array<Scalars['String']>>;
  keywords_contains?: InputMaybe<Array<Scalars['String']>>;
  keywords_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  keywords_not_contains?: InputMaybe<Array<Scalars['String']>>;
  keywords_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  keywords_?: InputMaybe<Keyword_filter>;
  keywords_raw?: InputMaybe<Scalars['String']>;
  keywords_raw_not?: InputMaybe<Scalars['String']>;
  keywords_raw_gt?: InputMaybe<Scalars['String']>;
  keywords_raw_lt?: InputMaybe<Scalars['String']>;
  keywords_raw_gte?: InputMaybe<Scalars['String']>;
  keywords_raw_lte?: InputMaybe<Scalars['String']>;
  keywords_raw_in?: InputMaybe<Array<Scalars['String']>>;
  keywords_raw_not_in?: InputMaybe<Array<Scalars['String']>>;
  keywords_raw_contains?: InputMaybe<Scalars['String']>;
  keywords_raw_contains_nocase?: InputMaybe<Scalars['String']>;
  keywords_raw_not_contains?: InputMaybe<Scalars['String']>;
  keywords_raw_not_contains_nocase?: InputMaybe<Scalars['String']>;
  keywords_raw_starts_with?: InputMaybe<Scalars['String']>;
  keywords_raw_starts_with_nocase?: InputMaybe<Scalars['String']>;
  keywords_raw_not_starts_with?: InputMaybe<Scalars['String']>;
  keywords_raw_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  keywords_raw_ends_with?: InputMaybe<Scalars['String']>;
  keywords_raw_ends_with_nocase?: InputMaybe<Scalars['String']>;
  keywords_raw_not_ends_with?: InputMaybe<Scalars['String']>;
  keywords_raw_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
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
  rateAmount?: InputMaybe<Scalars['String']>;
  rateAmount_not?: InputMaybe<Scalars['String']>;
  rateAmount_gt?: InputMaybe<Scalars['String']>;
  rateAmount_lt?: InputMaybe<Scalars['String']>;
  rateAmount_gte?: InputMaybe<Scalars['String']>;
  rateAmount_lte?: InputMaybe<Scalars['String']>;
  rateAmount_in?: InputMaybe<Array<Scalars['String']>>;
  rateAmount_not_in?: InputMaybe<Array<Scalars['String']>>;
  rateAmount_contains?: InputMaybe<Scalars['String']>;
  rateAmount_contains_nocase?: InputMaybe<Scalars['String']>;
  rateAmount_not_contains?: InputMaybe<Scalars['String']>;
  rateAmount_not_contains_nocase?: InputMaybe<Scalars['String']>;
  rateAmount_starts_with?: InputMaybe<Scalars['String']>;
  rateAmount_starts_with_nocase?: InputMaybe<Scalars['String']>;
  rateAmount_not_starts_with?: InputMaybe<Scalars['String']>;
  rateAmount_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  rateAmount_ends_with?: InputMaybe<Scalars['String']>;
  rateAmount_ends_with_nocase?: InputMaybe<Scalars['String']>;
  rateAmount_not_ends_with?: InputMaybe<Scalars['String']>;
  rateAmount_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
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
  and?: InputMaybe<Array<InputMaybe<ServiceDescription_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ServiceDescription_filter>>>;
};

export type ServiceDescription_orderBy =
  | 'id'
  | 'service'
  | 'service__id'
  | 'service__createdAt'
  | 'service__updatedAt'
  | 'service__status'
  | 'service__cid'
  | 'title'
  | 'about'
  | 'startDate'
  | 'expectedEndDate'
  | 'keywords'
  | 'keywords_raw'
  | 'rateToken'
  | 'rateAmount'
  | 'video_url';

export type ServiceStatus =
  | 'Opened'
  | 'Confirmed'
  | 'Finished'
  | 'Cancelled'
  | 'Uncompleted';

export type Service_filter = {
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
  status?: InputMaybe<ServiceStatus>;
  status_not?: InputMaybe<ServiceStatus>;
  status_in?: InputMaybe<Array<ServiceStatus>>;
  status_not_in?: InputMaybe<Array<ServiceStatus>>;
  buyer?: InputMaybe<Scalars['String']>;
  buyer_not?: InputMaybe<Scalars['String']>;
  buyer_gt?: InputMaybe<Scalars['String']>;
  buyer_lt?: InputMaybe<Scalars['String']>;
  buyer_gte?: InputMaybe<Scalars['String']>;
  buyer_lte?: InputMaybe<Scalars['String']>;
  buyer_in?: InputMaybe<Array<Scalars['String']>>;
  buyer_not_in?: InputMaybe<Array<Scalars['String']>>;
  buyer_contains?: InputMaybe<Scalars['String']>;
  buyer_contains_nocase?: InputMaybe<Scalars['String']>;
  buyer_not_contains?: InputMaybe<Scalars['String']>;
  buyer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  buyer_starts_with?: InputMaybe<Scalars['String']>;
  buyer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  buyer_not_starts_with?: InputMaybe<Scalars['String']>;
  buyer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  buyer_ends_with?: InputMaybe<Scalars['String']>;
  buyer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  buyer_not_ends_with?: InputMaybe<Scalars['String']>;
  buyer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  buyer_?: InputMaybe<User_filter>;
  seller?: InputMaybe<Scalars['String']>;
  seller_not?: InputMaybe<Scalars['String']>;
  seller_gt?: InputMaybe<Scalars['String']>;
  seller_lt?: InputMaybe<Scalars['String']>;
  seller_gte?: InputMaybe<Scalars['String']>;
  seller_lte?: InputMaybe<Scalars['String']>;
  seller_in?: InputMaybe<Array<Scalars['String']>>;
  seller_not_in?: InputMaybe<Array<Scalars['String']>>;
  seller_contains?: InputMaybe<Scalars['String']>;
  seller_contains_nocase?: InputMaybe<Scalars['String']>;
  seller_not_contains?: InputMaybe<Scalars['String']>;
  seller_not_contains_nocase?: InputMaybe<Scalars['String']>;
  seller_starts_with?: InputMaybe<Scalars['String']>;
  seller_starts_with_nocase?: InputMaybe<Scalars['String']>;
  seller_not_starts_with?: InputMaybe<Scalars['String']>;
  seller_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  seller_ends_with?: InputMaybe<Scalars['String']>;
  seller_ends_with_nocase?: InputMaybe<Scalars['String']>;
  seller_not_ends_with?: InputMaybe<Scalars['String']>;
  seller_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  seller_?: InputMaybe<User_filter>;
  transaction_?: InputMaybe<Transaction_filter>;
  proposals_?: InputMaybe<Proposal_filter>;
  platform?: InputMaybe<Scalars['String']>;
  platform_not?: InputMaybe<Scalars['String']>;
  platform_gt?: InputMaybe<Scalars['String']>;
  platform_lt?: InputMaybe<Scalars['String']>;
  platform_gte?: InputMaybe<Scalars['String']>;
  platform_lte?: InputMaybe<Scalars['String']>;
  platform_in?: InputMaybe<Array<Scalars['String']>>;
  platform_not_in?: InputMaybe<Array<Scalars['String']>>;
  platform_contains?: InputMaybe<Scalars['String']>;
  platform_contains_nocase?: InputMaybe<Scalars['String']>;
  platform_not_contains?: InputMaybe<Scalars['String']>;
  platform_not_contains_nocase?: InputMaybe<Scalars['String']>;
  platform_starts_with?: InputMaybe<Scalars['String']>;
  platform_starts_with_nocase?: InputMaybe<Scalars['String']>;
  platform_not_starts_with?: InputMaybe<Scalars['String']>;
  platform_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  platform_ends_with?: InputMaybe<Scalars['String']>;
  platform_ends_with_nocase?: InputMaybe<Scalars['String']>;
  platform_not_ends_with?: InputMaybe<Scalars['String']>;
  platform_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  platform_?: InputMaybe<Platform_filter>;
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
  description_?: InputMaybe<ServiceDescription_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Service_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Service_filter>>>;
};

export type Service_orderBy =
  | 'id'
  | 'createdAt'
  | 'updatedAt'
  | 'status'
  | 'buyer'
  | 'buyer__id'
  | 'buyer__index'
  | 'buyer__handle'
  | 'buyer__createdAt'
  | 'buyer__updatedAt'
  | 'buyer__numReviews'
  | 'buyer__address'
  | 'buyer__rating'
  | 'buyer__cid'
  | 'seller'
  | 'seller__id'
  | 'seller__index'
  | 'seller__handle'
  | 'seller__createdAt'
  | 'seller__updatedAt'
  | 'seller__numReviews'
  | 'seller__address'
  | 'seller__rating'
  | 'seller__cid'
  | 'transaction'
  | 'transaction__id'
  | 'transaction__amount'
  | 'transaction__protocolEscrowFeeRate'
  | 'transaction__originServiceFeeRate'
  | 'transaction__originValidatedProposalFeeRate'
  | 'transaction__disputeId'
  | 'transaction__senderFee'
  | 'transaction__receiverFee'
  | 'transaction__lastInteraction'
  | 'transaction__status'
  | 'transaction__arbitrator'
  | 'transaction__arbitratorExtraData'
  | 'transaction__arbitrationFeeTimeout'
  | 'transaction__ruling'
  | 'transaction__metaEvidenceUri'
  | 'proposals'
  | 'platform'
  | 'platform__id'
  | 'platform__address'
  | 'platform__name'
  | 'platform__createdAt'
  | 'platform__updatedAt'
  | 'platform__originServiceFeeRate'
  | 'platform__originValidatedProposalFeeRate'
  | 'platform__servicePostingFee'
  | 'platform__proposalPostingFee'
  | 'platform__arbitrator'
  | 'platform__arbitratorExtraData'
  | 'platform__arbitrationFeeTimeout'
  | 'platform__cid'
  | 'platform__signer'
  | 'cid'
  | 'description'
  | 'description__id'
  | 'description__title'
  | 'description__about'
  | 'description__startDate'
  | 'description__expectedEndDate'
  | 'description__keywords_raw'
  | 'description__rateToken'
  | 'description__rateAmount'
  | 'description__video_url';

export type Subscription = {
  service?: Maybe<Service>;
  services: Array<Service>;
  serviceDescription?: Maybe<ServiceDescription>;
  serviceDescriptions: Array<ServiceDescription>;
  keyword?: Maybe<Keyword>;
  keywords: Array<Keyword>;
  review?: Maybe<Review>;
  reviews: Array<Review>;
  reviewDescription?: Maybe<ReviewDescription>;
  reviewDescriptions: Array<ReviewDescription>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
  user?: Maybe<User>;
  users: Array<User>;
  userStats: Array<UserStats>;
  userDescription?: Maybe<UserDescription>;
  userDescriptions: Array<UserDescription>;
  proposal?: Maybe<Proposal>;
  proposals: Array<Proposal>;
  proposalDescription?: Maybe<ProposalDescription>;
  proposalDescriptions: Array<ProposalDescription>;
  payment?: Maybe<Payment>;
  payments: Array<Payment>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  evidence?: Maybe<Evidence>;
  evidences: Array<Evidence>;
  platform?: Maybe<Platform>;
  platforms: Array<Platform>;
  platformDescription?: Maybe<PlatformDescription>;
  platformDescriptions: Array<PlatformDescription>;
  feePayment?: Maybe<FeePayment>;
  feePayments: Array<FeePayment>;
  feeClaim?: Maybe<FeeClaim>;
  feeClaims: Array<FeeClaim>;
  platformGain?: Maybe<PlatformGain>;
  platformGains: Array<PlatformGain>;
  userGain?: Maybe<UserGain>;
  userGains: Array<UserGain>;
  protocol?: Maybe<Protocol>;
  protocols: Array<Protocol>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptionserviceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionservicesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Service_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Service_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionserviceDescriptionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionserviceDescriptionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ServiceDescription_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ServiceDescription_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionkeywordArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionkeywordsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Keyword_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Keyword_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionreviewArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionreviewsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Review_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Review_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionreviewDescriptionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionreviewDescriptionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReviewDescription_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ReviewDescription_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuserArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionusersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<User_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<User_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuserStatsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserStats_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UserStats_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuserDescriptionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuserDescriptionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserDescription_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UserDescription_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionproposalArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionproposalsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Proposal_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Proposal_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionproposalDescriptionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionproposalDescriptionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProposalDescription_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ProposalDescription_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpaymentArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpaymentsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Payment_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Payment_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transaction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionevidenceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionevidencesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Evidence_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Evidence_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionplatformArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionplatformsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Platform_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Platform_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionplatformDescriptionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionplatformDescriptionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PlatformDescription_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PlatformDescription_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfeePaymentArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfeePaymentsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FeePayment_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FeePayment_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfeeClaimArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfeeClaimsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FeeClaim_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FeeClaim_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionplatformGainArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionplatformGainsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PlatformGain_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PlatformGain_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuserGainArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuserGainsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserGain_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UserGain_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionprotocolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionprotocolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Protocol_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Protocol_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Token = {
  id: Scalars['ID'];
  address: Scalars['Bytes'];
  symbol: Scalars['String'];
  name: Scalars['String'];
  decimals: Scalars['BigInt'];
  allowed: Scalars['Boolean'];
  minimumTransactionAmount: Scalars['BigInt'];
};

export type Token_filter = {
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
  symbol?: InputMaybe<Scalars['String']>;
  symbol_not?: InputMaybe<Scalars['String']>;
  symbol_gt?: InputMaybe<Scalars['String']>;
  symbol_lt?: InputMaybe<Scalars['String']>;
  symbol_gte?: InputMaybe<Scalars['String']>;
  symbol_lte?: InputMaybe<Scalars['String']>;
  symbol_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_contains?: InputMaybe<Scalars['String']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_contains?: InputMaybe<Scalars['String']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_starts_with?: InputMaybe<Scalars['String']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_ends_with?: InputMaybe<Scalars['String']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  decimals?: InputMaybe<Scalars['BigInt']>;
  decimals_not?: InputMaybe<Scalars['BigInt']>;
  decimals_gt?: InputMaybe<Scalars['BigInt']>;
  decimals_lt?: InputMaybe<Scalars['BigInt']>;
  decimals_gte?: InputMaybe<Scalars['BigInt']>;
  decimals_lte?: InputMaybe<Scalars['BigInt']>;
  decimals_in?: InputMaybe<Array<Scalars['BigInt']>>;
  decimals_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  allowed?: InputMaybe<Scalars['Boolean']>;
  allowed_not?: InputMaybe<Scalars['Boolean']>;
  allowed_in?: InputMaybe<Array<Scalars['Boolean']>>;
  allowed_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  minimumTransactionAmount?: InputMaybe<Scalars['BigInt']>;
  minimumTransactionAmount_not?: InputMaybe<Scalars['BigInt']>;
  minimumTransactionAmount_gt?: InputMaybe<Scalars['BigInt']>;
  minimumTransactionAmount_lt?: InputMaybe<Scalars['BigInt']>;
  minimumTransactionAmount_gte?: InputMaybe<Scalars['BigInt']>;
  minimumTransactionAmount_lte?: InputMaybe<Scalars['BigInt']>;
  minimumTransactionAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  minimumTransactionAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Token_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Token_filter>>>;
};

export type Token_orderBy =
  | 'id'
  | 'address'
  | 'symbol'
  | 'name'
  | 'decimals'
  | 'allowed'
  | 'minimumTransactionAmount';

export type Transaction = {
  id: Scalars['ID'];
  sender?: Maybe<User>;
  receiver?: Maybe<User>;
  token: Token;
  amount: Scalars['BigInt'];
  service?: Maybe<Service>;
  protocolEscrowFeeRate: Scalars['Int'];
  originServiceFeeRate: Scalars['Int'];
  originValidatedProposalFeeRate: Scalars['Int'];
  disputeId?: Maybe<Scalars['BigInt']>;
  senderFee: Scalars['BigInt'];
  receiverFee: Scalars['BigInt'];
  lastInteraction: Scalars['BigInt'];
  status: TransactionStatus;
  arbitrator: Scalars['Bytes'];
  arbitratorExtraData: Scalars['Bytes'];
  arbitrationFeeTimeout: Scalars['BigInt'];
  ruling?: Maybe<Scalars['BigInt']>;
  evidences?: Maybe<Array<Evidence>>;
  metaEvidenceUri: Scalars['String'];
  payments?: Maybe<Array<Payment>>;
};


export type TransactionevidencesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Evidence_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Evidence_filter>;
};


export type TransactionpaymentsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Payment_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Payment_filter>;
};

export type TransactionStatus =
  | 'NoDispute'
  | 'WaitingSender'
  | 'WaitingReceiver'
  | 'DisputeCreated'
  | 'Resolved';

export type Transaction_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  sender?: InputMaybe<Scalars['String']>;
  sender_not?: InputMaybe<Scalars['String']>;
  sender_gt?: InputMaybe<Scalars['String']>;
  sender_lt?: InputMaybe<Scalars['String']>;
  sender_gte?: InputMaybe<Scalars['String']>;
  sender_lte?: InputMaybe<Scalars['String']>;
  sender_in?: InputMaybe<Array<Scalars['String']>>;
  sender_not_in?: InputMaybe<Array<Scalars['String']>>;
  sender_contains?: InputMaybe<Scalars['String']>;
  sender_contains_nocase?: InputMaybe<Scalars['String']>;
  sender_not_contains?: InputMaybe<Scalars['String']>;
  sender_not_contains_nocase?: InputMaybe<Scalars['String']>;
  sender_starts_with?: InputMaybe<Scalars['String']>;
  sender_starts_with_nocase?: InputMaybe<Scalars['String']>;
  sender_not_starts_with?: InputMaybe<Scalars['String']>;
  sender_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  sender_ends_with?: InputMaybe<Scalars['String']>;
  sender_ends_with_nocase?: InputMaybe<Scalars['String']>;
  sender_not_ends_with?: InputMaybe<Scalars['String']>;
  sender_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  sender_?: InputMaybe<User_filter>;
  receiver?: InputMaybe<Scalars['String']>;
  receiver_not?: InputMaybe<Scalars['String']>;
  receiver_gt?: InputMaybe<Scalars['String']>;
  receiver_lt?: InputMaybe<Scalars['String']>;
  receiver_gte?: InputMaybe<Scalars['String']>;
  receiver_lte?: InputMaybe<Scalars['String']>;
  receiver_in?: InputMaybe<Array<Scalars['String']>>;
  receiver_not_in?: InputMaybe<Array<Scalars['String']>>;
  receiver_contains?: InputMaybe<Scalars['String']>;
  receiver_contains_nocase?: InputMaybe<Scalars['String']>;
  receiver_not_contains?: InputMaybe<Scalars['String']>;
  receiver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  receiver_starts_with?: InputMaybe<Scalars['String']>;
  receiver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  receiver_not_starts_with?: InputMaybe<Scalars['String']>;
  receiver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  receiver_ends_with?: InputMaybe<Scalars['String']>;
  receiver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  receiver_not_ends_with?: InputMaybe<Scalars['String']>;
  receiver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  receiver_?: InputMaybe<User_filter>;
  token?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<Token_filter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  service?: InputMaybe<Scalars['String']>;
  service_not?: InputMaybe<Scalars['String']>;
  service_gt?: InputMaybe<Scalars['String']>;
  service_lt?: InputMaybe<Scalars['String']>;
  service_gte?: InputMaybe<Scalars['String']>;
  service_lte?: InputMaybe<Scalars['String']>;
  service_in?: InputMaybe<Array<Scalars['String']>>;
  service_not_in?: InputMaybe<Array<Scalars['String']>>;
  service_contains?: InputMaybe<Scalars['String']>;
  service_contains_nocase?: InputMaybe<Scalars['String']>;
  service_not_contains?: InputMaybe<Scalars['String']>;
  service_not_contains_nocase?: InputMaybe<Scalars['String']>;
  service_starts_with?: InputMaybe<Scalars['String']>;
  service_starts_with_nocase?: InputMaybe<Scalars['String']>;
  service_not_starts_with?: InputMaybe<Scalars['String']>;
  service_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  service_ends_with?: InputMaybe<Scalars['String']>;
  service_ends_with_nocase?: InputMaybe<Scalars['String']>;
  service_not_ends_with?: InputMaybe<Scalars['String']>;
  service_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  service_?: InputMaybe<Service_filter>;
  protocolEscrowFeeRate?: InputMaybe<Scalars['Int']>;
  protocolEscrowFeeRate_not?: InputMaybe<Scalars['Int']>;
  protocolEscrowFeeRate_gt?: InputMaybe<Scalars['Int']>;
  protocolEscrowFeeRate_lt?: InputMaybe<Scalars['Int']>;
  protocolEscrowFeeRate_gte?: InputMaybe<Scalars['Int']>;
  protocolEscrowFeeRate_lte?: InputMaybe<Scalars['Int']>;
  protocolEscrowFeeRate_in?: InputMaybe<Array<Scalars['Int']>>;
  protocolEscrowFeeRate_not_in?: InputMaybe<Array<Scalars['Int']>>;
  originServiceFeeRate?: InputMaybe<Scalars['Int']>;
  originServiceFeeRate_not?: InputMaybe<Scalars['Int']>;
  originServiceFeeRate_gt?: InputMaybe<Scalars['Int']>;
  originServiceFeeRate_lt?: InputMaybe<Scalars['Int']>;
  originServiceFeeRate_gte?: InputMaybe<Scalars['Int']>;
  originServiceFeeRate_lte?: InputMaybe<Scalars['Int']>;
  originServiceFeeRate_in?: InputMaybe<Array<Scalars['Int']>>;
  originServiceFeeRate_not_in?: InputMaybe<Array<Scalars['Int']>>;
  originValidatedProposalFeeRate?: InputMaybe<Scalars['Int']>;
  originValidatedProposalFeeRate_not?: InputMaybe<Scalars['Int']>;
  originValidatedProposalFeeRate_gt?: InputMaybe<Scalars['Int']>;
  originValidatedProposalFeeRate_lt?: InputMaybe<Scalars['Int']>;
  originValidatedProposalFeeRate_gte?: InputMaybe<Scalars['Int']>;
  originValidatedProposalFeeRate_lte?: InputMaybe<Scalars['Int']>;
  originValidatedProposalFeeRate_in?: InputMaybe<Array<Scalars['Int']>>;
  originValidatedProposalFeeRate_not_in?: InputMaybe<Array<Scalars['Int']>>;
  disputeId?: InputMaybe<Scalars['BigInt']>;
  disputeId_not?: InputMaybe<Scalars['BigInt']>;
  disputeId_gt?: InputMaybe<Scalars['BigInt']>;
  disputeId_lt?: InputMaybe<Scalars['BigInt']>;
  disputeId_gte?: InputMaybe<Scalars['BigInt']>;
  disputeId_lte?: InputMaybe<Scalars['BigInt']>;
  disputeId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  disputeId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  senderFee?: InputMaybe<Scalars['BigInt']>;
  senderFee_not?: InputMaybe<Scalars['BigInt']>;
  senderFee_gt?: InputMaybe<Scalars['BigInt']>;
  senderFee_lt?: InputMaybe<Scalars['BigInt']>;
  senderFee_gte?: InputMaybe<Scalars['BigInt']>;
  senderFee_lte?: InputMaybe<Scalars['BigInt']>;
  senderFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  senderFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  receiverFee?: InputMaybe<Scalars['BigInt']>;
  receiverFee_not?: InputMaybe<Scalars['BigInt']>;
  receiverFee_gt?: InputMaybe<Scalars['BigInt']>;
  receiverFee_lt?: InputMaybe<Scalars['BigInt']>;
  receiverFee_gte?: InputMaybe<Scalars['BigInt']>;
  receiverFee_lte?: InputMaybe<Scalars['BigInt']>;
  receiverFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  receiverFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lastInteraction?: InputMaybe<Scalars['BigInt']>;
  lastInteraction_not?: InputMaybe<Scalars['BigInt']>;
  lastInteraction_gt?: InputMaybe<Scalars['BigInt']>;
  lastInteraction_lt?: InputMaybe<Scalars['BigInt']>;
  lastInteraction_gte?: InputMaybe<Scalars['BigInt']>;
  lastInteraction_lte?: InputMaybe<Scalars['BigInt']>;
  lastInteraction_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lastInteraction_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  status?: InputMaybe<TransactionStatus>;
  status_not?: InputMaybe<TransactionStatus>;
  status_in?: InputMaybe<Array<TransactionStatus>>;
  status_not_in?: InputMaybe<Array<TransactionStatus>>;
  arbitrator?: InputMaybe<Scalars['Bytes']>;
  arbitrator_not?: InputMaybe<Scalars['Bytes']>;
  arbitrator_gt?: InputMaybe<Scalars['Bytes']>;
  arbitrator_lt?: InputMaybe<Scalars['Bytes']>;
  arbitrator_gte?: InputMaybe<Scalars['Bytes']>;
  arbitrator_lte?: InputMaybe<Scalars['Bytes']>;
  arbitrator_in?: InputMaybe<Array<Scalars['Bytes']>>;
  arbitrator_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  arbitrator_contains?: InputMaybe<Scalars['Bytes']>;
  arbitrator_not_contains?: InputMaybe<Scalars['Bytes']>;
  arbitratorExtraData?: InputMaybe<Scalars['Bytes']>;
  arbitratorExtraData_not?: InputMaybe<Scalars['Bytes']>;
  arbitratorExtraData_gt?: InputMaybe<Scalars['Bytes']>;
  arbitratorExtraData_lt?: InputMaybe<Scalars['Bytes']>;
  arbitratorExtraData_gte?: InputMaybe<Scalars['Bytes']>;
  arbitratorExtraData_lte?: InputMaybe<Scalars['Bytes']>;
  arbitratorExtraData_in?: InputMaybe<Array<Scalars['Bytes']>>;
  arbitratorExtraData_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  arbitratorExtraData_contains?: InputMaybe<Scalars['Bytes']>;
  arbitratorExtraData_not_contains?: InputMaybe<Scalars['Bytes']>;
  arbitrationFeeTimeout?: InputMaybe<Scalars['BigInt']>;
  arbitrationFeeTimeout_not?: InputMaybe<Scalars['BigInt']>;
  arbitrationFeeTimeout_gt?: InputMaybe<Scalars['BigInt']>;
  arbitrationFeeTimeout_lt?: InputMaybe<Scalars['BigInt']>;
  arbitrationFeeTimeout_gte?: InputMaybe<Scalars['BigInt']>;
  arbitrationFeeTimeout_lte?: InputMaybe<Scalars['BigInt']>;
  arbitrationFeeTimeout_in?: InputMaybe<Array<Scalars['BigInt']>>;
  arbitrationFeeTimeout_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  ruling?: InputMaybe<Scalars['BigInt']>;
  ruling_not?: InputMaybe<Scalars['BigInt']>;
  ruling_gt?: InputMaybe<Scalars['BigInt']>;
  ruling_lt?: InputMaybe<Scalars['BigInt']>;
  ruling_gte?: InputMaybe<Scalars['BigInt']>;
  ruling_lte?: InputMaybe<Scalars['BigInt']>;
  ruling_in?: InputMaybe<Array<Scalars['BigInt']>>;
  ruling_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  evidences_?: InputMaybe<Evidence_filter>;
  metaEvidenceUri?: InputMaybe<Scalars['String']>;
  metaEvidenceUri_not?: InputMaybe<Scalars['String']>;
  metaEvidenceUri_gt?: InputMaybe<Scalars['String']>;
  metaEvidenceUri_lt?: InputMaybe<Scalars['String']>;
  metaEvidenceUri_gte?: InputMaybe<Scalars['String']>;
  metaEvidenceUri_lte?: InputMaybe<Scalars['String']>;
  metaEvidenceUri_in?: InputMaybe<Array<Scalars['String']>>;
  metaEvidenceUri_not_in?: InputMaybe<Array<Scalars['String']>>;
  metaEvidenceUri_contains?: InputMaybe<Scalars['String']>;
  metaEvidenceUri_contains_nocase?: InputMaybe<Scalars['String']>;
  metaEvidenceUri_not_contains?: InputMaybe<Scalars['String']>;
  metaEvidenceUri_not_contains_nocase?: InputMaybe<Scalars['String']>;
  metaEvidenceUri_starts_with?: InputMaybe<Scalars['String']>;
  metaEvidenceUri_starts_with_nocase?: InputMaybe<Scalars['String']>;
  metaEvidenceUri_not_starts_with?: InputMaybe<Scalars['String']>;
  metaEvidenceUri_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  metaEvidenceUri_ends_with?: InputMaybe<Scalars['String']>;
  metaEvidenceUri_ends_with_nocase?: InputMaybe<Scalars['String']>;
  metaEvidenceUri_not_ends_with?: InputMaybe<Scalars['String']>;
  metaEvidenceUri_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  payments_?: InputMaybe<Payment_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Transaction_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Transaction_filter>>>;
};

export type Transaction_orderBy =
  | 'id'
  | 'sender'
  | 'sender__id'
  | 'sender__index'
  | 'sender__handle'
  | 'sender__createdAt'
  | 'sender__updatedAt'
  | 'sender__numReviews'
  | 'sender__address'
  | 'sender__rating'
  | 'sender__cid'
  | 'receiver'
  | 'receiver__id'
  | 'receiver__index'
  | 'receiver__handle'
  | 'receiver__createdAt'
  | 'receiver__updatedAt'
  | 'receiver__numReviews'
  | 'receiver__address'
  | 'receiver__rating'
  | 'receiver__cid'
  | 'token'
  | 'token__id'
  | 'token__address'
  | 'token__symbol'
  | 'token__name'
  | 'token__decimals'
  | 'token__allowed'
  | 'token__minimumTransactionAmount'
  | 'amount'
  | 'service'
  | 'service__id'
  | 'service__createdAt'
  | 'service__updatedAt'
  | 'service__status'
  | 'service__cid'
  | 'protocolEscrowFeeRate'
  | 'originServiceFeeRate'
  | 'originValidatedProposalFeeRate'
  | 'disputeId'
  | 'senderFee'
  | 'receiverFee'
  | 'lastInteraction'
  | 'status'
  | 'arbitrator'
  | 'arbitratorExtraData'
  | 'arbitrationFeeTimeout'
  | 'ruling'
  | 'evidences'
  | 'metaEvidenceUri'
  | 'payments';

export type User = {
  id: Scalars['ID'];
  index: Scalars['BigInt'];
  handle: Scalars['String'];
  createdAt: Scalars['BigInt'];
  updatedAt: Scalars['BigInt'];
  platform?: Maybe<Platform>;
  numReviews?: Maybe<Scalars['BigInt']>;
  address: Scalars['String'];
  rating: Scalars['BigDecimal'];
  reviews?: Maybe<Array<Review>>;
  buyerServices?: Maybe<Array<Service>>;
  sellerServices?: Maybe<Array<Service>>;
  totalGains?: Maybe<Array<UserGain>>;
  cid?: Maybe<Scalars['String']>;
  description?: Maybe<UserDescription>;
  delegates: Array<Scalars['String']>;
  userStats?: Maybe<UserStats>;
};


export type UserreviewsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Review_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Review_filter>;
};


export type UserbuyerServicesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Service_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Service_filter>;
};


export type UsersellerServicesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Service_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Service_filter>;
};


export type UsertotalGainsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserGain_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UserGain_filter>;
};

export type UserDescription = {
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  skills_raw?: Maybe<Scalars['String']>;
  skills?: Maybe<Array<Keyword>>;
  timezone?: Maybe<Scalars['BigInt']>;
  headline?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  user: User;
  role?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  video_url?: Maybe<Scalars['String']>;
  image_url?: Maybe<Scalars['String']>;
};


export type UserDescriptionskillsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Keyword_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Keyword_filter>;
};

export type UserDescription_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  title?: InputMaybe<Scalars['String']>;
  title_not?: InputMaybe<Scalars['String']>;
  title_gt?: InputMaybe<Scalars['String']>;
  title_lt?: InputMaybe<Scalars['String']>;
  title_gte?: InputMaybe<Scalars['String']>;
  title_lte?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<Scalars['String']>>;
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_contains_nocase?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_contains_nocase?: InputMaybe<Scalars['String']>;
  title_starts_with?: InputMaybe<Scalars['String']>;
  title_starts_with_nocase?: InputMaybe<Scalars['String']>;
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  title_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  title_ends_with?: InputMaybe<Scalars['String']>;
  title_ends_with_nocase?: InputMaybe<Scalars['String']>;
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  title_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
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
  skills_raw?: InputMaybe<Scalars['String']>;
  skills_raw_not?: InputMaybe<Scalars['String']>;
  skills_raw_gt?: InputMaybe<Scalars['String']>;
  skills_raw_lt?: InputMaybe<Scalars['String']>;
  skills_raw_gte?: InputMaybe<Scalars['String']>;
  skills_raw_lte?: InputMaybe<Scalars['String']>;
  skills_raw_in?: InputMaybe<Array<Scalars['String']>>;
  skills_raw_not_in?: InputMaybe<Array<Scalars['String']>>;
  skills_raw_contains?: InputMaybe<Scalars['String']>;
  skills_raw_contains_nocase?: InputMaybe<Scalars['String']>;
  skills_raw_not_contains?: InputMaybe<Scalars['String']>;
  skills_raw_not_contains_nocase?: InputMaybe<Scalars['String']>;
  skills_raw_starts_with?: InputMaybe<Scalars['String']>;
  skills_raw_starts_with_nocase?: InputMaybe<Scalars['String']>;
  skills_raw_not_starts_with?: InputMaybe<Scalars['String']>;
  skills_raw_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  skills_raw_ends_with?: InputMaybe<Scalars['String']>;
  skills_raw_ends_with_nocase?: InputMaybe<Scalars['String']>;
  skills_raw_not_ends_with?: InputMaybe<Scalars['String']>;
  skills_raw_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  skills?: InputMaybe<Array<Scalars['String']>>;
  skills_not?: InputMaybe<Array<Scalars['String']>>;
  skills_contains?: InputMaybe<Array<Scalars['String']>>;
  skills_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  skills_not_contains?: InputMaybe<Array<Scalars['String']>>;
  skills_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  skills_?: InputMaybe<Keyword_filter>;
  timezone?: InputMaybe<Scalars['BigInt']>;
  timezone_not?: InputMaybe<Scalars['BigInt']>;
  timezone_gt?: InputMaybe<Scalars['BigInt']>;
  timezone_lt?: InputMaybe<Scalars['BigInt']>;
  timezone_gte?: InputMaybe<Scalars['BigInt']>;
  timezone_lte?: InputMaybe<Scalars['BigInt']>;
  timezone_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timezone_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  headline?: InputMaybe<Scalars['String']>;
  headline_not?: InputMaybe<Scalars['String']>;
  headline_gt?: InputMaybe<Scalars['String']>;
  headline_lt?: InputMaybe<Scalars['String']>;
  headline_gte?: InputMaybe<Scalars['String']>;
  headline_lte?: InputMaybe<Scalars['String']>;
  headline_in?: InputMaybe<Array<Scalars['String']>>;
  headline_not_in?: InputMaybe<Array<Scalars['String']>>;
  headline_contains?: InputMaybe<Scalars['String']>;
  headline_contains_nocase?: InputMaybe<Scalars['String']>;
  headline_not_contains?: InputMaybe<Scalars['String']>;
  headline_not_contains_nocase?: InputMaybe<Scalars['String']>;
  headline_starts_with?: InputMaybe<Scalars['String']>;
  headline_starts_with_nocase?: InputMaybe<Scalars['String']>;
  headline_not_starts_with?: InputMaybe<Scalars['String']>;
  headline_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  headline_ends_with?: InputMaybe<Scalars['String']>;
  headline_ends_with_nocase?: InputMaybe<Scalars['String']>;
  headline_not_ends_with?: InputMaybe<Scalars['String']>;
  headline_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  country_not?: InputMaybe<Scalars['String']>;
  country_gt?: InputMaybe<Scalars['String']>;
  country_lt?: InputMaybe<Scalars['String']>;
  country_gte?: InputMaybe<Scalars['String']>;
  country_lte?: InputMaybe<Scalars['String']>;
  country_in?: InputMaybe<Array<Scalars['String']>>;
  country_not_in?: InputMaybe<Array<Scalars['String']>>;
  country_contains?: InputMaybe<Scalars['String']>;
  country_contains_nocase?: InputMaybe<Scalars['String']>;
  country_not_contains?: InputMaybe<Scalars['String']>;
  country_not_contains_nocase?: InputMaybe<Scalars['String']>;
  country_starts_with?: InputMaybe<Scalars['String']>;
  country_starts_with_nocase?: InputMaybe<Scalars['String']>;
  country_not_starts_with?: InputMaybe<Scalars['String']>;
  country_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  country_ends_with?: InputMaybe<Scalars['String']>;
  country_ends_with_nocase?: InputMaybe<Scalars['String']>;
  country_not_ends_with?: InputMaybe<Scalars['String']>;
  country_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Scalars['String']>;
  user_not?: InputMaybe<Scalars['String']>;
  user_gt?: InputMaybe<Scalars['String']>;
  user_lt?: InputMaybe<Scalars['String']>;
  user_gte?: InputMaybe<Scalars['String']>;
  user_lte?: InputMaybe<Scalars['String']>;
  user_in?: InputMaybe<Array<Scalars['String']>>;
  user_not_in?: InputMaybe<Array<Scalars['String']>>;
  user_contains?: InputMaybe<Scalars['String']>;
  user_contains_nocase?: InputMaybe<Scalars['String']>;
  user_not_contains?: InputMaybe<Scalars['String']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']>;
  user_starts_with?: InputMaybe<Scalars['String']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_starts_with?: InputMaybe<Scalars['String']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_ends_with?: InputMaybe<Scalars['String']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_ends_with?: InputMaybe<Scalars['String']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_?: InputMaybe<User_filter>;
  role?: InputMaybe<Scalars['String']>;
  role_not?: InputMaybe<Scalars['String']>;
  role_gt?: InputMaybe<Scalars['String']>;
  role_lt?: InputMaybe<Scalars['String']>;
  role_gte?: InputMaybe<Scalars['String']>;
  role_lte?: InputMaybe<Scalars['String']>;
  role_in?: InputMaybe<Array<Scalars['String']>>;
  role_not_in?: InputMaybe<Array<Scalars['String']>>;
  role_contains?: InputMaybe<Scalars['String']>;
  role_contains_nocase?: InputMaybe<Scalars['String']>;
  role_not_contains?: InputMaybe<Scalars['String']>;
  role_not_contains_nocase?: InputMaybe<Scalars['String']>;
  role_starts_with?: InputMaybe<Scalars['String']>;
  role_starts_with_nocase?: InputMaybe<Scalars['String']>;
  role_not_starts_with?: InputMaybe<Scalars['String']>;
  role_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  role_ends_with?: InputMaybe<Scalars['String']>;
  role_ends_with_nocase?: InputMaybe<Scalars['String']>;
  role_not_ends_with?: InputMaybe<Scalars['String']>;
  role_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
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
  image_url?: InputMaybe<Scalars['String']>;
  image_url_not?: InputMaybe<Scalars['String']>;
  image_url_gt?: InputMaybe<Scalars['String']>;
  image_url_lt?: InputMaybe<Scalars['String']>;
  image_url_gte?: InputMaybe<Scalars['String']>;
  image_url_lte?: InputMaybe<Scalars['String']>;
  image_url_in?: InputMaybe<Array<Scalars['String']>>;
  image_url_not_in?: InputMaybe<Array<Scalars['String']>>;
  image_url_contains?: InputMaybe<Scalars['String']>;
  image_url_contains_nocase?: InputMaybe<Scalars['String']>;
  image_url_not_contains?: InputMaybe<Scalars['String']>;
  image_url_not_contains_nocase?: InputMaybe<Scalars['String']>;
  image_url_starts_with?: InputMaybe<Scalars['String']>;
  image_url_starts_with_nocase?: InputMaybe<Scalars['String']>;
  image_url_not_starts_with?: InputMaybe<Scalars['String']>;
  image_url_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  image_url_ends_with?: InputMaybe<Scalars['String']>;
  image_url_ends_with_nocase?: InputMaybe<Scalars['String']>;
  image_url_not_ends_with?: InputMaybe<Scalars['String']>;
  image_url_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<UserDescription_filter>>>;
  or?: InputMaybe<Array<InputMaybe<UserDescription_filter>>>;
};

export type UserDescription_orderBy =
  | 'id'
  | 'title'
  | 'about'
  | 'skills_raw'
  | 'skills'
  | 'timezone'
  | 'headline'
  | 'country'
  | 'user'
  | 'user__id'
  | 'user__index'
  | 'user__handle'
  | 'user__createdAt'
  | 'user__updatedAt'
  | 'user__numReviews'
  | 'user__address'
  | 'user__rating'
  | 'user__cid'
  | 'role'
  | 'name'
  | 'video_url'
  | 'image_url';

export type UserGain = {
  id: Scalars['ID'];
  user?: Maybe<User>;
  token?: Maybe<Token>;
  totalGain: Scalars['BigInt'];
};

export type UserGain_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  user?: InputMaybe<Scalars['String']>;
  user_not?: InputMaybe<Scalars['String']>;
  user_gt?: InputMaybe<Scalars['String']>;
  user_lt?: InputMaybe<Scalars['String']>;
  user_gte?: InputMaybe<Scalars['String']>;
  user_lte?: InputMaybe<Scalars['String']>;
  user_in?: InputMaybe<Array<Scalars['String']>>;
  user_not_in?: InputMaybe<Array<Scalars['String']>>;
  user_contains?: InputMaybe<Scalars['String']>;
  user_contains_nocase?: InputMaybe<Scalars['String']>;
  user_not_contains?: InputMaybe<Scalars['String']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']>;
  user_starts_with?: InputMaybe<Scalars['String']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_starts_with?: InputMaybe<Scalars['String']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_ends_with?: InputMaybe<Scalars['String']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_ends_with?: InputMaybe<Scalars['String']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_?: InputMaybe<User_filter>;
  token?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<Token_filter>;
  totalGain?: InputMaybe<Scalars['BigInt']>;
  totalGain_not?: InputMaybe<Scalars['BigInt']>;
  totalGain_gt?: InputMaybe<Scalars['BigInt']>;
  totalGain_lt?: InputMaybe<Scalars['BigInt']>;
  totalGain_gte?: InputMaybe<Scalars['BigInt']>;
  totalGain_lte?: InputMaybe<Scalars['BigInt']>;
  totalGain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalGain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<UserGain_filter>>>;
  or?: InputMaybe<Array<InputMaybe<UserGain_filter>>>;
};

export type UserGain_orderBy =
  | 'id'
  | 'user'
  | 'user__id'
  | 'user__index'
  | 'user__handle'
  | 'user__createdAt'
  | 'user__updatedAt'
  | 'user__numReviews'
  | 'user__address'
  | 'user__rating'
  | 'user__cid'
  | 'token'
  | 'token__id'
  | 'token__address'
  | 'token__symbol'
  | 'token__name'
  | 'token__decimals'
  | 'token__allowed'
  | 'token__minimumTransactionAmount'
  | 'totalGain';

export type UserStats = {
  id: Scalars['ID'];
  numReceivedReviews: Scalars['BigInt'];
  numGivenReviews: Scalars['BigInt'];
  numCreatedServices: Scalars['BigInt'];
  numFinishedServicesAsBuyer: Scalars['BigInt'];
  numCreatedProposals: Scalars['BigInt'];
  numFinishedServicesAsSeller: Scalars['BigInt'];
  user: User;
};

export type UserStats_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  numReceivedReviews?: InputMaybe<Scalars['BigInt']>;
  numReceivedReviews_not?: InputMaybe<Scalars['BigInt']>;
  numReceivedReviews_gt?: InputMaybe<Scalars['BigInt']>;
  numReceivedReviews_lt?: InputMaybe<Scalars['BigInt']>;
  numReceivedReviews_gte?: InputMaybe<Scalars['BigInt']>;
  numReceivedReviews_lte?: InputMaybe<Scalars['BigInt']>;
  numReceivedReviews_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numReceivedReviews_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numGivenReviews?: InputMaybe<Scalars['BigInt']>;
  numGivenReviews_not?: InputMaybe<Scalars['BigInt']>;
  numGivenReviews_gt?: InputMaybe<Scalars['BigInt']>;
  numGivenReviews_lt?: InputMaybe<Scalars['BigInt']>;
  numGivenReviews_gte?: InputMaybe<Scalars['BigInt']>;
  numGivenReviews_lte?: InputMaybe<Scalars['BigInt']>;
  numGivenReviews_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numGivenReviews_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numCreatedServices?: InputMaybe<Scalars['BigInt']>;
  numCreatedServices_not?: InputMaybe<Scalars['BigInt']>;
  numCreatedServices_gt?: InputMaybe<Scalars['BigInt']>;
  numCreatedServices_lt?: InputMaybe<Scalars['BigInt']>;
  numCreatedServices_gte?: InputMaybe<Scalars['BigInt']>;
  numCreatedServices_lte?: InputMaybe<Scalars['BigInt']>;
  numCreatedServices_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numCreatedServices_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numFinishedServicesAsBuyer?: InputMaybe<Scalars['BigInt']>;
  numFinishedServicesAsBuyer_not?: InputMaybe<Scalars['BigInt']>;
  numFinishedServicesAsBuyer_gt?: InputMaybe<Scalars['BigInt']>;
  numFinishedServicesAsBuyer_lt?: InputMaybe<Scalars['BigInt']>;
  numFinishedServicesAsBuyer_gte?: InputMaybe<Scalars['BigInt']>;
  numFinishedServicesAsBuyer_lte?: InputMaybe<Scalars['BigInt']>;
  numFinishedServicesAsBuyer_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numFinishedServicesAsBuyer_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numCreatedProposals?: InputMaybe<Scalars['BigInt']>;
  numCreatedProposals_not?: InputMaybe<Scalars['BigInt']>;
  numCreatedProposals_gt?: InputMaybe<Scalars['BigInt']>;
  numCreatedProposals_lt?: InputMaybe<Scalars['BigInt']>;
  numCreatedProposals_gte?: InputMaybe<Scalars['BigInt']>;
  numCreatedProposals_lte?: InputMaybe<Scalars['BigInt']>;
  numCreatedProposals_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numCreatedProposals_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numFinishedServicesAsSeller?: InputMaybe<Scalars['BigInt']>;
  numFinishedServicesAsSeller_not?: InputMaybe<Scalars['BigInt']>;
  numFinishedServicesAsSeller_gt?: InputMaybe<Scalars['BigInt']>;
  numFinishedServicesAsSeller_lt?: InputMaybe<Scalars['BigInt']>;
  numFinishedServicesAsSeller_gte?: InputMaybe<Scalars['BigInt']>;
  numFinishedServicesAsSeller_lte?: InputMaybe<Scalars['BigInt']>;
  numFinishedServicesAsSeller_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numFinishedServicesAsSeller_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  user?: InputMaybe<Scalars['String']>;
  user_not?: InputMaybe<Scalars['String']>;
  user_gt?: InputMaybe<Scalars['String']>;
  user_lt?: InputMaybe<Scalars['String']>;
  user_gte?: InputMaybe<Scalars['String']>;
  user_lte?: InputMaybe<Scalars['String']>;
  user_in?: InputMaybe<Array<Scalars['String']>>;
  user_not_in?: InputMaybe<Array<Scalars['String']>>;
  user_contains?: InputMaybe<Scalars['String']>;
  user_contains_nocase?: InputMaybe<Scalars['String']>;
  user_not_contains?: InputMaybe<Scalars['String']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']>;
  user_starts_with?: InputMaybe<Scalars['String']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_starts_with?: InputMaybe<Scalars['String']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_ends_with?: InputMaybe<Scalars['String']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_ends_with?: InputMaybe<Scalars['String']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_?: InputMaybe<User_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<UserStats_filter>>>;
  or?: InputMaybe<Array<InputMaybe<UserStats_filter>>>;
};

export type UserStats_orderBy =
  | 'id'
  | 'numReceivedReviews'
  | 'numGivenReviews'
  | 'numCreatedServices'
  | 'numFinishedServicesAsBuyer'
  | 'numCreatedProposals'
  | 'numFinishedServicesAsSeller'
  | 'user'
  | 'user__id'
  | 'user__index'
  | 'user__handle'
  | 'user__createdAt'
  | 'user__updatedAt'
  | 'user__numReviews'
  | 'user__address'
  | 'user__rating'
  | 'user__cid';

export type User_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  index?: InputMaybe<Scalars['BigInt']>;
  index_not?: InputMaybe<Scalars['BigInt']>;
  index_gt?: InputMaybe<Scalars['BigInt']>;
  index_lt?: InputMaybe<Scalars['BigInt']>;
  index_gte?: InputMaybe<Scalars['BigInt']>;
  index_lte?: InputMaybe<Scalars['BigInt']>;
  index_in?: InputMaybe<Array<Scalars['BigInt']>>;
  index_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  handle?: InputMaybe<Scalars['String']>;
  handle_not?: InputMaybe<Scalars['String']>;
  handle_gt?: InputMaybe<Scalars['String']>;
  handle_lt?: InputMaybe<Scalars['String']>;
  handle_gte?: InputMaybe<Scalars['String']>;
  handle_lte?: InputMaybe<Scalars['String']>;
  handle_in?: InputMaybe<Array<Scalars['String']>>;
  handle_not_in?: InputMaybe<Array<Scalars['String']>>;
  handle_contains?: InputMaybe<Scalars['String']>;
  handle_contains_nocase?: InputMaybe<Scalars['String']>;
  handle_not_contains?: InputMaybe<Scalars['String']>;
  handle_not_contains_nocase?: InputMaybe<Scalars['String']>;
  handle_starts_with?: InputMaybe<Scalars['String']>;
  handle_starts_with_nocase?: InputMaybe<Scalars['String']>;
  handle_not_starts_with?: InputMaybe<Scalars['String']>;
  handle_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  handle_ends_with?: InputMaybe<Scalars['String']>;
  handle_ends_with_nocase?: InputMaybe<Scalars['String']>;
  handle_not_ends_with?: InputMaybe<Scalars['String']>;
  handle_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
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
  platform?: InputMaybe<Scalars['String']>;
  platform_not?: InputMaybe<Scalars['String']>;
  platform_gt?: InputMaybe<Scalars['String']>;
  platform_lt?: InputMaybe<Scalars['String']>;
  platform_gte?: InputMaybe<Scalars['String']>;
  platform_lte?: InputMaybe<Scalars['String']>;
  platform_in?: InputMaybe<Array<Scalars['String']>>;
  platform_not_in?: InputMaybe<Array<Scalars['String']>>;
  platform_contains?: InputMaybe<Scalars['String']>;
  platform_contains_nocase?: InputMaybe<Scalars['String']>;
  platform_not_contains?: InputMaybe<Scalars['String']>;
  platform_not_contains_nocase?: InputMaybe<Scalars['String']>;
  platform_starts_with?: InputMaybe<Scalars['String']>;
  platform_starts_with_nocase?: InputMaybe<Scalars['String']>;
  platform_not_starts_with?: InputMaybe<Scalars['String']>;
  platform_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  platform_ends_with?: InputMaybe<Scalars['String']>;
  platform_ends_with_nocase?: InputMaybe<Scalars['String']>;
  platform_not_ends_with?: InputMaybe<Scalars['String']>;
  platform_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  platform_?: InputMaybe<Platform_filter>;
  numReviews?: InputMaybe<Scalars['BigInt']>;
  numReviews_not?: InputMaybe<Scalars['BigInt']>;
  numReviews_gt?: InputMaybe<Scalars['BigInt']>;
  numReviews_lt?: InputMaybe<Scalars['BigInt']>;
  numReviews_gte?: InputMaybe<Scalars['BigInt']>;
  numReviews_lte?: InputMaybe<Scalars['BigInt']>;
  numReviews_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numReviews_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  address?: InputMaybe<Scalars['String']>;
  address_not?: InputMaybe<Scalars['String']>;
  address_gt?: InputMaybe<Scalars['String']>;
  address_lt?: InputMaybe<Scalars['String']>;
  address_gte?: InputMaybe<Scalars['String']>;
  address_lte?: InputMaybe<Scalars['String']>;
  address_in?: InputMaybe<Array<Scalars['String']>>;
  address_not_in?: InputMaybe<Array<Scalars['String']>>;
  address_contains?: InputMaybe<Scalars['String']>;
  address_contains_nocase?: InputMaybe<Scalars['String']>;
  address_not_contains?: InputMaybe<Scalars['String']>;
  address_not_contains_nocase?: InputMaybe<Scalars['String']>;
  address_starts_with?: InputMaybe<Scalars['String']>;
  address_starts_with_nocase?: InputMaybe<Scalars['String']>;
  address_not_starts_with?: InputMaybe<Scalars['String']>;
  address_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  address_ends_with?: InputMaybe<Scalars['String']>;
  address_ends_with_nocase?: InputMaybe<Scalars['String']>;
  address_not_ends_with?: InputMaybe<Scalars['String']>;
  address_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['BigDecimal']>;
  rating_not?: InputMaybe<Scalars['BigDecimal']>;
  rating_gt?: InputMaybe<Scalars['BigDecimal']>;
  rating_lt?: InputMaybe<Scalars['BigDecimal']>;
  rating_gte?: InputMaybe<Scalars['BigDecimal']>;
  rating_lte?: InputMaybe<Scalars['BigDecimal']>;
  rating_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rating_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  reviews_?: InputMaybe<Review_filter>;
  buyerServices_?: InputMaybe<Service_filter>;
  sellerServices_?: InputMaybe<Service_filter>;
  totalGains_?: InputMaybe<UserGain_filter>;
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
  description_?: InputMaybe<UserDescription_filter>;
  delegates?: InputMaybe<Array<Scalars['String']>>;
  delegates_not?: InputMaybe<Array<Scalars['String']>>;
  delegates_contains?: InputMaybe<Array<Scalars['String']>>;
  delegates_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  delegates_not_contains?: InputMaybe<Array<Scalars['String']>>;
  delegates_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  userStats?: InputMaybe<Scalars['String']>;
  userStats_not?: InputMaybe<Scalars['String']>;
  userStats_gt?: InputMaybe<Scalars['String']>;
  userStats_lt?: InputMaybe<Scalars['String']>;
  userStats_gte?: InputMaybe<Scalars['String']>;
  userStats_lte?: InputMaybe<Scalars['String']>;
  userStats_in?: InputMaybe<Array<Scalars['String']>>;
  userStats_not_in?: InputMaybe<Array<Scalars['String']>>;
  userStats_contains?: InputMaybe<Scalars['String']>;
  userStats_contains_nocase?: InputMaybe<Scalars['String']>;
  userStats_not_contains?: InputMaybe<Scalars['String']>;
  userStats_not_contains_nocase?: InputMaybe<Scalars['String']>;
  userStats_starts_with?: InputMaybe<Scalars['String']>;
  userStats_starts_with_nocase?: InputMaybe<Scalars['String']>;
  userStats_not_starts_with?: InputMaybe<Scalars['String']>;
  userStats_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  userStats_ends_with?: InputMaybe<Scalars['String']>;
  userStats_ends_with_nocase?: InputMaybe<Scalars['String']>;
  userStats_not_ends_with?: InputMaybe<Scalars['String']>;
  userStats_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  userStats_?: InputMaybe<UserStats_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<User_filter>>>;
  or?: InputMaybe<Array<InputMaybe<User_filter>>>;
};

export type User_orderBy =
  | 'id'
  | 'index'
  | 'handle'
  | 'createdAt'
  | 'updatedAt'
  | 'platform'
  | 'platform__id'
  | 'platform__address'
  | 'platform__name'
  | 'platform__createdAt'
  | 'platform__updatedAt'
  | 'platform__originServiceFeeRate'
  | 'platform__originValidatedProposalFeeRate'
  | 'platform__servicePostingFee'
  | 'platform__proposalPostingFee'
  | 'platform__arbitrator'
  | 'platform__arbitratorExtraData'
  | 'platform__arbitrationFeeTimeout'
  | 'platform__cid'
  | 'platform__signer'
  | 'numReviews'
  | 'address'
  | 'rating'
  | 'reviews'
  | 'buyerServices'
  | 'sellerServices'
  | 'totalGains'
  | 'cid'
  | 'description'
  | 'description__id'
  | 'description__title'
  | 'description__about'
  | 'description__skills_raw'
  | 'description__timezone'
  | 'description__headline'
  | 'description__country'
  | 'description__role'
  | 'description__name'
  | 'description__video_url'
  | 'description__image_url'
  | 'delegates'
  | 'userStats'
  | 'userStats__id'
  | 'userStats__numReceivedReviews'
  | 'userStats__numGivenReviews'
  | 'userStats__numCreatedServices'
  | 'userStats__numFinishedServicesAsBuyer'
  | 'userStats__numCreatedProposals'
  | 'userStats__numFinishedServicesAsSeller';

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
  service: InContextSdkMethod<Query['service'], QueryserviceArgs, MeshContext>,
  /** null **/
  services: InContextSdkMethod<Query['services'], QueryservicesArgs, MeshContext>,
  /** null **/
  serviceDescription: InContextSdkMethod<Query['serviceDescription'], QueryserviceDescriptionArgs, MeshContext>,
  /** null **/
  serviceDescriptions: InContextSdkMethod<Query['serviceDescriptions'], QueryserviceDescriptionsArgs, MeshContext>,
  /** null **/
  keyword: InContextSdkMethod<Query['keyword'], QuerykeywordArgs, MeshContext>,
  /** null **/
  keywords: InContextSdkMethod<Query['keywords'], QuerykeywordsArgs, MeshContext>,
  /** null **/
  review: InContextSdkMethod<Query['review'], QueryreviewArgs, MeshContext>,
  /** null **/
  reviews: InContextSdkMethod<Query['reviews'], QueryreviewsArgs, MeshContext>,
  /** null **/
  reviewDescription: InContextSdkMethod<Query['reviewDescription'], QueryreviewDescriptionArgs, MeshContext>,
  /** null **/
  reviewDescriptions: InContextSdkMethod<Query['reviewDescriptions'], QueryreviewDescriptionsArgs, MeshContext>,
  /** null **/
  token: InContextSdkMethod<Query['token'], QuerytokenArgs, MeshContext>,
  /** null **/
  tokens: InContextSdkMethod<Query['tokens'], QuerytokensArgs, MeshContext>,
  /** null **/
  user: InContextSdkMethod<Query['user'], QueryuserArgs, MeshContext>,
  /** null **/
  users: InContextSdkMethod<Query['users'], QueryusersArgs, MeshContext>,
  /** null **/
  userStats: InContextSdkMethod<Query['userStats'], QueryuserStatsArgs, MeshContext>,
  /** null **/
  userDescription: InContextSdkMethod<Query['userDescription'], QueryuserDescriptionArgs, MeshContext>,
  /** null **/
  userDescriptions: InContextSdkMethod<Query['userDescriptions'], QueryuserDescriptionsArgs, MeshContext>,
  /** null **/
  proposal: InContextSdkMethod<Query['proposal'], QueryproposalArgs, MeshContext>,
  /** null **/
  proposals: InContextSdkMethod<Query['proposals'], QueryproposalsArgs, MeshContext>,
  /** null **/
  proposalDescription: InContextSdkMethod<Query['proposalDescription'], QueryproposalDescriptionArgs, MeshContext>,
  /** null **/
  proposalDescriptions: InContextSdkMethod<Query['proposalDescriptions'], QueryproposalDescriptionsArgs, MeshContext>,
  /** null **/
  payment: InContextSdkMethod<Query['payment'], QuerypaymentArgs, MeshContext>,
  /** null **/
  payments: InContextSdkMethod<Query['payments'], QuerypaymentsArgs, MeshContext>,
  /** null **/
  transaction: InContextSdkMethod<Query['transaction'], QuerytransactionArgs, MeshContext>,
  /** null **/
  transactions: InContextSdkMethod<Query['transactions'], QuerytransactionsArgs, MeshContext>,
  /** null **/
  evidence: InContextSdkMethod<Query['evidence'], QueryevidenceArgs, MeshContext>,
  /** null **/
  evidences: InContextSdkMethod<Query['evidences'], QueryevidencesArgs, MeshContext>,
  /** null **/
  platform: InContextSdkMethod<Query['platform'], QueryplatformArgs, MeshContext>,
  /** null **/
  platforms: InContextSdkMethod<Query['platforms'], QueryplatformsArgs, MeshContext>,
  /** null **/
  platformDescription: InContextSdkMethod<Query['platformDescription'], QueryplatformDescriptionArgs, MeshContext>,
  /** null **/
  platformDescriptions: InContextSdkMethod<Query['platformDescriptions'], QueryplatformDescriptionsArgs, MeshContext>,
  /** null **/
  feePayment: InContextSdkMethod<Query['feePayment'], QueryfeePaymentArgs, MeshContext>,
  /** null **/
  feePayments: InContextSdkMethod<Query['feePayments'], QueryfeePaymentsArgs, MeshContext>,
  /** null **/
  feeClaim: InContextSdkMethod<Query['feeClaim'], QueryfeeClaimArgs, MeshContext>,
  /** null **/
  feeClaims: InContextSdkMethod<Query['feeClaims'], QueryfeeClaimsArgs, MeshContext>,
  /** null **/
  platformGain: InContextSdkMethod<Query['platformGain'], QueryplatformGainArgs, MeshContext>,
  /** null **/
  platformGains: InContextSdkMethod<Query['platformGains'], QueryplatformGainsArgs, MeshContext>,
  /** null **/
  userGain: InContextSdkMethod<Query['userGain'], QueryuserGainArgs, MeshContext>,
  /** null **/
  userGains: InContextSdkMethod<Query['userGains'], QueryuserGainsArgs, MeshContext>,
  /** null **/
  protocol: InContextSdkMethod<Query['protocol'], QueryprotocolArgs, MeshContext>,
  /** null **/
  protocols: InContextSdkMethod<Query['protocols'], QueryprotocolsArgs, MeshContext>,
  /** null **/
  serviceDescriptionSearchRank: InContextSdkMethod<Query['serviceDescriptionSearchRank'], QueryserviceDescriptionSearchRankArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Query['_meta'], Query_metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  service: InContextSdkMethod<Subscription['service'], SubscriptionserviceArgs, MeshContext>,
  /** null **/
  services: InContextSdkMethod<Subscription['services'], SubscriptionservicesArgs, MeshContext>,
  /** null **/
  serviceDescription: InContextSdkMethod<Subscription['serviceDescription'], SubscriptionserviceDescriptionArgs, MeshContext>,
  /** null **/
  serviceDescriptions: InContextSdkMethod<Subscription['serviceDescriptions'], SubscriptionserviceDescriptionsArgs, MeshContext>,
  /** null **/
  keyword: InContextSdkMethod<Subscription['keyword'], SubscriptionkeywordArgs, MeshContext>,
  /** null **/
  keywords: InContextSdkMethod<Subscription['keywords'], SubscriptionkeywordsArgs, MeshContext>,
  /** null **/
  review: InContextSdkMethod<Subscription['review'], SubscriptionreviewArgs, MeshContext>,
  /** null **/
  reviews: InContextSdkMethod<Subscription['reviews'], SubscriptionreviewsArgs, MeshContext>,
  /** null **/
  reviewDescription: InContextSdkMethod<Subscription['reviewDescription'], SubscriptionreviewDescriptionArgs, MeshContext>,
  /** null **/
  reviewDescriptions: InContextSdkMethod<Subscription['reviewDescriptions'], SubscriptionreviewDescriptionsArgs, MeshContext>,
  /** null **/
  token: InContextSdkMethod<Subscription['token'], SubscriptiontokenArgs, MeshContext>,
  /** null **/
  tokens: InContextSdkMethod<Subscription['tokens'], SubscriptiontokensArgs, MeshContext>,
  /** null **/
  user: InContextSdkMethod<Subscription['user'], SubscriptionuserArgs, MeshContext>,
  /** null **/
  users: InContextSdkMethod<Subscription['users'], SubscriptionusersArgs, MeshContext>,
  /** null **/
  userStats: InContextSdkMethod<Subscription['userStats'], SubscriptionuserStatsArgs, MeshContext>,
  /** null **/
  userDescription: InContextSdkMethod<Subscription['userDescription'], SubscriptionuserDescriptionArgs, MeshContext>,
  /** null **/
  userDescriptions: InContextSdkMethod<Subscription['userDescriptions'], SubscriptionuserDescriptionsArgs, MeshContext>,
  /** null **/
  proposal: InContextSdkMethod<Subscription['proposal'], SubscriptionproposalArgs, MeshContext>,
  /** null **/
  proposals: InContextSdkMethod<Subscription['proposals'], SubscriptionproposalsArgs, MeshContext>,
  /** null **/
  proposalDescription: InContextSdkMethod<Subscription['proposalDescription'], SubscriptionproposalDescriptionArgs, MeshContext>,
  /** null **/
  proposalDescriptions: InContextSdkMethod<Subscription['proposalDescriptions'], SubscriptionproposalDescriptionsArgs, MeshContext>,
  /** null **/
  payment: InContextSdkMethod<Subscription['payment'], SubscriptionpaymentArgs, MeshContext>,
  /** null **/
  payments: InContextSdkMethod<Subscription['payments'], SubscriptionpaymentsArgs, MeshContext>,
  /** null **/
  transaction: InContextSdkMethod<Subscription['transaction'], SubscriptiontransactionArgs, MeshContext>,
  /** null **/
  transactions: InContextSdkMethod<Subscription['transactions'], SubscriptiontransactionsArgs, MeshContext>,
  /** null **/
  evidence: InContextSdkMethod<Subscription['evidence'], SubscriptionevidenceArgs, MeshContext>,
  /** null **/
  evidences: InContextSdkMethod<Subscription['evidences'], SubscriptionevidencesArgs, MeshContext>,
  /** null **/
  platform: InContextSdkMethod<Subscription['platform'], SubscriptionplatformArgs, MeshContext>,
  /** null **/
  platforms: InContextSdkMethod<Subscription['platforms'], SubscriptionplatformsArgs, MeshContext>,
  /** null **/
  platformDescription: InContextSdkMethod<Subscription['platformDescription'], SubscriptionplatformDescriptionArgs, MeshContext>,
  /** null **/
  platformDescriptions: InContextSdkMethod<Subscription['platformDescriptions'], SubscriptionplatformDescriptionsArgs, MeshContext>,
  /** null **/
  feePayment: InContextSdkMethod<Subscription['feePayment'], SubscriptionfeePaymentArgs, MeshContext>,
  /** null **/
  feePayments: InContextSdkMethod<Subscription['feePayments'], SubscriptionfeePaymentsArgs, MeshContext>,
  /** null **/
  feeClaim: InContextSdkMethod<Subscription['feeClaim'], SubscriptionfeeClaimArgs, MeshContext>,
  /** null **/
  feeClaims: InContextSdkMethod<Subscription['feeClaims'], SubscriptionfeeClaimsArgs, MeshContext>,
  /** null **/
  platformGain: InContextSdkMethod<Subscription['platformGain'], SubscriptionplatformGainArgs, MeshContext>,
  /** null **/
  platformGains: InContextSdkMethod<Subscription['platformGains'], SubscriptionplatformGainsArgs, MeshContext>,
  /** null **/
  userGain: InContextSdkMethod<Subscription['userGain'], SubscriptionuserGainArgs, MeshContext>,
  /** null **/
  userGains: InContextSdkMethod<Subscription['userGains'], SubscriptionuserGainsArgs, MeshContext>,
  /** null **/
  protocol: InContextSdkMethod<Subscription['protocol'], SubscriptionprotocolArgs, MeshContext>,
  /** null **/
  protocols: InContextSdkMethod<Subscription['protocols'], SubscriptionprotocolsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Subscription['_meta'], Subscription_metaArgs, MeshContext>
  };

  export type Context = {
      ["beetogether"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
