import { afterEach, expect, mock, test } from "bun:test";
import React from "react";
import { renderToString } from "react-dom/server";

// Keep the real motion renderer; vary only the browser's media preference.
const framerMotion = await import("framer-motion");
let reducedMotion = null;
mock.module("framer-motion", () => ({
  ...framerMotion,
  useReducedMotion: () => reducedMotion,
}));
const { default: TerminalHero } = await import("../src/components/TerminalHero.tsx");

afterEach(() => {
  reducedMotion = null;
});

for (const preference of [false, true]) {
  test(`initial terminal HTML matches with reduced motion = ${preference}`, () => {
    reducedMotion = null; // The server cannot read the browser's media query.
    const serverHtml = renderToString(React.createElement(TerminalHero));
    reducedMotion = preference;
    const clientHtml = renderToString(React.createElement(TerminalHero));

    const outputStyle = /class="pl-2 border-l-2 border-slate-800\/40" style="([^"]*)"/;
    expect(clientHtml.match(outputStyle)?.[1]).toBe(serverHtml.match(outputStyle)?.[1]);
    expect(clientHtml).toBe(serverHtml);
  });
}
