export function calculateVolume(
  trades: Array<{ amount: number }>
): number {

  return trades.reduce(
    (total, trade) =>
      total + trade.amount,
    0
  );
}
