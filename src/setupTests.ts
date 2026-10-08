// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import fs from 'fs';
import path from 'path';

// Webpack's require.context only exists inside a webpack bundle — and since
// every CommonJS module receives its own `require`, patching one module's
// require can't reach the others. Instead, publish an equivalent context on
// globalThis for the duration of the test run; src/floaters.ts falls back to
// it whenever webpack's require.context isn't available.
function buildFloaterContext(): WebpackRequireContext {
  const dir = path.resolve(__dirname, 'assets/floaters');
  const files = fs.existsSync(dir)
    ? fs
        .readdirSync(dir)
        .filter((f) => /\.png$/.test(f))
        .sort()
        .map((f) => `./${f}`)
    : [];
  const ctx = ((id: string) => ({
    default: `/floaters/${id.replace('./', '')}`,
  })) as unknown as WebpackRequireContext;
  ctx.keys = () => files;
  return ctx;
}

globalThis.__FLOATER_CONTEXT__ = buildFloaterContext();
