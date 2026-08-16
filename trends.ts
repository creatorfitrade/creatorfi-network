export interface Trend {
  name: string;
  momentum: number;
}

export function detectTrends(
  trends: Trend[]
): Trend[] {

  return [...trends]
    .filter((trend) => trend.momentum > 0)
    .sort(
      (a, b) => b.momentum - a.momentum
    );
}
