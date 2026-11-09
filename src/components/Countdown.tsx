import React from "react";
import { FactPeriod } from "../lib/time";
import "./Countdown.css";

/** Footer pill: time until the fact rolls over (local noon and midnight). */
export function Countdown({
  countdown,
  period,
}: {
  countdown: string;
  period: FactPeriod;
}) {
  return (
    <footer className="countdown">
      <span>
        New fact in <strong>{countdown}</strong>
      </span>
      <span className="dot" aria-hidden="true">
        •
      </span>
      <span>
        Next one at {period === "morning" ? "noon" : "midnight"} — fresh facts every morning
        and afternoon
      </span>
    </footer>
  );
}
