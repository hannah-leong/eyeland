import React from "react";
import "./Eye.css";

/** One eyeball. Purely presentational — the gaze tracking lives in
 *  useGaze(), which writes transforms into the iris via irisRef. */
export function Eye({
  eyeRef,
  irisRef,
}: {
  eyeRef: (el: HTMLDivElement | null) => void;
  irisRef: (el: HTMLDivElement | null) => void;
}) {
  return (
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
  );
}
