import React, { useState } from "react";
import { facts, Fact } from "./facts";
import { useNow } from "./hooks/useNow";
import {
  factIndexForSlot,
  factPeriod,
  factSlot,
  formatCountdown,
  msUntilNextFactChange,
} from "./lib/time";
import { Decor } from "./components/Decor";
import { Masthead } from "./components/Masthead";
import { FactCard } from "./components/FactCard";
import { Countdown } from "./components/Countdown";
import "./App.css";

function App() {
  const now = useNow();
  const [peekIndex, setPeekIndex] = useState<number | null>(null);

  // Two facts per day — one for the morning, one from noon — picked
  // deterministically from the date so everyone sees the same fact; peeking
  // temporarily swaps in a random other one.
  const period = factPeriod(now);
  const dailyIndex = factIndexForSlot(factSlot(now), facts.length);
  const isPeeking = peekIndex !== null;
  const shownIndex = peekIndex ?? dailyIndex;
  const fact: Fact = facts[shownIndex];

  const dateLabel = now.toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const countdown = formatCountdown(msUntilNextFactChange(now));

  const handlePeek = () => {
    // Any fact other than the one currently on screen.
    let next = Math.floor(Math.random() * facts.length);
    while (next === shownIndex) next = Math.floor(Math.random() * facts.length);
    setPeekIndex(next);
  };

  return (
    <div className="app">
      <Decor />
      <main className="stage">
        <Masthead />
        <FactCard
          fact={fact}
          dateLabel={dateLabel}
          period={period}
          factKey={shownIndex}
          isPeeking={isPeeking}
          onPeek={handlePeek}
          onBack={() => setPeekIndex(null)}
        />
        <Countdown countdown={countdown} period={period} />
      </main>
    </div>
  );
}

export default App;
