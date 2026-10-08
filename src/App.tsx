import React, { useEffect, useRef, useState } from "react";
import { facts, Fact, tagColor } from "./facts";
import { FLOATERS } from "./floaters";
import "./App.css";

/** Stable index for the local calendar day (timezone-safe). */
function localDayNumber(d: Date): number {
  return Math.floor(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 86_400_000);
}

function msUntilNextLocalMidnight(now: Date): number {
  const next = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0, 0);
  return next.getTime() - now.getTime();
}

function formatCountdown(ms: number): string {
  const total = Math.max(0, Math.floor(ms / 1000));
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${pad(h)}:${pad(m)}:${pad(s)}`;
}

function App() {
  const [now, setNow] = useState(() => new Date());
  const [peekIndex, setPeekIndex] = useState<number | null>(null);

  const eyeRef = useRef<HTMLDivElement>(null);
  const irisRef = useRef<HTMLDivElement>(null);

  // Tick once a second for the countdown / date.
  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);

  // The eyeball follows your cursor.
  useEffect(() => {
    const handle = (e: MouseEvent) => {
      const eye = eyeRef.current;
      const iris = irisRef.current;
      if (!eye || !iris) return;
      const r = eye.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      const dist = Math.hypot(dx, dy);
      if (dist < 1) return;
      const strength = Math.min(1, dist / 250);
      const max = r.width * 0.13;
      const ox = (dx / dist) * max * strength;
      const oy = (dy / dist) * max * strength;
      iris.style.transform = `translate(${ox.toFixed(1)}px, ${oy.toFixed(1)}px)`;
    };
    window.addEventListener("mousemove", handle, { passive: true });
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  const dailyIndex = localDayNumber(now) % facts.length;
  const isPeeking = peekIndex !== null;
  const shownIndex = peekIndex ?? dailyIndex;
  const fact: Fact = facts[shownIndex];

  const dateLabel = now.toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const countdown = formatCountdown(msUntilNextLocalMidnight(now));

  const handlePeek = () => {
    // Any fact other than the one currently on screen.
    let next = Math.floor(Math.random() * facts.length);
    while (next === shownIndex) next = Math.floor(Math.random() * facts.length);
    setPeekIndex(next);
  };

  return (
    <div className="app">
      <div className="decor" aria-hidden="true">
        <div className="blob blob-a" />
        <div className="blob blob-b" />
        <div className="blob blob-c" />
        {FLOATERS.map((f) => (
          <span
            key={f.key}
            className="floater"
            style={{
              top: f.top,
              left: f.left,
              right: f.right,
              animationDuration: f.dur,
              animationDelay: f.delay,
            }}
          >
            <img
              src={f.src}
              alt=""
              style={{
                width: `clamp(26px, ${f.w}vmin, 90px)`,
                transform: `rotate(${f.rot}deg)`,
              }}
            />
          </span>
        ))}
      </div>

      <main className="stage">
        <header className="masthead">
          <div className="eye-stage" ref={eyeRef} aria-hidden="true">
            <div className="eyeball">
              <div className="iris" ref={irisRef}>
                <div className="pupil" />
              </div>
              <div className="glint" />
              <div className="glint glint-small" />
              <div className="lid-top" />
            </div>
          </div>
          <h1 aria-label="Welcome to Eyeland">
            <span className="kicker">Welcome to the</span>
            <span className="logo">
              👁️<span className="accent">land</span>
            </span>
          </h1>
        </header>

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

          <div className="fact-emoji" key={`emoji-${shownIndex}`}>
            {fact.emoji}
          </div>

          <p className="fact-text" data-testid="fact-text">
            {fact.text}
          </p>

          <div className="actions">
            <button type="button" className="btn btn-primary" onClick={handlePeek}>
              👀 Peek at another fact
            </button>
            {isPeeking && (
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setPeekIndex(null)}
              >
                ↩︎ Back to today's fact
              </button>
            )}
          </div>

          {isPeeking && (
            <p className="peek-note">Sneak peek! Today's official fact is still waiting above.</p>
          )}
        </section>

        <footer className="countdown">
          <span>
            New fact in <strong>{countdown}</strong>
          </span>
          <span className="dot" aria-hidden="true">
            •
          </span>
          <span>Resets at midnight, your time</span>
        </footer>
      </main>
    </div>
  );
}

export default App;
