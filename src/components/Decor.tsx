import React from "react";
import { FLOATERS } from "../floaters";
import "./Decor.css";

/** Fixed full-viewport background: drifting colour blobs + the floating
 *  cutout PNGs. Purely decorative, so it's hidden from assistive tech. */
export function Decor() {
  return (
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
  );
}
