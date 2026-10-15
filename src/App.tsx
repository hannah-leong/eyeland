import React, { useState } from "react";
import { facts, Fact } from "./facts";
import { useNow } from "./hooks/useNow";
import { formatCountdown, localDayNumber, msUntilNextLocalMidnight } from "./lib/time";
import { Decor } from "./components/Decor";
import { Masthead } from "./components/Masthead";
import { FactCard } from "./components/FactCard";
import { Countdown } from "./components/Countdown";
import "./App.css";

function App() {
  const now = useNow();
  const [peekIndex, setPeekIndex] = useState<number | null>(null);

  // One fact per day, picked deterministically from the date so everyone
  // sees the same fact; peeking temporarily swaps in a random other one.
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
      <Decor />
      <main className="stage">
        <Masthead />
        <FactCard
          fact={fact}
          dateLabel={dateLabel}
          factKey={shownIndex}
          isPeeking={isPeeking}
          onPeek={handlePeek}
          onBack={() => setPeekIndex(null)}
        />
        <Countdown countdown={countdown} />
      </main>
    </div>
  );
}

export default App;
