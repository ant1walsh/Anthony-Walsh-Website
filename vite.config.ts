import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Custom apex domain (anthony-walsh.com) is served at the site root, so base = "/".
export default defineConfig({
  base: "/",
  plugins: [react()],
  build: { outDir: "dist", emptyOutDir: false },
});
