import React from "react";
import { Fact, tagColor } from "../facts";
import "./FactCard.css";

/** The daily fact: tag chip, date, emoji, fact text, and the peek/back
 *  actions. Whether we're peeking (and which fact is shown) is App's state. */
export function FactCard({
  fact,
  dateLabel,
  factKey,
  isPeeking,
  onPeek,
  onBack,
}: {
  fact: Fact;
  dateLabel: string;
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
        <span className="date">{dateLabel}</span>
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
            ↩︎ Back to today's fact
          </button>
        )}
      </div>

      {isPeeking && (
        <p className="peek-note">Sneak peek! Today's official fact is still waiting above.</p>
      )}
    </section>
  );
}
