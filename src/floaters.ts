/**
 * Floater auto-discovery.
 *
 * Every PNG dropped into src/assets/floaters/ is discovered at BUILD time
 * by webpack (require.context) and baked into the bundle with a
 * deterministic position, size, tilt and animation derived from its slot
 * in the sorted file list. Nothing is scanned at website load — to add a
 * floater, copy a PNG into the folder and deploy. That's it.
 *
 * Positions: alternating left/right edges, evenly spread vertically with a
 * small deterministic jitter; sizing in vmin so floaters scale with the
 * screen like everything else.
 */

export interface Floater {
  key: string;
  src: string;
  top: string;
  left?: string;
  right?: string;
  w: number;
  rot: number;
  dur: string;
  delay: string;
}

function loadContext(): WebpackRequireContext | undefined {
  try {
    // Webpack statically rewrites this call at build time — the file list is
    // baked into the bundle when the site is deployed; nothing is scanned at
    // website load.
    return require.context("./assets/floaters", false, /\.png$/);
  } catch {
    // Not running inside a webpack bundle (Jest): setupTests.ts publishes an
    // equivalent context on globalThis instead.
    return undefined;
  }
}

/**
 * Webpack can export an asset module as a bare URL string (CommonJS) or as
 * `{ default: url }` depending on the loader — accept both. Reading only
 * `.default` on the string form yields undefined, which React renders as
 * src="" (no image ever loads).
 */
function resolveSrc(mod: unknown): string {
  if (typeof mod === "string") return mod;
  const d = (mod as { default?: unknown } | null)?.default;
  return typeof d === "string" ? d : "";
}

function buildFloaters(): Floater[] {
  const ctx = loadContext() ?? globalThis.__FLOATER_CONTEXT__;
  if (!ctx) return [];
  const keys = ctx.keys().sort();
  const count = keys.length;
  if (count === 0) return [];

  const perSide = Math.ceil(count / 2);

  return keys.map((key, i) => {
    const side = i % 2 === 0 ? "left" : "right";
    const rank = Math.floor(i / 2);
    // even vertical spread down each edge, with deterministic ±4% jitter
    const spread = perSide > 1 ? rank / (perSide - 1) : 0.5;
    const jitter = (i * 7919) % 9 - 4;
    const top = Math.min(92, Math.max(4, Math.round(5 + spread * 84 + jitter)));
    const x = `${3 + ((i * 31 + 13) % 14)}%`; // 3–16% in from the side
    const w = 4 + ((i * 13) % 7) / 10; // 4.0–4.6 vmin
    const rot = (i * 17) % 17 - 8; // −8°…+8°
    const dur = `${(7.5 + ((i * 11) % 40) / 10).toFixed(1)}s`; // 7.5–11.4s
    const delay = `${(i * 7) % 30 / 10}s`; // 0–2.9s

    return {
      key,
      src: resolveSrc(ctx(key)),
      top: `${top}%`,
      left: side === "left" ? x : undefined,
      right: side === "right" ? x : undefined,
      w,
      rot,
      dur,
      delay,
    };
  });
}

export const FLOATERS: Floater[] = buildFloaters();
