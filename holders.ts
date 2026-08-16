export interface Holder {
  address: string;
  balance: number;
}

export function totalHolders(
  holders: Holder[]
): number {

  return holders.length;
}

export function totalSupply(
  holders: Holder[]
): number {

  return holders.reduce(
    (total, holder) =>
      total + holder.balance,
    0
  );
}
