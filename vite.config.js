import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// This repo is riyaayay.github.io (a *user* GitHub Pages site), so it deploys
// to the domain root. If you ever rename this to a *project* page instead
// (e.g. github.com/riyaayay/portfolio -> riyaayay.github.io/portfolio/),
// change base to "/portfolio/".
export default defineConfig({
  plugins: [react()],
  base: "/",
});
