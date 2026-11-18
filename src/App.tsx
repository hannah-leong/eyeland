import React from "react";
import { Decor } from "./components/Decor";
import { Masthead } from "./components/Masthead";
import { DailyFact } from "./components/DailyFact";
import { Celebration } from "./components/Celebration";
import "./App.css";

/** Path of the Team RCA petabyte celebration page. If this changes, update
 *  the "postbuild" script in package.json to match. */
export const RCA_ACHIEVEMENTS_PATH = "/rca-achievements";

/** Two pages don't justify a router: compare the URL path directly
 *  (ignoring case and any trailing slash). */
function isRcaAchievementsPage(): boolean {
  const path = window.location.pathname.replace(/\/+$/, "").toLowerCase();
  return path === RCA_ACHIEVEMENTS_PATH;
}

function App() {
  return (
    <div className="app">
      <Decor />
      <main className="stage">
        <Masthead />
        {isRcaAchievementsPage() ? <Celebration /> : <DailyFact />}
      </main>
    </div>
  );
}

export default App;
