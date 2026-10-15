import React from "react";
import { Eye } from "./Eye";
import { useGaze } from "../hooks/useGaze";
import "./Masthead.css";

/** "Welcome to the 👁️land" title flanked by a pair of cursor-tracking eyes. */
export function Masthead() {
  const { eyeRefs, irisRefs } = useGaze();

  return (
    <header className="masthead">
      <Eye
        eyeRef={(el) => {
          eyeRefs.current[0] = el;
        }}
        irisRef={(el) => {
          irisRefs.current[0] = el;
        }}
      />
      <h1 aria-label="Welcome to Eyeland">
        <span className="kicker">Welcome to the</span>
        <span className="logo">
          👁️<span className="accent">land</span>
        </span>
      </h1>
      <Eye
        eyeRef={(el) => {
          eyeRefs.current[1] = el;
        }}
        irisRef={(el) => {
          irisRefs.current[1] = el;
        }}
      />
    </header>
  );
}
