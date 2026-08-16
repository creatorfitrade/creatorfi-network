export interface Activity {
  timestamp: number;
  type: "buy" | "sell" | "claim";
}

export function recentActivity(
  activities: Activity[],
  limit = 20
): Activity[] {

  return [...activities]
    .sort(
      (a, b) =>
        b.timestamp - a.timestamp
    )
    .slice(0, limit);
}
