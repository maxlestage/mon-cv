import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Le site est servi sur https://<user>.github.io/mon-cv/
// donc le base path doit correspondre au nom du dépôt.
export default defineConfig({
  base: "/mon-cv/",
  plugins: [react()],
});
