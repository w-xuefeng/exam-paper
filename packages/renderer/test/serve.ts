import { readFileSync } from "node:fs";
import { serve } from "./utils";
import path from "node:path";
import testJSON from './test.json' with { type: 'json' };

const lib = readFileSync(
  path.resolve(import.meta.dirname, "..", "lib", "index.umd.js"),
  { encoding: "utf-8" }
);

function getHTMLContent(filepath: string) {
  const html = readFileSync(path.resolve(import.meta.dirname, filepath), {
    encoding: "utf-8",
  });
  return html.replace(
    '<script id="replace-data"></script>',
    `<script>window.EXAM_DATA = ${JSON.stringify(testJSON)};</script>`
  ).replace(
    '<script id="replace-script"></script>',
    `<script>${lib}</script>`
  );
}

serve(3000, {
  "/": {
    GET: async (_, __, r) => {
      r.html(getHTMLContent("index.html"));
    },
  },
});
