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
  { file: "chef-barnfield.png", top: "7%", left: "4%", w: 4.6, rot: -6, dur: "9.5s", delay: "0s" },
  { file: "stephanie-the-iol.png", top: "9%", right: "6%", w: 4.2, rot: 5, dur: "8.5s", delay: "1.2s" },
  { file: "padel-queen.png", top: "36%", left: "8%", w: 4, rot: 7, dur: "7.8s", delay: "0.4s" },
  { file: "joseph-the-talking-rubber-duck.png", top: "56%", left: "3%", w: 4.6, rot: -4, dur: "9s", delay: "1.7s" },
  { file: "handsfree-driving.png", top: "48%", right: "9%", w: 4.2, rot: 6, dur: "10s", delay: "2.1s" },
  { file: "meat-ballfield.png", top: "72%", right: "5%", w: 4.4, rot: -7, dur: "8.2s", delay: "0.8s" },
  { file: "padel-queen-1.png", top: "30%", right: "7%", w: 4.2, rot: -5, dur: "11s", delay: "1.4s" },
  { file: "rca-joels-a-babe.png", top: "80%", left: "10%", w: 4.4, rot: 5, dur: "7.5s", delay: "2.4s" },
  { file: "we-love-val.png", top: "66%", left: "14%", w: 4, rot: 8, dur: "9.8s", delay: "1s" },
  { file: "all-hail-the-egg2.png", top: "16%", left: "12%", w: 4.6, rot: 5, dur: "8.8s", delay: "0.7s" },
  { file: "bad-boy-of-data.png", top: "42%", right: "13%", w: 4.4, rot: -6, dur: "10.5s", delay: "1.9s" },
  { file: "image-1.png", top: "54%", left: "7%", w: 4.2, rot: 6, dur: "7.6s", delay: "2.6s" },
  { file: "image-2.png", top: "88%", right: "8%", w: 4, rot: -5, dur: "9.2s", delay: "0.5s" },
  { file: "image-3.png", top: "26%", left: "3%", w: 4.4, rot: 7, dur: "11.5s", delay: "1.3s" },
  { file: "image-6.png", top: "60%", right: "15%", w: 4.2, rot: -8, dur: "8s", delay: "2.9s" },
  { file: "rca-transatlantic-cable-repair.png", top: "5%", left: "16%", w: 4.4, rot: -4, dur: "10.8s", delay: "0.2s" },
  { file: "sir-matthew-barnfield.png", top: "74%", left: "6%", w: 4.6, rot: 6, dur: "8.4s", delay: "1.6s" },
  { file: "we-really-like-jim.png", top: "22%", right: "17%", w: 4.2, rot: 4, dur: "9.4s", delay: "2.2s" },
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
              animationDuration: d.dur,
              animationDelay: d.delay,
            }}
          >
            <img
              src={`${process.env.PUBLIC_URL}/floaters/${d.file}`}
              alt=""
              style={{
                width: `clamp(26px, ${d.w}vmin, 90px)`,
                transform: `rotate(${d.rot}deg)`,
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
