export interface MarketSignals {
  volume24h: number;
  holders: number;
  recentActivity: number;
}

export function calculateDiscoveryScore(
  signals: MarketSignals
): number {

  const volumeScore =
    Math.min(signals.volume24h / 1000, 40);

  const holderScore =
    Math.min(signals.holders / 10, 30);

  const activityScore =
    Math.min(signals.recentActivity / 10, 30);

  return Number(
    (volumeScore + holderScore + activityScore)
      .toFixed(2)
  );
}
