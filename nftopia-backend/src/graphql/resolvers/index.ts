import { BaseResolver } from './base.resolver';
import { NftResolver } from './nft.resolver';
import { JsonScalar } from '../types/nft.types';

export const graphqlResolvers = [BaseResolver, NftResolver] as const;

export const graphqlScalarClasses = [JsonScalar] as const;

export { BaseResolver };
export { NftResolver };
export { JsonScalar };
