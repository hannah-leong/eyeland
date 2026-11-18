import React, { useEffect, useRef, useState } from "react";
import "./FactCard.css";
import "./Countdown.css";
import "./Celebration.css";

/* Softwire brand colours, same as the rest of the site. */
const COLOURS = ["#80ced0", "#f38380", "#fbd25f", "#f59c99", "#1b65c5", "#414141"];
/* This is Eyeland: the "more confetti" burst is eyeballs. */
const EYEBALL = "👁️";

/** Cheap deterministic pseudo-random in [0, 1) so the layout is identical on
 *  every render (and in tests) without needing a seedable RNG. */
function rand(i: number, salt: number): number {
  const x = Math.sin(i * 127.1 + salt * 311.7) * 43758.5453;
  return x - Math.floor(x);
}

const CONFETTI = Array.from({ length: 80 }, (_, i) => ({
  left: `${(rand(i, 1) * 100).toFixed(2)}%`,
  width: 8 + Math.round(rand(i, 2) * 8),
  tall: rand(i, 3) > 0.5,
  round: rand(i, 4) > 0.8,
  colour: COLOURS[i % COLOURS.length],
  duration: `${(4.5 + rand(i, 5) * 5).toFixed(2)}s`,
  delay: `${(-rand(i, 6) * 9).toFixed(2)}s`,
  sway: `${Math.round(rand(i, 7) * 16 - 8)}vw`,
  spin: `${Math.round(360 + rand(i, 8) * 720) * (i % 2 ? 1 : -1)}deg`,
}));

const BALLOONS = Array.from({ length: 8 }, (_, i) => ({
  left: `${4 + i * 12.5 + rand(i, 9) * 4}%`,
  duration: `${(9 + rand(i, 10) * 6).toFixed(2)}s`,
  delay: `${(-rand(i, 11) * 14).toFixed(2)}s`,
}));

const BURST_SIZE = 28;
const BURST_MS = 1700;

interface Burst {
  id: number;
}

/** Full-card takeover announcing the petabyte milestone: the same card frame
 *  as the daily fact, wrapped in confetti, balloons and a "more confetti"
 *  button that fires bursts of eyeballs. */
export function Celebration() {
  const [bursts, setBursts] = useState<Burst[]>([]);
  const nextId = useRef(1);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    const pending = timers.current;
    return () => pending.forEach((t) => window.clearTimeout(t));
  }, []);

  const fireBurst = () => {
    const id = nextId.current++;
    setBursts((b) => [...b, { id }]);
    timers.current.push(
      window.setTimeout(
        () => setBursts((b) => b.filter((x) => x.id !== id)),
        BURST_MS
      )
    );
  };

  return (
    <>
      <div className="party" aria-hidden="true">
        {CONFETTI.map((c, i) => (
          <span
            key={`c-${i}`}
            className="confetti"
            style={
              {
                left: c.left,
                width: c.width,
                height: c.tall ? c.width * 1.8 : c.width,
                borderRadius: c.round ? "50%" : 2,
                background: c.colour,
                animationDuration: c.duration,
                animationDelay: c.delay,
                "--sway": c.sway,
                "--spin": c.spin,
              } as React.CSSProperties
            }
          />
        ))}
        {BALLOONS.map((b, i) => (
          <span
            key={`b-${i}`}
            className="balloon"
            style={{
              left: b.left,
              animationDuration: b.duration,
              animationDelay: b.delay,
            }}
          >
            🎈
          </span>
        ))}
      </div>

      <section
        className="fact-card celebration-card"
        data-testid="celebration-card"
      >
        <div className="fact-meta">
          <span className="chip celebration-chip">Milestone unlocked</span>
          <span className="date">1 PB and counting</span>
        </div>

        <div className="celebration-emoji" aria-hidden="true">
          <span>🎉</span>
          <span>🏆</span>
          <span>🎉</span>
        </div>

        <p className="fact-text celebration-text" data-testid="celebration-text">
          Team RCA hit over{" "}
          <span className="celebration-highlight">one petabyte</span> of data!
        </p>

        <p className="celebration-sub">
          That's more than 1,000 terabytes — a million gigabytes. 🥳
        </p>

        <div className="actions celebration-actions">
          <button type="button" className="btn btn-primary" onClick={fireBurst}>
            🎊 More confetti!
          </button>
          {bursts.map((burst) => (
            <span key={burst.id} className="burst" aria-hidden="true">
              {Array.from({ length: BURST_SIZE }, (_, i) => {
                const angle = (i / BURST_SIZE) * Math.PI * 2 + rand(i, burst.id);
                const reach = 22 + rand(i, burst.id + 50) * 30;
                return (
                  <span
                    key={i}
                    className="burst-bit"
                    style={
                      {
                        "--dx": `${(Math.cos(angle) * reach).toFixed(1)}vmin`,
                        "--dy": `${(Math.sin(angle) * reach - 8).toFixed(1)}vmin`,
                        "--turn": `${Math.round(rand(i, burst.id + 9) * 720 - 360)}deg`,
                      } as React.CSSProperties
                    }
                  >
                    {EYEBALL}
                  </span>
                );
              })}
            </span>
          ))}
        </div>
      </section>

      <footer className="countdown celebration-footer">
        <span>🍾</span>
        <span>
          <strong>1,000,000,000,000,000</strong> bytes
        </span>
        <span>🍾</span>
      </footer>
    </>
  );
}
