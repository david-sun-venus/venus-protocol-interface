import type { GetPendleSwapQuoteOutput } from 'clients/api/queries/getPendleSwapQuote';
import type { Token, VToken } from 'types';
import type { Address } from 'viem';

export interface VaiVaultClaim {
  contract: 'vaiVault';
}

export interface XvsVestingVaultClaim {
  contract: 'xvsVestingVault';
  rewardToken: Token;
  poolIndex: number;
}

export interface LegacyPoolComptrollerClaim {
  contract: 'legacyPoolComptroller';
  vTokenAddressesWithPendingReward: Address[];
}

export interface RewardsDistributorClaim {
  contract: 'rewardsDistributor';
  contractAddress: Address;
  comptrollerContractAddress: Address;
  vTokenAddressesWithPendingReward: Address[];
}

export interface PrimeClaim {
  contract: 'prime';
  vTokenAddressesWithPendingReward: Address[];
}

export interface PendleVaultClaim {
  contract: 'PendlePtVault';
  swapQuote: GetPendleSwapQuoteOutput;
  fromToken: Token;
  vToken: VToken;
}

export type Claim =
  | VaiVaultClaim
  | XvsVestingVaultClaim
  | LegacyPoolComptrollerClaim
  | RewardsDistributorClaim
  | PrimeClaim
  | PendleVaultClaim;

export type ClaimRewardsInput = {
  claims: Claim[];
};
