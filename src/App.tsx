import React, { useEffect, useRef, useState } from "react";
import { facts, Fact, tagColor } from "./facts";
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

const DECOR = [
  { char: "✨", top: "10%", left: "7%", size: "1.9rem", dur: "5.5s", delay: "0s" },
  { char: "👁️", top: "22%", right: "8%", size: "2.4rem", dur: "6.5s", delay: "1.1s" },
  { char: "💧", top: "64%", left: "5%", size: "1.7rem", dur: "7s", delay: "0.6s" },
  { char: "👓", top: "78%", right: "6%", size: "2.2rem", dur: "6s", delay: "1.8s" },
  { char: "🌟", top: "42%", left: "11%", size: "1.5rem", dur: "4.8s", delay: "0.3s" },
  { char: "🔭", top: "52%", right: "12%", size: "1.8rem", dur: "7.5s", delay: "2.2s" },
  { char: "🫧", top: "86%", left: "14%", size: "1.4rem", dur: "5.2s", delay: "1.4s" },
  { char: "💤", top: "14%", right: "22%", size: "1.5rem", dur: "6.2s", delay: "0.9s" },
];

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
        {DECOR.map((d, i) => (
          <span
            key={i}
            className="floater"
            style={{
              top: d.top,
              left: d.left,
              right: d.right,
              fontSize: d.size,
              animationDuration: d.dur,
              animationDelay: d.delay,
            }}
          >
            {d.char}
          </span>
        ))}
      </div>

      <main className="stage">
        <header className="masthead">
          <h1 aria-label="Eyeland">
            👁️<span className="accent">land</span>
          </h1>
        </header>

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

        <section className="fact-card" data-testid="fact-card">
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
