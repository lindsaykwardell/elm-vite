import { execa } from "execa";

if (!process.argv[2]) {
  throw new Error("Missing argument: <command>");
}

const { stdout, stderr } = execa("npx", [
  "degit",
  "lindsaykwardell/vite-elm-template",
  process.argv[2],
]);

console.log(stdout, stderr)