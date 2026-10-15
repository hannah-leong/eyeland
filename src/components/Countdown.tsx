import React from "react";
import "./Countdown.css";

/** Footer pill: time until the fact rolls over at local midnight. */
export function Countdown({ countdown }: { countdown: string }) {
  return (
    <footer className="countdown">
      <span>
        New fact in <strong>{countdown}</strong>
      </span>
      <span className="dot" aria-hidden="true">
        •
      </span>
      <span>Resets at midnight, your time</span>
    </footer>
  );
}
