import { useEffect, useState } from "react";

/** A Date that re-renders the component on every interval (default 1s),
 *  so countdowns and date labels stay live without prop drilling a timer. */
export function useNow(intervalMs = 1000): Date {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), intervalMs);
    return () => window.clearInterval(id);
  }, [intervalMs]);
  return now;
}
