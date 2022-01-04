import { execa } from "execa";

const loc = process.argv[2] || ".";

async function main() {
  const { stderr } = await execa("npx", [
    "degit",
    "lindsaykwardell/vite-elm-template",
    loc,
  ]);

  if (stderr) {
    console.error(stderr);
  }
}

main();
