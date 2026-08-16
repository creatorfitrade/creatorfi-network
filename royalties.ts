export interface RoyaltyConfig {
  creatorShare: number;
}

export function calculateCreatorRoyalty(
  tradeValue: number,
  config: RoyaltyConfig
): number {

  if (tradeValue < 0) {
    throw new Error("Trade value cannot be negative");
  }

  return Number(
    (tradeValue * config.creatorShare).toFixed(6)
  );
}
