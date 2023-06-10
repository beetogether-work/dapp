// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@graphql-mesh/utils';

import type { GetMeshOptions } from '@graphql-mesh/runtime';
import type { YamlConfig } from '@graphql-mesh/types';
import { PubSub } from '@graphql-mesh/utils';
import { DefaultLogger } from '@graphql-mesh/utils';
import MeshCache from "@graphql-mesh/cache-localforage";
import { fetch as fetchFn } from '@whatwg-node/fetch';

import { MeshResolvedSource } from '@graphql-mesh/runtime';
import { MeshTransform, MeshPlugin } from '@graphql-mesh/types';
import GraphqlHandler from "@graphql-mesh/graphql"
import StitchingMerger from "@graphql-mesh/merger-stitching";
import { printWithCache } from '@graphql-mesh/utils';
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { ImportFn } from '@graphql-mesh/types';
import type { BeetogetherTypes } from './sources/beetogether/types';
import type { TalentlayerTypes } from './sources/talentlayer/types';
import * as importedModule$0 from "./sources/beetogether/introspectionSchema";
import * as importedModule$1 from "./sources/talentlayer/introspectionSchema";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };



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
  | 'buyer__address'
  | 'buyer__rating'
  | 'buyer__cid'
  | 'seller'
  | 'seller__id'
  | 'seller__index'
  | 'seller__handle'
  | 'seller__createdAt'
  | 'seller__updatedAt'
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
  | 'sender__address'
  | 'sender__rating'
  | 'sender__cid'
  | 'receiver'
  | 'receiver__id'
  | 'receiver__index'
  | 'receiver__handle'
  | 'receiver__createdAt'
  | 'receiver__updatedAt'
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

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  Subscription: ResolverTypeWrapper<{}>;
  BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Bytes: ResolverTypeWrapper<Scalars['Bytes']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Hive: ResolverTypeWrapper<Hive>;
  HiveDescription: ResolverTypeWrapper<HiveDescription>;
  HiveDescription_filter: HiveDescription_filter;
  HiveDescription_orderBy: HiveDescription_orderBy;
  Hive_filter: Hive_filter;
  Hive_orderBy: Hive_orderBy;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Int8: ResolverTypeWrapper<Scalars['Int8']>;
  OrderDirection: OrderDirection;
  ProposalRequest: ResolverTypeWrapper<ProposalRequest>;
  ProposalRequestDescription: ResolverTypeWrapper<ProposalRequestDescription>;
  ProposalRequestDescription_filter: ProposalRequestDescription_filter;
  ProposalRequestDescription_orderBy: ProposalRequestDescription_orderBy;
  ProposalRequestStatus: ProposalRequestStatus;
  ProposalRequest_filter: ProposalRequest_filter;
  ProposalRequest_orderBy: ProposalRequest_orderBy;
  String: ResolverTypeWrapper<Scalars['String']>;
  _Block_: ResolverTypeWrapper<_Block_>;
  _Meta_: ResolverTypeWrapper<_Meta_>;
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_;
  Evidence: ResolverTypeWrapper<Evidence>;
  Evidence_filter: Evidence_filter;
  Evidence_orderBy: Evidence_orderBy;
  FeeClaim: ResolverTypeWrapper<FeeClaim>;
  FeeClaim_filter: FeeClaim_filter;
  FeeClaim_orderBy: FeeClaim_orderBy;
  FeePayment: ResolverTypeWrapper<FeePayment>;
  FeePayment_filter: FeePayment_filter;
  FeePayment_orderBy: FeePayment_orderBy;
  FeeType: FeeType;
  Keyword: ResolverTypeWrapper<Keyword>;
  Keyword_filter: Keyword_filter;
  Keyword_orderBy: Keyword_orderBy;
  Payment: ResolverTypeWrapper<Payment>;
  PaymentType: PaymentType;
  Payment_filter: Payment_filter;
  Payment_orderBy: Payment_orderBy;
  Platform: ResolverTypeWrapper<Platform>;
  PlatformDescription: ResolverTypeWrapper<PlatformDescription>;
  PlatformDescription_filter: PlatformDescription_filter;
  PlatformDescription_orderBy: PlatformDescription_orderBy;
  PlatformGain: ResolverTypeWrapper<PlatformGain>;
  PlatformGain_filter: PlatformGain_filter;
  PlatformGain_orderBy: PlatformGain_orderBy;
  Platform_filter: Platform_filter;
  Platform_orderBy: Platform_orderBy;
  Proposal: ResolverTypeWrapper<Proposal>;
  ProposalDescription: ResolverTypeWrapper<ProposalDescription>;
  ProposalDescription_filter: ProposalDescription_filter;
  ProposalDescription_orderBy: ProposalDescription_orderBy;
  ProposalStatus: ProposalStatus;
  Proposal_filter: Proposal_filter;
  Proposal_orderBy: Proposal_orderBy;
  Protocol: ResolverTypeWrapper<Protocol>;
  Protocol_filter: Protocol_filter;
  Protocol_orderBy: Protocol_orderBy;
  Review: ResolverTypeWrapper<Review>;
  ReviewDescription: ResolverTypeWrapper<ReviewDescription>;
  ReviewDescription_filter: ReviewDescription_filter;
  ReviewDescription_orderBy: ReviewDescription_orderBy;
  Review_filter: Review_filter;
  Review_orderBy: Review_orderBy;
  Service: ResolverTypeWrapper<Service>;
  ServiceDescription: ResolverTypeWrapper<ServiceDescription>;
  ServiceDescription_filter: ServiceDescription_filter;
  ServiceDescription_orderBy: ServiceDescription_orderBy;
  ServiceStatus: ServiceStatus;
  Service_filter: Service_filter;
  Service_orderBy: Service_orderBy;
  Token: ResolverTypeWrapper<Token>;
  Token_filter: Token_filter;
  Token_orderBy: Token_orderBy;
  Transaction: ResolverTypeWrapper<Transaction>;
  TransactionStatus: TransactionStatus;
  Transaction_filter: Transaction_filter;
  Transaction_orderBy: Transaction_orderBy;
  User: ResolverTypeWrapper<User>;
  UserDescription: ResolverTypeWrapper<UserDescription>;
  UserDescription_filter: UserDescription_filter;
  UserDescription_orderBy: UserDescription_orderBy;
  UserGain: ResolverTypeWrapper<UserGain>;
  UserGain_filter: UserGain_filter;
  UserGain_orderBy: UserGain_orderBy;
  UserStats: ResolverTypeWrapper<UserStats>;
  UserStats_filter: UserStats_filter;
  UserStats_orderBy: UserStats_orderBy;
  User_filter: User_filter;
  User_orderBy: User_orderBy;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  Subscription: {};
  BigDecimal: Scalars['BigDecimal'];
  BigInt: Scalars['BigInt'];
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: Scalars['Boolean'];
  Bytes: Scalars['Bytes'];
  Float: Scalars['Float'];
  Hive: Hive;
  HiveDescription: HiveDescription;
  HiveDescription_filter: HiveDescription_filter;
  Hive_filter: Hive_filter;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Int8: Scalars['Int8'];
  ProposalRequest: ProposalRequest;
  ProposalRequestDescription: ProposalRequestDescription;
  ProposalRequestDescription_filter: ProposalRequestDescription_filter;
  ProposalRequest_filter: ProposalRequest_filter;
  String: Scalars['String'];
  _Block_: _Block_;
  _Meta_: _Meta_;
  Evidence: Evidence;
  Evidence_filter: Evidence_filter;
  FeeClaim: FeeClaim;
  FeeClaim_filter: FeeClaim_filter;
  FeePayment: FeePayment;
  FeePayment_filter: FeePayment_filter;
  Keyword: Keyword;
  Keyword_filter: Keyword_filter;
  Payment: Payment;
  Payment_filter: Payment_filter;
  Platform: Platform;
  PlatformDescription: PlatformDescription;
  PlatformDescription_filter: PlatformDescription_filter;
  PlatformGain: PlatformGain;
  PlatformGain_filter: PlatformGain_filter;
  Platform_filter: Platform_filter;
  Proposal: Proposal;
  ProposalDescription: ProposalDescription;
  ProposalDescription_filter: ProposalDescription_filter;
  Proposal_filter: Proposal_filter;
  Protocol: Protocol;
  Protocol_filter: Protocol_filter;
  Review: Review;
  ReviewDescription: ReviewDescription;
  ReviewDescription_filter: ReviewDescription_filter;
  Review_filter: Review_filter;
  Service: Service;
  ServiceDescription: ServiceDescription;
  ServiceDescription_filter: ServiceDescription_filter;
  Service_filter: Service_filter;
  Token: Token;
  Token_filter: Token_filter;
  Transaction: Transaction;
  Transaction_filter: Transaction_filter;
  User: User;
  UserDescription: UserDescription;
  UserDescription_filter: UserDescription_filter;
  UserGain: UserGain;
  UserGain_filter: UserGain_filter;
  UserStats: UserStats;
  UserStats_filter: UserStats_filter;
  User_filter: User_filter;
}>;

export type entityDirectiveArgs = { };

export type entityDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = entityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type subgraphIdDirectiveArgs = {
  id: Scalars['String'];
};

export type subgraphIdDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = subgraphIdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type derivedFromDirectiveArgs = {
  field: Scalars['String'];
};

export type derivedFromDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = derivedFromDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  hive?: Resolver<Maybe<ResolversTypes['Hive']>, ParentType, ContextType, RequireFields<QueryhiveArgs, 'id' | 'subgraphError'>>;
  hives?: Resolver<Array<ResolversTypes['Hive']>, ParentType, ContextType, RequireFields<QueryhivesArgs, 'skip' | 'first' | 'subgraphError'>>;
  hiveDescription?: Resolver<Maybe<ResolversTypes['HiveDescription']>, ParentType, ContextType, RequireFields<QueryhiveDescriptionArgs, 'id' | 'subgraphError'>>;
  hiveDescriptions?: Resolver<Array<ResolversTypes['HiveDescription']>, ParentType, ContextType, RequireFields<QueryhiveDescriptionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  proposalRequest?: Resolver<Maybe<ResolversTypes['ProposalRequest']>, ParentType, ContextType, RequireFields<QueryproposalRequestArgs, 'id' | 'subgraphError'>>;
  proposalRequests?: Resolver<Array<ResolversTypes['ProposalRequest']>, ParentType, ContextType, RequireFields<QueryproposalRequestsArgs, 'skip' | 'first' | 'subgraphError'>>;
  proposalRequestDescription?: Resolver<Maybe<ResolversTypes['ProposalRequestDescription']>, ParentType, ContextType, RequireFields<QueryproposalRequestDescriptionArgs, 'id' | 'subgraphError'>>;
  proposalRequestDescriptions?: Resolver<Array<ResolversTypes['ProposalRequestDescription']>, ParentType, ContextType, RequireFields<QueryproposalRequestDescriptionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Query_metaArgs>>;
  service?: Resolver<Maybe<ResolversTypes['Service']>, ParentType, ContextType, RequireFields<QueryserviceArgs, 'id' | 'subgraphError'>>;
  services?: Resolver<Array<ResolversTypes['Service']>, ParentType, ContextType, RequireFields<QueryservicesArgs, 'skip' | 'first' | 'subgraphError'>>;
  serviceDescription?: Resolver<Maybe<ResolversTypes['ServiceDescription']>, ParentType, ContextType, RequireFields<QueryserviceDescriptionArgs, 'id' | 'subgraphError'>>;
  serviceDescriptions?: Resolver<Array<ResolversTypes['ServiceDescription']>, ParentType, ContextType, RequireFields<QueryserviceDescriptionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  keyword?: Resolver<Maybe<ResolversTypes['Keyword']>, ParentType, ContextType, RequireFields<QuerykeywordArgs, 'id' | 'subgraphError'>>;
  keywords?: Resolver<Array<ResolversTypes['Keyword']>, ParentType, ContextType, RequireFields<QuerykeywordsArgs, 'skip' | 'first' | 'subgraphError'>>;
  review?: Resolver<Maybe<ResolversTypes['Review']>, ParentType, ContextType, RequireFields<QueryreviewArgs, 'id' | 'subgraphError'>>;
  reviews?: Resolver<Array<ResolversTypes['Review']>, ParentType, ContextType, RequireFields<QueryreviewsArgs, 'skip' | 'first' | 'subgraphError'>>;
  reviewDescription?: Resolver<Maybe<ResolversTypes['ReviewDescription']>, ParentType, ContextType, RequireFields<QueryreviewDescriptionArgs, 'id' | 'subgraphError'>>;
  reviewDescriptions?: Resolver<Array<ResolversTypes['ReviewDescription']>, ParentType, ContextType, RequireFields<QueryreviewDescriptionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  token?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<QuerytokenArgs, 'id' | 'subgraphError'>>;
  tokens?: Resolver<Array<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<QuerytokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryuserArgs, 'id' | 'subgraphError'>>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryusersArgs, 'skip' | 'first' | 'subgraphError'>>;
  userStats?: Resolver<Array<ResolversTypes['UserStats']>, ParentType, ContextType, RequireFields<QueryuserStatsArgs, 'skip' | 'first' | 'subgraphError'>>;
  userDescription?: Resolver<Maybe<ResolversTypes['UserDescription']>, ParentType, ContextType, RequireFields<QueryuserDescriptionArgs, 'id' | 'subgraphError'>>;
  userDescriptions?: Resolver<Array<ResolversTypes['UserDescription']>, ParentType, ContextType, RequireFields<QueryuserDescriptionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  proposal?: Resolver<Maybe<ResolversTypes['Proposal']>, ParentType, ContextType, RequireFields<QueryproposalArgs, 'id' | 'subgraphError'>>;
  proposals?: Resolver<Array<ResolversTypes['Proposal']>, ParentType, ContextType, RequireFields<QueryproposalsArgs, 'skip' | 'first' | 'subgraphError'>>;
  proposalDescription?: Resolver<Maybe<ResolversTypes['ProposalDescription']>, ParentType, ContextType, RequireFields<QueryproposalDescriptionArgs, 'id' | 'subgraphError'>>;
  proposalDescriptions?: Resolver<Array<ResolversTypes['ProposalDescription']>, ParentType, ContextType, RequireFields<QueryproposalDescriptionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  payment?: Resolver<Maybe<ResolversTypes['Payment']>, ParentType, ContextType, RequireFields<QuerypaymentArgs, 'id' | 'subgraphError'>>;
  payments?: Resolver<Array<ResolversTypes['Payment']>, ParentType, ContextType, RequireFields<QuerypaymentsArgs, 'skip' | 'first' | 'subgraphError'>>;
  transaction?: Resolver<Maybe<ResolversTypes['Transaction']>, ParentType, ContextType, RequireFields<QuerytransactionArgs, 'id' | 'subgraphError'>>;
  transactions?: Resolver<Array<ResolversTypes['Transaction']>, ParentType, ContextType, RequireFields<QuerytransactionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  evidence?: Resolver<Maybe<ResolversTypes['Evidence']>, ParentType, ContextType, RequireFields<QueryevidenceArgs, 'id' | 'subgraphError'>>;
  evidences?: Resolver<Array<ResolversTypes['Evidence']>, ParentType, ContextType, RequireFields<QueryevidencesArgs, 'skip' | 'first' | 'subgraphError'>>;
  platform?: Resolver<Maybe<ResolversTypes['Platform']>, ParentType, ContextType, RequireFields<QueryplatformArgs, 'id' | 'subgraphError'>>;
  platforms?: Resolver<Array<ResolversTypes['Platform']>, ParentType, ContextType, RequireFields<QueryplatformsArgs, 'skip' | 'first' | 'subgraphError'>>;
  platformDescription?: Resolver<Maybe<ResolversTypes['PlatformDescription']>, ParentType, ContextType, RequireFields<QueryplatformDescriptionArgs, 'id' | 'subgraphError'>>;
  platformDescriptions?: Resolver<Array<ResolversTypes['PlatformDescription']>, ParentType, ContextType, RequireFields<QueryplatformDescriptionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  feePayment?: Resolver<Maybe<ResolversTypes['FeePayment']>, ParentType, ContextType, RequireFields<QueryfeePaymentArgs, 'id' | 'subgraphError'>>;
  feePayments?: Resolver<Array<ResolversTypes['FeePayment']>, ParentType, ContextType, RequireFields<QueryfeePaymentsArgs, 'skip' | 'first' | 'subgraphError'>>;
  feeClaim?: Resolver<Maybe<ResolversTypes['FeeClaim']>, ParentType, ContextType, RequireFields<QueryfeeClaimArgs, 'id' | 'subgraphError'>>;
  feeClaims?: Resolver<Array<ResolversTypes['FeeClaim']>, ParentType, ContextType, RequireFields<QueryfeeClaimsArgs, 'skip' | 'first' | 'subgraphError'>>;
  platformGain?: Resolver<Maybe<ResolversTypes['PlatformGain']>, ParentType, ContextType, RequireFields<QueryplatformGainArgs, 'id' | 'subgraphError'>>;
  platformGains?: Resolver<Array<ResolversTypes['PlatformGain']>, ParentType, ContextType, RequireFields<QueryplatformGainsArgs, 'skip' | 'first' | 'subgraphError'>>;
  userGain?: Resolver<Maybe<ResolversTypes['UserGain']>, ParentType, ContextType, RequireFields<QueryuserGainArgs, 'id' | 'subgraphError'>>;
  userGains?: Resolver<Array<ResolversTypes['UserGain']>, ParentType, ContextType, RequireFields<QueryuserGainsArgs, 'skip' | 'first' | 'subgraphError'>>;
  protocol?: Resolver<Maybe<ResolversTypes['Protocol']>, ParentType, ContextType, RequireFields<QueryprotocolArgs, 'id' | 'subgraphError'>>;
  protocols?: Resolver<Array<ResolversTypes['Protocol']>, ParentType, ContextType, RequireFields<QueryprotocolsArgs, 'skip' | 'first' | 'subgraphError'>>;
  serviceDescriptionSearchRank?: Resolver<Array<ResolversTypes['ServiceDescription']>, ParentType, ContextType, RequireFields<QueryserviceDescriptionSearchRankArgs, 'text' | 'first' | 'skip' | 'subgraphError'>>;
}>;

export type SubscriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  hive?: SubscriptionResolver<Maybe<ResolversTypes['Hive']>, "hive", ParentType, ContextType, RequireFields<SubscriptionhiveArgs, 'id' | 'subgraphError'>>;
  hives?: SubscriptionResolver<Array<ResolversTypes['Hive']>, "hives", ParentType, ContextType, RequireFields<SubscriptionhivesArgs, 'skip' | 'first' | 'subgraphError'>>;
  hiveDescription?: SubscriptionResolver<Maybe<ResolversTypes['HiveDescription']>, "hiveDescription", ParentType, ContextType, RequireFields<SubscriptionhiveDescriptionArgs, 'id' | 'subgraphError'>>;
  hiveDescriptions?: SubscriptionResolver<Array<ResolversTypes['HiveDescription']>, "hiveDescriptions", ParentType, ContextType, RequireFields<SubscriptionhiveDescriptionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  proposalRequest?: SubscriptionResolver<Maybe<ResolversTypes['ProposalRequest']>, "proposalRequest", ParentType, ContextType, RequireFields<SubscriptionproposalRequestArgs, 'id' | 'subgraphError'>>;
  proposalRequests?: SubscriptionResolver<Array<ResolversTypes['ProposalRequest']>, "proposalRequests", ParentType, ContextType, RequireFields<SubscriptionproposalRequestsArgs, 'skip' | 'first' | 'subgraphError'>>;
  proposalRequestDescription?: SubscriptionResolver<Maybe<ResolversTypes['ProposalRequestDescription']>, "proposalRequestDescription", ParentType, ContextType, RequireFields<SubscriptionproposalRequestDescriptionArgs, 'id' | 'subgraphError'>>;
  proposalRequestDescriptions?: SubscriptionResolver<Array<ResolversTypes['ProposalRequestDescription']>, "proposalRequestDescriptions", ParentType, ContextType, RequireFields<SubscriptionproposalRequestDescriptionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: SubscriptionResolver<Maybe<ResolversTypes['_Meta_']>, "_meta", ParentType, ContextType, Partial<Subscription_metaArgs>>;
  service?: SubscriptionResolver<Maybe<ResolversTypes['Service']>, "service", ParentType, ContextType, RequireFields<SubscriptionserviceArgs, 'id' | 'subgraphError'>>;
  services?: SubscriptionResolver<Array<ResolversTypes['Service']>, "services", ParentType, ContextType, RequireFields<SubscriptionservicesArgs, 'skip' | 'first' | 'subgraphError'>>;
  serviceDescription?: SubscriptionResolver<Maybe<ResolversTypes['ServiceDescription']>, "serviceDescription", ParentType, ContextType, RequireFields<SubscriptionserviceDescriptionArgs, 'id' | 'subgraphError'>>;
  serviceDescriptions?: SubscriptionResolver<Array<ResolversTypes['ServiceDescription']>, "serviceDescriptions", ParentType, ContextType, RequireFields<SubscriptionserviceDescriptionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  keyword?: SubscriptionResolver<Maybe<ResolversTypes['Keyword']>, "keyword", ParentType, ContextType, RequireFields<SubscriptionkeywordArgs, 'id' | 'subgraphError'>>;
  keywords?: SubscriptionResolver<Array<ResolversTypes['Keyword']>, "keywords", ParentType, ContextType, RequireFields<SubscriptionkeywordsArgs, 'skip' | 'first' | 'subgraphError'>>;
  review?: SubscriptionResolver<Maybe<ResolversTypes['Review']>, "review", ParentType, ContextType, RequireFields<SubscriptionreviewArgs, 'id' | 'subgraphError'>>;
  reviews?: SubscriptionResolver<Array<ResolversTypes['Review']>, "reviews", ParentType, ContextType, RequireFields<SubscriptionreviewsArgs, 'skip' | 'first' | 'subgraphError'>>;
  reviewDescription?: SubscriptionResolver<Maybe<ResolversTypes['ReviewDescription']>, "reviewDescription", ParentType, ContextType, RequireFields<SubscriptionreviewDescriptionArgs, 'id' | 'subgraphError'>>;
  reviewDescriptions?: SubscriptionResolver<Array<ResolversTypes['ReviewDescription']>, "reviewDescriptions", ParentType, ContextType, RequireFields<SubscriptionreviewDescriptionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  token?: SubscriptionResolver<Maybe<ResolversTypes['Token']>, "token", ParentType, ContextType, RequireFields<SubscriptiontokenArgs, 'id' | 'subgraphError'>>;
  tokens?: SubscriptionResolver<Array<ResolversTypes['Token']>, "tokens", ParentType, ContextType, RequireFields<SubscriptiontokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  user?: SubscriptionResolver<Maybe<ResolversTypes['User']>, "user", ParentType, ContextType, RequireFields<SubscriptionuserArgs, 'id' | 'subgraphError'>>;
  users?: SubscriptionResolver<Array<ResolversTypes['User']>, "users", ParentType, ContextType, RequireFields<SubscriptionusersArgs, 'skip' | 'first' | 'subgraphError'>>;
  userStats?: SubscriptionResolver<Array<ResolversTypes['UserStats']>, "userStats", ParentType, ContextType, RequireFields<SubscriptionuserStatsArgs, 'skip' | 'first' | 'subgraphError'>>;
  userDescription?: SubscriptionResolver<Maybe<ResolversTypes['UserDescription']>, "userDescription", ParentType, ContextType, RequireFields<SubscriptionuserDescriptionArgs, 'id' | 'subgraphError'>>;
  userDescriptions?: SubscriptionResolver<Array<ResolversTypes['UserDescription']>, "userDescriptions", ParentType, ContextType, RequireFields<SubscriptionuserDescriptionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  proposal?: SubscriptionResolver<Maybe<ResolversTypes['Proposal']>, "proposal", ParentType, ContextType, RequireFields<SubscriptionproposalArgs, 'id' | 'subgraphError'>>;
  proposals?: SubscriptionResolver<Array<ResolversTypes['Proposal']>, "proposals", ParentType, ContextType, RequireFields<SubscriptionproposalsArgs, 'skip' | 'first' | 'subgraphError'>>;
  proposalDescription?: SubscriptionResolver<Maybe<ResolversTypes['ProposalDescription']>, "proposalDescription", ParentType, ContextType, RequireFields<SubscriptionproposalDescriptionArgs, 'id' | 'subgraphError'>>;
  proposalDescriptions?: SubscriptionResolver<Array<ResolversTypes['ProposalDescription']>, "proposalDescriptions", ParentType, ContextType, RequireFields<SubscriptionproposalDescriptionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  payment?: SubscriptionResolver<Maybe<ResolversTypes['Payment']>, "payment", ParentType, ContextType, RequireFields<SubscriptionpaymentArgs, 'id' | 'subgraphError'>>;
  payments?: SubscriptionResolver<Array<ResolversTypes['Payment']>, "payments", ParentType, ContextType, RequireFields<SubscriptionpaymentsArgs, 'skip' | 'first' | 'subgraphError'>>;
  transaction?: SubscriptionResolver<Maybe<ResolversTypes['Transaction']>, "transaction", ParentType, ContextType, RequireFields<SubscriptiontransactionArgs, 'id' | 'subgraphError'>>;
  transactions?: SubscriptionResolver<Array<ResolversTypes['Transaction']>, "transactions", ParentType, ContextType, RequireFields<SubscriptiontransactionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  evidence?: SubscriptionResolver<Maybe<ResolversTypes['Evidence']>, "evidence", ParentType, ContextType, RequireFields<SubscriptionevidenceArgs, 'id' | 'subgraphError'>>;
  evidences?: SubscriptionResolver<Array<ResolversTypes['Evidence']>, "evidences", ParentType, ContextType, RequireFields<SubscriptionevidencesArgs, 'skip' | 'first' | 'subgraphError'>>;
  platform?: SubscriptionResolver<Maybe<ResolversTypes['Platform']>, "platform", ParentType, ContextType, RequireFields<SubscriptionplatformArgs, 'id' | 'subgraphError'>>;
  platforms?: SubscriptionResolver<Array<ResolversTypes['Platform']>, "platforms", ParentType, ContextType, RequireFields<SubscriptionplatformsArgs, 'skip' | 'first' | 'subgraphError'>>;
  platformDescription?: SubscriptionResolver<Maybe<ResolversTypes['PlatformDescription']>, "platformDescription", ParentType, ContextType, RequireFields<SubscriptionplatformDescriptionArgs, 'id' | 'subgraphError'>>;
  platformDescriptions?: SubscriptionResolver<Array<ResolversTypes['PlatformDescription']>, "platformDescriptions", ParentType, ContextType, RequireFields<SubscriptionplatformDescriptionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  feePayment?: SubscriptionResolver<Maybe<ResolversTypes['FeePayment']>, "feePayment", ParentType, ContextType, RequireFields<SubscriptionfeePaymentArgs, 'id' | 'subgraphError'>>;
  feePayments?: SubscriptionResolver<Array<ResolversTypes['FeePayment']>, "feePayments", ParentType, ContextType, RequireFields<SubscriptionfeePaymentsArgs, 'skip' | 'first' | 'subgraphError'>>;
  feeClaim?: SubscriptionResolver<Maybe<ResolversTypes['FeeClaim']>, "feeClaim", ParentType, ContextType, RequireFields<SubscriptionfeeClaimArgs, 'id' | 'subgraphError'>>;
  feeClaims?: SubscriptionResolver<Array<ResolversTypes['FeeClaim']>, "feeClaims", ParentType, ContextType, RequireFields<SubscriptionfeeClaimsArgs, 'skip' | 'first' | 'subgraphError'>>;
  platformGain?: SubscriptionResolver<Maybe<ResolversTypes['PlatformGain']>, "platformGain", ParentType, ContextType, RequireFields<SubscriptionplatformGainArgs, 'id' | 'subgraphError'>>;
  platformGains?: SubscriptionResolver<Array<ResolversTypes['PlatformGain']>, "platformGains", ParentType, ContextType, RequireFields<SubscriptionplatformGainsArgs, 'skip' | 'first' | 'subgraphError'>>;
  userGain?: SubscriptionResolver<Maybe<ResolversTypes['UserGain']>, "userGain", ParentType, ContextType, RequireFields<SubscriptionuserGainArgs, 'id' | 'subgraphError'>>;
  userGains?: SubscriptionResolver<Array<ResolversTypes['UserGain']>, "userGains", ParentType, ContextType, RequireFields<SubscriptionuserGainsArgs, 'skip' | 'first' | 'subgraphError'>>;
  protocol?: SubscriptionResolver<Maybe<ResolversTypes['Protocol']>, "protocol", ParentType, ContextType, RequireFields<SubscriptionprotocolArgs, 'id' | 'subgraphError'>>;
  protocols?: SubscriptionResolver<Array<ResolversTypes['Protocol']>, "protocols", ParentType, ContextType, RequireFields<SubscriptionprotocolsArgs, 'skip' | 'first' | 'subgraphError'>>;
}>;

export interface BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
  name: 'BigDecimal';
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
  name: 'Bytes';
}

export type HiveResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Hive'] = ResolversParentTypes['Hive']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  honeyFee?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  members?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
  cid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['HiveDescription']>, ParentType, ContextType>;
  proposalRequests?: Resolver<Maybe<Array<ResolversTypes['ProposalRequest']>>, ParentType, ContextType, RequireFields<HiveproposalRequestsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HiveDescriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['HiveDescription'] = ResolversParentTypes['HiveDescription']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  offeredServices?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  manifesto?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface Int8ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Int8'], any> {
  name: 'Int8';
}

export type ProposalRequestResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ProposalRequest'] = ResolversParentTypes['ProposalRequest']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  ownerId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  sharedAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['ProposalRequestStatus'], ParentType, ContextType>;
  members?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
  shares?: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  serviceId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  rateToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rateAmount?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  cid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  platformId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['ProposalRequestDescription']>, ParentType, ContextType>;
  expirationDate?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  hive?: Resolver<ResolversTypes['Hive'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProposalRequestDescriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ProposalRequestDescription'] = ResolversParentTypes['ProposalRequestDescription']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  proposal?: Resolver<ResolversTypes['ProposalRequest'], ParentType, ContextType>;
  startDate?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  about?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expectedHours?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  video_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Block_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Block_'] = ResolversParentTypes['_Block_']> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Meta_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Meta_'] = ResolversParentTypes['_Meta_']> = ResolversObject<{
  block?: Resolver<ResolversTypes['_Block_'], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EvidenceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Evidence'] = ResolversParentTypes['Evidence']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transaction?: Resolver<ResolversTypes['Transaction'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  party?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  uri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FeeClaimResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FeeClaim'] = ResolversParentTypes['FeeClaim']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  platform?: Resolver<Maybe<ResolversTypes['Platform']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FeePaymentResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FeePayment'] = ResolversParentTypes['FeePayment']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  platform?: Resolver<Maybe<ResolversTypes['Platform']>, ParentType, ContextType>;
  service?: Resolver<Maybe<ResolversTypes['Service']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['FeeType'], ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type KeywordResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Keyword'] = ResolversParentTypes['Keyword']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PaymentResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Payment'] = ResolversParentTypes['Payment']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  service?: Resolver<ResolversTypes['Service'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  rateToken?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  paymentType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  transactionHash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  transaction?: Resolver<ResolversTypes['Transaction'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PlatformResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Platform'] = ResolversParentTypes['Platform']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  feePayments?: Resolver<Maybe<Array<ResolversTypes['FeePayment']>>, ParentType, ContextType, RequireFields<PlatformfeePaymentsArgs, 'skip' | 'first'>>;
  totalPlatformGains?: Resolver<Maybe<Array<ResolversTypes['PlatformGain']>>, ParentType, ContextType, RequireFields<PlatformtotalPlatformGainsArgs, 'skip' | 'first'>>;
  feeClaims?: Resolver<Maybe<Array<ResolversTypes['FeeClaim']>>, ParentType, ContextType, RequireFields<PlatformfeeClaimsArgs, 'skip' | 'first'>>;
  originServiceFeeRate?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  originValidatedProposalFeeRate?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  servicePostingFee?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  proposalPostingFee?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  arbitrator?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  arbitratorExtraData?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  arbitrationFeeTimeout?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  cid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['PlatformDescription']>, ParentType, ContextType>;
  signer?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PlatformDescriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PlatformDescription'] = ResolversParentTypes['PlatformDescription']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  about?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  website?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  platform?: Resolver<ResolversTypes['Platform'], ParentType, ContextType>;
  video_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PlatformGainResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PlatformGain'] = ResolversParentTypes['PlatformGain']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  platform?: Resolver<Maybe<ResolversTypes['Platform']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  totalOriginPlatformFeeGain?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalPlatformFeeGain?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProposalResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Proposal'] = ResolversParentTypes['Proposal']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  service?: Resolver<ResolversTypes['Service'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['ProposalStatus'], ParentType, ContextType>;
  seller?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  rateToken?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  rateAmount?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  cid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  platform?: Resolver<Maybe<ResolversTypes['Platform']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['ProposalDescription']>, ParentType, ContextType>;
  expirationDate?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProposalDescriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ProposalDescription'] = ResolversParentTypes['ProposalDescription']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  proposal?: Resolver<ResolversTypes['Proposal'], ParentType, ContextType>;
  startDate?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  about?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expectedHours?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  video_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtocolResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Protocol'] = ResolversParentTypes['Protocol']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  userMintFee?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  platformMintFee?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  protocolEscrowFeeRate?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalMintFees?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  minArbitrationFeeTimeout?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  shortHandlesMaxPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  minServiceCompletionPercentage?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ReviewResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Review'] = ResolversParentTypes['Review']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  service?: Resolver<ResolversTypes['Service'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  rating?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  cid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['ReviewDescription']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ReviewDescriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ReviewDescription'] = ResolversParentTypes['ReviewDescription']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  review?: Resolver<Maybe<ResolversTypes['Review']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ServiceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Service'] = ResolversParentTypes['Service']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['ServiceStatus'], ParentType, ContextType>;
  buyer?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  seller?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  transaction?: Resolver<Maybe<ResolversTypes['Transaction']>, ParentType, ContextType>;
  proposals?: Resolver<Maybe<Array<ResolversTypes['Proposal']>>, ParentType, ContextType, RequireFields<ServiceproposalsArgs, 'skip' | 'first'>>;
  platform?: Resolver<Maybe<ResolversTypes['Platform']>, ParentType, ContextType>;
  cid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['ServiceDescription']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ServiceDescriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ServiceDescription'] = ResolversParentTypes['ServiceDescription']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  service?: Resolver<ResolversTypes['Service'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  about?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startDate?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  expectedEndDate?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  keywords?: Resolver<Maybe<Array<ResolversTypes['Keyword']>>, ParentType, ContextType, RequireFields<ServiceDescriptionkeywordsArgs, 'skip' | 'first'>>;
  keywords_raw?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rateToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rateAmount?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  video_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Token'] = ResolversParentTypes['Token']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  decimals?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  allowed?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  minimumTransactionAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TransactionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Transaction'] = ResolversParentTypes['Transaction']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  sender?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  receiver?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  service?: Resolver<Maybe<ResolversTypes['Service']>, ParentType, ContextType>;
  protocolEscrowFeeRate?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  originServiceFeeRate?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  originValidatedProposalFeeRate?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  disputeId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  senderFee?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  receiverFee?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  lastInteraction?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['TransactionStatus'], ParentType, ContextType>;
  arbitrator?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  arbitratorExtraData?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  arbitrationFeeTimeout?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  ruling?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  evidences?: Resolver<Maybe<Array<ResolversTypes['Evidence']>>, ParentType, ContextType, RequireFields<TransactionevidencesArgs, 'skip' | 'first'>>;
  metaEvidenceUri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  payments?: Resolver<Maybe<Array<ResolversTypes['Payment']>>, ParentType, ContextType, RequireFields<TransactionpaymentsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  index?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  handle?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  platform?: Resolver<Maybe<ResolversTypes['Platform']>, ParentType, ContextType>;
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rating?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  reviews?: Resolver<Maybe<Array<ResolversTypes['Review']>>, ParentType, ContextType, RequireFields<UserreviewsArgs, 'skip' | 'first'>>;
  buyerServices?: Resolver<Maybe<Array<ResolversTypes['Service']>>, ParentType, ContextType, RequireFields<UserbuyerServicesArgs, 'skip' | 'first'>>;
  sellerServices?: Resolver<Maybe<Array<ResolversTypes['Service']>>, ParentType, ContextType, RequireFields<UsersellerServicesArgs, 'skip' | 'first'>>;
  totalGains?: Resolver<Maybe<Array<ResolversTypes['UserGain']>>, ParentType, ContextType, RequireFields<UsertotalGainsArgs, 'skip' | 'first'>>;
  cid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['UserDescription']>, ParentType, ContextType>;
  delegates?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  userStats?: Resolver<Maybe<ResolversTypes['UserStats']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserDescriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UserDescription'] = ResolversParentTypes['UserDescription']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  about?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  skills_raw?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  skills?: Resolver<Maybe<Array<ResolversTypes['Keyword']>>, ParentType, ContextType, RequireFields<UserDescriptionskillsArgs, 'skip' | 'first'>>;
  timezone?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  headline?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  video_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserGainResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UserGain'] = ResolversParentTypes['UserGain']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  totalGain?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserStatsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UserStats'] = ResolversParentTypes['UserStats']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  numReceivedReviews?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  numGivenReviews?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  numCreatedServices?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  numFinishedServicesAsBuyer?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  numCreatedProposals?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  numFinishedServicesAsSeller?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  BigDecimal?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  Bytes?: GraphQLScalarType;
  Hive?: HiveResolvers<ContextType>;
  HiveDescription?: HiveDescriptionResolvers<ContextType>;
  Int8?: GraphQLScalarType;
  ProposalRequest?: ProposalRequestResolvers<ContextType>;
  ProposalRequestDescription?: ProposalRequestDescriptionResolvers<ContextType>;
  _Block_?: _Block_Resolvers<ContextType>;
  _Meta_?: _Meta_Resolvers<ContextType>;
  Evidence?: EvidenceResolvers<ContextType>;
  FeeClaim?: FeeClaimResolvers<ContextType>;
  FeePayment?: FeePaymentResolvers<ContextType>;
  Keyword?: KeywordResolvers<ContextType>;
  Payment?: PaymentResolvers<ContextType>;
  Platform?: PlatformResolvers<ContextType>;
  PlatformDescription?: PlatformDescriptionResolvers<ContextType>;
  PlatformGain?: PlatformGainResolvers<ContextType>;
  Proposal?: ProposalResolvers<ContextType>;
  ProposalDescription?: ProposalDescriptionResolvers<ContextType>;
  Protocol?: ProtocolResolvers<ContextType>;
  Review?: ReviewResolvers<ContextType>;
  ReviewDescription?: ReviewDescriptionResolvers<ContextType>;
  Service?: ServiceResolvers<ContextType>;
  ServiceDescription?: ServiceDescriptionResolvers<ContextType>;
  Token?: TokenResolvers<ContextType>;
  Transaction?: TransactionResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserDescription?: UserDescriptionResolvers<ContextType>;
  UserGain?: UserGainResolvers<ContextType>;
  UserStats?: UserStatsResolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  entity?: entityDirectiveResolver<any, any, ContextType>;
  subgraphId?: subgraphIdDirectiveResolver<any, any, ContextType>;
  derivedFrom?: derivedFromDirectiveResolver<any, any, ContextType>;
}>;

export type MeshContext = BeetogetherTypes.Context & TalentlayerTypes.Context & BaseMeshContext;


import { fileURLToPath } from '@graphql-mesh/utils';
const baseDir = pathModule.join(pathModule.dirname(fileURLToPath(import.meta.url)), '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    case ".graphclient/sources/beetogether/introspectionSchema":
      return Promise.resolve(importedModule$0) as T;
    
    case ".graphclient/sources/talentlayer/introspectionSchema":
      return Promise.resolve(importedModule$1) as T;
    
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.graphclient', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

export const rawServeConfig: YamlConfig.Config['serve'] = undefined as any
export async function getMeshOptions(): Promise<GetMeshOptions> {
const pubsub = new PubSub();
const sourcesStore = rootStore.child('sources');
const logger = new DefaultLogger("GraphClient");
const cache = new (MeshCache as any)({
      ...({} as any),
      importFn,
      store: rootStore.child('cache'),
      pubsub,
      logger,
    } as any)

const sources: MeshResolvedSource[] = [];
const transforms: MeshTransform[] = [];
const additionalEnvelopPlugins: MeshPlugin<any>[] = [];
const beetogetherTransforms = [];
const talentlayerTransforms = [];
const additionalTypeDefs = [] as any[];
const beetogetherHandler = new GraphqlHandler({
              name: "beetogether",
              config: {"endpoint":"https://api.thegraph.com/subgraphs/name/mattiapomelli/beetogether-mumbai"},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("beetogether"),
              logger: logger.child("beetogether"),
              importFn,
            });
const talentlayerHandler = new GraphqlHandler({
              name: "talentlayer",
              config: {"endpoint":"https://api.thegraph.com/subgraphs/name/talentlayer/talent-layer-mumbai"},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("talentlayer"),
              logger: logger.child("talentlayer"),
              importFn,
            });
sources[0] = {
          name: 'beetogether',
          handler: beetogetherHandler,
          transforms: beetogetherTransforms
        }
sources[1] = {
          name: 'talentlayer',
          handler: talentlayerHandler,
          transforms: talentlayerTransforms
        }
const additionalResolvers = [] as any[]
const merger = new(StitchingMerger as any)({
        cache,
        pubsub,
        logger: logger.child('stitchingMerger'),
        store: rootStore.child('stitchingMerger')
      })

  return {
    sources,
    transforms,
    additionalTypeDefs,
    additionalResolvers,
    cache,
    pubsub,
    merger,
    logger,
    additionalEnvelopPlugins,
    get documents() {
      return [
      {
        document: HiveAndIdentityQueryDocument,
        get rawSDL() {
          return printWithCache(HiveAndIdentityQueryDocument);
        },
        location: 'HiveAndIdentityQueryDocument.graphql'
      }
    ];
    },
    fetchFn,
  };
}

export function createBuiltMeshHTTPHandler<TServerContext = {}>(): MeshHTTPHandler<TServerContext> {
  return createMeshHTTPHandler<TServerContext>({
    baseDir,
    getBuiltMesh: getBuiltGraphClient,
    rawServeConfig: undefined,
  })
}


let meshInstance$: Promise<MeshInstance> | undefined;

export function getBuiltGraphClient(): Promise<MeshInstance> {
  if (meshInstance$ == null) {
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh(meshOptions)).then(mesh => {
      const id = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        mesh.pubsub.unsubscribe(id);
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltGraphClient().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltGraphClient().then(({ subscribe }) => subscribe(...args));
export function getBuiltGraphSDK<TGlobalContext = any, TOperationContext = any>(globalContext?: TGlobalContext) {
  const sdkRequester$ = getBuiltGraphClient().then(({ sdkRequesterFactory }) => sdkRequesterFactory(globalContext));
  return getSdk<TOperationContext, TGlobalContext>((...args) => sdkRequester$.then(sdkRequester => sdkRequester(...args)));
}
export type HiveAndIdentityQueryQueryVariables = Exact<{
  hiveId: Scalars['ID'];
}>;


export type HiveAndIdentityQueryQuery = { hive?: Maybe<(
    Pick<Hive, 'id' | 'cid' | 'members' | 'owner' | 'address'>
    & { description?: Maybe<Pick<HiveDescription, 'id' | 'manifesto' | 'offeredServices'>> }
  )>, user?: Maybe<(
    Pick<User, 'id' | 'address' | 'handle' | 'rating' | 'delegates' | 'updatedAt' | 'createdAt'>
    & { userStats?: Maybe<Pick<UserStats, 'numReceivedReviews'>>, description?: Maybe<Pick<UserDescription, 'about' | 'role' | 'name' | 'country' | 'headline' | 'id' | 'image_url' | 'video_url' | 'title' | 'timezone' | 'skills_raw'>> }
  )> };


export const HiveAndIdentityQueryDocument = gql`
    query HiveAndIdentityQuery($hiveId: ID!) {
  hive(id: $hiveId) {
    id
    cid
    members
    owner
    description {
      id
      manifesto
      offeredServices
    }
    address
  }
  user(id: $hiveId) {
    id
    address
    handle
    rating
    delegates
    userStats {
      numReceivedReviews
    }
    updatedAt
    createdAt
    description {
      about
      role
      name
      country
      headline
      id
      image_url
      video_url
      title
      timezone
      skills_raw
    }
  }
}
    ` as unknown as DocumentNode<HiveAndIdentityQueryQuery, HiveAndIdentityQueryQueryVariables>;


export type Requester<C = {}, E = unknown> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    HiveAndIdentityQuery(variables: HiveAndIdentityQueryQueryVariables, options?: C): Promise<HiveAndIdentityQueryQuery> {
      return requester<HiveAndIdentityQueryQuery, HiveAndIdentityQueryQueryVariables>(HiveAndIdentityQueryDocument, variables, options) as Promise<HiveAndIdentityQueryQuery>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;