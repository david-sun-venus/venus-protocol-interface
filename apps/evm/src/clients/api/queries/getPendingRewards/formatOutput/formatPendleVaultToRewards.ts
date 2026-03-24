import type { PendleVault } from 'types';

import { convertMantissaToTokens } from 'utilities';
import type { GetPendleSwapQuoteOutput } from '../../getPendleSwapQuote';
import type { PendleVaultRewardGroup } from '../types';

export const formatPendleVaultToReward = ({
  vault,
  swapQuote,
}: {
  vault: PendleVault;
  swapQuote: GetPendleSwapQuoteOutput;
}): PendleVaultRewardGroup | undefined => {
  const now = new Date().getTime();
  const hasMatured = vault.maturityDate && now > vault.maturityDate;

  const { userStakedMantissa, stakedToken } = vault ?? {};

  if (!userStakedMantissa || !userStakedMantissa.gt(0)) return undefined; // TODO: add || !hasMatured back

  return {
    type: 'pendle-vault',
    id: vault.key,
    isDisabled: !hasMatured,
    stakedToken: vault.stakedToken,
    rewardToken: vault.rewardToken,
    rewardAmountMantissa: userStakedMantissa,
    rewardAmountCents: convertMantissaToTokens({
      value: userStakedMantissa,
      token: stakedToken,
    }),
    swapQuote,
    vToken: vault.vToken,
  };
};
