/** Stable index for the local calendar day (timezone-safe). */
export function localDayNumber(d: Date): number {
  return Math.floor(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 86_400_000);
}

/** The fact changes twice a day: at local midnight and at local noon. */
export type FactPeriod = "morning" | "afternoon";

export function factPeriod(d: Date): FactPeriod {
  return d.getHours() < 12 ? "morning" : "afternoon";
}

/** Stable index for the current half-day: two slots per local calendar day. */
export function factSlot(d: Date): number {
  return localDayNumber(d) * 2 + (factPeriod(d) === "morning" ? 0 : 1);
}

function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

/**
 * Which fact a slot shows. Rather than walking the pool in file order (which
 * would serve up a week of the same category), step through it by a stride
 * that shares no factor with the pool size — so consecutive slots land far
 * apart, yet every fact is still shown exactly once per full cycle.
 */
export function factIndexForSlot(slot: number, poolSize: number): number {
  if (poolSize <= 1) return 0;
  let stride = Math.max(1, Math.round(poolSize * 0.618));
  while (gcd(stride, poolSize) !== 1) stride++;
  return (((slot % poolSize) * stride) % poolSize + poolSize) % poolSize;
}

/** Milliseconds until the next local noon or midnight, whichever is sooner. */
export function msUntilNextFactChange(now: Date): number {
  const next =
    factPeriod(now) === "morning"
      ? new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 0, 0, 0)
      : new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0, 0);
  return next.getTime() - now.getTime();
}

export function formatCountdown(ms: number): string {
  const total = Math.max(0, Math.floor(ms / 1000));
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${pad(h)}:${pad(m)}:${pad(s)}`;
}
