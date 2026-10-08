/**
 * Minimal typing for webpack's require.context, which only exists inside a
 * webpack bundle (src/setupTests.ts emulates the same surface for Jest).
 */
interface WebpackRequireContext {
  (id: string): { default: string };
  keys(): string[];
}

interface NodeRequire {
  context(
    directory: string,
    useSubdirectories?: boolean,
    regExp?: RegExp,
  ): WebpackRequireContext;
}

/**
 * Test-time stand-in published by setupTests.ts so floaters.ts can list the
 * floater folder when webpack's require.context isn't available (Jest).
 */
declare var __FLOATER_CONTEXT__: WebpackRequireContext | undefined;
