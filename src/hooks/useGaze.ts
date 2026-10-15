import { useEffect, useRef } from "react";

/**
 * Makes a pair of eyes track the cursor with a hint of depth.
 *
 * Returns refs for the eye sockets and irises; each socket/iris pair is
 * matched by index. The pointer is treated as a point floating
 * GAZE_DEPTH px in front of the screen, so the gaze reads as aimed into
 * space near the viewer rather than smeared onto the glass:
 *
 *  - rotation eases off (atan) and caps at MAX_ROT, so a screen corner
 *    doesn't fling the iris into the edge of the socket;
 *  - the iris foreshortens (cos of the tilt) along the gaze axis as the
 *    globe turns — the depth cue that keeps corner glances from looking
 *    like flat googly-eye stickers. Built as a raw matrix (I - (1-c)·uuᵀ)
 *    rather than rotate/scaleX/rotate: the axis angle passes through
 *    ±180° when glancing sideways, and interpolating that flip made the
 *    CSS transition spin the long way — a visible glitch when looking left;
 *  - each eye aims from its own centre, so the pair converges on one point.
 */
export function useGaze() {
  const eyeRefs = useRef<Array<HTMLDivElement | null>>([]);
  const irisRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const GAZE_DEPTH = 550; // px in front of the screen the target floats
    const MAX_ROT = (40 * Math.PI) / 180; // cap globe rotation (rad)
    const handle = (e: MouseEvent) => {
      eyeRefs.current.forEach((eye, i) => {
        const iris = irisRefs.current[i];
        if (!eye || !iris) return;
        const r = eye.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        const dist = Math.hypot(dx, dy);
        if (dist < 1) return;
        const tilt = Math.min(Math.atan(dist / GAZE_DEPTH), MAX_ROT);
        const mag = r.width * 0.17 * (tilt / MAX_ROT);
        const ox = (dx / dist) * mag;
        const oy = (dy / dist) * mag;
        // unit gaze direction (continuous — no atan2 discontinuity)
        const ux = dx / dist;
        const uy = dy / dist;
        // squeeze the disc by cos(tilt) along u, leave the perpendicular axis
        const k = 1 - Math.cos(tilt);
        const a = 1 - k * ux * ux;
        const b = -k * ux * uy;
        const c = -k * ux * uy;
        const d = 1 - k * uy * uy;
        const f = (n: number) => n.toFixed(4);
        iris.style.transform =
          `translate(${ox.toFixed(1)}px, ${oy.toFixed(1)}px)` +
          ` matrix(${f(a)}, ${f(b)}, ${f(c)}, ${f(d)}, 0, 0)`;
      });
    };
    window.addEventListener("mousemove", handle, { passive: true });
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  return { eyeRefs, irisRefs };
}
