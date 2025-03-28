import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"], // Genera sia ESM che CommonJS
  dts: true,              // Genera file `.d.ts` per TypeScript
  splitting: false,
  sourcemap: true,
  clean: true
});