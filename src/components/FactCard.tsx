import React from "react";
import { Fact, tagColor } from "../facts";
import { FactPeriod } from "../lib/time";
import "./FactCard.css";

/** The current fact (morning or afternoon): tag chip, date, emoji, fact text, and the peek/back
 *  actions. Whether we're peeking (and which fact is shown) is App's state. */
export function FactCard({
  fact,
  dateLabel,
  period,
  factKey,
  isPeeking,
  onPeek,
  onBack,
}: {
  fact: Fact;
  dateLabel: string;
  /** Which of the day's two facts is current. */
  period: FactPeriod;
  /** Identifies the shown fact; changing it re-mounts the emoji so the
   *  pop animation replays on every swap. */
  factKey: number;
  isPeeking: boolean;
  onPeek: () => void;
  onBack: () => void;
}) {
  return (
    <section
      className="fact-card"
      data-testid="fact-card"
      style={{ borderTopColor: tagColor(fact.tag) }}
    >
      <div className="fact-meta">
        <span className="chip" style={{ background: tagColor(fact.tag) }}>
          {fact.tag}
        </span>
        <span className="date">
          {dateLabel} · <span className="period">{period}</span>
        </span>
      </div>

      <div className="fact-emoji" key={`emoji-${factKey}`}>
        {fact.emoji}
      </div>

      <p className="fact-text" data-testid="fact-text">
        {fact.text}
      </p>

      <div className="actions">
        <button type="button" className="btn btn-primary" onClick={onPeek}>
          👀 Peek at another fact
        </button>
        {isPeeking && (
          <button type="button" className="btn btn-secondary" onClick={onBack}>
            ↩︎ Back to this {period}'s fact
          </button>
        )}
      </div>

      {isPeeking && (
        <p className="peek-note">Sneak peek! This {period}'s official fact is still waiting for you.</p>
      )}
    </section>
  );
}
